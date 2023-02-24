<script>
  export let href;
  export let iconName;
  export let text;
  export let alignment;

  let handleClick = () => _paq.push(['trackEvent', 'User Activity', 'Bottom Bar', `${text.length ? text : ''}`]);
  let iconSrc = `${import.meta.env.BASE_URL}${iconName}`;
</script>

<svelte:head>
  <link rel="prefetch" href={iconSrc}>
</svelte:head>

{#if href}
  <a href={href} class="link_naked txt_center webbar_item" on:click={handleClick} data-align={alignment}>
    <img src={iconSrc} class="inline-block" width="36" height="36" alt="">
    <span class="webbar_item_text">{text}</span>
  </a>
{/if}
