<script>
  import { fade } from 'svelte/transition';

  export let href = '';
  export let text = '';

  const handleClick = () => _paq.push(['trackEvent', 'User Activity', 'Tools', `${text.length ? text : ''}`]);
</script>

<li>
  <a href={href} on:click={handleClick} in:fade>
    <t4 type="content" name="Tools-2-text" output="normal" modifiers="striptags,htmlentities" />

    <slot name="text">
      {#if text}{text}{/if}
    </slot>
  </a>
</li>