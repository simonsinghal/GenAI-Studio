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
  useEffect(() => {
    const resizeHandle = document.querySelector(".resize-handle");
    const leftColumn = document.querySelector(".left-column");
    const middleColumn = document.querySelector(".middle-column");
    let isResizing = false;
    let initialX = 0;
    let initialLeftWidth = 0;
    let initialMiddleWidth = 0;

    const handleMouseDown = (e) => {
      isResizing = true;
      initialX = e.clientX;
      initialLeftWidth = leftColumn.offsetWidth;
      initialMiddleWidth = middleColumn.offsetWidth;
      document.body.style.cursor = "col-resize";
      e.preventDefault();
    };

    const handleMouseMove = (e) => {
      if (isResizing) {
        const deltaX = e.clientX - initialX;
        leftColumn.style.width = `${initialLeftWidth + deltaX}px`;
        middleColumn.style.width = `${initialMiddleWidth - deltaX}px`;
      }
    };

    const handleMouseUp = () => {
      if (isResizing) {
        isResizing = false;
        document.body.style.cursor = "default";
      }
    };

    resizeHandle.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      resizeHandle.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const [itemsWithPrices, setItemsWithPrices] = useState([]);

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
      <LogoUpload />
      <ThemeUploader />
      <RightColumn itemsWithPrices={itemsWithPrices} />
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
const RightColumn = ({ itemsWithPrices }) => (
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
        <div className="link">
          <button className="btn" type="submit">
            Publish
          </button>
        </div>
      </div>
    </section>
    <section className="selected-items">
      <h3>Selected Items</h3>
      <div className="table-container">
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
          </tbody>
        </table>
      </div>
    </section>
  </div>
);

export default App;
