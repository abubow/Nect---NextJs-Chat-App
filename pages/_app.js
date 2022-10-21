import "../styles/auth.css";
import "../styles/chats.css";
import "../styles/index.css";

import { ContextProvider } from '../context'

export default function App({ Component, pageProps }) {
  return (
    <ContextProvider>
      <div className="demo-disclaimer">
        use me as username and password as password
      </div>
      <Component {...pageProps} />
    </ContextProvider>
  );
}
