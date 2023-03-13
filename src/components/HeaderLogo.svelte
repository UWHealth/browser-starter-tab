<script>
  import json from '../app.json';


  let classes = '';
  export { classes as class };


  const { title, header } = json;
  const { ariaLabel, logo } = header;
  const logoSrc = `${import.meta.env.BASE_URL}${logo}`;
</script>


<div class="logo_wrapper {classes}">
  <img src={logoSrc} class="logo" alt={title}>
  <h1 class="element-invisible">{ariaLabel}</h1>
</div>


<style lang="scss">
  @import './src/styles/vars';

  .logo_wrapper {
    z-index: 1;
    display: flex;
    flex-grow: 1;
    margin: 2rem auto;

    @media only screen and (min-height: (calc(600px/$base-px) * 1em)) {
      margin: auto;
    }
  }

  .logo {
    margin: auto 0;

    @media only screen and (min-height: (calc(640px/$base-px) * 1em)) {
      margin-bottom: 3rem;
    }
    @media only screen and (min-height: (calc(900px/$base-px) * 1em)) {
      margin-bottom: 4rem;
    }
  }
</style>