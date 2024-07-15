import React from 'react';

const LogoUpload = () => {
  const handleLogoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Logo file selected:", file.name);
    }
  };

  return (
    <input
      type="file"
      id="logoInput"
      style={{ display: 'none' }}
      onChange={handleLogoChange}
    />
  );
};

export default LogoUpload;






