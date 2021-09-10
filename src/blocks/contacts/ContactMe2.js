import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import UserContext from "../../contexts/UserContext";

const RSPVTrigger = styled.div`
  width: 100%;
  text-align: center;
  margin: 20px;
  border: 1px solid rgb(39, 64, 53);
  padding: 20px;

  &:hover {
    cursor: pointer;

    h1.large {
      color: #8d9893 !important;
      transform: scale(1.08);
    }
  }

  h1.large {
    transition: all 0.3s ease;
    color: #274035 !important;
  }
`;

const ContactMe2 = () => {
  const { code, name, numGuests } = useContext(UserContext);
  const [showForm, setShowForm] = useState(false);

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

        <h2 className="contact-me-title">RSVP</h2>
      </div>

      <div className="contact-me-content">
        <div className="contact-me-content-2">
          <div className="contact-me-description">
            <p>Please let us know if you plan to attend by March 1st, 2022</p>
          </div>

          <div className="contact-me-shortcode">
            <div className="rsvp-form-wrapper">
              {(showForm && (numGuests === 1 || numGuests === 2) && (
                <iframe
                  id="JotFormIFrame-212524314387049"
                  title="Form"
                  allow="geolocation; microphone; camera"
                  src={`https://form.jotform.com/212524314387049?numguests13=${numGuests}&username=${name}&code=${code}`}
                  frameBorder="0"
                  scrolling="no"
                  style={{
                    height:
                      numGuests === 1
                        ? "373px"
                        : numGuests === 2
                        ? "751px"
                        : "0px",
                  }}
                >
                  {" "}
                </iframe>
              )) || (
                <RSPVTrigger onClick={() => setShowForm(true)}>
                  <h1 className="large">Ready to RSVP?</h1>
                </RSPVTrigger>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe2;
