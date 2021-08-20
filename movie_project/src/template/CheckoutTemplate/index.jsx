import { Fragment } from "react"
import { Redirect, Route } from "react-router-dom"
import Checkout from "../../pages/Checkout"


import { USER_LOGIN } from "../../util/Setting/config"



const CheckoutTemplate = (props) =>{
    // props là path, exact, Component
    const {Component, ...restRoute} = props
    if(!localStorage.getItem(USER_LOGIN)){
        return <Redirect to="/signin"/>
    }

    return <Route{...restRoute} render={(propsRoute)=>{
        //trả về props.location, props.history, props.match
        return <Fragment>
        <Component {...propsRoute}/>
        </Fragment>
    }}/>
}

export default CheckoutTemplate