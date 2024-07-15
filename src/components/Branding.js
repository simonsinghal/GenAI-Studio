import React from 'react';
import LayoutSelector from './LayoutSelector';
import eyLogo from './ey.png';

const Branding = () => {
  return (
    <div className="containerx">
      <section style={{ marginTop: '90px' }}>
        <h5>Apply your branding:</h5>
        <div className="colortheme-selector">
          <div className="box" id="logobox">
            <img src={eyLogo} width="36" style={{ float: 'left' }} alt="EY Logo" />
            <label htmlFor="logoInput">
              <i className="fa-upload fa-solid"></i>
              <span>Upload your Logo</span>
            </label>
            <input type="file" id="logoInput" style={{ display: 'none' }} />
          </div>
          <div className="box" id="colorThemeBox">
            <span className="selected-color"></span>
            <i className="fa-upload fa-solid"></i>
            <span>Upload your Color Theme</span>
            <input type="file" id="colorThemeInput" style={{ display: 'none' }} />
          </div>
        </div>
      </section>
      <LayoutSelector />
    </div>
  );
};

export default Branding;
