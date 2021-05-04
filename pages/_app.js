import AppContextProvider from "context/AppContext";
import "../styles/styles.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  );
}
