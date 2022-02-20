import { NavContainer } from "./NavbarElements";
import { NavLinkComponent } from "./NavLinkComponent";
import { useState } from "react";
import { useRouter } from "next/router";
const Navbar = () => {
  const router = useRouter();
  const [colorState, setColorState] = useState("red");
  const handler = () => {
    setColorState("green");
    console.log("runinh");
  };
  return (
    <NavContainer>
      <NavLinkComponent
        name={"about"}
        href={"/about"}
        className={router.pathname === "/" ? "active" : ""}
      />
      <NavLinkComponent
        name={"contact us"}
        href={"/contact"}
        marginRight={"auto"}
        color={colorState}
        onNavigation={handler}
        className={router.pathname === "/" ? "active" : ""}
      />
      <NavLinkComponent
        name={"something new"}
        href={"/new"}
        className={router.pathname === "/" ? "active" : ""}
      />
    </NavContainer>
  );
};

export default Navbar;
