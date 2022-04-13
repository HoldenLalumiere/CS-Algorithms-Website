import React, {Component} from "react";
import algorithmBarAlgorithm from "./algorithmBarAlgorithm.css"

export default class AlgorithmBarAlgorithm extends Component {
    state = {
        algName: this.props.algName,
    }

    renderSpecial() {
        if (window.location.href === window.location.origin + "/" + this.state.algName) {
            return (
                <React.Fragment>
                    <a>&emsp; Here</a>
                    <br/>
                </React.Fragment>
            )
        }
    }

    handleMovePage() {
        window.location.href = window.location.origin + "/" + this.state.algName;
    }

    render() {
        return (
            <React.Fragment>
                <button onClick={() => this.handleMovePage()} class="algButton">{this.state.algName}</button>
                <br/>
                {this.renderSpecial()}
            </React.Fragment>
        );
    }
};
