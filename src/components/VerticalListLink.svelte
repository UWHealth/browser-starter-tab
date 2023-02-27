<script>
  export let href = '';
  export let text = '';

  const handleClick = () => _paq.push(['trackEvent', 'User Activity', 'Tools', `${text.length ? text : ''}`]);
</script>


<li class="list_nav_item">
  <a href={href} class="list_nav_link" on:click={handleClick}>
    <t4 type="content" name="Tools-2-text" output="normal" modifiers="striptags,htmlentities" />

    <slot name="text">
      {#if text}{text}{/if}
    </slot>
  </a>
</li>


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
    transition: background 75ms ease-out;
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