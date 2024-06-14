import { AuthProvider } from "@/app/context/AuthContext";
import "./globals.css";
import Theme from "@/app/theme/theme";

export default function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </AuthProvider>
  );
}
