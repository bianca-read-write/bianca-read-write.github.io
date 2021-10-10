import React from "react";

const PageTitleAbout = () => {
  return (
    <section id="page-title">
      <div className="wrapper">
        <div className="row gutter-width-md with-pb-md">
          <div className="col-sm-8 col-md-8 col-lg-7 col-xl-7 align-self-center">
            <div className="title">
              <h1 className="large">Event</h1>
            </div>

            <div className="description max-width-1 spacer p-top-lg">
              <p>
                Our love story started in New York City, so it’s only proper for
                us to ring in our lifelong commitment here. We’re coming
                together for an intimate celebration at{" "}
                <a
                  className="underline"
                  href="https://celestinebk.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Celestine
                </a>
                , a hip Mediterranean restaurant overlooking the New York
                skyline. We’ll kick things off with a short ceremony, a sunset
                cocktail hour, dinner, drinks, and, of course, dancing!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageTitleAbout;
