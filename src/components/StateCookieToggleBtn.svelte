<script>
  import { stateCookie } from '$utils/stores';
  import { getStateCookiePrettyValue, setLocalStateCookie } from '$utils/stateCookie';


  export let state;

  function handleClick() {
    stateCookie.set(state);
    setLocalStateCookie(state);
    _paq.push(['trackEvent', 'User Activity', 'State Toggle', state]);
  }
</script>

<button type="button" id={state} class="stateCookieBtn" aria-label={state} on:click={handleClick}>{state}</button>