import { Fragment } from "react"
import { Route } from "react-router-dom"
import Footer from "./Layout/Footer"
import Header from './Layout/Header'



export const HomeTemplate = (props) =>{
    // props là path, exact, Component
    const {Component, ...restRoute} = props
    

    return <Route{...restRoute} render={(propsRoute)=>{
        //trả về props.location, props.history, props.match
        return <Fragment>
        <Header {...propsRoute}/>
        <Component {...propsRoute}/>
        <Footer/>
        </Fragment>
    }}/>
}