import { useSelector } from "react-redux";

export function Navbar() {
    const cartCount = useSelector((state) => state.cart.count);

    return (
        <nav>
            <h1>Магазин</h1>
            <div>Корзина: {cartCount}</div>
        </nav>
    );
}