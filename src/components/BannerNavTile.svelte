<script>
  export let href = '';
  export let icon = '';
  export let text = '';

  const iconSrc = `${import.meta.env.BASE_URL}${icon}`;

  const _paq = typeof window !== 'undefined' && window._paq || [];
  const handleClick = () => _paq.push(['trackEvent', 'User Activity', 'Top/Main links', `${text.length ? text : ''}`]);
</script>


<svelte:head>
  <link rel="prefetch" href={iconSrc}>
</svelte:head>


<a class="card-flex card" href={href} on:click={handleClick}>

  {#if iconSrc}
    <div class="card-flex_head flex-center">
      <img src={iconSrc} class="card_head_image" alt="">
    </div>
  {/if}

  {#if text}
    <div class="card_body txt_center highlight_blue txt_bold flex flex-center">{text}</div>
  {/if}

</a>
