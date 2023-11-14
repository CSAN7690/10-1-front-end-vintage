import { Link } from "react-router-dom";
import './NavBar.css'

export default function NavBar() {
    return (
        <nav>
            <h1>
                <Link to={"/vintage_dev"}>Vintage App</Link>

            </h1>
            <button>
                <Link to={"/vintage/new"}></Link>
            </button>
        </nav>
    )
}
