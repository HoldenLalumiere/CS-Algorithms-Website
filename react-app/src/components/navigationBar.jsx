import React, {Component} from "react";
import navigationBar from "./navigationBar.css"
import NavigationBarAlg from "./navigationBarAlg";

export default class NavigationBar extends Component{

    handleDropdown() {
        document.getElementById("dropdown").classList.toggle("dropdownContent");
        document.getElementById("dropdown").classList.toggle("show");
        //TODO remove this log
        console.log(document.getElementById("dropdown").classList)
    }

    render() {
        return (
            <React.Fragment>
                <div className="navBar">
                    <a href="home">Home</a>
                    <div className="searchBar">
                        <input onBlur={() => this.handleDropdown()} onFocus={() => this.handleDropdown()} className="search" type="text" placeholder="Search..."/>
                        <button type="submit">Submit</button>
                        <div className="dropdownContent" id="dropdown">
                            {this.props.algs.map(algorithm =>
                                <NavigationBarAlg algName={algorithm.Algorithm}/>)}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }



}
