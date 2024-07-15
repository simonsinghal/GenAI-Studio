import React, { useState } from "react";

const LayoutSelector = () => {
  const [svgContent, setSvgContent] = useState("");
  const [hyperlink, setHyperlink] = useState("#");
  const [selectedLayout, setSelectedLayout] = useState("");

  const changeAppImage = (layoutId) => {
    const imageUrlMap = {
      layout1: "zHjGH9w/layout1",
      layout2: "m2H4vQ3/layout2",
      layout3: "zHjGH9w/layout3",
    };

    document.getElementById(
      "appImage"
    ).src = `https://i.ibb.co/${imageUrlMap[layoutId]}.jpg`;

    let svgImage = "";
    let hyperlink = "";

    switch (layoutId) {
      case "layout1":
        svgImage =
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 56" fill="none" aria-label="layout1" class="h-[92px] w-full"> <path fill="currentColor" fill-rule="evenodd" d="M58 1H8a7 7 0 0 0-7 7v40a7 7 0 0 0 7 7h50a7 7 0 0 0 7-7V8a7 7 0 0 0-7-7ZM8 0a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8h50a8 8 0 0 0 8-8V8a8 8 0 0 0-8-8H8Z" clip-rule="evenodd" opacity="0.1"></path><path fill="currentColor" d="M5 9a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z"></path><path fill="currentColor" d="M32 9a5 5 0 0 1 5-5h20a5 5 0 0 1 5 5v38a5 5 0 0 1-5 5H37a5 5 0 0 1-5-5V9Zm-5-8h1v54h-1V1Z" opacity="0.1"></path><path fill="currentColor" d="M5 17.5A1.5 1.5 0 0 1 6.5 16h14a1.5 1.5 0 0 1 0 3h-14A1.5 1.5 0 0 1 5 17.5Z" opacity="0.7"></path><path fill="currentColor" d="M5 23.5A1.5 1.5 0 0 1 6.5 22h11a1.5 1.5 0 0 1 0 3h-11A1.5 1.5 0 0 1 5 23.5Z" opacity="0.4"></path></svg>';
        hyperlink = "https://www.google.co.in/";
        break;
      case "layout2":
        svgImage =
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 56" fill="none" aria-label="layout2" class="h-[92px] w-full"><path fill="currentColor" fill-rule="evenodd" d="M59 1H7a6 6 0 0 0-6 6v42a6 6 0 0 0 6 6h52a6 6 0 0 0 6-6V7a6 6 0 0 0-6-6ZM7 0a7 7 0 0 0-7 7v42a7 7 0 0 0 7 7h52a7 7 0 0 0 7-7V7a7 7 0 0 0-7-7H7Z" clip-rule="evenodd" opacity="0.1"></path><path fill="currentColor" d="M28 9a5 5 0 0 1 5-5h24a5 5 0 0 1 5 5v38a5 5 0 0 1-5 5H33a5 5 0 0 1-5-5V9ZM4 9a5 5 0 0 1 5-5h9a5 5 0 0 1 5 5v38a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V9Z" opacity="0.1"></path><path fill="currentColor" d="M7 10a3 3 0 1 1 6 0 3 3 0 1 1-6 0Z"></path><path fill="currentColor" d="M7 17.5A1.5 1.5 0 0 1 8.5 16h10a1.5 1.5 0 0 1 0 3h-10A1.5 1.5 0 0 1 7 17.5Z" opacity="0.7"></path><path fill="currentColor" d="M7 23.5A1.5 1.5 0 0 1 8.5 22h8a1.5 1.5 0 0 1 0 3h-8A1.5 1.5 0 0 1 7 23.5Z" opacity="0.4"></path></svg>';
        hyperlink = "https://example.com/layout1";
        break;
      case "layout3":
        svgImage =
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 56" fill="none" aria-label="layout3" class="h-[92px] w-full"><path fill="currentColor" fill-rule="evenodd" d="M58 1H8a7 7 0 0 0-7 7v40a7 7 0 0 0 7 7h50a7 7 0 0 0 7-7V8a7 7 0 0 0-7-7ZM8 0a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8h50a8 8 0 0 0 8-8V8a8 8 0 0 0-8-8H8Z" clip-rule="evenodd" opacity="0.1"></path><path fill="currentColor" d="M5 9a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z"></path><path fill="currentColor" d="M4 25a5 5 0 0 1 5-5h48a5 5 0 0 1 5 5v22a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V25Zm-3-8v-1h64v1H1Z" opacity="0.1"></path><path fill="currentColor" d="M16 9.5A1.5 1.5 0 0 1 17.5 8h14a1.5 1.5 0 0 1 0 3h-14A1.5 1.5 0 0 1 16 9.5Z" opacity="0.7"></path><path fill="currentColor" d="M37 9.5A1.5 1.5 0 0 1 38.5 8h11a1.5 1.5 0 0 1 0 3h-11A1.5 1.5 0 0 1 37 9.5Z" opacity="0.4"></path></svg>';
        hyperlink = "https://example.com/layout1";
        break;
      default:
        svgImage = "";
        hyperlink = "#";
    }

    setSvgContent(svgImage);
    setHyperlink(hyperlink);
    setSelectedLayout(layoutId);
  };

  return (
    <section style={{ marginTop: "100px" }}>
      <h5>Select Layout:</h5>
      <div id="layout-selector" className="container smaller-boxes">
        <div
          className={`boxcustom box ${selectedLayout === "layout1" ? "selected" : ""}`}
          onClick={() => changeAppImage("layout1")}
          id="layout1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 66 56"
            fill="none"
            aria-label="layout1"
            className="h-[92px] w-full"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M58 1H8a7 7 0 0 0-7 7v40a7 7 0 0 0 7 7h50a7 7 0 0 0 7-7V8a7 7 0 0 0-7-7ZM8 0a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8h50a8 8 0 0 0 8-8V8a8 8 0 0 0-8-8H8Z"
              clipRule="evenodd"
              opacity="0.1"
            ></path>
            <path
              fill="currentColor"
              d="M5 9a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z"
            ></path>
            <path
              fill="currentColor"
              d="M32 9a5 5 0 0 1 5-5h20a5 5 0 0 1 5 5v38a5 5 0 0 1-5 5H37a5 5 0 0 1-5-5V9Zm-5-8h1v54h-1V1Z"
              opacity="0.1"
            ></path>
            <path
              fill="currentColor"
              d="M5 17.5A1.5 1.5 0 0 1 6.5 16h14a1.5 1.5 0 0 1 0 3h-14A1.5 1.5 0 0 1 5 17.5Z"
              opacity="0.7"
            ></path>
            <path
              fill="currentColor"
              d="M5 23.5A1.5 1.5 0 0 1 6.5 22h11a1.5 1.5 0 0 1 0 3h-11A1.5 1.5 0 0 1 5 23.5Z"
              opacity="0.4"
            ></path>
          </svg>
        </div>
        <div
          className={`boxcustom box ${selectedLayout === "layout2" ? "selected" : ""}`}
          onClick={() => changeAppImage("layout2")}
          id="layout2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 66 56"
            fill="none"
            aria-label="layout2"
            className="h-[92px] w-full"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M59 1H7a6 6 0 0 0-6 6v42a6 6 0 0 0 6 6h52a6 6 0 0 0 6-6V7a6 6 0 0 0-6-6ZM7 0a7 7 0 0 0-7 7v42a7 7 0 0 0 7 7h52a7 7 0 0 0 7-7V7a7 7 0 0 0-7-7H7Z"
              clipRule="evenodd"
              opacity="0.1"
            ></path>
            <path
              fill="currentColor"
              d="M28 9a5 5 0 0 1 5-5h24a5 5 0 0 1 5 5v38a5 5 0 0 1-5 5H33a5 5 0 0 1-5-5V9ZM4 9a5 5 0 0 1 5-5h9a5 5 0 0 1 5 5v38a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V9Z"
              opacity="0.1"
            ></path>
            <path
              fill="currentColor"
              d="M7 10a3 3 0 1 1 6 0 3 3 0 1 1-6 0Z"
            ></path>
            <path
              fill="currentColor"
              d="M7 17.5A1.5 1.5 0 0 1 8.5 16h10a1.5 1.5 0 0 1 0 3h-10A1.5 1.5 0 0 1 7 17.5Z"
              opacity="0.7"
            ></path>
            <path
              fill="currentColor"
              d="M7 23.5A1.5 1.5 0 0 1 8.5 22h8a1.5 1.5 0 0 1 0 3h-8A1.5 1.5 0 0 1 7 23.5Z"
              opacity="0.4"
            ></path>
          </svg>
        </div>
        <div
          className={`boxcustom box ${selectedLayout === "layout3" ? "selected" : ""}`}
          onClick={() => changeAppImage("layout3")}
          id="layout3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 66 56"
            fill="none"
            aria-label="layout3"
            className="h-[92px] w-full"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M58 1H8a7 7 0 0 0-7 7v40a7 7 0 0 0 7 7h50a7 7 0 0 0 7-7V8a7 7 0 0 0-7-7ZM8 0a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8h50a8 8 0 0 0 8-8V8a8 8 0 0 0-8-8H8Z"
              clipRule="evenodd"
              opacity="0.1"
            ></path>
            <path
              fill="currentColor"
              d="M5 9a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z"
            ></path>
            <path
              fill="currentColor"
              d="M4 25a5 5 0 0 1 5-5h48a5 5 0 0 1 5 5v22a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V25Zm-3-8v-1h64v1H1Z"
              opacity="0.1"
            ></path>
            <path
              fill="currentColor"
              d="M16 9.5A1.5 1.5 0 0 1 17.5 8h14a1.5 1.5 0 0 1 0 3h-14A1.5 1.5 0 0 1 16 9.5Z"
              opacity="0.7"
            ></path>
            <path
              fill="currentColor"
              d="M37 9.5A1.5 1.5 0 0 1 38.5 8h11a1.5 1.5 0 0 1 0 3h-11A1.5 1.5 0 0 1 37 9.5Z"
              opacity="0.4"
            ></path>
          </svg>
        </div>
      </div>
      <div id="appContainer">
        <a href={hyperlink} target="_blank" rel="noopener noreferrer" dangerouslySetInnerHTML={{ __html: svgContent }} />
      </div>
    </section>
  );
};

export default LayoutSelector;
