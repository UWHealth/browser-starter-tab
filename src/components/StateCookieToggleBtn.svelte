<script>
  import { stateCookie } from '../utils/stores';
  import { setLocalStateCookie } from '../utils/stateCookie';

  export let state;

  function handleClick() {
    stateCookie.set(state);
    setLocalStateCookie(state);
  }
</script>

<button type="button" id={state} class="stateCookieBtn" aria-label={state} on:click={handleClick}>{state}</button>