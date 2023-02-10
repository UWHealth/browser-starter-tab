<script>
  export let href = '';
  export let iconName = '';
  export let text = '';

  let iconSrc = `${import.meta.env.BASE_URL}${iconName}`;
  let onclick = () => _paq.push(['trackEvent', 'User Activity', 'Top/Main links', `${text.length ? text : ''}`]);
</script>


<a class="card-flex card" href={href} onclick={onclick}>

  {#if iconSrc}
    <div class="card-flex_head flex-center">
      <img src={iconSrc} class="card_head_image" alt="">
    </div>
  {/if}

  {#if text}
    <div class="card_body txt_center highlight_blue txt_bold flex flex-center">{text}</div>
  {/if}

</a>
