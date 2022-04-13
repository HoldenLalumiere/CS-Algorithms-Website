import React, {Component} from "react";
import algorithmBarAlgorithm from "./algorithmBarAlgorithm.css"

export default class AlgorithmBarAlgorithm extends Component {
    state = {
        algName: this.props.algName,
    }

    renderSpecial() {
        if (window.location.href === "http://localhost:3000/" + this.state.algName + "?"){
            return <a>&emsp; Here</a>;
        }
    }

    render() {
        return (
            <React.Fragment>
                <form action={this.state.algName}>
                    <button class="algButton">{this.state.algName}</button>
                    <br/>
                </form>
                {this.renderSpecial()}
            </React.Fragment>
        );
    }
};
