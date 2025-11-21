import { RouterProvider } from "react-router";
import { HelmetProvider } from 'react-helmet-async';
import { CartProvider } from './context/CartContext';
import router from "./route";

function App() {
  return (
    <HelmetProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </HelmetProvider>
  );
}

export default App;
