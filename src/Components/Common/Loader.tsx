import React, { Fragment } from 'react';

const Loader = () => {
  return (
    <Fragment>
      <div className="preloader">
        <div className="preloader-block">
          <div className="preloader-icon">
            <span className="loading-dot loading-dot-1"/>
            <span className="loading-dot loading-dot-2"/>
            <span className="loading-dot loading-dot-3"/>
          </div>
        </div>
       </div>
      <div id="overlay-effect"/>
    </Fragment>
  )
};
export default Loader;
