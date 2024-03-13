import styled from "styled-components"

const Navbar = styled.nav `
background: white;
width: max-content;
padding: 0.7rem 1.7rem;
z-index: 2;
position: fixed;
left: 50%;
transform: translate(-50%);
bottom: 38rem;
display: flex;
gap: 0.8rem;
border-radius: 3rem;
backdrop-filter: blur(15px);

`
const A = styled.a `
    text-decoration: none;
    color: black;
    margin-right: 15px;
    margin-left: 15px;
`
function Nav() {
    return (
    <Navbar>
        <A href=''>Home</A>
        <A href="#">Projects</A>
        <A href="#">Skills</A>
        <A href="">About</A>
        <A href="#">Contact</A>
    </Navbar>
    )
}

export default Nav