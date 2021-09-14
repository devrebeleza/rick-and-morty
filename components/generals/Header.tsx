import Link from "next/link";
import { NavUlLi, Nav, Ul, Li, A } from "../../styles/styles";

const NavBar = (props) => {
  return (
    <NavUlLi>
      <Nav>
        <Ul>
          {props.page != "dashboard" ? (
            <Li>
              <Link href="/dashboard" passHref>
                <A>Dashboard</A>
              </Link>
            </Li>
          ) : null}
          {props.page != "characters" ? (
            <Li>
              <Link href="/characters" passHref>
                <A>Characters</A>
              </Link>
            </Li>
          ) : null}
          {props.page != "episodes" ? (
            <Li>
              <Link href="/episodes" passHref>
                <A>Episodes</A>
              </Link>
            </Li>
          ) : null}
          {props.page != "places" ? (
            <Li>
              <Link href="/places" passHref>
                <A>Places</A>
              </Link>
            </Li>
          ) : null}
          {props.page != "home" ? (
            <Li>
              <Link href="/" passHref>
                <A>Home</A>
              </Link>
            </Li>
          ) : null}
        </Ul>
      </Nav>
    </NavUlLi>
  );
};

export default NavBar;
