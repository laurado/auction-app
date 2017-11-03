import React, { Component } from 'react';
import './App.css';
import ItemTile from './components/ItemTile'
import Navbar from './components/Navbar'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auctionName: '',
      houseName: '',
      items: []
    }
  }

  componentDidMount() {
    fetch('https://api.myjson.com/bins/11vq9n')
    .then(response => {
      return response.json()
    })
    .then(body => {
      const { auctionName, houseName, items } = body
      this.setState({
        auctionName,
        houseName,
        items
      })
    })
  }

  render() {
    const { auctionName, houseName, items } = this.state

    const itemArray = items.map(item => {
      return(
        <ItemTile
          key={item.id}
          imageUrl={item.imageUrl}
          title={item.title}
          description={item.description}
          price={item.price}
        />
      )
    })

    return (
      <div>
        <Navbar />
        <div className='banner-container'>
          <div className='banner'>
            <div className='auction-house'><h1>{auctionName}</h1></div>
            <div className='auction-name'><h3>{houseName}</h3></div>
          </div>
        </div>
        <div className='item-grid-container'>
          <div className='item-grid'>
            {itemArray}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
