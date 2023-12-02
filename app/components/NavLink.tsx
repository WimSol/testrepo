import Link from "next/link";
// import './Navbarcss.css';

type NavLinkProps = {
  href: string;
  title: string;
  onClick?: () => void; // Optional onClick prop
};

const NavLink = ({ href, title }: NavLinkProps) => {
    return (
      <Link href={href}>
        <span 
          className="block py-2 pl-3 pr-4 text-[#bbc1c5] sm:text-xl rounded md:p-0 hover:text-white" style={{ fontFamily: 'Pixeloid, sans-serif' }}
        >
          {title}
        </span>
      </Link>
    );
  };

export default NavLink
