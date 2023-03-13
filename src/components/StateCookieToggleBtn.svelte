<script>
  import { stateCookie } from '$utils/stores';
  import { getStateCookiePrettyValue, setLocalStateCookie } from '$utils/stateCookie';


  export let state;
  let classes = '';
  export { classes as class };


  function handleClick() {
    stateCookie.set(state);
    setLocalStateCookie(state);

    const _paq = typeof window !== 'undefined' && window._paq || [];
    _paq.push(['trackEvent', 'User Activity', 'State Toggle', state]);
  }
</script>


<button type="button" id={state} class={`${$stateCookie === state ? 'active' : ''} state_cookie_toggle_btn underline_bar ${classes}`} aria-label={state} on:click={handleClick}>{getStateCookiePrettyValue(state)}</button>


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
    letter-spacing: .05em;
    color: #FFFFFF;
    cursor: pointer;
    transform: translateY(2px);
    transition: transform 100ms ease-out;

    &:hover, &:focus {
      opacity: .8;
      transform: translateY(0);
      text-shadow: 0px 2px 8px rgba(white, .5);
    }
    &:focus-visible {
      outline-color: rgba(white, .25);
      outline-style: dotted;
      outline-width: 2px;
    }

    &:after {
      content: '';
      position: absolute;
      background-color: #FFFFFF;
      height: 0px;
      left: 1.125em;
      right: 1.125em;
      bottom: 0;
      transform-origin: bottom center;
      border-radius: 4px 4px 0 0 / 1.5px 1.5px 0 0;
      opacity: .2;
      transition: 100ms ease-out;
      transition-property: height, opacity;
    }

  }
  .active {
    opacity: 1;
    font-weight: bold;
    transform: translateY(0);
    cursor: default;

    &:hover, &:focus, &:active {
      opacity: 1;
      text-shadow: none;
    }

    &:after {
      transition-duration: 200ms, 100ms;
      height: 2px;
      opacity: .7;
    }
  }
</style>
