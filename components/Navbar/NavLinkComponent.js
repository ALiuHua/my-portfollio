import { NavLink, NavList } from "./NavbarElements";
import Link from "next/link";

export const NavLinkComponent = ({
  href,
  name,
  children,
  marginRight,
  position,
}) => {
  //1）传入的Props参数要destructing
  //2）Next.js中，Link的使用 a / customied a / PassHref
  return (
    <NavList marginRight={marginRight} position={position}>
      <Link href={href} passHref>
        <NavLink>
          {children}
          {name}
        </NavLink>
      </Link>
    </NavList>
  );
};
