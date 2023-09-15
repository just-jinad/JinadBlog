import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-body-tertiary py-3 fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <b className="fs-3" style={{ fontFamily: "Times New Roman" }}>
              {" "}
              Jos-Jina Blog
            </b>{" "}
          </a>
          <div className=" d-md-none d-block px-md-5">
            <ul className="d-flex gap-3 mt-3">
              <li>
                <a href="" className="bi bi-facebook text-dark"></a>
              </li>
              <li>
                <a href="" className="bi bi-twitter text-dark"></a>
              </li>
              <li>
                <a href="" className="bi bi-instagram text-dark"></a>
              </li>
              <li>
                <a href="" className="bi bi-search text-dark"></a>
              </li>
            </ul>
          </div>
          <button
            className="navbar-toggler d-md-none d-block"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="d-md-block d-none px-md-5">
            <ul className="d-md-flex gap-md-5">
              <Link
                style={{ fontFamily: "Times New Roman" }}
                to="/"
                className="text-decoration-none text-dark"
              >
                Home
              </Link>
              <Link
                style={{ fontFamily: "Times New Roman" }}
                to="/create"
                className="text-decoration-none text-dark"
              >
                New blog
              </Link>
              <Link
                style={{ fontFamily: "Times New Roman" }}
                to="/about"
                className="text-decoration-none text-dark"
              >
                About Us
              </Link>
              <Link
                style={{ fontFamily: "Times New Roman" }}
                to="/questions"
                className="text-decoration-none text-dark"
              >
                FAQs
              </Link>
            </ul>
          </div>
          <div className=" d-md-block d-none px-md-5">
            <ul className="d-flex gap-md-4">
              <li>
                <a href="" className="bi bi-facebook text-dark"></a>
              </li>
              <li>
                <a href="" className="bi bi-twitter text-dark"></a>
              </li>
              <li>
                <a href="" className="bi bi-instagram text-dark"></a>
              </li>
              <li>
                <a href="" className="bi bi-search text-dark"></a>
              </li>
            </ul>
          </div>
          <div
            className="offcanvas offcanvas-top"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Offcanvas
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex mt-3" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </>
    // <nav classNameName="navbar">
    //     <h1>The jinad's blog</h1>
    //     <div classNameName="links">
    //         <Link to="/">Home</Link>
    //         <Link to="/create">New blog</Link>
    //         <Link to="/about">About Us</Link>
    //         <Link to="/questions">FAQs</Link>
    //     </div>
    // </nav>
  );
};

export default Navbar;
