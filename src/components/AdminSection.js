import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faUser, faLock } from "@fortawesome/free-solid-svg-icons";

const AdminSection = () => {
  const [isResizing, setIsResizing] = useState(false);
  const [initialX, setInitialX] = useState(0);
  const [initialLeftWidth, setInitialLeftWidth] = useState(0);
  const [initialMiddleWidth, setInitialMiddleWidth] = useState(0);

  const handleMouseDown = (e) => {
    setIsResizing(true);
    setInitialX(e.clientX);
    setInitialLeftWidth(document.querySelector(".left-column").offsetWidth);
    setInitialMiddleWidth(document.querySelector(".middle-column").offsetWidth);
    document.body.style.cursor = "col-resize";
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (isResizing) {
      const deltaX = e.clientX - initialX;
      document.querySelector(".left-column").style.width = `${
        initialLeftWidth + deltaX
      }px`;
      document.querySelector(".middle-column").style.width = `${
        initialMiddleWidth - deltaX
      }px`;
    }
  };

  const handleMouseUp = () => {
    if (isResizing) {
      setIsResizing(false);
      document.body.style.cursor = "default";
    }
  };
  return (
    <div className="bottom-row admin-section">
      <h3>
        <FontAwesomeIcon icon={faLock} /> Administrator Access
      </h3>
      <div className="scrollable container smaller-boxes">
        <AdminBox
          className="imagegen new"
          label="KB"
          description="Add, edit Company data files"
        />
        <AdminBox
          className="imagegen"
          label="Users"
          description="Onboard, remove users"
        />
      </div>
    </div>
  );
};

const AdminBox = ({ className, label, description }) => {
  let icon = null;

  if (className === "imagegen new") {
    icon = <FontAwesomeIcon icon={faFolder} className="main-icon" />;
  } else if (className === "imagegen") {
    icon = <FontAwesomeIcon icon={faUser} className="main-icon" />;
  } else {
    icon = <FontAwesomeIcon icon={faLock} className="main-icon" />;
  }

  return (
    <div className={`box ${className}`}>
      {icon}
      <h2>{label}</h2>
      <p>{description}</p>
    </div>
  );
};

export default AdminSection;
