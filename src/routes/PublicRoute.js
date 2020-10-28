import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

//...rest contains everything that we didn't explicitly destructure
export const PublicRoute = ({user, component: Component, ...rest})=> (
    <Route {...rest} component={(props)=> (
        !user ? (<div><Component {...props}/></div>) : (<Redirect to="/projects" />)
        )}/>
);


const mapStateToProps = (state)=>({
    user: state.user   
})

export default connect(mapStateToProps)(PublicRoute);