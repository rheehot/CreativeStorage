import React, { Component } from "react";
import DownloadFilePage from "src/pages/DownloadFilePage";
import HeaderComponent from "src/components/HeaderComponent";

export default class App extends Component {
  public render() {
    return (
      <div>
        <HeaderComponent />
        <DownloadFilePage />
      </div>
    );
  }
}