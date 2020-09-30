import React from 'react'
import './../css/Login.css'
import { Button } from '@material-ui/core'
import {auth, provider} from '../firebase'
import { useStateValue } from '../StateProvider'
import {actionTypes} from '../reducer'

function Login() {

    // eslint-disable-next-line
    const [{}, dispatch] = useStateValue()

    const signIn = () =>{
        auth.signInWithPopup(provider)
        .then(result=>{
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user
            })
        }).catch(error=>alert(error.message))
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img
                    src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png"
                    alt=""
                />
                <img
                    src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
                    alt=""
                />
            </div>
            <Button type="submit" onClick={signIn}>
                Ingresar
            </Button>
        </div>
    )
}

export default Login
