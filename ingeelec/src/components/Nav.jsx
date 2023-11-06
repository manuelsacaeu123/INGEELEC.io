import { Link } from "react-scroll"

const links = [
    {
        path : 'home',
        name : 'Home'
    },
    {
        path : 'home',
        name : 'Home'
    },
    {
        path : 'home',
        name : 'Home'
    },
    {
        path : 'home',
        name : 'Home'
    },
    
]

const Nav = ({containerStyles, linkStyles}) => {
  return (
    <nav>
        {links.map((link, index) => {
            return <Link to={link.path}>{link.name}</Link>;
        })

        }
    </nav>
  )
}

export default Nav