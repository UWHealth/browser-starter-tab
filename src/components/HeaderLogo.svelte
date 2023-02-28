<script>
  import json from '../app.json';


  const { title, header } = json;
  const { ariaLabel, logo } = header;
  let logoSrc = `${import.meta.env.BASE_URL}${logo}`;
</script>


<svelte:head>
  <link rel="prefetch" href={logoSrc}>
</svelte:head>


<div class="logo_wrapper">
  <img src={logoSrc} class="pad_h_2 flex-center" alt={title}>
  <h1 class="element-invisible">{ariaLabel}</h1>
</div>


<style lang="scss">
  @import './src/styles/project';

  .logo_wrapper {
    z-index: 1;

    @media only screen and (max-height: (calc(680px/$base-px) * 1em)) {
      margin-top: 2rem;
      min-height: 7rem;
    }
  }
</style>