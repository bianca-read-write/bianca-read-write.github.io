import React, { useEffect, useContext, Fragment } from "react";
import MetaTags from "react-meta-tags";

import Loading from "../blocks/loading/Loading";
import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";
import UserContext from "../contexts/UserContext";

import PageTitlePortfolio from "../blocks/page-title/PageTitlePortfolio";

const Portfolio = () => {
  const { code, name, numGuests } = useContext(UserContext);

  useEffect(() => {
    let iframe;
    let handleIFrameMessage;
    var ifr = document.getElementById("JotFormIFrame-212524314387049");
    if (ifr) {
      var src = ifr.src;
      var iframeParams = [];
      if (window.location.href && window.location.href.indexOf("?") > -1) {
        iframeParams = iframeParams.concat(
          window.location.href
            .substr(window.location.href.indexOf("?") + 1)
            .split("&")
        );
      }
      if (src && src.indexOf("?") > -1) {
        iframeParams = iframeParams.concat(
          src.substr(src.indexOf("?") + 1).split("&")
        );
        src = src.substr(0, src.indexOf("?"));
      }
      iframeParams.push("isIframeEmbed=1");
      ifr.src = src + "?" + iframeParams.join("&");
    }
    window.handleIFrameMessage = function (e) {
      if (typeof e.data === "object") {
        return;
      }
      var args = e.data.split(":");
      if (args.length > 2) {
        iframe = document.getElementById(
          "JotFormIFrame-" + args[args.length - 1]
        );
      } else {
        iframe = document.getElementById("JotFormIFrame");
      }
      if (!iframe) {
        return;
      }
      switch (args[0]) {
        case "scrollIntoView":
          iframe.scrollIntoView();
          break;
        case "setHeight":
          iframe.style.height = args[1] + "px";
          break;
        case "collapseErrorPage":
          if (iframe.clientHeight > window.innerHeight) {
            iframe.style.height = window.innerHeight + "px";
          }
          break;
        case "reloadPage":
          window.location.reload();
          break;
        case "loadScript":
          if (!window.isPermitted(e.origin, ["jotform.com", "jotform.pro"])) {
            break;
          }
          var src = args[1];
          if (args.length > 3) {
            src = args[1] + ":" + args[2];
          }
          var script = document.createElement("script");
          script.src = src;
          script.type = "text/javascript";
          document.body.appendChild(script);
          break;
        case "exitFullscreen":
          if (window.document.exitFullscreen) window.document.exitFullscreen();
          else if (window.document.mozCancelFullScreen)
            window.document.mozCancelFullScreen();
          else if (window.document.mozCancelFullscreen)
            window.document.mozCancelFullScreen();
          else if (window.document.webkitExitFullscreen)
            window.document.webkitExitFullscreen();
          else if (window.document.msExitFullscreen)
            window.document.msExitFullscreen();
          break;
        default:
          break;
      }
      var isJotForm = e.origin.indexOf("jotform") > -1 ? true : false;
      if (
        isJotForm &&
        "contentWindow" in iframe &&
        "postMessage" in iframe.contentWindow
      ) {
        var urls = {
          docurl: encodeURIComponent(document.URL),
          referrer: encodeURIComponent(document.referrer),
        };
        iframe.contentWindow.postMessage(
          JSON.stringify({ type: "urls", value: urls }),
          "*"
        );
      }
    };
    window.isPermitted = function (originUrl, whitelisted_domains) {
      var url = document.createElement("a");
      url.href = originUrl;
      var hostname = url.hostname;
      var result = false;
      if (typeof hostname !== "undefined") {
        whitelisted_domains.forEach(function (element) {
          if (
            hostname.slice(-1 * element.length - 1) === ".".concat(element) ||
            hostname === element
          ) {
            result = true;
          }
        });
        return result;
      }
    };
    if (window.addEventListener) {
      window.addEventListener("message", handleIFrameMessage, false);
    } else if (window.attachEvent) {
      window.attachEvent("onmessage", handleIFrameMessage);
    }
  }, []);

  return (
    <Fragment>
      <MetaTags>
        <meta charSet="UTF-8" />
        <title>RSVP | bianca & brian</title>

        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
        <meta name="google" content="notranslate" />
        <meta name="format-detection" content="telephone=no" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </MetaTags>

      <Loading />

      <Header />

      <main id="main" className="site-main">
        <PageTitlePortfolio />

        <div id="page-content" className="spacer p-top-lg">
          <div className="wrapper">
            <div className="contact-me">
              <div className="contact-me-img-and-title">
                <div className="img object-fit">
                  <div className="object-fit-cover">
                    <img
                      src="assets/img/edwards/9Y7A3248.jpg"
                      alt="Contacts"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              </div>

              <div className="contact-me-content">
                <div className="contact-me-content-2">
                  {[1, 2].includes(numGuests) && (
                    <iframe
                      title="rsvp"
                      id="JotFormIFrame-212524314387049"
                      src={`https://form.jotform.com/212524314387049?numguests13=${numGuests}&username=${name}&code=${code}`}
                      frameBorder="0"
                      scrolling="no"
                      style={{
                        height: "1120px",
                      }}
                    >
                      {" "}
                    </iframe>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </Fragment>
  );
};

export default Portfolio;
