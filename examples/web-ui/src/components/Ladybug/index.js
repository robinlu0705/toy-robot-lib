import React from 'react';
import './index.css';
import PropTypes from 'prop-types';

export default class Ladybug extends React.Component {
  render() {
    const { width, height, rotation, shiftX, shiftY } = this.props;

    return (
      <div className="Ladybug" style={{ width, height, left: shiftX, top: shiftY, transform: `rotateZ(${rotation}deg)` }}>
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={`${width}px`} height={`${height}px`} viewBox="0 0 200 200" enableBackground="new 0 0 200 200">
          <g><path fill="#1E0F03" d="M58.9,87.7c5.8,8.6,19.3,11.9,28.8,13.4c15,2.4,30.7-0.5,42-11.2c2-1.9-1-5-3.1-3.1c-10.2,9.7-24.2,12-37.7,10.1c-8.1-1.1-21.2-4.1-26.2-11.4C61.1,83.2,57.3,85.4,58.9,87.7L58.9,87.7z"/></g>
          <g><path fill="#1E0F03" d="M62.7,144.6c4.8-7.2,17.2-9.8,25-11.2c13.8-2.5,28.6,0.1,38.9,9.9c2,1.9,5.1-1.1,3.1-3.1c-11-10.4-26.1-13.5-40.8-11.4c-9.8,1.4-24,4.7-30,13.6C57.3,144.7,61.1,146.9,62.7,144.6L62.7,144.6z"/></g>
          <g><path fill="#1E0F03" d="M49.7,110.9c11.7,4.6,25.6,5.7,38,6.3c18,0.9,37.2-0.9,53.2-9.7c2.5-1.4,0.3-5.1-2.2-3.8c-15.4,8.5-33.7,9.8-51,9.1c-12.1-0.5-25.5-1.6-36.9-6.1C48.2,105.7,47.1,109.9,49.7,110.9L49.7,110.9z"/></g>

          <path opacity="0.5" fill="#754C24" d="M95.8,82.5c-0.2,1.6-0.7,5.6-1.3,11c-0.5-5.4-1.1-9.5-1.3-11c0,0-32.1,24.7-32.4,37.5s26.2,45.4,32.4,28.2c0.5-1.4,0.9-3,1.3-4.7c0.4,1.7,0.8,3.3,1.3,4.7c6.2,17.2,32.7-15.5,32.4-28.2C127.9,107.2,95.8,82.5,95.8,82.5z"/><g><path fill="#031612" d="M109,93.8c0,0,0.5-19.2-8.3-23c-8.8-3.8-19.7-1.5-22.1,8.7C76.2,89.6,78,90.9,78,90.9s15.4,4.5,24.7,4.3C109,93.8,109,93.8,109,93.8z"/><defs><filter id="Adobe_OpacityMaskFilter" filterUnits="userSpaceOnUse" x="82.3" y="68.2" width="26.9" height="26.6"><feColorMatrix  type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"/></filter></defs><mask maskUnits="userSpaceOnUse" x="82.3" y="68.2" width="26.9" height="26.6" id="SVGID_4_"><g filter="url(#Adobe_OpacityMaskFilter)"><radialGradient id="SVGID_1_" cx="-2880.4756" cy="361.5264" r="39.4054" fx="-2873.3943" fy="339.6682" gradientTransform="matrix(0.1665 0.3426 -0.3484 0.1693 702.0382 1008.21)" gradientUnits="userSpaceOnUse"><stop  offset="0.1116" style={{ 'stopColor': '#FFFFFF' }}/><stop  offset="0.7033" style={{ 'stopColor': '#000418' }}/></radialGradient><polygon fill="url(#SVGID_1_)" points="104.3,54.6 123.6,94.2 81.3,114.8 62,75.2"/></g></mask><path opacity="0.3" mask="url(#SVGID_4_)" fill="#FFFFFF" enableBackground="new    " d="M89.3,69.4c6.3-3.1,14.1-0.2,17.3,6.5c3.2,6.7,5.3,22.4-5.6,17.6c-6.3,3.1-14.1,0.2-17.3-6.5C80.5,80.4,83,72.5,89.3,69.4z"/></g><g><path fill="none" stroke="#17211A" strokeWidth="1.4553" strokeMiterlimit="10" d="M97.8,75.2c-2.3-7.8-1.5-23.9,11-25"/><ellipse transform="matrix(0.6001 -0.7999 0.7999 0.6001 3.6804 109.1467)" fill="#17211A" stroke="#17211A" strokeWidth="1.4553" strokeMiterlimit="10" cx="111" cy="50.9" rx="2" ry="2.6"/></g><g><path fill="none" stroke="#17211A" strokeWidth="1.4553" strokeMiterlimit="10" d="M75.1,50.5c13.4,2.2,14.5,20,12.1,28.4"/><ellipse transform="matrix(0.5751 0.8181 -0.8181 0.5751 72.9019 -37.9212)" fill="#17211A" stroke="#17211A" strokeWidth="1.4553" strokeMiterlimit="10" cx="73" cy="51.2" rx="2.3" ry="2.7"/></g><radialGradient id="SVGID_2_" cx="103.8008" cy="111.1855" r="34.2325" gradientTransform="matrix(0.9258 0.2927 -0.301 0.9519 32.1128 -20.9102)" gradientUnits="userSpaceOnUse"><stop  offset="0" style={{ 'stopColor': '#F15A24' }}/><stop  offset="1" style={{ 'stopColor': '#C1272D' }}/></radialGradient><path fill="url(#SVGID_2_)" d="M104.6,84.2c18.2,5.8,28.6,24.4,23.2,41.6c-5.4,17.2-24.6,26.5-42.9,20.7c-18.2-5.8-28.6-24.4-23.2-41.6C67.1,87.7,86.3,78.4,104.6,84.2z"/><ellipse transform="matrix(-0.9411 0.3381 -0.3381 -0.9411 175.9313 194.1811)" fill="#17211A" cx="71.1" cy="112.4" rx="6.8" ry="7.6"/><path fill="#17211A" d="M78.6,97.4c-1.3-3.6,0.4-7.4,3.7-8.6c3.3-1.2,7,0.7,8.3,4.3c1.3,3.6-0.4,7.4-3.7,8.6C83.6,102.9,79.9,100.9,78.6,97.4z"/><circle fill="#17211A" cx="83.2" cy="132.3" r="7.3"/><path fill="#17211A" d="M116.8,120.5c-3.6-1-5.7-5.1-4.6-9.1c1.1-4.1,4.9-6.5,8.6-5.6c3.6,1,5.7,5.1,4.6,9.1C124.2,119,120.4,121.5,116.8,120.5z"/><path fill="#17211A" d="M102,101.9c-3.4-0.9-5.3-4.6-4.3-8.3c1-3.7,4.5-5.9,7.9-5c3.4,0.9,5.3,4.6,4.3,8.3C109,100.6,105.4,102.8,102,101.9z"/><circle fill="#17211A" cx="106.8" cy="132" r="7.3"/><path fill="#4F2A0C" d="M94.4,82.5c-1,5.1-1.3,40.8-0.5,65.7c0,0,2.4,0,1.4,0c0,0,0.9-25.5,0.6-38.7C95.5,96.2,94.4,82.5,94.4,82.5z"/>
        </svg>
      </div>
    );
  }
}

Ladybug.defaultProps = {
  width: 80,
  height: 80,
  rotation: 0,
  shiftX: 0,
  shiftY: 0,
};

Ladybug.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  rotation: PropTypes.number,
  shiftX: PropTypes.number,
  shiftY: PropTypes.number,
}
