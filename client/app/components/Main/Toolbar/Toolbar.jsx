import React, { Component } from "react";
import "./Toolbar.css";

class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { generateArray } = this.props;
    generateArray(87);
  }

  handleClick(algorithm) {
    const { updateAlgorithm } = this.props;

    updateAlgorithm(algorithm);
  }

  render() {
    const {
      array,
      algorithm,
      generateArray,
      sort,
      isRunning,
      time
    } = this.props;

    const speed = 970 - Math.pow(array.length, 2) > 0 ?
      970 - Math.pow(array.length, 2) : 0;

    const color = isRunning ? "rgba(214, 29, 29, 0.8)" : "white";

    const cursor = isRunning ? "auto" : "pointer";

    return (
      <div id="toolbar">
        <div
          id={!isRunning ? "generateArray" : "generateArrayX"}
          style={{color: color, cursor: cursor}}
          onClick={!isRunning ? () => generateArray(array.length) : null}>
          Generate New Array
        </div>
        <div className="separator"></div>
        <div
          className={algorithm === "mergeSort" ? "currentToolbarItem" : "toolbarItem"}
          onClick={() => this.handleClick("mergeSort")}>
          Merge Sort
        </div>
        <div
          className={algorithm === "quickSort" ? "currentToolbarItem" : "toolbarItem"}
          onClick={() => this.handleClick("quickSort")}>
          Quick Sort
        </div>
        <div
          className={algorithm === "heapSort" ? "currenttoolbarItem" : "toolbarItem"}
          onClick={() => this.handleClick("heapSort")}>
          Heap Sort
        </div>
        <div
          className={algorithm === "bubbleSort" ? "currentToolbarItem" : "toolbarItem"}
          onClick={() => this.handleClick("bubbleSort")}>
          Bubble Sort
        </div>
        <div className="separator"></div>
        { algorithm ? 
          <div
            id="sort"
            className="toolbarItem"
            style={{color: color, cursor: cursor}}
            onClick={!isRunning ? () => sort(algorithm, array, speed) : null}>
            Sort!
          </div> : null
        }        
        { algorithm ? <div className="separator"></div>: null }
        { algorithm ? <div id="time" className="toolbarItem" style={{color: color}}>time: {time} </div> : null }        
      </div>
    )
  }
}

export default Toolbar;
