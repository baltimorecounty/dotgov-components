import React from "react";
import ReactDOM from "react-dom";
import SiteHeader from "./SiteHeader";

describe("Text Input", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<SiteHeader />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
