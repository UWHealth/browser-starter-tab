<script>
  import { fade } from 'svelte/transition';
  import { stateCookie } from '../utils/stores';


  export let state;
</script>


{#if state === $stateCookie}
  <div in:fade>
    <slot />
  </div>
{/if}
