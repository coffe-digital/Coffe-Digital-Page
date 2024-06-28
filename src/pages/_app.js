import { AuthProvider } from "@/app/context/AuthContext";
import "./globals.css";
import Theme from "@/app/theme/theme";
import 'leaflet/dist/leaflet.css';
import { CartProvider } from "@/app/context/CartContext";

export default function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
    <AuthProvider>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </AuthProvider>
    </CartProvider>
  );
}
