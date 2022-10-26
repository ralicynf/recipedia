import { Link } from 'react-router-dom'

const Header = () => {

    return (
        <header>
            <nav>
                <Link to='/' >Home </Link>
            </nav>
        </header>

    )
}

export default Header

{/* <Link to='/'>Home</Link>
<Link to='/recipelist'>Recipe List</Link>
<Link to='/resources'>Resources</Link> */}