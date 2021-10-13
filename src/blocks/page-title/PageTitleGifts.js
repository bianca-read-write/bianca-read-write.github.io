import React from "react";

const PageTitleGifts = () => {
  return (
    <section id="page-title">
      <div className="wrapper">
        <div className="row gutter-width-md with-pb-md">
          <div className="col-sm-8 col-md-8 col-lg-7 col-xl-7 align-self-center">
            <div className="title">
              <h1 className="large">Gifts</h1>
            </div>

            <div className="description max-width-1 spacer p-top-lg">
              <p>
                Instead of a traditional wedding registry, we've decided to
                create two funds: our honeymoon fund will help us travel through
                Asia, explore new places, and try amazing food, while our first
                home fund will help us secure a down payment for our future
                home. If you'd like, please contribute any amount you see fit.
                If not, your presence at our celebration is much appreciated!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageTitleGifts;
