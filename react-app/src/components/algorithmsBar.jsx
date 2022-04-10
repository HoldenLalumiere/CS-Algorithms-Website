import React, {Component} from "react";
import Algorithm from "./algorithm";

export default class AlgorithmsBar extends Component{
    state = {
        Algorithms: [ //TODO maybe remove id
            {id: 1, Algorithm: "RedBlack"}  ,
            {id:2, Algorithm: "ShortestPath"}
        ],
    };

    render() {
        return (
            <React.Fragment>
                {this.state.Algorithms.map(algorithm =>
                    <Algorithm algName={algorithm.Algorithm}/>)}
            </React.Fragment>
        );
    }

}
