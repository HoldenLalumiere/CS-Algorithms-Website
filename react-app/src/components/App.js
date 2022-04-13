import React, {Component} from "react";
import NavigationBar from "./navigationBar";
import AlgorithmsBar from "./algorithmsBar";
import Algorithms from "./algorithms";

export default class App extends Component{
    render() {
        return (
            <React.Fragment>
                <Algorithms/>
            </React.Fragment>
        );
    }
}
