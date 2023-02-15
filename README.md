# browser-starter-tab aka **UW Health Launch Screen**

## Building and environment

This project uses Node and npm, so the standard `npm i` is necessary to run the project initially.

Before building the project, these environment variables must be set:

```env
BASE_URL                    # Site endpoint
PIWIK_PRO_CONTAINER_ID      # Piwik Pro container to reference
PIWIK_PRO_CONTAINER_URL     # UWH Piwik Pro endpoint
```

### Scripts reference

* `dev` && `start` - Start up a local development server.
* `build` - Build the project for production.
* `preview` - Run a local server on the `dist` folder. Effectively previewing a production environment.

For `build`, all of the above variables must be set.

## History

In February of 2023, project migrated out of T4, off of [github.uwhealth.net](https://github.uwhealth.net/Other/browser-starter-tab) and away from Jenkins, into an Astro + Svelte project with a repo by the same name, [hosted on github.com](https://github.com/UWHealth/browser-starter-tab) and deployed using git actions to build the `src/data.json` source to components and trigger a Netlify deploy.

In October of 2019, the html and images for this project were moved into t4 (CMS). ~~It is now a microsite within the UConnect instance.~~

## Confluence documentation

[Confluence](https://uwhealth.atlassian.net/wiki/spaces/MRTK/pages/1519691602/UW+Health+and+SMPH+Launch+Screens), or search any future confluence documentation for "Launch Screen".
