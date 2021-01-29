import React from "react";
import { scaleLinear } from "d3-scale";
import { extent } from "d3-array";
import * as d3 from "d3";
import AxisLeft from "../components/axisLeft";
import AxisBottom from "../components/axisBottom";
import "../App.css";

class dummyScreen extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount = () => {
    console.log("hello state");
    this.createData();
  };

  createData = async () => {
    const data = await [...Array(100)].map((v, i) => {
      return {
        x: Math.random() * 40,
        y: Math.random() * 50,
        temperature: Math.random() * 500,
      };
    });
    this.setState({ data: data });
  };

  w = 600;
  h = 600;
  margin = {
    top: 40,
    bottom: 40,
    left: 40,
    right: 40,
  };
  width = this.w - this.margin.right - this.margin.left;
  height = this.h - this.margin.top - this.margin.bottom;

  xScale = scaleLinear().domain([0, 50]).range([0, this.width]);

  yScale = scaleLinear().domain([0, 50]).range([this.height, 0]);

  circles = () => {
    return this.state.data.map((d: any, i: any) => {
      return (
        <circle
          key={i}
          r={5}
          cx={this.xScale(d.x)}
          cy={this.yScale(d.y)}
          style={{ fill: "black" }}
        />
      );
    });
  };

  render() {
    return (
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-auto chartDrawing">
              <h1>React + D3 + React Spring</h1>
              <svg width={this.w} height={this.h}>
                <g
                  transform={`translate(${this.margin.left},${this.margin.top})`}
                >
                  <AxisLeft yScale={this.yScale} width={this.width} />
                  <AxisBottom xScale={this.xScale} height={this.height} />
                  {this.circles()}
                </g>
              </svg>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default dummyScreen;
