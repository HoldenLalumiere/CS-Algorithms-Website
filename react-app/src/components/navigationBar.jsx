import React, {Component} from "react";

export default class NavigationBar extends Component{
    render() {
        return (
            <div>
                <a href="home">Home</a>
                <a href="news">News</a>
            </div>
        );
    }
}