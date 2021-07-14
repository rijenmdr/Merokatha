import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./Toast.scss"
import * as actions from '../../redux/actions'

const Toast=(props)=> {
    const dispatch = useDispatch()

    const utilReducer = useSelector(state=>state.utilReducer)
    const {visible,title,message} = utilReducer

    useEffect(() => {
        const timer = setTimeout(()=>{
            dispatch(actions.setToastState(false,"",""))
        },3000)
        return () => clearTimeout(timer)
    }, [visible])
    
    return (
        <div className={`toast d-flex align-center
            ${visible?'on':'off'} ${title?.toLowerCase()}`}>
            {title =="Success" ?
                <i className="material-icons-outlined type-icon success">
                    check
                </i>:
                <i className="material-icons-outlined type-icon error">
                    priority_high
                </i>
            }
            <div className="toast-info d-flex flex-column">
                <div className="toast-type">{title}</div>
                <div className="toast-message">{message}</div>
            </div>
        </div>
    )
}

export default Toast
