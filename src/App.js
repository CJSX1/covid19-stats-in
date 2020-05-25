import React, { Component } from 'react'
import { BrowserRouter} from 'react-router-dom';

import { Navbar, Cards, Charts, StateStats, Infographics } from './components'
import { fetchData } from './api';

class App extends Component {

  state = {
    data:{},
  }

  async componentDidMount(){
    const totalData = await fetchData();
    this.setState({ data: totalData });
  }
  
  render() {
    
    const { data } = this.state;



    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />

          <Cards data={ data } />
          <Charts data={ data } />
          <StateStats />
          <Infographics />

        </div>
      </BrowserRouter>
    )
  }
}

export default App

// https://covid-19india-api.herokuapp.com/v2.0/country_data
// https://covid-19india-api.herokuapp.com/v2.0/state_data