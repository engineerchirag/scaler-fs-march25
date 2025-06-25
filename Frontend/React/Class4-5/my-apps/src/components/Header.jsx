import { Link } from "react-router";

const Header = () => {
    return (
        <header>
            <ul>
                {/* <a href="/">Home</a>
                <a href="/cart">Cart</a>
                <a href="/product-list">Product List</a>
                <a href="/todo">Todo</a> */}

                <Link to="/">Home</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/product-list">Product List</Link>
                <Link to="/todo">Todo</Link>
            </ul>
        </header>
    )
}

export default Header;