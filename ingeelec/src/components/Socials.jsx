import Link from "next/link"

import {
  RiFacebookFill,
  RiInstagramFill,
  RiWhatsappFill,
}from 'react-icons/ri';


const socials = [
  {
    path: '#',
    icon: <RiFacebookFill />
  },
  {
    path: '#',
    icon: <RiInstagramFill />
  },
  {
    path: '#',
    icon: <RiWhatsappFill />
  },
];


const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {socials.map((item, index) => {
        return (
          <Link href={item.path} key={index}>
            <div className={`${iconStyles}`}>{item.icon}</div>
          </Link>
        )
      })}
    </div>
  )
};

export default Socials;