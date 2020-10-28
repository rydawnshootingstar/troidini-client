import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

//...rest contains everything that we didn't explicitly destructure
export const PrivateRoute = ({user, component: Component, ...rest})=> (
    <Route {...rest} component={(props)=> (
        user ? (<div><Component {...props}/></div>) : (<Redirect to="/" />)
        )}/>
);


const mapStateToProps = (state)=>({
    user: state.user
})

export default connect(mapStateToProps)(PrivateRoute);