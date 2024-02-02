const Header = () => {
  return (
    <div className=" bg-green-100">
      <section class="hero-section ">
        <div>
          <div className="space-y-2">
            <h4 title="Hello Buddy" className="text-gray-600 font-semibold">
              Hi there,<span class="waving-hand text-2xl">👋</span>
            </h4>
            <h2 class="hero-section-title">
              I'm <span class="logo-name"> Dinesh</span>
            </h2>
            <p class="hero-section-desc" className="text-gray-600">
              Intrested in working on Frontend, Backend, API's, Databases and
              currently learning new things.I particularly enjoy making coding a
              delightful and interactive experience, bringing a touch of fun to
              every project.
            </p>
          </div>

          <div className="text-white font-semibold  space-x-10 mt-7 mb-5">
            <button className="bg-gray-500 p-3 rounded-lg hover:bg-gray-700">
              Hire Me
            </button>
            <button className="bg-gray-500 p-3 rounded-lg hover:bg-gray-700">
              Download CV
            </button>
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
