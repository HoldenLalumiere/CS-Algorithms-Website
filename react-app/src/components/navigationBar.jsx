import React, {Component} from "react";
import navigationBar from "./navigationBar.css"

export default class NavigationBar extends Component{
    dropdown() {
        document.getElementById("dropdown").classList.toggle("show");
    }

    render() {
        return (
            <div class="navBar">
                <a href="home">Home</a>
                <div className="searchBar">
                    <button onClick="dropdown()">placeholder</button>
                    <div className="dropdownContent" id="dropdown">
                        <a>Alg1</a>
                        <a>Alg2</a>
                        <a>Alg3</a>
                    </div>


                    <input className="search" type="text" placeholder="Search..."/>
                    <button type="submit">Submit</button>
                </div>
            </div>
        );
    }



}
