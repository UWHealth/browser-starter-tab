<script>
  import VerticalListLink from '$components/VerticalListLink.svelte';


  export let ariaLabel;
  export let links;
</script>


<nav class="column c-4-12 push-1-12 smalls-push-0 small_full pad_t_half smalls_pad_b_half" aria-labelledby="Tools">
  <h2 class="header_gray pad_b_half" id="Tools">{ariaLabel}</h2>

  <ul class="list_naked list_nav">
    {#each links as link}<VerticalListLink {...link} />{/each}
  </ul>
</nav>


<style lang="scss">
  .header_gray {
    font-size: 13.17957px;
    font-size: .82372rem;
    line-height: 1.821;
    margin-bottom: 24px;
    margin-bottom: 1.5rem;
    font-weight: 700;
    color: #8da1ad !important;
    margin-bottom: 0;
    text-transform: uppercase;
    letter-spacing: 1.36px;
  }
</style>