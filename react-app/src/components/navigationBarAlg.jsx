import React, {Component} from "react";
import navigationBarAlg from "./navigationBarAlg.css"

export default class NavigationBarAlg extends Component {
    state = {
        algName: this.props.algName,
    }

    render() {
        return (
            <React.Fragment>
                <a className="navAlg" href={this.state.algName}>{this.state.algName}</a>
            </React.Fragment>
        );
    }
}
