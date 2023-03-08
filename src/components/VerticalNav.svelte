<script>
  import NavGroup from '$components/NavGroup.svelte';
  import VerticalNavTile from '$components/VerticalNavTile.svelte';
  import { stateCookie } from '$utils/stores';
  import { getXIncrements } from '$utils/getXIncrements';
  import json from '../app.json';


  let classes = '';
  export { classes as class };

  const { states, fallbackState } = json;
  const keys = Object.keys(states);

  $: currentState = states[$stateCookie] || fallbackState;
  $: ariaLabel = currentState.verticalNav.ariaLabel;

  const xIncrements = getXIncrements(keys);
</script>


<nav class="vertical_nav column c-7-12 small_full list_view pad_t_half smalls_pad_t_none {classes}" aria-labelledby="U-Connect-by-user-type">
  <h2 class="element-invisible" id="U-Connect-by-user-type">{ariaLabel}</h2>

  {#each keys as key, index}

    {#if $stateCookie}
      <NavGroup x={$stateCookie ? xIncrements[index] : 0} active={$stateCookie ? key === $stateCookie : true}>
        {#each states[key].verticalNav.tiles as tile}
          <VerticalNavTile visible={!!$stateCookie} {...tile} />
        {/each}
      </NavGroup>
    {/if}

    {#if index === 0 && !$stateCookie}
      <NavGroup x={0} active={true} class="fallback">
        {#each fallbackState.verticalNav.tiles as tile}<VerticalNavTile visible={!$stateCookie} {...tile} />{/each}
      </NavGroup>
    {/if}

  {/each}

</nav>


<style lang="scss">
  .vertical_nav {
    display: inline-grid;
  }
</style>