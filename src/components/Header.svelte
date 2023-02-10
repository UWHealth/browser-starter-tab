<script>
  export let ariaLabel;
  export let iconName;
  export let title;
</script>

<header class="flex-center flex flex-v">
  <img src={`${import.meta.env.BASE_URL}${iconName}`} class="pad_h_2 flex-center" alt={title} style="z-index:1;">
  <h1 class="element-invisible">{ariaLabel}</h1>
</header>
