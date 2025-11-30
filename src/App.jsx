import { RouterProvider } from "react-router";
import { CartProvider } from './context/CartContext';
import router from "./route";

function App() {
  return (
    <CartProvider>
        <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
