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


  //addAlbumToList function is used to Add The Album in the Album List
  
  addAlbumToList = (userId, title) => {
    fetch('https://jsonplaceholder.typicode.com/albums', {
      method: 'POST',
      body: JSON.stringify({
        userId: userId,
        id: this.state.count,
        title: title,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json()).then((json) => json);
    const length = this.state.albums.length;
    const lastId = this.state.albums[length - 1].id;
    const album = {
      userId: userId,
      id: lastId + 1,
      title: title,
    }
    this.setState({
      albums: [...this.state.albums, album]
    })
    toast.success("New Album added successfully in the bottom!!")
    // alert("New Album added successfully in the bottom");
  }
  

  //This function  is used to take album id from albums list and then delete 
  // the album from albums list and update state....
  deleteAlbumFromList = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, { method: 'DELETE', })
    const newAlbums = this.state.albums.filter((album) => album.id !== id);
    alert("Your Album Deleted successfully");
    this.setState({
      albums: newAlbums,
    })
  }
  

  
 render(){ return (

 )
}
}

export default App;
