<script>
  import BannerNavTile from '$components/BannerNavTile.svelte';


  let classes = '';
  export { classes as class };

  export let ariaLabel;
  export let tiles;
</script>



<nav class="hero_nav {classes}" aria-labelledby={ariaLabel}>
  <h2 class="element-invisible" id={ariaLabel}>{ariaLabel}</h2>
  <NavGroup {stateIndex} {x} {xIncrements} class="flex nav_group">
    {#each tiles as tile}<BannerNavTile {...tile} />{/each}
  </NavGroup>
</nav>


<style lang="scss">
  @import './src/styles/vars';

  // .nav_group {
  //   @media only screen and (min-width: (calc(640px/$base-px) * 1em)) {
  //     grid-column-gap: 3rem;
  //   }
  // }

  .hero_nav {
    z-index: 1;
    position: relative;
    display: grid;
    width: 100%;
    padding: 2rem 0;

    @media only screen and (min-width: (calc(640px/$base-px) * 1em)) {
      justify-content: center;
      padding: 3rem 0;
    }

    // btm line
    &:before {
      content: '';
      z-index: 1;
      opacity: .7;
      position: absolute;
      display: block;
      height: 2px;
      width: 100%;
      max-width: 1080px;
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;
      background-image: -webkit-linear-gradient(left, rgba(255, 255, 255, 0) 0%,rgba(255, 255, 255, 1) 25%, rgb(255, 255, 255, 1) 75%, rgba(255, 255, 255, 0) 100%);
    }

    // bottom fade-out overlay
    &:after {
      z-index: -1;
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      background: transparent linear-gradient(180deg, #F6FCFD3B 0%, #F0F8F9C7 37%, #EEF6F8 70%, #EDF5F7 100%) 0% 0% no-repeat padding-box;
    }
  }
</style>