<script>
  export let href = '';
  export let text = '';

  let onclick = () => _paq.push(['trackEvent', 'User Activity', 'Tools', `${text.length ? text : ''}`]);
</script>

<li>
  <a href={href} onclick={onclick}>
    <t4 type="content" name="Tools-2-text" output="normal" modifiers="striptags,htmlentities" />

    <slot name="text">
      {#if text}{text}{/if}
    </slot>
  </a>
</li>