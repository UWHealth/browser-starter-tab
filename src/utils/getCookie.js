const getCookie = (cookies, cookie) => {
  console.log({ cookies, cookie });

  if (!cookies) return null;

  cookies.split(';').forEach(c => {
    if (!c) return null;

    const [ key, value ] = c.trim().split('=');

    if (key === cookie) return value;
  });
};

export default getCookie;