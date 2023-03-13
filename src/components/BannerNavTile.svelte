<script>
  export let href = '';
  export let icon = '';
  export let text = '';
  export let visible = false;
  let classes = '';
  export { classes as class };


  const iconSrc = `${import.meta.env.BASE_URL}${icon}`;
</script>

{#if visible}
  <a class="card-flex card {classes}" href={href}>

    {#if iconSrc}
      <div class="card-flex_head flex-center">
        <img src={iconSrc} class="card_head_image" alt="" height="67" width="67">
      </div>
    {/if}

    {#if text}
      <div class="card_body txt_center highlight_blue txt_bold flex flex-center">{text}</div>
    {/if}

  </a>
{/if}
