<script>
  import json from '../app.json';


  const { title, header } = json;
  const { ariaLabel, logo } = header;
  let logoSrc = `${import.meta.env.BASE_URL}${logo}`;
</script>


<svelte:head>
  <link rel="prefetch" href={logoSrc}>
</svelte:head>


<img src={logoSrc} class="pad_h_2 flex-center" alt={title} style="z-index:1;">

<h1 class="element-invisible">{ariaLabel}</h1>