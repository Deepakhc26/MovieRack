import React, { Component } from 'react';
import MoviesTable from './components/Table/moviesTable';
import Search from './components/Search/search';
import { Layout } from 'antd';
import { Offline, Online } from "react-detect-offline";


class App extends Component {
  render() {
    const style = {
      color: "gray",
      marginTop: "1em",
      fontFamily: "Monospace, sans-serif" 
    };
    return (
      <div>
        <Layout>
        <Offline>You're offline right now! Check your internet connection...</Offline>
        <Online><h1 style={style}><center>MoviesRack</center></h1>
        <Search />
        <MoviesTable />
        </Online>
        </Layout>
      </div>
    );
  }
}


export default App;