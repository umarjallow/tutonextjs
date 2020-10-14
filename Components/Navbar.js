import Link from "next/link";
const Navbar = () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Logo
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link href="/">
              <a className="nav-link">
                Home <span className="sr-only">(current)</span>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/hello">
              <a className="nav-link">Hello</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/list/users">
              <a className="nav-link">Users</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>

    {/*  <style jsx>
      {`
        ul {
          background: #000;
          color: #fff;
          list-style: none;
          display: flex;
        }
        ul li {
          margin-right: 20px;
          font-size: 18px;
        }
        ul li a {
          text-decoration: none;
          color: #fff;
        }
      `}
    </style> */}
  </div>
);

export default Navbar;
