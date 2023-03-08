import Cookies from 'js-cookie';


/**
 * Network cookie name/key.
 * Used in calculation of initial state value.
 */
export const SERVER_STATE_COOKIE_KEY = 'uwh_state';

/**
 * Local cookie name/key.
 * Used in calculation of initial state value
 * and updated on user toggle.
 */
export const LOCAL_STATE_COOKIE_KEY = `${SERVER_STATE_COOKIE_KEY}-local`;

/**
 * Default Wisconsin cookies' value.
 */
export const STATE_COOKIE_VALUE_WISCONSIN = 'wi';

/**
 * Default Illinois cookies' value.
 */
export const STATE_COOKIE_VALUE_ILLINOIS = 'il';

/**
 * Array of default states' cookies' values.
 */
export const STATE_COOKIE_VALUES = [STATE_COOKIE_VALUE_WISCONSIN, STATE_COOKIE_VALUE_ILLINOIS];

/**
 * Validates cookie value.
 */
export const validateCookieValue = (value) => STATE_COOKIE_VALUES.includes(value);

/**
 * Returns current local state cookie value.
 */
export const getLocalStateCookie = () => Cookies.get(LOCAL_STATE_COOKIE_KEY);

/**
 * Returns current network state cookie value.
 */
export const getServerStateCookie = () => Cookies.get(SERVER_STATE_COOKIE_KEY);

/**
 * Returns initial state cookie value.
 * (local > server)
 */
export const getInitialStateCookie = () => getLocalStateCookie() || getServerStateCookie();

/**
 * Maps state cookie values to "pretty" state values.
 * @param {string} stateCookieValue State's cookie value.
 * @return {string} "pretty" state value.
 */
export const getStateCookiePrettyValue = (stateCookieValue) => {
  switch (stateCookieValue) {
    case 'il':
      return 'Illinois';
    default:
      return 'Wisconsin';
  };
};

/**
 * Updates the local state cookie,
 * keeping it in-sync with Svelte store.
 * @param {string} storeValue Value from store to update cookie with.
 * @return Updated local state cookie.
 */
export const setLocalStateCookie = (storeValue) => Cookies.set(
  LOCAL_STATE_COOKIE_KEY,
  storeValue,
  {
    expires: 30,
    secure: true,
    sameSite: 'strict',
  }
);