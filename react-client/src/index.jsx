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
    var ID = window.location.href.slice(-3);

    if(!(window.location.href === "http://localhost:3000/listing") ){
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

ReactDOM.render(<App />, document.getElementById('app'));