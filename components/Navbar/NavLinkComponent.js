import { NavLink, NavList } from "./NavbarElements";
import Link from "next/link";

export const NavLinkComponent = ({
  href,
  name,
  marginRight,
  onNavigation = () => {},
  color,
}) => {
  //1）传入的Props参数要destructing
  //2）Next.js中，Link的使用 a / customied a / PassHref
  const onLinkClick = () => {
    onNavigation();
    console.log("first");
  };
  return (
    <NavList marginRight={marginRight} onClick={onLinkClick}>
      <Link href={href} passHref>
        <NavLink color={color}>{name}</NavLink>
      </Link>
    </NavList>
  );
};
