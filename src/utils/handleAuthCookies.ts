import { destroyCookie, setCookie } from "nookies";

export const updateAuthCookies = (token: string, ctx = undefined) => {
  setCookie(ctx, "upfi.token", token, {
    path: "/",
    secure: true,
  });
};

export const destroyAuthCookies = (ctx = undefined) => {
  destroyCookie(ctx, "upfi.token");
};
