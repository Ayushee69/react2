import React, { Component } from 'react';
import { UtilCls } from "./UtilCls";

export class MyComp3 extends React.Component{
    render(){
        return(

            <div className="alert alert-success">
                {
                    UtilCls.MyCub(this.props.c)
                }
            </div>
        );
    }
}

export default MyComp3;