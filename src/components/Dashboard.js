import React from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import * as d3 from 'd3';
import NumberCard from './NumberCard.js'
import LineChart from './LineChart.js';
import ChartGroup from './ChartGroup.js';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data : []
        }
    }

    componentWillMount() {
        var all_data = []

        d3.csv('https://raw.githubusercontent.com/dssg-pt/covid19pt-data/master/data.csv', row => { 
            all_data.push(row)
            this.setState({data: all_data});
        })
    }

    render() {
        var last_index = this.state.data.length - 1
        var confirmados, suspeitos, obitos, recuperados, novos_confirmados
        var chart_data, news, last_update, last_update_data

        if(last_index == -1) {
            confirmados = 0 
            novos_confirmados = 0
            suspeitos = 0
            obitos = 0
            recuperados = 0
            last_update = {}
            last_update_data = undefined
            chart_data = []
            news = []
        }
        else {
            confirmados = this.state.data[last_index]['confirmados']
            novos_confirmados = this.state.data[last_index]['confirmados_novos']
            suspeitos = this.state.data[last_index]['suspeitos']
            obitos = this.state.data[last_index]['obitos']
            recuperados = this.state.data[last_index]['recuperados']
            last_update = this.state.data[last_index]
            last_update_data = this.state.data[last_index]['data']
            chart_data = this.state.data
            news = this.state.news
        }

            return  (
            <div className="Dashboard"> 
                <Grid container spacing={4}>
                    <Grid item xs="12">
                        <b>Last updated:</b> {last_update_data}
                    </Grid>
                    <Grid item xs="6" md="3">
                    <NumberCard className="confirmed" number={confirmados} title="Confirmed" novos={novos_confirmados}/>
                    </Grid>
                    <Grid item xs="6" md="3">
                    <NumberCard className="suspected" number={suspeitos} title="Suspected"/>
                    </Grid>
                    <Grid item xs="6" md="3">
                    <NumberCard className="recovered" number={recuperados} title="Recovered"/>
                    </Grid>
                    <Grid item xs="6" md="3">
                    <NumberCard className="death" number={obitos} title="Deaths"/>
                    </Grid>
                    <Grid item xs="12" md="6">
                        <LineChart data={chart_data}/>
                    </Grid>
                    <Grid item xs="12" md="6">
                        <ChartGroup data={last_update}/>
                    </Grid>
                    
                </Grid>

            </div>
            )
    }
}

export default Dashboard