import {
  NavContainer,
  HeaderContainer,
  SocialIcon,
  NavLogo,
} from "./NavbarElements";
import { useRouter } from "next/router";
import { NavLinkComponent } from "./NavLinkComponent";
const Navbar = () => {
  const router = useRouter();
  const { pathname } = router;
  return (
    <header>
      <HeaderContainer>
        <NavContainer>
          {/* {pathname === "/project" && (
            <NavLinkComponent name={"Home"} href={"/"} />
          )}
          {pathname !== "/project" && (
            <NavLinkComponent name={"Project"} href={"/project"} />
          )} */}
          {/* below is the better way to do this kind of thing;we just need to one component with different props*/}
          <NavLinkComponent
            name={pathname !== "/" ? "Home" : "Project"}
            href={pathname !== "/" ? "/" : "/project"}
          />
          <NavLinkComponent name={"Contact"} href={"/contact"} />
          <NavLinkComponent name={"About"} href={"/about"} marginRight="auto" />
          <NavLinkComponent href={"/"} position="absolute">
            <NavLogo src="/icons/vercel.svg" />
          </NavLinkComponent>
          <NavLinkComponent href={"https://github.com/ALiuHua"}>
            <SocialIcon src="/icons/github.svg"></SocialIcon>
            <span>Github</span>
          </NavLinkComponent>
          <NavLinkComponent
            href={"https://www.linkedin.com/in/andy-liu-94697a181/"}
          >
            <SocialIcon src="/icons/linkedin.svg"></SocialIcon>
            <span>LinkedIn</span>
          </NavLinkComponent>
        </NavContainer>
      </HeaderContainer>
    </header>
  );
};

export default Navbar;
