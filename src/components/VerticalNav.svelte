<script>
  import VerticalNavTile from '$components/VerticalNavTile.svelte';


  export let ariaLabel;
  export let tiles;
  let classes = '';
  export { classes as class };

</script>


<nav class="vertical_nav column c-7-12 small_full list_view pad_t_half smalls_pad_t_none {classes}" aria-labelledby="U-Connect-by-user-type">
  <h2 class="element-invisible" id="U-Connect-by-user-type">{ariaLabel}</h2>

  {#each tiles as tile}<VerticalNavTile {...tile} />{/each}
</nav>