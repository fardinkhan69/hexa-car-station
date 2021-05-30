import React from "react";

const Footer = () => {
  return (
    <div>
      <section class="bg-light">
        <div class="container">
          <footer class="py-5 border-top">
            <div class="row">
              <div class="col-12 col-md-4 mb-4">
                <img
                  class="mb-2"
                  src="../../assets/bootstrap_logo.png"
                  alt=""
                  width="50"
                  height="50"
                />
                <span class="font-weight-bold text-primary">BootBlox</span>
                <small class="d-block mb-3 text-muted">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo,
                  labore!
                </small>
              </div>
              <div class="col-6 col-md">
                <h5 class="text-primary">Features</h5>
                <ul class="list-unstyled text-small">
                  <li>
                    <a class="link-secondary" href="#">
                      Cool stuff
                    </a>
                  </li>
                  <li>
                    <a class="link-secondary" href="#">
                      Random feature
                    </a>
                  </li>
                  <li>
                    <a class="link-secondary" href="#">
                      Team feature
                    </a>
                  </li>
                  <li>
                    <a class="link-secondary" href="#">
                      Stuff for developers
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-6 col-md">
                <h5 class="text-primary">Resources</h5>
                <ul class="list-unstyled text-small">
                  <li>
                    <a class="link-secondary" href="#">
                      Resource
                    </a>
                  </li>
                  <li>
                    <a class="link-secondary" href="#">
                      Resource name
                    </a>
                  </li>
                  <li>
                    <a class="link-secondary" href="#">
                      Another resource
                    </a>
                  </li>
                  <li>
                    <a class="link-secondary" href="#">
                      Final resource
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-6 col-md">
                <h5 class="text-primary">About</h5>
                <ul class="list-unstyled text-small">
                  <li>
                    <a class="link-secondary" href="#">
                      Team
                    </a>
                  </li>
                  <li>
                    <a class="link-secondary" href="#">
                      Locations
                    </a>
                  </li>
                  <li>
                    <a class="link-secondary" href="#">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a class="link-secondary" href="#">
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
        <div class="bg-light border-top">
          <div class="container">
            <div class="d-flex justify-content-between align-items-center py-3">
              <span> copyright Fardin </span>
              <ul class="list-inline list-unstyled mb-0">
                <li class="list-inline-item">
                  <a href="#" class="text-primary"></a>
                </li>
                <li class="list-inline-item">
                  <a href="#" class="text-primary"></a>
                </li>
                <li class="list-inline-item">
                  <a href="#" class="text-primary"></a>
                </li>
                <li class="list-inline-item">
                  <a href="#" class="text-primary"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
