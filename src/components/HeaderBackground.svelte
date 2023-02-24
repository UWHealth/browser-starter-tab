<script>
  import { fade } from 'svelte/transition';


  export let iconName;
  export let title;
</script>


<img src={`${import.meta.env.BASE_URL}${iconName}`} class="pad_h_2 flex-center" alt={title} style="z-index:1;" in:fade>