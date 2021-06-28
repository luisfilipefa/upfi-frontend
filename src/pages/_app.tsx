import { AuthProvider } from "../context/AuthContext";
import { GlobalStyle } from "../styles/global";
import { Header } from "../components/Header";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Header />
      <Toaster />
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
