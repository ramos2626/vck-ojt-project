import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary shadow-sm fixed-top">
      <div className="container">
        {/* Brand/logo */}
        {/* <NavLink className="navbar-brand fw-bold" to="/">
          MyApp
        </NavLink> */}

        {/* Mobile toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-nav"
          aria-controls="main-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <h3 style={{marginInline:'-60px'}} className='text-light '>Vivekanand College</h3>
        <div style={{ display: 'flex', alignItems: 'right', justifyContent: 'right', marginInline:'-60px'}} className="collapse navbar-collapse " id="main-nav">
          <ul className="navbar-nav ms-5  mb-2 mb-md-0">
            {[
              { path: '/', label: 'Home' },
              { path: '/about', label: 'About' },
              { path: '/courses', label: 'Courses' },
              { path: '/contact', label: 'Contact' }
            ].map((item) => (
              <li className="nav-item" key={item.path}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active fw-bold" : "nav-link"
                  }
                  to={item.path}
                  data-discover="true"
                >
                  {item.label}
                </NavLink>
              </li>

            ))}

          </ul>
          <div style={{marginTop:'-10px'}} >
            <Link className="btn bg-success hero-btn ms-2" to="/admissions" data-discover="true">
              Apply Now!
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;