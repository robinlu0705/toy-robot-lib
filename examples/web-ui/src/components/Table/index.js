import React from 'react';
import './index.css';
import PropTypes from 'prop-types';

export default class Table extends React.Component {
  render() {
    const { size, cellWidth, cellHeight, onClick } = this.props;

    return (
      <div className="Table" style={{ width: cellWidth * size, height: cellHeight * size }}>
        {
          Array.from(Array(size).keys()).reverse().map((row) => {
            return (
              <div key={row} style={{ height: cellHeight }}>
                {
                  Array.from(Array(size).keys()).map((col) => {
                    return <div
                      key={col}
                      className="Table-cell"
                      style={{ width: cellWidth, height: cellHeight }}
                      onClick={() => {
                        if (typeof onClick === 'function') {
                          onClick(col, row);
                        }
                      }}
                    ></div>;
                  })
                }
              </div>
            );
          })
        }
      </div>
    );
  }
}

Table.defaultProps = {
  cellWidth: 80,
  cellHeight: 80,
  size: 5,
};

Table.propTypes = {
  cellWidth: PropTypes.number,
  cellHeight: PropTypes.number,
  size: PropTypes.number,
};
