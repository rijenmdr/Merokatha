import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom'
import * as actions from '../../../../redux/actions'

const Nav = () => {
    const [searchBarVisible, setSearchBarVisible] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    const authenticationReducer = useSelector(state => state.AuthenticationReducer)
    const { isLoggedIn } = authenticationReducer

    const history = useHistory()

    const navRef = useRef()
    const inputRef = useRef()

    const dispatch = useDispatch()

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

    const searchClickHandler = () => {
        setSearchBarVisible(true)
    }

    const logoutHandler = () => {
        dispatch(actions.userLogout())
    }

    useEffect(() => {
        if (searchBarVisible) {
            inputRef.current.focus()
        }
    }, [searchBarVisible])

    return (
        <div className={`nav ${searchBarVisible && 'd-flex align-center'} ${scrolled ? 'scrolled' : ''}`}>
            <div className={`d-flex justify-between align-center full-height`}>
                <div className="logo" onClick={()=>history.push('/')}>Merokatha</div>
                {!searchBarVisible &&
                    <div className={`nav-item`}>
                        <li><NavLink className="item" to="/" activeClassName="active" exact>Home</NavLink></li>
                        <li><NavLink className="item" to="/about" activeClassName="active">About</NavLink></li>
                        <li><NavLink className="item" to="/contact" activeClassName="active">Contact</NavLink></li>
                        <li className="dropdown"><a className="item" activeClassName="active">Account</a>
                            <div className="dropdown-content">
                                {!isLoggedIn ?
                                    <>
                                        <NavLink className="sub-item" to="/login" activeClassName="">Login</NavLink>
                                        <NavLink className="sub-item" to="/signup" activeClassName="">Sign up</NavLink>
                                    </> :
                                    <>
                                        <p onClick={logoutHandler} className="sub-item">Logout</p>
                                    </>
                                }
                            </div>
                        </li>
                        <i onClick={searchClickHandler} className="material-icons-outlined">search</i>
                        <i className="material-icons-outlined menu d-none">
                            menu
                        </i>
                    </div>
                }
            </div>
            {searchBarVisible &&
                <div className={`search-bar`}>
                    <input ref={inputRef} type="text" placeholder="Search..." />
                    <span className="material-icons-outlined" onClick={() => setSearchBarVisible(false)}>close</span>
                </div>
            }
        </div>
    )
}

export default Nav
