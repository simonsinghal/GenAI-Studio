import React, { useState, useEffect } from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AppSelection from "./components/AppSelection";
import AdminSection from "./components/AdminSection";
import Branding from "./components/Branding";
import EYLogo from "./ey.png";
import ThemeUploader from "./components/themeUploader";
import LogoUpload from "./components/logoUpload";

function App() {
  const [itemsWithPrices, setItemsWithPrices] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    // Calculate total cost whenever itemsWithPrices changes
    const calculatedTotalCost = itemsWithPrices.reduce(
      (total, item) => total + item.price,
      0
    );
    setTotalCost(calculatedTotalCost);
  }, [itemsWithPrices]);

  // Function to handle adding selected items to the table
  const handleAddToTable = (item) => {
    const newItem = {
      label: item.label,
      price: item.price,
    };

    setItemsWithPrices((prevItems) => [...prevItems, newItem]);
  };

  return (
    <div className="grid-container">
      <LeftColumn />
      <div className="resize-handle"></div>
      <MiddleColumn />
      <RightColumn itemsWithPrices={itemsWithPrices} totalCost={totalCost} />
    </div>
  );

  function LeftColumn() {
    return (
      <div className="left-column column">
        <div className="image">
          <img src={EYLogo} className="image" alt="EY Logo" />
        </div>
        <h2 className="heading">
          <i className="fa-solid fa-right-to-bracket"></i>Branding
        </h2>
        <Branding />
      </div>
    );
  }

  function MiddleColumn() {
    return (
      <div className="middle-column column">
        <div className="top-row">
          <h2>Apps</h2>
          <p>Add apps of your choice from our GenAI store:</p>
          <div className="search-bar">
            <input type="search" placeholder="Search..." />
          </div>
          {/* Pass handleAddToTable function to AppSelection */}
          <AppSelection handleAddToTable={handleAddToTable} />
        </div>
        <AdminSection />
      </div>
    );
  }
}

const RightColumn = ({ itemsWithPrices, totalCost }) => (
  <div className="right-column column">
    <h2>End application</h2>
    <section>
      <div className="browser">
        <div className="browser-toolbar">
          <button className="nav-button">&lt;</button>
          <input
            type="text"
            className="address-bar"
            value="genaistudio.com"
            readOnly
          />
          <div className="traffic-lights">
            <div className="traffic-light red"></div>
            <div className="traffic-light yellow"></div>
            <div className="traffic-light green"></div>
          </div>
        </div>
        <div className="browser-viewport" id="appContainer">
          <img
            id="appImage"
            src="https://i.ibb.co/jWdDpkh/genaistudio.jpg"
            style={{ width: "80%", height: "100px", marginTop: "5px" }}
            alt="App Preview"
          />
        </div>
      </div>
    </section>
    <section>
      <div className="link">
        <button className="btn" type="submit">
          Publish
        </button>
      </div>
    </section>
    <section className="selected-items">
      <div className="table-container">
        <h3>Selected Items</h3>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {itemsWithPrices.map((item, index) => (
              <tr key={index}>
                <td>{item.label}</td>
                <td>${item.price}</td>
              </tr>
            ))}
            <tr>
              <td>
                <strong>Total Cost</strong>
              </td>
              <td>
                <strong>${totalCost}</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
);

export default App;
