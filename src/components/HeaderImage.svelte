<script>
  import { tweened } from 'svelte/motion';
  import { quadInOut, circOut, quintOut } from 'svelte/easing';
  import { stateCookie } from '$utils/stores';
  import json from '../app.json';


  let classes = '';
  export { classes as class };


  const { states } = json;
  const keys = Object.keys(states);
  const total = keys.length;
  let position = (total - 1) / 2;

  // Necessary for initial calculation. Recreated later in reactive statement.
  let percent = (position) / (total - 1);

  /** Based on `progress`, get the difference between `begin` and `end`. */
  const getProgress = (begin = 0, end = 0, progress = 0) => {
    if (Array.isArray(begin)) return begin.map((v,i) => getProgress(v, end[i], progress));
    return begin + progress * (end - begin);
  }
  /** Convert array of values to an array of `tweened` (or `spring`) stores */
  const tweenedArray = (arr, options, fn = tweened) => arr.map(v => fn(v, options));

  /** Creates a tween with a start and end value */
  const createTween = ({ start = 0, end }, ...args) => {
    const val = getProgress(start, end, percent);
    return (fn) => fn(val, ...args);
  }

  /** Creates a simulated version of a spring tween, but better performance */
  const foregroundDuration = (f, t) => Math.sqrt(Math.abs(f[0] - t[0]) + 100) * 50;

  // Configuration
  const bigHexEnd = 110;
  const bokehEnd = 1800;
  const bokehMidEnd = -1198;
  const slicesEnd = [84, 120]; // translate[X,Y]
  const foregroundEnd = [[-900, 180], [415, 55], [1550, -150]]; // translate[X,Y] for each element
  const bgScale = { start: 1, end: 1.25 };
  const bgTranslateX = { start: 400, end: 600 };

  // Creating tween stores
  const backgroundScale = createTween(bgScale, {duration: 300, easing: quadInOut})(tweened);
  const backgroundTranslateX = createTween(bgTranslateX, {duration: 300, easing: quadInOut})(tweened);
  const bigHexTranslateX = createTween({ end: bigHexEnd }, { duration: 320, easing: circOut})(tweened);
  const bokehTranslateX = createTween({end: bokehEnd }, { duration: 300, easing: circOut })(tweened);
  const bokehMidTranslateX = createTween({end: bokehMidEnd}, { duration: 250, easing: circOut })(tweened);
  const slicesTranslateX = createTween({ start: [0, 0], end: slicesEnd}, { duration: 200, easing: quadInOut })(tweened);
  const [ foregroundTop, foregroundMid, foregroundBottom ] = tweenedArray(
    getProgress([[0,0], [0,0], [0,0]], foregroundEnd, percent),
    { easing: quintOut, duration: foregroundDuration, stiffness: .125, damping: 1.75 },
    tweened
  );

  // Reactive statements
  $: percent = (position) / (total - 1);
  $: position = keys.indexOf($stateCookie);

  // Change animations based on `percent` changing
  $: {
    $backgroundScale = getProgress(bgScale.start, bgScale.end, percent);
    $backgroundTranslateX = getProgress(bgTranslateX.start, bgTranslateX.end, percent);
    $bokehTranslateX = getProgress(0, bokehEnd, percent);
    $bokehMidTranslateX = getProgress(0, bokehMidEnd, percent);
    $bigHexTranslateX = getProgress(0, bigHexEnd, percent);
    $foregroundTop = getProgress([0,0], foregroundEnd[0], percent);
    $foregroundMid = getProgress([0,0], foregroundEnd[1], percent);
    $foregroundBottom = getProgress([0,0], foregroundEnd[2], percent);
    $slicesTranslateX = getProgress([0,0], slicesEnd, percent);
  }
</script>


<svelte:options namespace="svg"/>


<svg class="header_image {classes}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2000 600">
  <defs>
    <linearGradient id="bg-gradient"
      x1="0" y1="1000" x2="1950" y2="0"
      gradientTransform="translate({$backgroundTranslateX} 0) scale({$backgroundScale})" gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" stop-color="#fb8779"/>
      <stop offset=".95" stop-color="#1574ab"/>
    </linearGradient>
    <radialGradient id="vignette-gradient" cx="1.21" cy="641.5" fx="1.21" fy="641.5" r=".58" gradientTransform="translate(-1109.86 606877.1) scale(1788.66 -945.48)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fff"/>
      <stop offset="1" stop-color="#577a9d"/>
    </radialGradient>
  </defs>

  <rect class="bg" x="-100" y="-15" width="2300" height="900" />

  <g class="graphics">
    <g class="hexagons">
      <g class="big-hexes" transform="translate({$bigHexTranslateX} {$bigHexTranslateX})">
        <path class="big-hexes__hex-1 big-hex" d="m271.51,235.54l546.83,939.61-546.83,939.61H-822.16l-546.83-939.61L-822.16,235.54H271.51Z"/>
        <path class="big-hexes__hex-2 big-hex" d="m2826.16-182.07l522.01,896.32-522.01,896.32h-1044.01l-522.01-896.32L1782.15-182.07h1044.01Z"/>
        <path class="big-hexes__hex-3 big-hex" d="m1433.3-1625.86l690.07,1184.7-690.07,1184.7H53.16L-636.91-441.16,53.16-1625.86h1380.14Z"/>
        <path class="big-hexes__hex-4 big-hex" d="m2458.85,311.93l481.9,828.21-481.9,828.21h-963.8l-481.9-828.21,481.9-828.21h963.8Z"/>
      </g>
      <g class="bg-slices">
        <path class="bg-slices__slice-left" transform="translate({$slicesTranslateX[0]} 0)" d="m2619.25-230.11v895.99H550.71L1067.84-230.11h1551.41Z"/>
        <path class="bg-slices__slice-right" transform="translate({$slicesTranslateX[1]} 0)" d="m3120.89-230.11v895.99H1052.34L1569.48-230.11h1551.41Z"/>
      </g>
      <g class="bokeh" transform="translate({$bokehTranslateX} 0)">
        <path class="bokeh__hex-1" d="m394.42,463.44l186.84,318.3-186.84,318.3H20.74l-186.84-318.3L20.74,463.44h373.68Z"/>
        <path class="bokeh__hex-2" d="m947.94-113.31l155.33,268.01-155.33,268.01h-310.66l-155.33-268.01,155.33-268.01h310.66Z"/>
        <path class="bokeh__hex-3" d="m1945.8,235.54l322.44,554.47-322.44,554.47h-644.87l-322.43-554.47,322.43-554.47h644.87Z"/>
        <path class="bokeh__hex-4" d="m2370.09-2.55l137.5,236.18-137.5,236.18h-275.01l-137.5-236.18L2095.08-2.55h275.01Z"/>
        <path class="bokeh__hex-5" d="m692.03-128.59l210.08,362.86-210.08,362.86h-420.15L61.8,234.27l210.08-362.86h420.15Z"/>
        <path class="bokeh__hex-6" d="m902.42,232.99l188.12,325.94-188.12,325.94h-376.22l-188.11-325.94,188.11-325.94h376.22Z"/>
        <path class="bokeh__hex-7" d="m2610.09-269.91l293.47,504.82-293.47,504.82h-586.94l-293.47-504.82,293.47-504.82h586.94Z"/>
        <path class="bokeh__hex-8" d="m151.88,235.54l214.21,368.59-214.21,368.59h-428.43l-214.21-368.59,214.21-368.59H151.88Z"/>
        <path class="bokeh__hex-9" d="m2530.19-98.03l195.12,333.58-195.12,333.58h-390.23l-195.12-333.58,195.12-333.58h390.23Z"/>
        <polygon class="bokeh__mid" transform="translate({$bokehMidTranslateX} 0)" points="1729.99 235.54 1957.58 -155.33 1729.99 -546.2 1274.83 -546.2 1047.25 -155.33 1093.95 -75.12 761.42 -75.12 581.26 234.9 646.82 347.71 593.99 438.61 774.15 748.63 1134.46 748.63 1314.62 438.61 1249.06 325.8 1301.52 235.54 1729.99 235.54"/>
        <path class="bokeh__hex-0" d="m248.01-85.3L293.52-7l-45.52,78.3h-91.03L111.46-7l45.52-78.3h91.03Z"/>
        <path class="bokeh__hex-9" d="m501.05-527.1l173.15,301.11L501.05,75.12H154.74L-18.41-225.99l173.15-301.11h346.31Z"/>
      </g>
      <g class="foreground">
        <path class="foreground__hex-top foreground__hex" transform="translate({$foregroundTop.join(' ')})" d="m1421.57-150.24l80.21,136.87-80.21,136.87h-160.42l-80.21-136.87,80.21-136.87h160.42Z"/>
        <path class="foreground__hex-mid foreground__hex" transform="translate({$foregroundMid.join(' ')})" d="m726.4,106.95l108.22,185.25-108.22,185.25h-216.44l-108.22-185.25,108.22-185.25h216.44Z"/>
        <path class="foreground__hex-bottom foreground__hex" transform="translate({$foregroundBottom.join(' ')})" d="m135.65,432.88l80.21,136.87-80.21,136.87H-24.78l-80.21-136.87L-24.78,432.88h160.42Z"/>
      </g>
      <rect class="vignette" x="-100.67" y="-15.46" width="2277.3" height="1153.51"/>
    </g>
  </g>
</svg>


<style lang="scss">
  .header_image {
    position: absolute;
    top: 0;
    min-height: 60vh;
  }

  .bg {
    fill: url(#bg-gradient);
  }

  .vignette {
    fill: url(#vignette-gradient);
    mix-blend-mode: overlay;
  }

  .graphics {
    mix-blend-mode: color-burn;
  }

  .bg-slices__slice-left,
  .bg-slices__slice-right {
    opacity: .06;
  }

  .bg-slices__slice-right {
    fill: #c0fcff;
  }

  .bg-slices__slice-left {
    fill: #ffc1be;
  }

  .foreground__hex-mid {
    opacity: .7;
    fill: #ffc1be;
  }

  .foreground__hex-top {
    fill: #ffece6;
    opacity: .3;
  }

  .foreground__hex-bottom {
    fill: #f7fbfc;
    opacity: .52;
  }

  .big-hexes__hex-1 {
    fill: #461107;
  }

  .big-hexes__hex-2 {
    fill: #8bebfb;
    opacity: .22;
  }

  .big-hexes__hex-3 {
    fill: #065dba;
  }

  .big-hexes__hex-4 {
    fill: #2a394f;
  }

  .bokeh__mid {
    fill: #d4dbdd;
  }

  .bokeh__hex-8 {
    fill: #ff7a7c;
  }

  .bokeh__hex-0 {
    fill: #fff2f1;
  }

  .bokeh__hex-5 {
    fill: #fff8f5;
  }

  .bokeh__hex-6 {
    fill: #44586e;
  }

  .bokeh__hex-1 {
    fill: #163382;
  }

  .bokeh__hex-4 {
    fill: #1574ab;
  }

  .bokeh__hex-2 {
    fill: #a71507;
  }

  .bokeh__hex-7 {
    fill: #d0ebfa;
  }

  .bokeh__hex-9 {
    fill: #c0fcff;
  }

  .bokeh__hex-3 {
    fill: #89e8dd;
  }

  .bokeh__hex-8, .bokeh__hex-0, .bokeh__hex-5, .big-hexes__hex-1, .big-hexes__hex-4, .bokeh__hex-6, .big-hexes__hex-3, .bokeh__hex-1, .bokeh__hex-4, .bokeh__hex-2, .bokeh__hex-7, .bokeh__hex-9, .bokeh__hex-3, .bokeh__mid {
    opacity: .5;
  }
</style>
