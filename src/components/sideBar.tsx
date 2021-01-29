import React from "react";
import "../App.css";

import { Link } from "react-router-dom";

class sideBar extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      showComponentList: false,
    };
  }

  public showComponentList = () => {
    console.log("onclick is being fired");
    this.state.showComponentList
      ? this.setState({ showComponentList: false })
      : this.setState({ showComponentList: true });
  };

  render() {
    return (
      <nav
        id="sidebarMenu"
        className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
      >
        <div className="position-sticky pt-3">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link active">
                <span data-feather="home"></span>
                <Link to="/">Home</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <span data-feather="file"></span>
                <Link to="/dummy">D3js Scatter Plot</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <span data-feather="file"></span>
                <Link to="/usmap">D3 US Map</Link>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default sideBar;
