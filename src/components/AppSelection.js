import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faImage } from "@fortawesome/free-solid-svg-icons";

const AppSelection = ({ handleAddToTable }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxClick = (app) => {
    const itemExists = selectedItems.find((selectedItem) => selectedItem.label === app.label);

    if (!itemExists) {
      handleAddToTable(app); // Add item to table
      setSelectedItems([...selectedItems, app]);
    } else {
      setSelectedItems(selectedItems.filter((item) => item.label !== app.label));
    }
  };

  return (
    <div className="scrollable container smaller-boxes">
      {selectedItems.length > 0 && (
        <div id="selectedItems">
          <h3>Selected Items:</h3>
          <ul>
            {selectedItems.map((item, index) => (
              <li key={index}>{item.label}</li>
            ))}
          </ul>
        </div>
      )}
      {appData.map((app, index) => (
        <AppBox
          key={index}
          app={app}
          selectedItems={selectedItems}
          handleCheckboxClick={handleCheckboxClick}
        />
      ))}
    </div>
  );
};

const AppBox = ({ app, selectedItems, handleCheckboxClick }) => {
  const isChecked = selectedItems.some((item) => item.label === app.label);

  const handleChange = () => {
    handleCheckboxClick(app);
  };

  return (
    <div className={`box ${app.className}`}>
      <label className="checkbox-container">
        <input
          type="checkbox"
          className="largeCheckbox"
          checked={isChecked}
          onChange={handleChange}
        />
        <span className="checkmark"></span>
      </label>
      {app.isNew && <div className="new-sticker">NEW</div>}
      <FontAwesomeIcon icon={app.icon} className="main-icon" />
      <h2>{app.label}</h2>
      <p>{app.description}</p>
      <p className="price">${app.price}</p>
    </div>
  );
};

const appData = [
  { className: "imagegen new", id: "largeCheckbox1", label: "DALL-E 3", description: "Image Generation", icon: faImage, isNew: true, price: 100 },
  { className: "imagegen", label: "DALL-E 2", description: "Image Generation", icon: faImage, price: 80 },
  { className: "textgen", label: "Document Intelligence", description: "Text Generation", icon: faFile, price: 120 },
  { className: "textgen", label: "Document Structuring", description: "Text Generation", icon: faFile, price: 110 },
  { className: "imagegen new", id: "largeCheckbox2", label: "DALL-E 3", description: "Image Generation", icon: faImage, isNew: true, price: 100 },
  { className: "imagegen", label: "DALL-E 2", description: "Image Generation", icon: faImage, price: 80 },
  { className: "textgen", label: "Document Intelligence", description: "Text Generation", icon: faFile, price: 120 },
  { className: "textgen", label: "Document Structuring", description: "Text Generation", icon: faFile, price: 110 }
];

export default AppSelection;
