import React, { useEffect, useRef, useState } from 'react'

const Nav=()=> {
    const [searchBarVisible,setSearchBarVisible] = useState(false)
    const [scrolled , setScrolled] = useState(false)
    
    const navRef = useRef()
    
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

    return (
        <div className={`nav ${scrolled ? 'scrolled' :''}`}>
                <div className={`d-flex justify-between align-center ${searchBarVisible &&'d-none'}`}>
                    <div></div>
                    <div className="nav-item">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Account</a>
                        </li>
                    </div>
                    <div className={`search`}>
                        <i onClick={()=>setSearchBarVisible(true)} className="material-icons-outlined">search</i>
                    </div>
                </div>
                    <div className={`${!searchBarVisible ?'d-none':'search-bar'}`}>
                        <input type="search" placeholder="Search..."/>
                        <span class="material-icons-outlined" onClick={()=>setSearchBarVisible(false)}>close</span>
                    </div>
        </div>
    )
}

export default Nav
