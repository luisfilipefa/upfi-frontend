import { AuthProvider } from "../context/AuthContext";
import { GlobalStyle } from "../styles/global";
import { Header } from "../components/Header";
import { NewPostModal } from "../components/NewPostModal";
import { NewPostModalProvider } from "../context/NewPostModalContext";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <NewPostModalProvider>
        <NewPostModal />
        <Header />
        <Toaster />
        <GlobalStyle />
        <Component {...pageProps} />
      </NewPostModalProvider>
    </AuthProvider>
  );
}

export default MyApp;
