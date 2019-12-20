import Link from "next/link";

const Navigation = () => (
    <nav className="navbar navbar-expand navbar-dark bg-warning">
        <div className="container">
            <Link href="/">
                <a className="navbar-brand">AllBitcoin</a>
            </Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link href="/">
                            <a className="nav-link">Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a className="nav-link">About Us</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);
 
export default Navigation;