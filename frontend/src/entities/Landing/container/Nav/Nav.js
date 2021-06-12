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
        <div className={`nav ${scrolled ? 'scrolled' :''}`}>
            <div className={`d-flex justify-between align-center full-height ${searchBarVisible &&'d-none'}`}>
                <div></div>
                <div className="nav-item">
                    <li><NavLink className="item" to="/" activeClassName="active" exact>Home</NavLink></li>
                    <li><NavLink className="item" to="/about" activeClassName="active">About</NavLink></li>
                    <li><NavLink className="item" to="/contact" activeClassName="active">Contact</NavLink></li>
                    <li className="dropdown"><a className="item" activeClassName="active">Account</a>
                        <div class="dropdown-content">
                            <NavLink className="sub-item" to="/login" activeClassName={false}>Login</NavLink>
                            <NavLink className="sub-item" to="/signup" activeClassName={false}>Sign up</NavLink>
                        </div>
                    </li>
                </div>
                <div className="nav-icon">
                    <li><NavLink className="item" to="/" activeClassName="active" exact><span class="material-icons-outlined">home</span></NavLink></li>
                    <li><NavLink className="item" to="/about" activeClassName="active"><span class="material-icons-outlined">menu_book</span></NavLink></li>
                    <li><NavLink className="item" to="/contact" activeClassName="active"><span class="material-icons-outlined">contact_page</span></NavLink></li>
                    <li className="dropdown"><a className="item" activeClassName="active"><span class="material-icons-outlined">account_circle</span></a>
                        <div class="dropdown-content">
                            <NavLink className="sub-item" to="/login" activeClassName={false}>Login</NavLink>
                            <NavLink className="sub-item" to="/signup" activeClassName={false}>Sign up</NavLink>
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
