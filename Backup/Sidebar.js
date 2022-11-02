import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import Styled from 'styled-components';
import { IconContext } from 'react-icons/lib';


 
const Nav = Styled.div`
    background: #15171c;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    
`;
const NavIcons = Styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;
 
const SidebarNav = Styled.nav`
    background: #15171c;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 250ms;
    z-index: 10;
 
`;
 
const SidebarWrap = Styled.div`
    width: 100%;
`;


const SideBar = () =>{
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <div >
        <IconContext.Provider value={{ color: '#fff' }}>
            <Nav>
                <NavIcons to="#">
                    <FaIcons.FaBars onClick={showSidebar}/>
                </NavIcons>
            </Nav>
            //
            <SidebarNav sidebar={sidebar} >
                <SidebarWrap>
                    <NavIcons to="#">
                        <AiIcons.AiOutlineClose onClick={showSidebar}/>
                    </NavIcons>
                    {SidebarData.map((item, index) =>{
                        return <SubMenu item={item} key={index} />
                    })}
                </SidebarWrap>
            </SidebarNav>
        </IconContext.Provider>
         
        </div>
     )
}
export default SideBar;