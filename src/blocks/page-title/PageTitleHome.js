import React from "react";

const PageTitleHome = () => {
  return (
    <section id="page-title" className="block">
      <div className="wrapper">
        <div className="page-title-content">
          <div className="page-title-img">
            <img src="assets/img/demo/bridge.png" alt="Bridge" />
          </div>

          <div className="page-title-description">
            <div className="title">
              <h1 className="large">bianca & brian</h1>
            </div>

            <div className="description">
              <p>
                We're excited to invite you to our wedding celebration on August
                27, 2022! Join us for a summer evening in Brooklyn. Meet our
                family and friends, bask in the cityscape views, grab a drink,
                and dance the night away!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageTitleHome;
