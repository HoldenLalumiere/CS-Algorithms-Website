import React, {Component} from "react";

export default class AlgorithmsBar extends Component{
    state = {
        Algorithms: [
            {id: 1, Algorithm: "RedBlack"}  ,
            {id:2, Algorithm: "ShortestPath"}
        ],
    };

    styles = {
        fontSize: 50,
        fontWeight: 'bold'
    };

    render() {
        return (
            <React.Fragment>
                {this.state.Algorithms.map(algorithm => <Al>)}
                <button>Increment</button>
            </React.Fragment>
        );
    }
/*
    formatCount(){
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }
    */
}
