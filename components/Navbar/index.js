import {
  NavContainer,
  HeaderContainer,
  SocialIcon,
  NavLogo,
} from "./NavbarElements";
import { NavLinkComponent } from "./NavLinkComponent";
const Navbar = () => {
  return (
    <HeaderContainer>
      <NavContainer>
        <NavLinkComponent name={"Project"} href={"/project"} />
        <NavLinkComponent name={"Contact"} href={"/contact"} />
        <NavLinkComponent name={"About"} href={"/about"} marginRight="auto" />
        <NavLinkComponent href={"/"} position="absolute">
          <NavLogo src="/icons/vercel.svg" />
        </NavLinkComponent>

        <NavLinkComponent href={"https://github.com/ALiuHua"}>
          <SocialIcon src="/icons/github.svg"></SocialIcon>
          <span>Github</span>
        </NavLinkComponent>
        <NavLinkComponent href={"https://github.com/ALiuHua"}>
          <SocialIcon src="/icons/linkedin.svg"></SocialIcon>
          <span>LinkedIn</span>
        </NavLinkComponent>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Navbar;
