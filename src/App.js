import React from 'react'
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Data from "./Data";

function App() {
  const cards = Data.map((item) => {
    return(
      <Cards 
          key={item.id}
          item={item}
      
      />
    )
  })



      return (
    <div className="App">
      <Navbar />
      <section className="cards-list">{cards}</section>
    </div>
  );
}

export default App;
