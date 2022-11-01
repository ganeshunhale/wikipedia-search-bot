
import { Outlet, NavLink, Link } from "react-router-dom"
import { useContext, useEffect } from 'react';
import { Consumecontext, context } from '../contextapi';

const nestedNavStyle = ({ isActive }) => {

    return {
        fontWeight: isActive ? "bold" : "lighter",
        margin: "3px"
    }

}

const Contact = () => {

    const { showHideChatbotCB } = useContext(context)

    useEffect(() => {

        showHideChatbotCB(true)

    }, [])

    return <> <h1 style={{ marginTop: "50px" }}>Contact Me</h1>
        {/* <NavLink to="linkedin" style={nestedNavStyle} >LinkedIn profile</NavLink> */}
        <a href="https://www.linkedin.com/in/real-ganesh-unhale/" target="_blank" rel="noreferrer noopener" >LinkedIn profile</a>
        {/* <NavLink to="featured" style={nestedNavStyle} >Featured</NavLink>

        <Link to="invoices">Invoices</Link> |{" "} */}




        <Outlet /> </>;
};

export default Contact;