import React from "react";
import Layout from "./Layout";

function Banner() {
  return (
    <>
      <Layout>
        <section className="banner">
          <div className="conatiner flex">
            <div className="flex info-list">
              <div className="info-content flex">
                <div className="left icon flex">
                  <i className="fa-solid fa-award"></i>
                </div>
                <div className="right">
                  <div className="award">IT</div>
                  <div className="description">Graduate</div>
                </div>
              </div>
              <div className="info-divider"></div>
              <div className="info-content flex">
                <div className="left icon flex">
                  <i className="fa-solid fa-award"></i>
                </div>
                <div className="right">
                  <div className="award">IT</div>
                  <div className="description">Graduate</div>
                </div>
              </div>
              <div className="info-divider"></div>
              <div className="info-content flex">
                <div className="left icon flex">
                  <i className="fa-solid fa-award"></i>
                </div>
                <div className="right">
                  <div className="award">IT</div>
                  <div className="description">Graduate</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default Banner;
