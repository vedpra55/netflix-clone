import "../styles/globals.css";

import { AuthStateContext } from "../context/userContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthStateContext>
      <Component {...pageProps} />
    </AuthStateContext>
  );
}

export default MyApp;
