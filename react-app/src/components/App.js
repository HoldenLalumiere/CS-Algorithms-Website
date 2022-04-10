import React, {Component} from "react";
import NavigationBar from "./navigationBar";
import AlgorithmsBar from "./algorithmsBar";

export default class App extends Component{
    render() {
        return (
            <React.Fragment>
                <NavigationBar/>
                <AlgorithmsBar/>
            </React.Fragment>
        );
    }
}
