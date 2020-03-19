import React from 'react';
import Paper from '@material-ui/core/Paper';
import CanvasJSReact from '../assets/canvasjs.react';
import Button from '@material-ui/core/Button';
import BarChart from './BarChart.js'
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

 
class LineChart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0
        }
        this._onclick.bind(this)
    }

    _onclick(index){
        this.setState({index: index})
    }


	render() {

    var chart = [
        <BarChart data={this.props.data} />
    ]

    return (
    <div>
        <Paper>
            <Button onClick={() => this._onclick(0)}>Common Symptoms</Button>
            <Button onClick={() => this._onclick(1)} >Confirmed by Gender</Button>
            <Button onClick={() => this._onclick(2)}>Confirmed by Age</Button>
            {chart[this.state.index]}
        </Paper>
    </div>
    );
	}
}

export default LineChart;                           