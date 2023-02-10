import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import partytown from '@astrojs/partytown';
import 'dotenv/config';


// Set by github
const IS_CI = process.env.CI;
const IS_GITHUB = process.env.GITHUB_ACTIONS;
const IS_JENKINS = process.env.JENKINS;
const IS_PRD = IS_CI || process.env.NODE_ENV === "production" ? true : false;


// https://astro.build/config
export default defineConfig({
	integrations: [
    svelte(),
  ],
  // output: 'static',
  site: IS_GITHUB ? 'https://uwhealth.github.io' : IS_JENKINS ? 'https://home.uwhealth.wisc.edu/' : undefined,
  base: IS_GITHUB || IS_JENKINS ? '/browser-starter-tab' : '',
});
