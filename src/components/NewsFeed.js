import React from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

class NewsFeed extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        console.log(newsList)
        var newsList = this.props.news.slice(1, 10).map((o, key) => {
            return (<div key={key} class="news-content">
                <a href={o.URL}>{o.Titulo}</a>
                <hr/>
            </div>)
        })

            return  (
                    <Paper > 
                        <span className="news-title">
                        {this.props.title}
                        </span>
                        <span className="news-list"> 
                        {newsList}
                        </span>
                    </Paper>
            )
    }
}

export default NewsFeed