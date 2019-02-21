import React, { Component } from "react";

import Layouts from "./pages/Layouts";
import PriceCard from "./common/PriceCard";
import HeroBlock from "./common/HeroBlock";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layouts>
          <HeroBlock
            title="Pricing"
            text="Quickly build an effective pricing table for your potential customers
        with this Bootstrap example. It's built with default Bootstrap
        components and utilities with little customization."
          />
          <PriceCard />
        </Layouts>
      </div>
    );
  }
}

export default App;
