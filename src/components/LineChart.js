/*import React from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import * as d3 from 'd3';

var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

class LineChart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
        this.drawChart()
    }

    drawChart(){
        const svg = d3.select('.g')
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
              "translate(" + margin.left + "," + margin.top + ")");

        var x = d3.scaleTime()
              .domain(d3.extent(this.props.data, function(d) { console.log(d.data);return d.data; }))
              .range([ 0, width ]);
        
        svg.append("g")
              .attr("transform", "translate(0," + height + ")")
              .call(d3.axisBottom(x))

        var y = d3.scaleLinear()
              .domain([0, d3.max(this.props.data, function(d) { return d.confirmados; })])
              .range([ height, 0 ]);
        
            svg.append("g")
              .call(d3.axisLeft(y));

              svg.append("path")
              .datum(this.props.data)
              .attr("fill", "none")
              .attr("stroke", "white")
              .attr("stroke-width", 1.5)
              .attr("d", d3.line()
                .x(function(d) { return x(d.data) })
                .y(function(d) { return y(d.confirmados) })
                )
    }

    render() {


            return  (
                    <Paper > 
                        <div className="g" />
                    </Paper>
            )
    }
}

export default LineChart
*/

import React from 'react';
import CanvasJSReact from '../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class LineChart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataPoints: []
        }
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
                text: "Confirmed cases"
            },
            axisY : {
                title: "Number of Confirmed cases",
                includeZero: false
            },
            toolTip: {
                shared: true
            },
            data: [
            {
                type: "spline",
                name: "Confirmed cases",
                showInLegend: true,
                dataPoints: confirmedPoints
            },
            {
                type: "spline",
                name: "Suspected cases",
                showInLegend: true,
                dataPoints: suspectsPoints
            }]
    }
    
    return (
    <div>
        <CanvasJSChart options = {options} 
            /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    </div>
    );
	}
}

export default LineChart;                           