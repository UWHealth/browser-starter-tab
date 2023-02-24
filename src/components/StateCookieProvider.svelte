<script>
  import { onMount } from 'svelte';
  import { stateCookie } from '../utils/stores';
  import { setLocalStateCookie, STATE_COOKIE_VALUE_WISCONSIN } from '../utils/stateCookie';


  export let state;

  onMount(() => {
    let initialStateCookieValue = $stateCookie;

    // if SERVER_STATE_COOKIE_KEY isn't set in network headers,
    // (1) provide fallback
    // (2) update state w/ fallback
    if (!initialStateCookieValue) {
      initialStateCookieValue = STATE_COOKIE_VALUE_WISCONSIN
      stateCookie.set(initialStateCookieValue);
    }

    // ensure LOCAL_STATE_COOKIE_KEY is always set
    setLocalStateCookie(initialStateCookieValue);

    // track page view
    const _paq = typeof window !== 'undefined' && window._paq || [];
    _paq.push(['trackPageView', stateCookie]);
  });
</script>


{#if state === $stateCookie}
  <div>
    <slot />
  </div>
{/if}
