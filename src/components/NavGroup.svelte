<script>
  import { fly } from 'svelte/transition';


  let classes = '';
  export { classes as class };
  export let x = 0;
  export let active = false;
</script>


{#if active}
  <div class="group {classes}" in:fly={{ x }} out:fly={{ x }}>
    <slot />
  </div>
{/if}


<style lang="scss">
  @import './src/styles/vars';

  .group {
    grid-column: 1;
    grid-row: 1;

    @media only screen and (min-width: (calc(640px/$base-px) * 1em)) {
      grid-column-gap: 3rem;
    }
  }
</style>