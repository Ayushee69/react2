import React, { Component } from 'react';
import { UtilCls } from "./UtilCls";


export class MyComp2 extends React.Component{
    render(){
        return(

            <div className="alert alert-danger">
            {
                UtilCls.MyPow(this.props.b)
            }
            </div>
        );
    }
}

export default MyComp2;