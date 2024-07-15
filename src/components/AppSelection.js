import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faImage } from "@fortawesome/free-solid-svg-icons";

const AppSelection = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [alertMessage, setAlertMessage] = useState('');

  const handleCheckboxClick = (labelText, isChecked) => {
    let updatedItems = [...selectedItems];
    if (isChecked) {
      updatedItems.push(labelText);
      showAlert(`Successfully added ${updatedItems.join(', ')}`);
    } else {
      updatedItems = updatedItems.filter(item => item !== labelText);
    }
    setSelectedItems(updatedItems);
  };

  const showAlert = (message) => {
    setAlertMessage(message);
    setTimeout(() => {
      setAlertMessage('');
    }, 4000); 
  };

  return (
    <div className="scrollable container smaller-boxes">
    {alertMessage && (
      <div id="alertBox" className="alert-box">
        <p id="alertMessage">{alertMessage}</p>
      </div>
    )}
      <AppBox
        className="imagegen new"
        id="largeCheckbox1"
        label="DALL-E 3"
        description="Image Generation"
        icon={faImage}
        isNew
        onCheckboxClick={handleCheckboxClick}
      />
      <AppBox
        className="imagegen"
        label="DALL-E 2"
        description="Image Generation"
        icon={faImage}
        onCheckboxClick={handleCheckboxClick}
      />
      <AppBox
        className="textgen"
        label="Document Intelligence"
        description="Text Generation"
        icon={faFile}
        onCheckboxClick={handleCheckboxClick}
      />
      <AppBox
        className="textgen"
        label="Document Structuring"
        description="Text Generation"
        icon={faFile}
        onCheckboxClick={handleCheckboxClick}
      />
      <AppBox
        className="imagegen new"
        id="largeCheckbox2"
        label="DALL-E 3"
        description="Image Generation"
        icon={faImage}
        isNew
        onCheckboxClick={handleCheckboxClick}
      />
      <AppBox
        className="imagegen"
        label="DALL-E 2"
        description="Image Generation"
        icon={faImage}
        onCheckboxClick={handleCheckboxClick}
      />
      <AppBox
        className="textgen"
        label="Document Intelligence"
        description="Text Generation"
        icon={faFile}
        onCheckboxClick={handleCheckboxClick}
      />
      <AppBox
        className="textgen"
        label="Document Structuring"
        description="Text Generation"
        icon={faFile}
        onCheckboxClick={handleCheckboxClick}
      />
    </div>
  );
};

const AppBox = ({ className, id, label, description, icon, isNew, onCheckboxClick }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    const checked = event.target.checked;
    setIsChecked(checked);
    onCheckboxClick(label, checked);
  };

  return (
    <div className={`box ${className}`}>
      <label className="checkbox-container">
        <input
          type="checkbox"
          className="largeCheckbox"
          id={id}
          checked={isChecked}
          onChange={handleChange}
        />
        <span className="checkmark"></span>
      </label>
      {isNew && <div className="new-sticker">NEW</div>}
      <FontAwesomeIcon icon={icon} className="main-icon" />
      <h2>{label}</h2>
      <p>{description}</p>
    </div>
  );
};


export default AppSelection;
