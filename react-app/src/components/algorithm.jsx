import React, {Component} from "react";

export default class Algorithm extends Component {
    state = {
        algName: this.props.algName,
    }

    render() {
        return (
            <React.Fragment>
                <button>{this.state.algName}</button>
                <br></br>
            </React.Fragment>
        );
    }
}
