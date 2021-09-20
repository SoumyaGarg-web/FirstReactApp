import React, { Component } from 'react';

class Counter extends React.Component {
   //State is an object that includes any data that this component needs.

    styles = {
        fontSize: 10,
        fontWeight : "bold"
    };

    render() { 

        const {counter,onIncrement,onDelete} = this.props; // object destructuring
       
        return (
            <div>
                 {/* {this.props.children} */}
                <span style = {this.styles} className ={this.getBadgeClasses()}>{this.formatCount()}</span>
                {/* Not calling the method handleImcrement() , simply passing reference to that. */}
                <button onClick = { () => {onIncrement(counter)}}
                        className = "btn btn-secondary btn-sm">
                        Increment
                </button> 
                <button onClick = {()=> {onDelete(counter.id)}}
                    className = "btn btn-danger btn-sm m-2">
                    Delete
                </button>
               
            </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    //Function
    formatCount(){
        const {value} = this.props.counter ;
        return value === 0? "Zero" : value;
    }
}
 
export default Counter;