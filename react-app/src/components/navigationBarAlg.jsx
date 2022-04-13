import React, {Component} from "react";

export default class NavigationBarAlg extends Component {
    state = {
        algName: this.props.algName,
    }

    render() {
        return (
            <React.Fragment>
                <a href={this.state.algName}>{this.state.algName}</a>
            </React.Fragment>
        );
    }
}
