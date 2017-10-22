import React from 'react';
import './index.css';
import { Table as TableCore, Robot as LadybugCore } from '../../lib';
import Table from '../Table';
import Ladybug from '../Ladybug';

function getRotation(facing) {
  switch (facing) {
    case 'NORTH': {
      return 0;
    }

    case 'EAST': {
      return 90;
    }

    case 'SOUTH': {
      return 180;
    }

    case 'WEST': {
      return 270;
    }

    default: {
      return 0;
    }
  }
};

function getGoodSize(origSize) {
  if (origSize <= 414) {
    return origSize - 40;
  } else {
    return 400;
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.table = new TableCore()
    this.ladybug = new LadybugCore();
    this.state = {
      width: 0,
      height: 0,
      ladybugState: this.ladybug.state,
    };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.onTableClick = this.onTableClick.bind(this);
    this.onMoveBtnClick = this.onMoveBtnClick.bind(this);
    this.onLeftBtnClick = this.onLeftBtnClick.bind(this);
    this.onRightBtnClick = this.onRightBtnClick.bind(this);
  }

  render() {
    const tableSize = 5;
    const boardSize = getGoodSize(Math.min(this.state.width, this.state.height));
    const cellWidth = boardSize / tableSize;
    const cellHeight = boardSize / tableSize;

    return (
      <div className="App">
        <div className="App-wrap">
          <header>
            <h2 className="App-title">
              <span style={{ textDecoration: 'line-through', color: '#ababab' }}>Toy Robot</span>
              <span style={{ position: 'absolute', top: '-1em', left: '0.5em' }}>Ladybug</span>
              <span> Simulator</span>
            </h2>
          </header>
          <p className="App-hint">Click to place the ladybug on the board</p>
          <div className="App-board">
            <Table size={tableSize} cellWidth={cellWidth} cellHeight={cellHeight} onClick={this.onTableClick} />
            {
              this.state.ladybugState.x !== null && this.state.ladybugState.y !== null
                ? <Ladybug
                  width={cellWidth}
                  height={cellHeight}
                  shiftX={this.state.ladybugState.x * cellWidth}
                  shiftY={(tableSize - this.state.ladybugState.y - 1) * cellHeight}
                  rotation={getRotation(this.state.ladybugState.f)}
                />
                : null
            }
          </div>
          <div className="App-tools">
            <button className="App-btn" onClick={this.onLeftBtnClick}>LEFT</button>
            <button className="App-btn" onClick={this.onMoveBtnClick}>MOVE</button>
            <button className="App-btn" onClick={this.onRightBtnClick}>RIGHT</button>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  onTableClick(col, row) {
    const facing = this.ladybug.state.f || 'NORTH';
    this.ladybug.place({ x: col, y: row, f: facing, table: this.table });
    this.setState({
      ladybugState: this.ladybug.state,
    });
  }

  onMoveBtnClick() {
    this.ladybug.move();
    this.setState({
      ladybugState: this.ladybug.state,
    });
  }

  onLeftBtnClick() {
    this.ladybug.left();
    this.setState({
      ladybugState: this.ladybug.state,
    });
  }

  onRightBtnClick() {
    this.ladybug.right();
    this.setState({
      ladybugState: this.ladybug.state,
    });
  }
}
