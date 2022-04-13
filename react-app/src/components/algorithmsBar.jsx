import React, {Component} from "react";
import AlgorithmBarAlgorithm from "./algorithmBarAlgorithm";

export default class AlgorithmsBar extends Component{
    render() {
        return (
            <React.Fragment>
                <a>Algorithms:</a>
                <br/>
                {this.props.algs.map(algorithm =>
                    <AlgorithmBarAlgorithm algName={algorithm.Algorithm}/>)}
            </React.Fragment>
        );
    }

}
