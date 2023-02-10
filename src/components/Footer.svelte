<script>
  import FooterLink from './FooterLink.svelte';

  export let ariaLabel;
  export let links;

  let lFooterLinks = [];
  let rFooterLinks = [];
  links.forEach(link => link.alignment === 'left' ? lFooterLinks.push(link): rFooterLinks.push(link));
</script>

<footer class="webbar" aria-labelledby="Website-References">
  <h2 class="element-invisible" id="Website-References">{ariaLabel}</h2>

  <div class="row">
    <div class="column">
      <div class="row-even">
        <!-- <slot name="footer-nav-left" /> -->
        <!-- {lFooterLinks.forEach(link => <FooterLink {...link} />)} -->
        {#each lFooterLinks as link}<FooterLink {...link} />{/each}

        <div class="webbbar_item webbar_item-group row-even">
          <!-- <slot name="footer-nav-right" /> -->
          <!-- {rFooterLinks.forEach(link => <FooterLink {...link} />)} -->
          {#each rFooterLinks as link}<FooterLink {...link} />{/each}
        </div>
      </div>
    </div>
  </div>
</footer>
