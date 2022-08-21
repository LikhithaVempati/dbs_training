import {Link} from 'react-router-dom';
export function Navbar()
{
    return(
        <div>
            <Link to="/">Home  </Link>
            <Link to="/CustomerPage">Customer  </Link>
            <Link to="/About">About  </Link>
            <Link to="/Form">Form  </Link>
        </div>
    )
}