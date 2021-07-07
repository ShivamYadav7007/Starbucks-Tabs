import React from "react";
import blackCoffee from "./Images/blackCoffee.webp";
import coffeeMug from "./Images/coffeeMug.webp";
import food from "./Images/food.webp";
import packetRice from "./Images/packetRice.webp";
import pinkJuice from "./Images/pinkJuice.webp";
import TabList from "./Components/LandingPage/TabList";
import Tabs from "./Components/LandingPage/Tabs";

interface Props {}

const App: React.FC<Props> = (props) => {
  return (
    <div>
      <TabList>
        <Tabs title="50" src={coffeeMug} />
        <Tabs title="150" src={blackCoffee} />
        <Tabs title="200" src={pinkJuice} />
        <Tabs title="400" src={food} />
        <Tabs title="600" src={packetRice} />
      </TabList>
    </div>
  );
};

App.defaultProps = {};

export default React.memo(App);
