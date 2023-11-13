import { Link } from "react-router-dom";

export default function NavBar(){
return(
    <nav>
        <h1>
            <Link to={"/vintage_dev"}>vintage app</Link>

        </h1>
        <button>
            <Link to={"/vintage/new"}></Link>
        </button>
    </nav>
)
}
