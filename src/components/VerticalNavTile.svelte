<script>
  import { fade } from 'svelte/transition';

  export let path = '';
  export let iconName = '';
  export let text = '';

  const href = `https://uconnect.wisc.edu${path}`;
  const iconSrc = `${import.meta.env.BASE_URL}${iconName}`;
  const handleClick = () => _paq.push(['trackEvent', 'User Activity', 'U-Connect Experiences', `U-Connect ${text.length ? text : ''}`]);
</script>

<svelte:head>
  <link rel="prefetch" href={iconSrc}>
</svelte:head>


<a href={href} class="link_naked" on:click={handleClick} in:fade>
  <div class="card card-short box_flag space_b_half">

    <header class="box_flag_media bg-blue pad_h_quarter card_media">
      <img src={iconSrc} class="card_head_image" style="width: 4rem; height: 4rem" alt="">
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
