import { NavLink, Link } from 'react-router-dom';
import { useEffect } from 'react';

const Navbar1 = () => {
  useEffect(() => {
    // Ensure Bootstrap is available
    if (!window.bootstrap && typeof bootstrap === 'undefined') {
      console.warn('Bootstrap JS is not loaded. Offcanvas may not work properly.');
    }
  }, []);

  const closeOffcanvas = () => {
    const offcanvas = document.querySelector('.offcanvas');
    if (offcanvas && window.bootstrap) {
      const bsOffcanvas = window.bootstrap.Offcanvas.getInstance(offcanvas);
      if (bsOffcanvas) {
        bsOffcanvas.hide();
      }
    }
  };

  return (
    <nav style={{marginBottom:'50px'}} className="navbar navbar-expand-md navbar-dark bg-primary shadow-sm fixed-top ">
      <div className="container-fluid">
        {/* Brand */}
        <NavLink className="navbar-brand fw-bold" to="/">
          Vivekanand College
        </NavLink>

        {/* Toggler Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Offcanvas for mobile */}
        <div
          className="offcanvas offcanvas-end d-md-none text-bg-primary"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              {[
                { path: '/', label: 'Home' },
                { path: '/about', label: 'About' },
                { path: '/courses', label: 'Courses' },
                { path: '/contact', label: 'Contact' },
              ].map((item) => (
                <li className="nav-item" key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? 'nav-link active fw-bold text-white' : 'nav-link text-white'
                    }
                    onClick={closeOffcanvas}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="text-center mt-3">
              <Link
                className="btn btn-success fw-bold"
                to="/admissions"
                onClick={closeOffcanvas}
              >
                Apply Now!
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="collapse navbar-collapse justify-content-end d-none d-md-flex">
          <ul className="navbar-nav mb-2 mb-md-0">
            {[
              { path: '/', label: 'Home' },
              { path: '/about', label: 'About' },
              { path: '/courses', label: 'Courses' },
              { path: '/contact', label: 'Contact' },
            ].map((item) => (
              <li className="nav-item" key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? 'nav-link active fw-bold' : 'nav-link'
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link className="btn btn-success fw-bold ms-3" to="/admissions">
            Apply Now!
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar1;
