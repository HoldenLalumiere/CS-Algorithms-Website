import React, {Component} from "react";
import AlgorithmsBar from "./algorithmsBar";
import NavigationBar from "./navigationBar";

export default class Algorithms extends Component{
    state = {
        Algorithms: [ //TODO maybe remove id
            {id: 1, Algorithm: "RedBlack"}  ,
            {id:2, Algorithm: "ShortestPath"},
            {id: 3, Algorithm: "Hailey"}
        ],
    };

    render() {
        return (
            <React.Fragment>
                <NavigationBar algs={this.state.Algorithms}/>
                <AlgorithmsBar algs={this.state.Algorithms}/>
            </React.Fragment>
        )

    }

}
