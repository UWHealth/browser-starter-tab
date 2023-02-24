<script>
  import { onMount } from 'svelte';
  import StateCookieToggleBtn from '../components/StateCookieToggleBtn.svelte';
  import { stateCookie } from '../utils/stores';
  import {
    STATE_COOKIE_VALUES,
  } from '../utils/stateCookie';


  onMount(() => {
    // track page view
    const _paq = typeof window !== 'undefined' && window._paq || [];
    _paq.push(['trackPageView', stateCookie]);
  });
</script>

<!-- Current state cookie = {$stateCookie} -->

{#each [...STATE_COOKIE_VALUES] as state}<StateCookieToggleBtn state={state} />{/each}

