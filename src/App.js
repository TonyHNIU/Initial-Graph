import React, { useState, useEffect } from "react";
import G6 from "@antv/g6";
import Index from "./components/index";
import insertCss from "insert-css";
import Navbar from "./components/Navbar/index";
import { BrowserRouter as Router } from "react-router-dom";

insertCss(`
  .g6-component-tooltip {
    background-color: rgba(255, 255, 255, 0.8);
    padding: 0px 10px 24px 10px;
    box-shadow: rgb(174, 174, 174) 0px 0px 10px;
  }
`);

const App = () => {
  // const [graph, setGraph] = useState(undefined);

  // const data = {
  //   id: "root",
  //   children: [
  //     {
  //       id: "subTree1",
  //     },
  //     {
  //       id: "subTree2",
  //     },
  //   ],
  // };

  //Keep working here!
  // G6.registerBehavior("modal", {
  //   getEvents() {
  //     return {
  //       "node:mousemove": "onMousemove",
  //     };
  //   },
  //   onMousemove(evt) {
  //     console.log("hello");
  //   },
  // });

  // const bindEvents = () => {
  //   graph.on("modelRect: mousemove", (evt) => {
  //     debugger;
  //     console.log("hello");
  //     setShowIndex(true);
  //   });
  // };

  const tooltip = new G6.Tooltip({
    offsetX: 10,
    offsetY: 10,
    itemTypes: ["node", "edge"],
    getContent: (e) => {
      const outDiv = document.createElement("div");
      outDiv.style.width = "fit-content";
      outDiv.innerHTML = `
          <h4>Information</h4>
          <ul>
            <li>Type: ${e.item.getType()}</li>
          </ul>
          <ul>
            <li>
              Label: ${e.item.getModel().label || e.item.getModel().id}
            </li>
          </ul>`;
      return outDiv;
    },
  });

  useEffect(() => {
    fetch(`https://run.mocky.io/v3/423e5954-0d6c-4e89-a3d1-3bf1adfa3f83`)
      .then((res) => res.json())
      // .then((res) => console.log(res.json()))
      .then((data) => {
        const treegraph = new G6.TreeGraph({
          container: "mountNode",
          fitViewPadding: 20,
          height: window.innerHeight,
          width: window.innerWidth,
          plugins: [tooltip],
          // nodeStyle: {
          //   default: {
          //     fill: "#40a9ff",
          //     stroke: "#096dd9",
          //   },
          //   selected: {
          //     fill: "#EAEAEA",
          //     stroke: "",
          //   },
          // },
          defaultNode: {
            type: "modelRect",
            // 节点文本样式
            labelCfg: {
              style: {
                fill: "#000000A6",
                fontSize: 10,
              },
            },
            label: "label",
          },
          edgeStyle: {
            default: { stroke: "#A3B1BF" },
          },
          modes: {
            default: [
              "zoom-canvas",
              "drag-canvas",
              "drag-node",
              { type: "collapse-expand", trigger: "dblclick" },
            ],
          },
          layout: {
            type: "indented",
            direction: "LR", // H / V / LR / RL / TB / BT
            dropCap: false,
            indent: 300,
            radial: false,
          },
        });
        treegraph.data(data);
        treegraph.render();
        // setGraph(devicegraph);
        // bindEvents();
      });
  }, []);

  return (
    <div>
      <Router>
        <Navbar />
      </Router>
      <Index />
      <div id="mountNode" />
    </div>
  );
};

export default App;
