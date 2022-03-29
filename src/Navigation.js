import userEvent from '@testing-library/user-event';
import React  , {useState} from 'react';
import {Link} from 'react-router-dom';
import {Avatar} from 'antd';
export default function Navigation ({user}) 
{
        function otdee() {
            return(
                window.alert(`Hey ${user.firstName} ${user.lastName}`)
            )
        
        }
    const [menuActive , setMenuActive] =useState(false);

    const pages = [
        {url: '/', title: 'Home'},
        {url: '/blog', title: 'Blog'},
        {url: '/login', title: 'Login / Signup'}
      ]
      

    const navLinks = [
        {
           title:"Blog",
           path:"/home" 
        },
        {
        title:"Algorithms",
        path:"/algorithms" 
        },
        {
        title:"Cloud",
        path:"/cloud" 
        },
        {
        title:"Brain Hacking",
        path:"/health" 
        },
        {
        title:"Web-Dev",
        path:"/web-dev" 
        },
        {
        title:"Login",
        path:"/login" 
        },
        {
            title:'Post' , 
            path:'/post'
        } , 
        {
            title:'CreatePost' , 
            path:'/create-post'
        }
    ]
    return(
        <nav className = 'site-navigation'>
            <span className="menu-title">My React Blog</span>
            <div className={`menu-content-container ${menuActive && 'active'}`}> 
                <ul>
                    {
                        navLinks.map((link , index) =>
                        (
                        <li key= {index}>
                            <Link to ={link.path}>{link.title}</Link>
                        </li>  
                        )
                        )
                    }
                    
                </ul>
                <span className ={` menu-avatar-container`} onClick = {otdee}>         
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size = {38}/>
                    <span className = "menu-avatar-name">
                       { `${user.firstName} ${user.lastName}`}
                    </span>
                </span>
                
            </div>         
            <i className="ionicons icon ion-ios-menu" onClick ={() =>
             setMenuActive(!menuActive)} />
        </nav>
        
    )

}