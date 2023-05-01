# browser-starter-tab aka **UW Health Launch Screen**

## Building and environment

This project uses Node and npm, so the standard `npm i` is necessary to run the project initially.

Before building the project, these environment variables must be set:

```env
BASE_URL                        # Site endpoint
PUBLIC_PIWIK_PRO_CONTAINER_ID   # Piwik Pro container to reference
PUBLIC_PIWIK_PRO_CONTAINER_URL  # UWH Piwik Pro endpoint
```

### Scripts reference

* `dev` && `start` - Start up a local development server.
* `build` - Build the project for production.
* `preview` - Run a local server on the `dist` folder. Effectively previewing a production environment.

For `build`, all of the above ENV variables must be set.

## Deployment

### Jenkins

The [Jenkins job](https://build.uwhealth.tech/job/Browser%20Start%20Tab%20Launch%20Pages/) fetches [this repo](https://github.com/UWHealth/browser-starter-tab/) and builds out to the SAN.

## Data

This project uses a static `./src/app.json` file. Any UI element update(s) necessary for should be made there. It is organized in a format that supports multiple sets of states' values.

Currently any Svelte component that needs data from `app.json` imports and uses it directly. They also subscribe to a Svelte store, which maintains the current toggled state and is used as a key to return its corresponding `app.json` data.

## Toggle states

To accommodate multiple sets of nav items, a means to toggle between states (Wisconsin and Illinois) was introduced.

Cookies are leveraged, one local, one supplied by network rules, to aid in supplying an initial value and keeping the user's preference.

When a user toggles a states, the value is set to the store and the `uwh_state-local` cookie value.

### `uwh_state`

Networking rules applied to the SAN deployments should always supply a `uwh_state` cookie key:value. The `uwh_state` cookie value is set based on user's network traffic location. It is never altered by the app.

### `uwh_state-local`

This cookie is set by the app and always takes precedence over `uwh_state`, if present. This cookie is always set on page load (via `index.astro`).

### Initial state value fallback order

1) `uwh_state-local`
2) `uwh_state`
3) `STATE_COOKIE_VALUE_WISCONSIN` (via `index.astro`)

## Component Transitions

## History

In February of 2023, project migrated out of T4, off of [github.uwhealth.net](https://github.uwhealth.net/Other/browser-starter-tab) into an Astro + Svelte project with a repo by the same name, now [hosted on github.com](https://github.com/UWHealth/browser-starter-tab) and deployed using a new [Jenkins job](https://dev-build.uwhealth.tech/job/Browser%20Start%20Tab%20Launch%20Pages/job/Build%20and%20Deploy/).

In October of 2019, the html and images for this project were moved into t4 (CMS). ~~It is now a microsite within the UConnect instance.~~

## Confluence documentation

[Confluence](https://uwhealth.atlassian.net/wiki/spaces/MRTK/pages/1519691602/UW+Health+and+SMPH+Launch+Screens), or search any future confluence documentation for "Launch Screen".
