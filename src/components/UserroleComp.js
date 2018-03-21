import React, { Component } from 'react';

class UserroleComp extends Component {
    constructor(props) {
        super(props);
    }
    Submit(e) {
        console.log(this.props);
    }
    Close() {
        console.log('Close Button');
    }
    CloseAndSave() {
        console.log('Close and save button');
    }
    Engineering(){
        console.log('Engineering button');
    }
    Hold(){
        console.log('On Hold button');
    }
    Order(){
        console.log('Cancel Order button');
    }
    Complete(){
        console.log('Complete button');
    }
    render() {

        return ( 
            <div>
            <hr/>
            Current User: < input type = "text" /> < input type = "text" /> Created By UserId: < input type = "text" / > < br / >
            Created By Role: < input type = "text"/>
            <hr/>
            <input type = "text"
            className = "Input"
            style = {
                { 'width': '100%' }
            }/>
            <div className = "buttonDiv" >
            <button className = "btnapp" onClick = { this.Close }> Close</button> 
            <button className = "btnapp"
            onClick = { this.CloseAndSave } > Save and Close </button> <
            button className = "btnapp"  onClick = {
                (e) => { this.Submit(e) }
            } > Submit </button> 
            <button className = "btnapp" onClick = { this.Engineering } > Engineering </button>
            <button className = "btnapp" onClick = { this.Hold } > On Hold </button>
            <button className = "btnapp" onClick = { this.Order } > Cancel Order </button>
            <button className = "btnapp" onClick = { this.Complete } > Complete </button>
            </div>
            <br/>
            Form Name: <input type = "text"
            style = {
                { "width": "20%" }
            }
            />
            </div >
        )
    }
}

export default UserroleComp;
