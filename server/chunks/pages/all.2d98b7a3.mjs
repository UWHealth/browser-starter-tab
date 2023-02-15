import { c as createAstro, a as createComponent, r as renderTemplate, b as renderSlot, d as renderHead, e as addAttribute, f as renderComponent, m as maybeRenderHead } from '../astro.05535a42.mjs';
import 'html-escaper';
/* empty css                           */
const title = "UW Health Launch Page";
const header = {
	ariaLabel: "Internal web portal for UW Health",
	iconName: "logo-uw.png"
};
const bannerNav = {
	ariaLabel: "Common Tools",
	tiles: [
		{
			href: "https://outlook.office365.com/owa",
			iconName: "ico_mail.svg",
			text: "Outlook Webmail"
		},
		{
			href: "https://uconnect.wisc.edu/directory",
			iconName: "ico_directory.svg",
			text: "Directory"
		},
		{
			href: "https://uwhmytime.uwhealth.org",
			iconName: "ico_clock.svg",
			text: "MyTime"
		}
	]
};
const verticalNav = {
	ariaLabel: "U-Connect User Areas",
	tiles: [
		{
			queryString: "",
			iconName: "ico_u.svg",
			text: "for Everyone"
		},
		{
			queryString: "?tab=clinicians",
			iconName: "ico_physicians.svg",
			text: "for Physicians/APPs"
		},
		{
			queryString: "?tab=nurses",
			iconName: "ico_nurses.svg",
			text: "for Nurses"
		}
	]
};
const verticalList = {
	ariaLabel: "Tools",
	links: [
		{
			href: "https://citrix.uwhealth.org",
			text: "Health Link (Citrix Gateway)"
		},
		{
			href: "https://sso.nextplanesolutions.com:9443/samlsso?spEntityID=uwh80632",
			text: "HERO"
		},
		{
			href: "https://myapps.microsoft.com/signin/d8d85358-c554-4fac-a003-11b296b52d4f",
			text: "Oracle Cloud"
		},
		{
			href: "https://webpaging.uwhealth.org/webxchange/",
			text: "Paging"
		},
		{
			href: "https://uwhealth.service-now.com/sp/",
			text: "ServiceNow"
		},
		{
			href: "https://uwhca.sharepoint.com/",
			text: "SharePoint"
		},
		{
			href: "https://uwhealth.webex.com/",
			text: "WebEx"
		}
	]
};
const footer = {
	ariaLabel: "Website References",
	links: [
		{
			alignment: "left",
			href: "https://www.google.com",
			iconName: "icon-google.png",
			text: "google.com"
		},
		{
			alignment: "right",
			href: "https://www.uwhealth.org",
			iconName: "icon-uwhealth.png",
			text: "uwhealth.org"
		},
		{
			alignment: "right",
			href: "https://www.med.wisc.edu",
			iconName: "icon-smph.png",
			text: "med.wisc.edu"
		}
	]
};
const json = {
	title: title,
	header: header,
	bannerNav: bannerNav,
	verticalNav: verticalNav,
	verticalList: verticalList,
	footer: footer
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://uwhealth.github.io");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const stateCookieKey = "uwh_state";
  const stateCookieValueWisconsin = "wi";
  let stateCookieValue = Astro2.cookies.get(stateCookieKey);
  if (!stateCookieValue)
    Astro2.cookies.set(stateCookieKey, stateCookieValueWisconsin);
  const _paq = typeof window !== "undefined" && window._paq || [];
  _paq.push(["trackPageView", stateCookieValue]);
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en">\n  <head>\n    <meta charset="utf-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n    <meta name="description" content="">\n    <meta name="robots" content="noindex">\n    <title>', '</title>\n    <link rel="icon" type="image/x-icon"', ">\n  ", '</head>\n\n  <body>\n    <script type="text/javascript">\n      (function(window, document, dataLayerName, id) {\n      window[dataLayerName]=window[dataLayerName]||[],window[dataLayerName].push({start:(new Date).getTime(),event:"stg.start"});var scripts=document.getElementsByTagName(\'script\')[0],tags=document.createElement(\'script\');\n      function stgCreateCookie(a,b,c){var d="";if(c){var e=new Date;e.setTime(e.getTime()+24*c*60*60*1e3),d="; expires="+e.toUTCString()}document.cookie=a+"="+b+d+"; path=/"}\n      var isStgDebug=(window.location.href.match("stg_debug")||document.cookie.match("stg_debug"))&&!window.location.href.match("stg_disable_debug");stgCreateCookie("stg_debug",isStgDebug?1:"",isStgDebug?14:-1);\n      var qP=[];dataLayerName!=="dataLayer"&&qP.push("data_layer_name="+dataLayerName),isStgDebug&&qP.push("stg_debug");var qPString=qP.length>0?("?"+qP.join("&")):"";\n      tags.async=!0,tags.src=`${process.env.PIWIK_PRO_CONTAINER_URL}/${id}.js${qPString}`,scripts.parentNode.insertBefore(tags,scripts);\n      !function(a,n,i){a[n]=a[n]||{};for(var c=0;c<i.length;c++)!function(i){a[n][i]=a[n][i]||{},a[n][i].api=a[n][i].api||function(){var a=[].slice.call(arguments,0);"string"==typeof a[0]&&window[dataLayerName].push({event:n+"."+i+":"+a[0],parameters:[].slice.call(arguments,1)})}}(i[c])}(window,"ppms",["tm","cm"]);\n      })(window, document, \'dataLayer\', `${process.env.PIWIK_PRO_CONTAINER_ID}`);\n    <\/script>\n\n    ', "\n\n  </body></html>"], ['<html lang="en">\n  <head>\n    <meta charset="utf-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n    <meta name="description" content="">\n    <meta name="robots" content="noindex">\n    <title>', '</title>\n    <link rel="icon" type="image/x-icon"', ">\n  ", '</head>\n\n  <body>\n    <script type="text/javascript">\n      (function(window, document, dataLayerName, id) {\n      window[dataLayerName]=window[dataLayerName]||[],window[dataLayerName].push({start:(new Date).getTime(),event:"stg.start"});var scripts=document.getElementsByTagName(\'script\')[0],tags=document.createElement(\'script\');\n      function stgCreateCookie(a,b,c){var d="";if(c){var e=new Date;e.setTime(e.getTime()+24*c*60*60*1e3),d="; expires="+e.toUTCString()}document.cookie=a+"="+b+d+"; path=/"}\n      var isStgDebug=(window.location.href.match("stg_debug")||document.cookie.match("stg_debug"))&&!window.location.href.match("stg_disable_debug");stgCreateCookie("stg_debug",isStgDebug?1:"",isStgDebug?14:-1);\n      var qP=[];dataLayerName!=="dataLayer"&&qP.push("data_layer_name="+dataLayerName),isStgDebug&&qP.push("stg_debug");var qPString=qP.length>0?("?"+qP.join("&")):"";\n      tags.async=!0,tags.src=\\`\\${process.env.PIWIK_PRO_CONTAINER_URL}/\\${id}.js\\${qPString}\\`,scripts.parentNode.insertBefore(tags,scripts);\n      !function(a,n,i){a[n]=a[n]||{};for(var c=0;c<i.length;c++)!function(i){a[n][i]=a[n][i]||{},a[n][i].api=a[n][i].api||function(){var a=[].slice.call(arguments,0);"string"==typeof a[0]&&window[dataLayerName].push({event:n+"."+i+":"+a[0],parameters:[].slice.call(arguments,1)})}}(i[c])}(window,"ppms",["tm","cm"]);\n      })(window, document, \'dataLayer\', \\`\\${process.env.PIWIK_PRO_CONTAINER_ID}\\`);\n    <\/script>\n\n    ', "\n\n  </body></html>"])), title, addAttribute(`${"/browser-starter-tab/"}favicon.ico`, "href"), renderHead($$result), renderSlot($$result, $$slots["default"]));
}, "/home/runner/work/browser-starter-tab/browser-starter-tab/src/layouts/Layout.astro");

function run(fn) {
    return fn();
}
function blank_object() {
    return Object.create(null);
}
function run_all(fns) {
    fns.forEach(run);
}

let current_component;
function set_current_component(component) {
    current_component = component;
}
Promise.resolve();
const ATTR_REGEX = /[&"]/g;
const CONTENT_REGEX = /[&<]/g;
/**
 * Note: this method is performance sensitive and has been optimized
 * https://github.com/sveltejs/svelte/pull/5701
 */
function escape(value, is_attr = false) {
    const str = String(value);
    const pattern = is_attr ? ATTR_REGEX : CONTENT_REGEX;
    pattern.lastIndex = 0;
    let escaped = '';
    let last = 0;
    while (pattern.test(str)) {
        const i = pattern.lastIndex - 1;
        const ch = str[i];
        escaped += str.substring(last, i) + (ch === '&' ? '&amp;' : (ch === '"' ? '&quot;' : '&lt;'));
        last = i + 1;
    }
    return escaped + str.substring(last);
}
function each(items, fn) {
    let str = '';
    for (let i = 0; i < items.length; i += 1) {
        str += fn(items[i], i);
    }
    return str;
}
function validate_component(component, name) {
    if (!component || !component.$$render) {
        if (name === 'svelte:component')
            name += ' this={...}';
        throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules. Otherwise you may need to fix a <${name}>.`);
    }
    return component;
}
let on_destroy;
function create_ssr_component(fn) {
    function $$render(result, props, bindings, slots, context) {
        const parent_component = current_component;
        const $$ = {
            on_destroy,
            context: new Map(context || (parent_component ? parent_component.$$.context : [])),
            // these will be immediately discarded
            on_mount: [],
            before_update: [],
            after_update: [],
            callbacks: blank_object()
        };
        set_current_component({ $$ });
        const html = fn(result, props, bindings, slots);
        set_current_component(parent_component);
        return html;
    }
    return {
        render: (props = {}, { $$slots = {}, context = new Map() } = {}) => {
            on_destroy = [];
            const result = { title: '', head: '', css: new Set() };
            const html = $$render(result, props, {}, $$slots, context);
            run_all(on_destroy);
            return {
                html,
                css: {
                    code: Array.from(result.css).map(css => css.code).join('\n'),
                    map: null // TODO
                },
                head: result.title + result.head
            };
        },
        $$render
    };
}
function add_attribute(name, value, boolean) {
    if (value == null || (boolean && !value))
        return '';
    const assignment = (boolean && value === true) ? '' : `="${escape(value, true)}"`;
    return ` ${name}${assignment}`;
}

/* src/components/Header.svelte generated by Svelte v3.55.1 */

const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { ariaLabel } = $$props;
	let { iconName } = $$props;
	let { title } = $$props;
	if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
	if ($$props.iconName === void 0 && $$bindings.iconName && iconName !== void 0) $$bindings.iconName(iconName);
	if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);

	return `<header class="${"flex-center flex flex-v"}"><img${add_attribute("src", `${"/browser-starter-tab/"}${iconName}`, 0)} class="${"pad_h_2 flex-center"}"${add_attribute("alt", title, 0)} style="${"z-index:1;"}">
  <h1 class="${"element-invisible"}">${escape(ariaLabel)}</h1></header>`;
});

/* src/components/BannerNavTile.svelte generated by Svelte v3.55.1 */

const BannerNavTile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { href = '' } = $$props;
	let { iconName = '' } = $$props;
	let { text = '' } = $$props;
	let iconSrc = `${"/browser-starter-tab/"}${iconName}`;
	let onclick = () => _paq.push(['trackEvent', 'User Activity', 'Top/Main links', `${text.length ? text : ''}`]);
	if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
	if ($$props.iconName === void 0 && $$bindings.iconName && iconName !== void 0) $$bindings.iconName(iconName);
	if ($$props.text === void 0 && $$bindings.text && text !== void 0) $$bindings.text(text);

	return `<a class="${"card-flex card"}"${add_attribute("href", href, 0)}${add_attribute("onclick", onclick, 0)}>${iconSrc
	? `<div class="${"card-flex_head flex-center"}"><img${add_attribute("src", iconSrc, 0)} class="${"card_head_image"}" alt="${""}"></div>`
	: ``}

  ${text
	? `<div class="${"card_body txt_center highlight_blue txt_bold flex flex-center"}">${escape(text)}</div>`
	: ``}</a>`;
});

/* src/components/BannerNav.svelte generated by Svelte v3.55.1 */

const BannerNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { ariaLabel } = $$props;
	let { tiles } = $$props;
	if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
	if ($$props.tiles === void 0 && $$bindings.tiles && tiles !== void 0) $$bindings.tiles(tiles);

	return `<nav class="${"hero_nav bg-white flex flex-center"}" aria-labelledby="${"Employee-Apps"}"><h2 class="${"element-invisible"}" id="${"Employee-Apps"}">${escape(ariaLabel)}</h2>

  <div class="${"card-group flex"}" id="${"nav-all-employees"}">${each(tiles, tile => {
		return `${validate_component(BannerNavTile, "BannerNavTile").$$render($$result, Object.assign({}, tile), {}, {})}`;
	})}</div></nav>`;
});

/* src/components/VerticalNavTile.svelte generated by Svelte v3.55.1 */

const VerticalNavTile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { queryString = '' } = $$props;
	let { href = `https://uconnect.wisc.edu/${queryString}` } = $$props;
	let { iconName = '' } = $$props;
	let { text = '' } = $$props;
	let iconSrc = `${"/browser-starter-tab/"}${iconName}`;

	let onclick = () => _paq.push([
		'trackEvent',
		'User Activity',
		'U-Connect Experiences',
		`U-Connect ${text.length ? text : ''}`
	]);

	if ($$props.queryString === void 0 && $$bindings.queryString && queryString !== void 0) $$bindings.queryString(queryString);
	if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
	if ($$props.iconName === void 0 && $$bindings.iconName && iconName !== void 0) $$bindings.iconName(iconName);
	if ($$props.text === void 0 && $$bindings.text && text !== void 0) $$bindings.text(text);

	return `${($$result.head += '<!-- HEAD_svelte-5uspvi_START -->' + `<link rel="${"prefetch"}"${add_attribute("href", iconSrc, 0)}>` + '<!-- HEAD_svelte-5uspvi_END -->', "")}


<a${add_attribute("href", href, 0)} class="${"link_naked"}"${add_attribute("onclick", onclick, 0)}><div class="${"card card-short box_flag space_b_half"}"><header class="${"box_flag_media bg-blue pad_h_quarter card_media"}"><img${add_attribute("src", iconSrc, 0)} class="${"card_head_image"}" style="${"width: 4rem; height: 4rem"}" alt="${""}"></header>

    <div class="${"box_flag_body"}"><div class="${"bigs_space_neg_l_half pad_v_half"}">U-Connect

        <br>

        ${slots.text
	? slots.text({})
	: `
          ${text ? `<strong>${escape(text)}</strong>` : ``}
        `}</div></div></div></a>`;
});

/* src/components/VerticalNav.svelte generated by Svelte v3.55.1 */

const VerticalNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { ariaLabel } = $$props;
	let { tiles } = $$props;
	if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
	if ($$props.tiles === void 0 && $$bindings.tiles && tiles !== void 0) $$bindings.tiles(tiles);

	return `<nav class="${"column c-7-12 small_full list_view pad_t_half"}" aria-labelledby="${"U-Connect-by-user-type"}"><h2 class="${"element-invisible"}" id="${"U-Connect-by-user-type"}">${escape(ariaLabel)}</h2>

  ${each(tiles, tile => {
		return `${validate_component(VerticalNavTile, "VerticalNavTile").$$render($$result, Object.assign({}, tile), {}, {})}`;
	})}</nav>`;
});

/* src/components/VerticalListLink.svelte generated by Svelte v3.55.1 */

const VerticalListLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { href = '' } = $$props;
	let { text = '' } = $$props;
	let onclick = () => _paq.push(['trackEvent', 'User Activity', 'Tools', `${text.length ? text : ''}`]);
	if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
	if ($$props.text === void 0 && $$bindings.text && text !== void 0) $$bindings.text(text);

	return `<li><a${add_attribute("href", href, 0)}${add_attribute("onclick", onclick, 0)}><t4 type="${"content"}" name="${"Tools-2-text"}" output="${"normal"}" modifiers="${"striptags,htmlentities"}"></t4>

    ${slots.text
	? slots.text({})
	: `
      ${text ? `${escape(text)}` : ``}
    `}</a></li>`;
});

/* src/components/VerticalList.svelte generated by Svelte v3.55.1 */

const VerticalList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { ariaLabel } = $$props;
	let { links } = $$props;
	if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
	if ($$props.links === void 0 && $$bindings.links && links !== void 0) $$bindings.links(links);

	return `<nav class="${"column c-4-12 push-1-12 smalls-push-0 small_full pad_t_half"}" aria-labelledby="${"Tools"}"><h2 class="${"header_gray pad_b_half"}" id="${"Tools"}">${escape(ariaLabel)}</h2>

  <ul class="${"list_naked list_nav"}">${each(links, link => {
		return `${validate_component(VerticalListLink, "VerticalListLink").$$render($$result, Object.assign({}, link), {}, {})}`;
	})}</ul></nav>`;
});

/* src/components/FooterLink.svelte generated by Svelte v3.55.1 */

const FooterLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { href } = $$props;
	let { iconName } = $$props;
	let { text } = $$props;
	let { alignment } = $$props;
	let onclick = () => _paq.push(['trackEvent', 'User Activity', 'Bottom Bar', `${text.length ? text : ''}`]);
	let iconSrc = `${"/browser-starter-tab/"}${iconName}`;
	if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
	if ($$props.iconName === void 0 && $$bindings.iconName && iconName !== void 0) $$bindings.iconName(iconName);
	if ($$props.text === void 0 && $$bindings.text && text !== void 0) $$bindings.text(text);
	if ($$props.alignment === void 0 && $$bindings.alignment && alignment !== void 0) $$bindings.alignment(alignment);

	return `${($$result.head += '<!-- HEAD_svelte-5uspvi_START -->' + `<link rel="${"prefetch"}"${add_attribute("href", iconSrc, 0)}>` + '<!-- HEAD_svelte-5uspvi_END -->', "")}

${href
	? `<a${add_attribute("href", href, 0)} class="${"link_naked txt_center webbar_item"}"${add_attribute("onclick", onclick, 0)}><img${add_attribute("src", iconSrc, 0)} class="${"inline-block"}" width="${"36"}" height="${"36"}" alt="${""}">
    <span class="${"webbar_item_text"}">${escape(text)}</span></a>`
	: ``}`;
});

/* src/components/Footer.svelte generated by Svelte v3.55.1 */

const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { ariaLabel } = $$props;
	let { links } = $$props;
	let lFooterLinks = [];
	let rFooterLinks = [];

	links.forEach(link => link.alignment === 'left'
	? lFooterLinks.push(link)
	: rFooterLinks.push(link));

	if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
	if ($$props.links === void 0 && $$bindings.links && links !== void 0) $$bindings.links(links);

	return `<footer class="${"webbar"}" aria-labelledby="${"Website-References"}"><h2 class="${"element-invisible"}" id="${"Website-References"}">${escape(ariaLabel)}</h2>

  <div class="${"row"}"><div class="${"column"}"><div class="${"row-even"}">
        
        ${each(lFooterLinks, link => {
		return `${validate_component(FooterLink, "FooterLink").$$render($$result, Object.assign({}, link), {}, {})}`;
	})}

        <div class="${"webbbar_item webbar_item-group row-even"}">
          
          ${each(rFooterLinks, link => {
		return `${validate_component(FooterLink, "FooterLink").$$render($$result, Object.assign({}, link), {}, {})}`;
	})}</div></div></div></div></footer>`;
});

const $$Astro = createAstro("https://uwhealth.github.io");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const {
    title,
    header,
    bannerNav,
    verticalNav,
    verticalList,
    footer
  } = json;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<div class="flex flex-v flex-wrap">
    <div class="hero flex flex-v vh-4-10">

      ${renderComponent($$result2, "Header", Header, { "title": title, ...header, "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/runner/work/browser-starter-tab/browser-starter-tab/src/components/Header.svelte", "client:component-export": "default" })}

      ${renderComponent($$result2, "BannerNav", BannerNav, { ...bannerNav, "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/runner/work/browser-starter-tab/browser-starter-tab/src/components/BannerNav.svelte", "client:component-export": "default" })}

    </div>

    <div class="flex vh-6-10">
      <div class="wrap pad_b_2 smalls_pad_h_half">
        <div class="row">

          ${renderComponent($$result2, "VerticalNav", VerticalNav, { ...verticalNav, "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/runner/work/browser-starter-tab/browser-starter-tab/src/components/VerticalNav.svelte", "client:component-export": "default" })}

          ${renderComponent($$result2, "VerticalList", VerticalList, { ...verticalList, "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/runner/work/browser-starter-tab/browser-starter-tab/src/components/VerticalList.svelte", "client:component-export": "default" })}

        </div>
      </div>
    </div>
  </div>${renderComponent($$result2, "Footer", Footer, { ...footer, "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/runner/work/browser-starter-tab/browser-starter-tab/src/components/Footer.svelte", "client:component-export": "default" })}` })}`;
}, "/home/runner/work/browser-starter-tab/browser-starter-tab/src/pages/index.astro");

const $$file = "/home/runner/work/browser-starter-tab/browser-starter-tab/src/pages/index.astro";
const $$url = "/browser-starter-tab";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _ };
