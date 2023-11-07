import { Link } from "react-scroll"
import { useMediaQuery } from "react-responsive"

const links = [
    {
        path: 'home',
        name: 'ㅤ Inicio ㅤ'
    },
    {
        path: 'tours',
        name: 'ㅤ Productos ㅤ '
    },
    {
        path: 'servicios',
        name: 'ㅤ Servicios ㅤ '
    },
    {
        path: 'blog',
        name: 'ㅤ Comentarios ㅤ'
    },
    {
        path: 'contacto',
        name: 'ㅤ Contactos ㅤ'
    },

]

const Nav = ({ containerStyles, linkStyles }) => {
    const idDesktop = useMediaQuery({
        query: '(min-width: 1310px)'

    });

    return (
        <nav className={`${containerStyles}`}>
            {links.map((link, index) => {
                return (
                    <Link to={link.path}
                        className={`${linkStyles} cursor-pointer border-b-2 border-transparent`}
                        key={index}
                        smooth /*{!isDesktop ? false : true}*/ 
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