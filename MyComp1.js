import React, { Component } from 'react';
import { UtilCls } from "./UtilCls";

export class MyComp1 extends React.Component {
    render() {
        return (

            <div className="alert alert-info">
                {
                    UtilCls.MyRoot(this.props.a)
                }
            </div>
        );
    }
}

export default MyComp1;