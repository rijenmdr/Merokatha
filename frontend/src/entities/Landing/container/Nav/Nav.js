import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Nav=()=> {
    const [searchBarVisible,setSearchBarVisible] = useState(false)
    const [scrolled , setScrolled] = useState(false)
    
    const navRef = useRef()
    const inputRef = useRef()
    
    navRef.current = scrolled

    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 10;
            if (show) {
                setScrolled(true)
            } else {
                setScrolled(false);
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const searchClickHandler = () =>{
        setSearchBarVisible(true)
    }

    useEffect(() => {
       if(searchBarVisible){
        inputRef.current.focus()
       }
    }, [searchBarVisible])

    return (
        <div className={`nav ${scrolled ? 'scrolled' :''}`}>
            <div className={`d-flex justify-between align-center ${searchBarVisible &&'d-none'}`}>
                <div></div>
                <div className="nav-item">
                    <li><NavLink className="item" to="/">Home</NavLink></li>
                    <li><NavLink className="item" to="/about">About</NavLink></li>
                    <li><NavLink className="item" to="/contact">Contact</NavLink></li>
                    <li className="dropdown"><a className="item">Account</a>
                        <div class="dropdown-content">
                            <NavLink className="sub-item" to="/login">Login</NavLink>
                            <NavLink className="sub-item" to="/signup">Sign up</NavLink>
                        </div>
                    </li>
                </div>
                <div className={`search`}>
                    <i onClick={searchClickHandler} className="material-icons-outlined">search</i>
                </div>
            </div>
            <div className={`${!searchBarVisible ?'d-none':'search-bar'}`}>
                <input ref={inputRef} type="text" placeholder="Search..."/>
                <span class="material-icons-outlined" onClick={()=>setSearchBarVisible(false)}>close</span>
            </div>
        </div>
    )
}

export default Nav
