<script>
  import VerticalListLink from './VerticalListLink.svelte';


  export let ariaLabel;
  export let links;
</script>

<nav class="column c-4-12 push-1-12 smalls-push-0 small_full pad_t_half" aria-labelledby="Tools">
  <h2 class="header_gray pad_b_half" id="Tools">{ariaLabel}</h2>

  <ul class="list_naked list_nav">
    {#each links as link}<VerticalListLink {...link} />{/each}
  </ul>
</nav>