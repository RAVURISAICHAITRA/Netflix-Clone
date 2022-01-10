import React from 'react';
import './App.css';
import Row from './Row'
import requests from './requests'
import Banner from './Banner.js'
import Nav from './Nav'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="Top Rated" fetchUrl={requests.fetchTrending}/>
      <Row title="Action movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentries" fetchUrl={requests.fetchDocumentries}/>
    </div>
  );
}

export default App;
