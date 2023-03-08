<script>
  export let href = '';
  export let text = '';
  export let visible = false;
  let classes = '';
  export { classes as class };

  const _paq = typeof window !== 'undefined' && window._paq || [];
  const handleClick = () => _paq.push(['trackEvent', 'User Activity', 'Tools', `${text.length ? text : ''}`]);
</script>

{#if visible}
  <li class="list_nav_item {classes}">
    <a href={href} class="list_nav_link " on:click={handleClick}>
      <slot name="text">
        {#if text}{text}{/if}
      </slot>
    </a>
  </li>
{/if}


<style lang="scss">
  @import './src/styles/colors';

  .list_nav_item {
    margin-bottom: calc(1.5rem / 4);
    color: color(label);
  }

  .list_nav_link {
    padding: .5rem;
    left: -.5rem;
    position: relative;
    transition: all 75ms ease-out;
    transition-duration: 75ms, 200ms;
    transition-property: background, letter-spacing;
    white-space: nowrap;
    overflow: hidden;
    max-width: 100%;
    border-radius: 2px;
    letter-spacing: 0.96px;

   &:hover {
      background-color: rgba(color('highlight'), .6);
      border-radius: 3px;
    }
  }
</style>