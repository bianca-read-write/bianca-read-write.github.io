import React, { Component } from "react";
import Swiper from "swiper";

import PortfolioSwiperData from "../../data/portfolio/portfolioSwiperData";

let swiper;

class PortfolioSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: props.selected - 1,
    };
  }
  disableLeft = () => {
    document
      .getElementById("swiper-left")
      .classList.add("adv-swiper-button-disabled");
  };

  disableRight = () => {
    document
      .getElementById("swiper-right")
      .classList.add("adv-swiper-button-disabled");
  };

  enableLeft = () => {
    document
      .getElementById("swiper-left")
      .classList.remove("adv-swiper-button-disabled");
  };

  enableRight = () => {
    document
      .getElementById("swiper-right")
      .classList.remove("adv-swiper-button-disabled");
  };

  componentDidMount() {
    swiper = new Swiper(".adv-slider .adv-swiper-container", {
      noSwipingClass: "adv-swiper-no-swiping",
      containerModifierClass: "adv-swiper-container-",
      slideClass: "adv-swiper-slide",
      slideBlankClass: "adv-swiper-slide-invisible-blank",
      slideActiveClass: "adv-swiper-slide-active",
      slideDuplicateActiveClass: "adv-swiper-slide-duplicate-active",
      slideVisibleClass: "adv-swiper-slide-visible",
      slideDuplicateClass: "adv-swiper-slide-duplicate",
      slideNextClass: "adv-swiper-slide-next",
      slideDuplicateNextClass: "adv-swiper-slide-duplicate-next",
      slidePrevClass: "adv-swiper-slide-prev",
      slideDuplicatePrevClass: "adv-swiper-slide-duplicate-prev",
      wrapperClass: "adv-swiper-wrapper",
      speed: 300,
      loop: false,
      navigation: {
        disabledClass: "adv-swiper-button-disabled",
        hiddenClass: "adv-swiper-button-hidden",
        lockClass: "adv-swiper-button-lock",
        nextEl: ".adv-2-swiper-button-next",
        prevEl: ".adv-2-swiper-button-prev",
      },
      on: { activeIndexChange: () => this.checkDisabled() },
      spaceBetween: 0,
    });

    swiper = document.querySelector(".adv-swiper-container").swiper;
    swiper.on("init", this.checkDisabled);
    swiper.slideTo(this.state.selectedIndex);
  }

  checkDisabled = () => {
    if (swiper.isBeginning) this.disableLeft();
    else this.enableLeft();

    if (swiper.isEnd) this.disableRight();
    else this.enableRight();
  };

  swipeLeft = () => {
    if (this.state.selectedIndex > 0) {
      swiper.slideTo(this.state.selectedIndex - 1);
      this.setState({
        selectedIndex: this.state.selectedIndex - 1,
      });
    }
  };

  swipeRight = () => {
    if (this.state.selectedIndex < PortfolioSwiperData.length - 1) {
      swiper.slideTo(this.state.selectedIndex + 1);
      this.setState({
        selectedIndex: this.state.selectedIndex + 1,
      });
    }
  };

  render() {
    return (
      <div id="slider" className="block spacer p-top-xl">
        <div className="wrapper" style={{ maxWidth: "none" }}>
          <div className="adv-slider">
            <div className="adv-swiper-container">
              <div className="adv-swiper-wrapper">
                {PortfolioSwiperData &&
                  PortfolioSwiperData.map((item, key) => {
                    return (
                      <div
                        key={key}
                        className="adv-swiper-slide"
                        style={{ textAlign: "center" }}
                      >
                        <div
                          className="portfolio-image-div"
                          style={{
                            backgroundImage: `url(${item.imgSrc})`,
                          }}
                        >
                          <img
                            src={item.imgSrc}
                            alt={item.alt}
                            style={{ display: "none" }}
                          />
                        </div>
                      </div>
                    );
                  })}
              </div>

              <div
                onClick={this.swipeRight}
                id="swiper-right"
                className="adv-2-swiper-button-next adv-swiper-button-white"
              >
                <i className="fas fa-long-arrow-alt-right"></i>
              </div>

              <div
                onClick={this.swipeLeft}
                id="swiper-left"
                className="adv-2-swiper-button-prev adv-swiper-button-white"
              >
                <i className="fas fa-long-arrow-alt-left"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PortfolioSlider;
