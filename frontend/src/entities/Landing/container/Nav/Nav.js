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
            const show = window.scrollY > 100;
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
        <div className={`nav ${searchBarVisible && 'd-flex align-center'} ${scrolled ? 'scrolled' :''}`}>
            { !searchBarVisible ? 
            <div className={`d-flex justify-between align-center full-height`}>
                <div className="logo">Merokatha</div>
                <div className="nav-item">
                    <li><NavLink className="item" to="/" activeClassName="active" exact>Home</NavLink></li>
                    <li><NavLink className="item" to="/about" activeClassName="active">About</NavLink></li>
                    <li><NavLink className="item" to="/contact" activeClassName="active">Contact</NavLink></li>
                    <li className="dropdown"><a className="item" activeClassName="active">Account</a>
                        <div className="dropdown-content">
                            <NavLink className="sub-item" to="/login" activeClassName="">Login</NavLink>
                            <NavLink className="sub-item" to="/signup" activeClassName="">Sign up</NavLink>
                        </div>
                    </li>
                    <i onClick={searchClickHandler} className="material-icons-outlined">search</i>
                </div>
            </div> :
            <div className={`search-bar`}>
                <input ref={inputRef} type="text" placeholder="Search..."/>
                <span className="material-icons-outlined" onClick={()=>setSearchBarVisible(false)}>close</span>
            </div>
            }
        </div>
    )
}

export default Nav
