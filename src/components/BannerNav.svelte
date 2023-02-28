<script>
  import BannerNavTile from '$components/BannerNavTile.svelte';


  export let ariaLabel;
  export let tiles;
</script>


<nav class="hero_nav flex flex-center" aria-labelledby="Employee-Apps">
  <h2 class="element-invisible" id="Employee-Apps">{ariaLabel}</h2>

  <div class="card-group flex" id="nav-all-employees">
    {#each tiles as tile}<BannerNavTile {...tile} />{/each}
  </div>
</nav>


<style lang="scss">
  .hero_nav {
    z-index: 1;
    position: relative;
    flex-shrink: 1;
    flex-grow: .5;
    flex-basis: 9rem;

    // bottom fade-out overlay
    &:before {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      background: transparent linear-gradient(180deg, #F6FCFD3B 0%, #F0F8F9C7 37%, #EEF6F8 70%, #EDF5F7 100%) 0% 0% no-repeat padding-box;
    }
  }
</style>