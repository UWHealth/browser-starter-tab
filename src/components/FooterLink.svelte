<script>
  export let href;
  export let icon;
  export let text;
  export let alignment;

  let classes;
  export { classes as class };

  let iconSrc = `${import.meta.env.BASE_URL}${icon}`;

  const _paq = typeof window !== 'undefined' && window._paq || [];
  const handleClick = () => _paq.push(['trackEvent', 'User Activity', 'Bottom Bar', `${text.length ? text : ''}`]);
</script>


<svelte:head>
  <link rel="prefetch" href={iconSrc}>
</svelte:head>


{#if href}
  <a href={href} class="link_naked txt_center webbar_item {classes}" on:click={handleClick} data-align={alignment}>
    <img src={iconSrc} class="inline-block" width="36" height="36" alt="">
    <span class="webbar_item_text">{text}</span>
  </a>
{/if}


<style lang="scss">
  @import './src/styles/colors';

  .webbar_item {
    display: inline-flex;
    flex-direction: column;
    padding: .25rem 2.35%;
    overflow: hidden;
    border: 1px solid transparent;
    border-radius: 2px;
    flex: 0 1 auto;
    max-width: 15em;

    &:hover,
    &:focus {
      border-color: color(link, .25);
      outline: none;
    }
    &:active {
      background-color: lighten(color('highlight'), 2%);
    }
  }

  .webbar_item img {
    display: block;
    margin: auto;
    width: 36px;
    max-width: none;
    padding-top: 3px;
  }

  .webbar_item_text {
    font-size: .7875rem;
    line-height: 1.35;
    letter-spacing: 0.44px;
    padding-top: calc(1.5rem / 4);
    display: block;
    white-space: nowrap;
  }
</style>