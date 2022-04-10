import React, {Component} from "react";
import Algorithm from "./algorithm";

export default class AlgorithmsBar extends Component{
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
                <a>Algorithms:</a>
                <br/>
                {this.state.Algorithms.map(algorithm =>
                    <Algorithm algName={algorithm.Algorithm}/>)}
            </React.Fragment>
        );
    }

}
