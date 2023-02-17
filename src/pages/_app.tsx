import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import {Roboto} from '@next/font/google';

import { api } from "../utils/api";

import "../styles/globals.css";

const roboto = Roboto({
  subsets:['latin'],
  weight:['400', '500', '900'],
  style: ['italic', 'normal']
})

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <main className={roboto.className}>
      <SessionProvider session={session}>
      <Component {...pageProps} />
      </SessionProvider>
    </main>
  );
};

export default api.withTRPC(MyApp);
