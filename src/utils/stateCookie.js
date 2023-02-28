import Cookies from 'js-cookie';


export const SERVER_STATE_COOKIE_KEY = 'uwh_state';
export const LOCAL_STATE_COOKIE_KEY = `${SERVER_STATE_COOKIE_KEY}-local`;

export const STATE_COOKIE_VALUE_WISCONSIN = 'wi';
export const STATE_COOKIE_VALUE_ILLINOIS = 'il';
export const STATE_COOKIE_VALUES = [STATE_COOKIE_VALUE_WISCONSIN, STATE_COOKIE_VALUE_ILLINOIS];

export const getLocalStateCookie = () => Cookies.get(LOCAL_STATE_COOKIE_KEY);
export const getServerStateCookie = () => Cookies.get(SERVER_STATE_COOKIE_KEY);
export const getInitialStateCookie = () => {
  const stateLocalCookieValue = getLocalStateCookie();
  const stateServerCookieValue = getServerStateCookie();

  // local > server
  return stateLocalCookieValue || stateServerCookieValue;
};

export const getStateCookiePrettyValue = (stateCookieValue) => {
  switch (stateCookieValue) {
    case 'il':
      return 'Illinois';
    default:
      return 'Wisconsin';
  };
};

export const setLocalStateCookie = (value) => Cookies.set(LOCAL_STATE_COOKIE_KEY, value);