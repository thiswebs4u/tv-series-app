import React, { Component } from 'react';
import SeriesList from '../../components/SeriesList';
import Loader from '../../components/Loader';

class Series extends Component {
  
  state = {
    series: [],
    seriesName: '',
    isFetching: false

  }
  
  componentDidMount() {

  }

  onSeriesInputChange = e => {
    this.setState({ seriesName: e.target.value, isFetching: true });

    fetch(`https://api.tvmaze.com/search/shows?q=${e.target.value}`)
      .then(response => response.json())
      .then(json => { this.setState({ series: json, isFetching: false }); })
  }

  render() {
    const {series, seriesName, isFetching} = this.state;
    return (
      <div>        
        <div>
          <input 
          value= {seriesName} 
          type="text" 
          onChange={this.onSeriesInputChange} 
          />
        </div>
        {
          !isFetching && series.length === 0 && seriesName.trim() === ''
          &&
          <p>Please enter a series name into the input.</p>
        }
        {
          !isFetching && series.length === 0 && seriesName.trim() !== ''
          &&
          <p>No TV Series has been found with that name!</p>
        }
        {
          isFetching && <Loader />
        }
        {
          !isFetching && <SeriesList list={this.state.series}/>
        }
        
      </div>
    )
  }
}

export default Series;