import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { MyComp1 } from './MyComp1';
import { MyComp2 } from './MyComp2';
import { MyComp3 } from './MyComp3';
import { SIGFPE } from 'constants';



var arrn = new Array();


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            num: 0,
            data: []
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({ num: parseInt(e.target.value) });
    }


    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/todos').then((a) => a.json()).then(b => {
            this.setState({ data: b })
        });
    }




    render() {
        return (
            <div>
                <table className="table table-striped">
                    <tr><td>Enter Number</td><td><input type="text" name="t11" onChange={this.onChange} /></td></tr>
                    <tr><td>Square Root</td><td><MyComp1 a={this.state.num} /></td></tr>
                    <tr><td>Square</td><td><MyComp2 b={this.state.num} /></td></tr>
                    <tr><td>Cube</td><td><MyComp3 c={this.state.num} /></td></tr>
                </table>
                <br />
                <br />
                <br />
                <AComp />

                <br />
                <br />
                <hr />
                <br />
                <br />
                {/* { 
                    this.state.data.map(b=>console.log(b.completed))
                }  */}
                <table>
                    {
                        this.state.data.map(b => <MyRow key={b.id} a={b} />)
                    }
                </table>
            </div>
        );
    }
}


class MyRow extends React.Component {
    render() {
        return (
            <tr>
                
                <td>{this.props.a.id}</td>
                <td>{this.props.a.title}</td>
                <td>{this.props.a.userId}</td>
                <td>{String(this.props.a.completed)}</td>
                 
            
            
            </tr>
        );
    }
}



class AComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            val: ''
        }
        this.setHimanshu = this.setHimanshu.bind(this);
    }

    setHimanshu(e) {
        this.setState({ val: e.target.value });
    }

    render() {
        return (
            <div>
                <input type="text" value="" onChange={this.setHimanshu} />
                <span>{this.state.val}</span>
                <br /><br />
                <BComp t={this.state.val} t2={this.setHimanshu} />
                <br />
                <CComp test={this.state.val} />
            </div>
        );
    }
}

class BComp extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                The value coming from Parent is {this.props.t}
                <br />
                <br />
                <input type="text" onChange={this.props.t2} />
            </div>
        );
    }
}


const CComp = () => {

    return (
        <div>This is a component</div>
    )
}




export default App;