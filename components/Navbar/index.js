import { FaGithub, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";
import {
  NavContainer,
  HeaderContainer,
  Logo,
  ThemeToggle,
} from "./NavbarElements";
import { useRouter } from "next/router";
import { NavLinkComponent } from "./NavLinkComponent";
const Navbar = ({ theme, toggleTheme }) => {
  const router = useRouter();
  const { pathname } = router;
  const toggleThemeHandler = () => {
    toggleTheme();
  };
  return (
    <header>
      <HeaderContainer>
        <Logo>
          <NavLinkComponent href={"/contact"}>
            <button>123</button>
          </NavLinkComponent>
        </Logo>
        <NavContainer>
          <NavLinkComponent
            name={pathname !== "/" ? "Home" : "Project"}
            href={pathname !== "/" ? "/" : "/project"}
          />
          <NavLinkComponent name={"Contact"} href={"/contact"} />
          <NavLinkComponent name={"About"} href={"/about"} marginRight="auto" />
          <NavLinkComponent href={"https://github.com/ALiuHua"}>
            <FaGithub />
            <span>Github</span>
          </NavLinkComponent>
          <NavLinkComponent
            href={"https://www.linkedin.com/in/andy-liu-94697a181/"}
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </NavLinkComponent>
        </NavContainer>
        <ThemeToggle onClick={toggleThemeHandler}>
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </ThemeToggle>
      </HeaderContainer>
    </header>
  );
};

export default Navbar;
