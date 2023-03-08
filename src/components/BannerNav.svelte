<script>
  import NavGroup from '$components/NavGroup.svelte';
  import BannerNavTile from '$components/BannerNavTile.svelte';
  import { stateCookie } from '$utils/stores';
  import { getXIncrements } from '$utils/getXIncrements';
  import json from '../app.json';


  let classes = '';
  export { classes as class };


  const { states, fallbackState } = json;
  const keys = Object.keys(states);

  $: currentState = states[$stateCookie] || fallbackState;
  $: ariaLabel = currentState.bannerNav.ariaLabel;

  const xIncrements = getXIncrements(keys);
</script>


<nav class="hero_nav {classes}" aria-labelledby={ariaLabel}>
  <h2 class="element-invisible" id={ariaLabel}>{ariaLabel}</h2>

  {#each keys as key, index}

    {#if $stateCookie}
      <NavGroup x={$stateCookie ? xIncrements[index] : 0} active={$stateCookie ? key === $stateCookie : true} class="flex nav_group">
        {#each states[key].bannerNav.tiles as tile}
          <BannerNavTile visible={!!$stateCookie} {...tile} />
        {/each}
      </NavGroup>
    {/if}

    {#if index === keys.length - 1 && !$stateCookie}
      <NavGroup x={0} active={true} class="fallback flex nav_group">
        {#each fallbackState.bannerNav.tiles as tile}<BannerNavTile visible={!$stateCookie} {...tile} />{/each}
      </NavGroup>
    {/if}

  {/each}

</nav>


<style lang="scss">
  @import './src/styles/vars';

  .hero_nav {
    z-index: 1;
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
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

  .hero_nav :global(.nav_group) {
    justify-content: center;
  }
</style>