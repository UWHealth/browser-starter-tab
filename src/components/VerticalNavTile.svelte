<script>
  export let path = '';
  export let icon = '';
  export let text = '';

  const href = `https://uconnect.wisc.edu${path}`;
  const iconSrc = `${import.meta.env.BASE_URL}${icon}`;

  const _paq = typeof window !== 'undefined' && window._paq || [];
  const handleClick = () => _paq.push(['trackEvent', 'User Activity', 'U-Connect Experiences', `U-Connect ${text.length ? text : ''}`]);
</script>




<a href={href} class="link_naked" on:click={handleClick}>
  <div class="card card-short box_flag space_b_half">

    <header class="box_flag_media bg-blue pad_h_quarter card_media">
      <img src={iconSrc} class="card_head_image" alt={`${text} icon`}>
    </header>

    <div class="box_flag_body">
      <div class="bigs_space_neg_l_half pad_v_half">
        U-Connect

        <br>

        <slot name="text">
          {#if text}
            <strong>{text}</strong>
          {/if}
        </slot>
      </div>
    </div>

  </div>
</a>


<style lang="scss">
  .card_head_image {
    padding: 0;
    height: 32px;
    width: 32px;
  }
</style>