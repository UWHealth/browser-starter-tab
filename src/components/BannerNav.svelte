<script>
  import BannerNavTile from './BannerNavTile.svelte';

  export let ariaLabel;
  export let tiles;
</script>

<nav class="hero_nav bg-white flex flex-center" aria-labelledby="Employee-Apps">
  <h2 class="element-invisible" id="Employee-Apps">{ariaLabel}</h2>

  <div class="card-group flex" id="nav-all-employees">
    {#each tiles as tile}<BannerNavTile {...tile} />{/each}
  </div>
</nav>
