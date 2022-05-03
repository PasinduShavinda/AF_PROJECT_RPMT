import { Button } from "@mui/material";
import React from "react";
import "./sug_Firstpage.css";
import { Link } from "react-router-dom";
import "./bootstrap.min.css";
const FirstPage = () => {
  return (
    <div id="sug_home_page">
      <div class="main-layout">
        <header>
          <div class="header">
            <div class="container">
              <div class="row">
                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                  <div class="full">
                    <div class="center-desk">
                      <div class="logo">
                        {" "}
                        <a href="index.html">
                          {" "}
                          <img
                            src="assets/images/SLIIT.png"
                            alt="Second slide"
                          />
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                  <div class="menu-area">
                    <div class="limit-box">
                      <nav class="main-menu">
                        <ul class="menu-area-main">
                          <li>
                            <a href="login">Student Log IN</a>{" "}
                          </li>

                          <li>
                            <a href="supervisorlogin">Supervisor Login</a>{" "}
                          </li>

                          <li>
                            <a href="penalmemberlogin">Panel Member Log IN</a>{" "}
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section class="slider_section">
          <div
            id="myCarousel"
            class="carousel slide banner-main"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  class="first-slide"
                  src="assets/images/slider-01.jpg"
                  alt="First slide"
                />
                <div class="container">
                  <div class="carousel-caption relative">
                    <h1 id="sug_h1" className="sug_h">
                      Welcome to Research
                    </h1>
                    <p>
                      As a leading tertiary educational Institute in Sri Lanka,
                      research is an integral part of SLIIT. We strive for a
                      vibrant research culture and numerous initiatives are in
                      place for programming research among the academic .
                      Integrating research methodology to undergraduate
                      establishing a research center to carry out research work,
                      the SLIIT research grant scheme is all meant to promote
                      research.
                    </p>
                    <a href="#about">Read More</a>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  class="second-slide"
                  src="assets/images/slider-03.jpg"
                  alt="Second slide"
                />
                <div class="container">
                  <div class="carousel-caption relative">
                    <h1 id="sug_h1" className="sug_h">
                      Welcome to Research
                    </h1>
                    <p>
                      As a leading tertiary educational Institute in Sri Lanka,
                      research is an integral part of SLIIT. We strive for a
                      vibrant research culture and numerous initiatives are in
                      place for programming research among the academic .
                      Integrating research methodology to undergraduate
                      establishing a research center to carry out research work,
                      the SLIIT research grant scheme is all meant to promote
                      research.
                    </p>
                    <a href="#about">Read More</a>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  class="third-slide"
                  src="assets/images/slider-02.jpg"
                  alt="Third slide"
                />
                <div class="container">
                  <div class="carousel-caption relative">
                    <h1 font-size="24px" className="sug_h">
                      Welcome to Research
                    </h1>
                    <p>
                      As a leading tertiary educational Institute in Sri Lanka,
                      research is an integral part of SLIIT. We strive for a
                      vibrant research culture and numerous initiatives are in
                      place for programming research among the academic .
                      Integrating research methodology to undergraduate
                      establishing a research center to carry out research work,
                      the SLIIT research grant scheme is all meant to promote
                      research.
                    </p>
                    <button>
                      {" "}
                      <a href="#about">Read More</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#myCarousel"
              role="button"
              data-slide="prev"
            >
              <i class="fa fa-angle-left"></i>
            </a>
            <a
              class="carousel-control-next"
              href="#myCarousel"
              role="button"
              data-slide="next"
            >
              <i class="fa fa-angle-right"></i>
            </a>
          </div>
        </section>

        <div id="about" class="about top_layer">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="titlepage">
                  <h2 font-size="22px" className="sug_h">
                    About Informations
                  </h2>
                  <span>
                    Research methodology is a compulsory module for all
                    undergraduate programs at SLIIT. This aims to inculcate
                    skills to acquire new knowledge which is of paramount
                    importance in the field of Information Technology where the
                    body of knowledge grows exponentially. All students must
                    complete a comprehensive research project under the guidance
                    of SLIIT staff members.
                  </span>
                  <br />
                  <span>
                    Generally undergraduate students work in groups to fulfill
                    this compulsory requirement while masters students take up
                    individual projects. The SLIIT Research Centre, overseen by
                    a committee of senior academics/researchers, provides
                    facilities to carry out staff and student research. It
                    brings together researchers of various outside.
                  </span>
                  <br />
                  <span>
                    The annual SLIIT Research Symposium is the showcase of
                    research activities, not only confined to SLIIT but open to
                    other researchers of the region as well. The five best
                    research projects from both undergraduate and postgraduate
                    categories are presented at this symposium. The SLIIT
                    Research Symposium is open to any institution activity
                    involved in research in IT and allied disciplines. As for
                    research by academics the latest initiative is providing a
                    substantial research grant scheme..All academics are
                    clustered into a research team headed by a senior researcher
                  </span>
                  <br />
                  <span>
                    The senior researchers as the principle investigators are
                    eligible for the SLIIT annual research grants. These grants
                    can be freely utilized for research related purposes such as
                    accessing useful research resources (e.g. online journals)
                    and participation in conferences. SLIIT research seminar
                    sessions will provide all academics a platform to present
                    their research work. The seminar will be organized by a
                    SLIIT research seminar committee which is spearheaded by
                    Head/SLIIT Research Center. This committee organizes
                    workshops to guide SLIIT postgraduate students to improve
                    their skill in research. SLIIT Research center at Malabe
                    Campus provides a good study environment, computer
                    facilities to browse online research articles and is freely
                    available for research discussions.
                  </span>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="img-box">
                  <figure>
                    <img src="assets/images/about.png" alt="img" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footr>
          <div class="footer">
            <div class="container">
              <div class="row">
                <div class="col-lg-2 col-md-6 col-sm-12 width">
                  <div class="address">
                    <h3 font-size="18px" className="sug_h">
                      Address
                    </h3>
                    <i>
                      <img src="assets/icon/3.png" />
                      Locations
                    </i>
                  </div>
                </div>
                <div class="col-lg-2 col-md-6 col-sm-12 width">
                  <div class="address">
                    <h3 font-size="18px" className="sug_h">
                      Menus
                    </h3>
                    <i>
                      <img src="assets/icon/2.png" />
                      Locations
                    </i>
                  </div>
                </div>
                <div class="col-lg-2 col-md-6 col-sm-12 width">
                  <div class="address">
                    <h3 font-size="18px" className="sug_h">
                      Useful Linkes
                    </h3>
                    <i>
                      <img src="assets/assets/icon/1.png" />
                      Locations
                    </i>
                  </div>
                </div>
                <div class="col-lg-2 col-md-6 col-sm-12 width">
                  <div class="address">
                    <h3 font-size="18px" className="sug_h">
                      Social Media{" "}
                    </h3>
                    <ul class="contant_icon">
                      <li>
                        <img src="assets/icon/fb.png" alt="icon" />
                      </li>
                      <li>
                        <img src="assets/icon/tw.png" alt="icon" />
                      </li>
                      <li>
                        <img src="assets/icon/lin (2).png" alt="icon" />
                      </li>
                      <li>
                        <img src="assets/icon/instagram.png" alt="icon" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 width">
                  <div class="address">
                    <h3 font-size="18px" className="sug_h">
                      Newsletter{" "}
                    </h3>
                    <input
                      class="form-control"
                      placeholder="Enter your email"
                      type="type"
                      name="Enter your email"
                    />
                    <button class="submit-btn">Subscribe</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footr>
      </div>

      <div>
        <a href="/shv_page">
          <Button variant="contained" type="submit">
            Shavinda
          </Button>
        </a>
        <Button variant="contained" type="submit">
          Thamodi
        </Button>
        <a href="/sug_page">
          {" "}
          <Button variant="contained" type="submit">
            Sugandhi
          </Button>
        </a>
        <Button variant="contained" type="submit">
          Udara
        </Button>
      </div>
    </div>
  );
};

export default FirstPage;
