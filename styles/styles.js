import styled from 'styled-components';
// para definir el menú https://codepen.io/abdelrhmansaid/pen/OJRNOpQ
// otra opción https://codepen.io/firepenguin/pen/KoyLZg
/*.menu {
  text-decoration: none;
  padding: 10px;
  font-weight: 600;
  font-size: 20px;
  color: #ffffff;
  background-color: #1883ba;
  border-radius: 6px;
  border: 2px solid #0016b0;
}
*/
export const NavUlLi = styled.header`
  padding: 0rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NavUl = styled.ul`
  float: right;
  margin: 0 15px 0 0;
`;

export const Nav = styled.nav`
  max-width: 56em;
  margin: 0 auto;
  padding: 0.4em;
`;

export const Ul = styled.ul`
  display: flex;
  padding: 0;
`;

export const Li = styled.li`
  display: block;
  padding: 0.4em;
`;

// Note that styled-components lets you use SCSS syntax

export const A = styled.a`
  &:link,
  &:visited {
    background-color: #66b3ff;
    color: white;
    padding: 14px 25px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    border-radius: 10px;
  }

  &:hover,
  &:active {
    color: white;
    background-color: #0070f3;
  }
   animation:bouncy 5s infinite linear;
   position:relative;
  @keyframes bouncy {
   0%{top:0em}
   40%{top:0em}
   43%{top:-0.9em}
   46%{top:0em}
   48%{top:-0.4em}
   50%{top:0em}
   100%{top:0em;}
`;

// https://www.mediacurrent.com/blog/how-build-card-component/ para definir la cart
export const Card = styled.article`
  width: 300px;
  text-align: center;
  background: #fff;
  transition: box-shadow 0.3s ease-in-out;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
  &:hover {
    box-shadow: 0 1px 35px 0 rgba(0, 0, 0, 0.3);
  }
  margin: 10px;
  padding: 5px;
  cursor: pointer;
`;

export const SeeButton = styled.div`
  background-color: rgba(0, 118, 255, 0.9);
  border: 1px solid rgba(0, 118, 255, 0.9);
  color: rgb(255, 255, 255);
  padding: 0.25rem 1rem;
  margin: 0px;
  font-weight: 500;
  position: relative;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  padding: 0.25rem 0.5rem;
  margin: -0.25rem -0.5rem;
  border-radius: 7px;
  color: rgb(0, 112, 243);
  background-color: transparent;
  border: none;
  font-size: inherit;
  line-height: inherit;
  transition: background 0.2s ease 0s, color 0.2s ease 0s,
    box-shadow 0.2s ease 0s;
  outline: none;
  -webkit-user-drag: none;
  user-select: none;
`;

/* button return/back */
export const Back = styled.a`
  &:hover,
  &:active {
    color: #0070f3;
    border-color: #0070f3;
  }
  cursor: pointer;
`;

/* Input search bar */
/* https://codepen.io/lucasyem/pen/ZEEYKdj */

export const DivSearch = styled.div`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 50%;
`;

export const InputSearch = styled.input`
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid #9b9b9b;
  outline: 0;
  font-size: 1.2rem;
  color: #66b3ff;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .LabelSearch {
    font-size: 1rem;
    cursor: text;
    top: 20px;
  }
  &:required,
  &:invalid {
    box-shadow: none;
  }
  &:focus {
    ~ .LabelSearch {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: #66b3ff;
      
    }
    padding-bottom: 6px;  
    
    border-width: 3px;
    border-image: linear-gradient(to right, #083fa6,#27ebf2);
    border-image-slice: 1;
`;

export const LabelSearch = styled.label`
  position: absolute;
  top: 10;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: #9b9b9b;
`;
