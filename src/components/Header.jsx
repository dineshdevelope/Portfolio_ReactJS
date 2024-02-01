const Header = () => {
  return (
    <div className=" bg-green-100">
      <section class="hero-section">
        <div>
          <div>
            <h4 title="Hello Buddy">
              Hi there,<span class="waving-hand">👋</span>
            </h4>
            <h2 class="hero-section-title">
              I'm <span class="logo-name"> Dinesh</span>
            </h2>
            <p class="hero-section-desc">
              Intrested in working on Frontend, Backend, API's, Databases and
              currently learning new things.I particularly enjoy making coding a
              delightful and interactive experience, bringing a touch of fun to
              every project.
            </p>
          </div>

          <ul class="social-icon">
            <li>
              <a href="https://www.facebook.com/dineshdotnet/" target="_blank">
                <i class="fa-brands fa-facebook fa-2xl"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/dinesh-s-0a90b3114/"
                target="_blank"
              >
                <i class="fa-brands fa-linkedin fa-2xl"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/dineshindoteng/"
                target="_blank"
              >
                <i class="fa-brands fa-instagram fa-2xl"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/DINESHS1997D" target="_blank">
                <i class="fa-brands fa-twitter fa-2xl"></i>
              </a>
            </li>
          </ul>

          <div>
            <button class="btn btn-primary">Hire Me</button>
            <button class="btn">Download CV</button>
          </div>
        </div>

        <div class="hero-img">
          <img
            src="https://png.pngtree.com/png-clipart/20230913/original/pngtree-programmer-clipart-developer-sitting-behind-his-computer-in-glasses-cartoon-vector-png-image_11075227.png"
            width="400"
          />
        </div>
      </section>
    </div>
  );
};
export default Header;
