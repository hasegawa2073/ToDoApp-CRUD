import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import AuthProvider from "./auth/AuthProvider";
import { useEffect } from "react";
import { auth } from "../firebase";
import { useRouter } from "next/router";
config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        if (router.pathname === "/signin") {
          router.push("/");
        }
      } else {
        if (router.pathname !== "/signin") {
          router.push("/signin");
        }
      }
    });
  });

  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
