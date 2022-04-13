import React, {Component} from "react";
import navigationBar from "./navigationBar.css"

export default class NavigationBar extends Component{

    handleDropdown() {
        document.getElementById("dropdown").classList.toggle("dropdownContent");
        document.getElementById("dropdown").classList.toggle("show");
        console.log(document.getElementById("dropdown").classList)
    }

    render() {
        return (
            <React.Fragment>
                <div className="navBar">
                    <a href="home">Home</a>
                    <div className="searchBar">
                        <button onClick={() => this.handleDropdown()}>placeholder</button>

                        <input className="search" type="text" placeholder="Search..."/>
                        <button type="submit">Submit</button>
                        <div className="dropdownContent" id="dropdown">
                            <a>Alg1</a>
                            <a>Alg2</a>
                            <a>Alg3</a>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }



}
