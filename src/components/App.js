import React, { Component } from 'react'


class App extends Component {

  constructor() {
    super();
    this.state = {
      albums: [],
      updateAlbum: {}
    }
  }

  //  componentDidMount  function to fetch all the List from the ApI
  componentDidMount = async () => {
    const albums = await fetch('https://jsonplaceholder.typicode.com/albums')
      .then((response) => response.json())
      .then((json) =>{
        console.log(json)
        return json;
      }
     );
    this.setState({
      albums
    })
  }

  
 render(){ return (

 )
}
}

export default App;
