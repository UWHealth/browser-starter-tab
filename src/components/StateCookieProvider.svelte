<script>
  import { onMount } from 'svelte';
  import { stateCookie } from '$utils/stores';
  import { setLocalStateCookie, STATE_COOKIE_VALUE_WISCONSIN } from '$utils/stateCookie';


  export let state;

  onMount(() => {
    // ensure LOCAL_STATE_COOKIE_KEY is always set
    setLocalStateCookie($stateCookie);

    // track page view
    const _paq = typeof window !== 'undefined' && window._paq || [];
    _paq.push(['trackPageView', $stateCookie]);
  });
</script>


{#if state === $stateCookie}
  <div>
    <slot />
  </div>
{/if}
