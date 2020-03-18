import React from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

class NumberCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        var crescimento = this.props.number / (this.props.number - this.props.novos);

            return  (
                    <Paper className="paper"> 
                        <span className="paper-title">
                        {this.props.title}
                        </span>
                        <span className="paper-number"> 
                        {this.props.number} 
                        {this.props.novos && <span className="novos">{"+" + this.props.novos + "(" + crescimento.toFixed(2) + "%)"}</span>}

                        </span>
                    </Paper>
            )
    }
}

export default NumberCard