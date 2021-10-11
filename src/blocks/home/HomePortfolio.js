import React from "react";

import Gallery from "../gallery/Gallery";

const HomePortfolio = (props) => {
  return (
    <section id="porfolio" className="block spacer p-top-xl">
      <div className="wrapper">
        <Gallery onExpandClick={props.onExpandClick} />
      </div>
    </section>
  );
};

export default HomePortfolio;
