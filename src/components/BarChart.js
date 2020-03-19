import React from 'react';
import Paper from '@material-ui/core/Paper';
import CanvasJSReact from '../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class BarChart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            symptomsData: []
        }
    }

    componentDidUpdate(){
    }

    compare(a,b){
        return  a.y - b.y ;
    }

	render() {
        var symptomsData = []
        var colors = ['#4EADDC', '#3DA5D9', '#3896C6', '#3288B2', '#2D799E', '#276A8B']
        symptomsData.push({y: Math.floor(parseFloat(this.props.data['sintomas_tosse']) * parseInt(this.props.data['confirmados'])), label: 'Cough'})
        symptomsData.push({y: Math.floor(parseFloat(this.props.data['sintomas_febre']) * parseInt(this.props.data['confirmados'])), label: 'Fever'})
        symptomsData.push({y: Math.floor(parseFloat(this.props.data['sintomas_dificuldade_respiratoria']) * parseInt(this.props.data['confirmados'])), label: 'Difficulty breathing'})
        symptomsData.push({y: Math.floor(parseFloat(this.props.data['sintomas_cefaleia']) * parseInt(this.props.data['confirmados'])), label: 'Headache'})
        symptomsData.push({y: Math.floor(parseFloat(this.props.data['sintomas_dores_musculares']) * parseInt(this.props.data['confirmados'])), label: 'Muscle aches'})
        symptomsData.push({y: Math.floor(parseFloat(this.props.data['sintomas_fraqueza_generalizada']) * parseInt(this.props.data['confirmados'])), label: 'Tiredness'})
        symptomsData.sort(this.compare)

        for (var i = 0; i < symptomsData.length; i++) {
            symptomsData[i]['color'] = colors[i]
        }
		const options = {
			animationEnabled: true,
            theme: "light2",
            colorSet: "blueShades",
			title:{
			},
			axisX: {
				title: "Symptoms",
			},
			axisY: {
				title: "Number of infected cases"
			},
			data: [{
				type: "bar",
				dataPoints: symptomsData
			}]
		}
		return (
		<div>
            <Paper>
			<CanvasJSChart options = {options}
			/>
            </Paper>
		</div>
		);
	}
}
export default BarChart