import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Link from 'next/link'



const NavbarMenu = () => {
    return (
        <div>
            <Navbar bg='dark' variant='dark'>
                <Navbar.Brand>
                    <Link href="/" passHref>
                        <Nav.Link>MY FIRTS APP</Nav.Link>
                    </Link>
                </Navbar.Brand>
                <Nav>
                    <Link href="/posts" passHref>
                        <Nav.Link>Post</Nav.Link>
                    </Link>
                    <Link href="/about" passHref>
                        <Nav.Link>About</Nav.Link>
                    </Link>
                    <Link href="/jokes/random" passHref>
                        <Nav.Link>Jokes</Nav.Link>
                    </Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default NavbarMenu