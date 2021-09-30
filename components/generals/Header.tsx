import Link from "next/link";
import { NavUlLi, Nav, Ul, Li, A } from "../../styles/styles";
import Hamburger from "./Hamburger";
import { useState } from "react";

const NavBar = (props) => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };
  return (
    <NavUlLi>
      <div className="hamburger" onClick={toggleHamburger}>
        <Hamburger isOpen={hamburgerOpen} />
      </div>
      <Nav>
        <ul className="navigationUl">
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
        </ul>
      </Nav>

      <style jsx>{`
        .navigation {
          width: 100%;
          height: 50px;
        }

        .navigationUl {
          display: flex;
          flex-wrap: wrap;
          float: right;
          margin: 0px;
          padding: 0px;
          overflow: hidden;
          transition: height 0.92s ease-out, width 0.92s ease-out;
        }
        .navigation Ul Li {
          list-style-type: none;
          padding-right: 10px;
        }
        .hamburger {
          display: none;
          z-index: 6;
        }
        @media (max-width: 767px) {
          .hamburger {
            display: fixed;
            padding-top: 10px;
            margin-left: 10px;
            z-index: 6;
          }

          .navigationUl {
            display: ${hamburgerOpen ? "inline" : "none"};
          }
        }
      `}</style>
    </NavUlLi>
  );
};

export default NavBar;
