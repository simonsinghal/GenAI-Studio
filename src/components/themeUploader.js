import React from 'react';

const ThemeUploader = () => {
  const handleColorChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Logo file selected:", file.name);
    }
  };

  return (
    <input
      type="file"
      id="colorThemeInput"
      style={{ display: 'none' }}
      onChange={handleColorChange}
    />
  );
};

export default ThemeUploader;




