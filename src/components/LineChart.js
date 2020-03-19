import React from 'react';
import Paper from '@material-ui/core/Paper';
import CanvasJSReact from '../assets/canvasjs.react';
import Button from '@material-ui/core/Button';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

 
class LineChart extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidUpdate(){
    }

	render() {

        var confirmedPoints = []
        var suspectsPoints = []
        for (let index = 0; index < this.props.data.length; index++) {
            confirmedPoints.push({label: this.props.data[index]["data"], y:Number(this.props.data[index]["confirmados"])})
            suspectsPoints.push({label: this.props.data[index]["data"], y:Number(this.props.data[index]["suspeitos"])})
        }

		const options = {
            animationEnabled: true,	
            theme: "light2",
            title:{
            },
            axisY : {
                title: "Number of Confirmed cases",
                includeZero: false
            },
            toolTip: {
                shared: true,
            },
            data: [
            {
                toolTipContent: "{label} </br> <span style='\"'color: #E98A15;'\"'>Confirmed cases</span> {y}",
                type: "spline",
                lineColor: "#E98A15",
                markerColor: "#E98A15",
                legendeMarkerBorderColor: "#E98A15",
                name: "Confirmed cases",
                showInLegend: true,
                dataPoints: confirmedPoints
            },
            {
                toolTipContent: "<span style='\"'color: #2AB7CA;'\"'>Suspected cases</span> {y}",
                type: "spline",
                name: "Suspected cases",
                lineColor: "#2AB7CA",
                markerColor: "#2AB7CA",
                legendeMarkerBorderColor: "#2AB7CA",
                showInLegend: true,
                dataPoints: suspectsPoints
            }]
    }
    
    return (
    <div>
        <Paper>
            <Button style={{width: "100%" }}>CASE EVOLUTION BY DAY</Button>
            <CanvasJSChart options = {options} />
        </Paper>
    </div>
    );
	}
}

export default LineChart;                           