import React, {Component} from "react";
import AlgorithmsBar from "./algorithmsBar";
import NavigationBar from "./navigationBar";

export default class Algorithms extends Component {
    state = {
        Algorithms: [
            {Algorithm: "RedBlack"},
            {Algorithm: "ShortestPath"},
            {Algorithm: "BFS"},
            {Algorithm: "DFS"},
            //TODO remove these tests for the search bar
            {Algorithm: "PlAcEhOLdEr3"},
            {Algorithm: "placeholder4"},
            {Algorithm: "PLACEHOLDER5"}
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
