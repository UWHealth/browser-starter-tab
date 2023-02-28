<script>
  import { stateCookie } from '$utils/stores';
  import { getStateCookiePrettyValue, setLocalStateCookie } from '$utils/stateCookie';


  export let state;

  function handleClick() {
    stateCookie.set(state);
    setLocalStateCookie(state);

    const _paq = typeof window !== 'undefined' && window._paq || [];
    _paq.push(['trackEvent', 'User Activity', 'State Toggle', state]);
  }
</script>


<button type="button" id={state} class={`${$stateCookie === state ? 'active' : ''} state_cookie_toggle_btn underline_bar`} aria-label={state} on:click={handleClick}>{getStateCookiePrettyValue(state)}</button>


<style lang="scss">
  .state_cookie_toggle_btn {
    position: relative;
    background: none;
    border: none;
    padding: 0;
    width: 128px;
    height: 50px;
    opacity: .7;
    text-align: center;
    font-size: 13.75px;
    color: #FFFFFF;
    cursor: pointer;
  }
  .active {
    opacity: 1;
    font-weight: bold;

    &:after {
      content: '';
      position: absolute;
      background-color: #FFFFFF;
      height: 2px;
      left: 1.125em;
      right: 1.125em;
      bottom: 0;
      transform-origin: bottom center;
      border-radius: 4px 4px 0 0 / 1.5px 1.5px 0 0;
      transition: transform 200ms ease-in-out;
      opacity: .7;
    }
  }
</style>