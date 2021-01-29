import React from "react";
import axios from "axios";
import "../App.css";

class usMap extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      statesData: [],
    };
  }

  componentDidMount = () => {
    this.setStateData();
  };

  setStateData = async () => {
    let resData = await axios.get(
      "https://willhaley.com/assets/united-states-map-react/states.json"
    );
    const statesData = resData.data;
    this.setState({ statesData: statesData })
  };

  render() {
    return (
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-auto chartDrawing">
              <h1>US Map</h1>
              <svg width="960" height="800">
                {this.state.statesData.map((stateData: any, index: any) => (
                  <path
                    className="someCSSClass"
                    style={{ cursor: "pointer", fill: "orange" }}
                    key={index}
                    stroke="#fff"
                    strokeWidth="6px"
                    d={stateData.shape}
                    onMouseOver={(event) => {
                      (event.target as HTMLInputElement).style.fill = "red";
                      console.log(event);
                    }}
                    onMouseOut={(event) => {
                      (event.target as HTMLInputElement).style.fill = "orange";
                    }}
                  ></path>
                ))}
              </svg>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default usMap;
