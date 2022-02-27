import "../styles/globals.css";
import { NativeBaseProvider } from "native-base";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps:{session,...pageProps}, }) {

  return (
    <NativeBaseProvider>
      <SessionProvider session={session}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
      </SessionProvider>
      
    </NativeBaseProvider>
  );
}

export default MyApp;
