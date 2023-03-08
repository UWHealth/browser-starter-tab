<script>
  import NavGroup from '$components/NavGroup.svelte';
  import VerticalListLink from '$components/VerticalListLink.svelte';
  import { stateCookie } from '$utils/stores';
  import { getXIncrements } from '$utils/getXIncrements';
  import json from '../app.json';


  let classes = '';
  export { classes as class };


  const { states, fallbackState } = json;
  const keys = Object.keys(states);

  $: currentState = states[$stateCookie] || fallbackState;
  $: ariaLabel = currentState.verticalList.ariaLabel;

  const xIncrements = getXIncrements(keys);
</script>


<nav class="column display-inline_grid c-4-12 push-1-12 smalls-push-0 small_full pad_t_half smalls_pad_b_half {classes}" aria-labelledby="Tools">
  {#each keys as key, index}
    <NavGroup x={$stateCookie ? xIncrements[index] : 0} active={$stateCookie ? key === $stateCookie : true}>
      <h2 class="header_gray pad_b_half" id="Tools">{ariaLabel}</h2>
    </NavGroup>
  {/each}

  <ul class="display-inline_grid list_naked list_nav">
    {#each keys as key, index}

      {#if $stateCookie}
        <NavGroup x={$stateCookie ? xIncrements[index] : 0} active={$stateCookie ? key === $stateCookie : true}>
          {#each states[key].verticalList.links as link}
            <VerticalListLink visible={!!$stateCookie} {...link} />
          {/each}
        </NavGroup>
      {/if}

      {#if index === 0 && !$stateCookie}
        <NavGroup x={0} active={true} class="fallback">
          {#each fallbackState.verticalList.links as link}
            <VerticalListLink visible={!$stateCookie} {...link} />
          {/each}
        </NavGroup>
      {/if}

    {/each}
  </ul>
</nav>


<style lang="scss">
  .header_gray {
    font-size: 13.17957px;
    font-size: .82372rem;
    line-height: 1.821;
    margin-bottom: 0;
    font-weight: 700;
    color: #8da1ad !important;
    text-transform: uppercase;
    letter-spacing: 1.36px;
  }
</style>