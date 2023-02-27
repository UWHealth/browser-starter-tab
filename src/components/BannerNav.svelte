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
    flex-shrink: 1;
    flex-grow: .5;
    flex-basis: 9rem;
  }
</style>