import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Listing from './components/Listing.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: {}
    }
  }

  componentDidMount() {   
    const port = process.env.PORT || 4001;
    var ID = window.location.href.slice(-3);
    
    if(!(window.location.href === `http://localhost:${port}/listing`) ){
      axios.get('/description', {
        params: {
          id: ID
        }
      })
      .then(({data}) => {
        console.log("Axios", data)
        this.setState({
            listing: data[0]
        })
      })
    }
  }

  render () {
    return (
      <div>
        <Listing listing={this.state.listing} />
      </div>
    )
  }
}

window.Description = App;