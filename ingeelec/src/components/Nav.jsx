import { Link } from "react-scroll"

const links = [
    {
        path: 'home',
        name: 'Home'
    },
    {
        path: 'home',
        name: 'Home'
    },
    {
        path: 'home',
        name: 'Home'
    },
    {
        path: 'home',
        name: 'Home'
    },

]

const Nav = ({ containerStyles, linkStyles }) => {
    return (
        <nav className={`${linkStyles}`}>
            {links.map((link, index) => {
                return (
                    <Link to={link.path}
                        className={`${linkStyles} cursor-pointer border-b-2 border-transparent`}
                        key={index}
                        smooth
                        spy
                        offset={-50}
                        activeClass='active'
                    >
                        {link.name}

                    </Link>
                );
            })}
        </nav>
    )
}

export default Nav