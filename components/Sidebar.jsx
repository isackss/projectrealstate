import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
      <div
        className="offcanvas-md offcanvas-end bg-body-tertiary"
        tabIndex="-1"
        id="sidebarMenu"
        aria-labelledby="sidebarMenuLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="sidebarMenuLabel">
            Real State App
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            data-bs-target="#sidebarMenu"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link
                className="nav-link d-flex align-items-center gap-2 active"
                aria-current="page"
                href="/dashboard"
              >
                <i className="bi bi-house-fill d-flex align-items-center fs-6"></i>
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center gap-2" href="/clientes">
                <i className="bi bi-people d-flex align-items-center fs-6"></i>
                Clientes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center gap-2" href="/inventario">
                <i className="bi bi-file-earmark d-flex align-items-center fs-6"></i>
                Inventario
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center gap-2" href="/contratos">
                <i className="bi bi-cart3 d-flex align-items-center fs-6"></i>
                Contratos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center gap-2" href="/reportes">
                <i className="bi bi-graph-up d-flex align-items-center fs-6"></i>
                Reportes
              </Link>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="#">
                <i className="bi bi-puzzle d-flex align-items-center fs-6"></i>
                Integrations
              </a>
            </li> */}
          </ul>

          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
            <span>Saved reports</span>
            <a className="link-secondary text-decoration-none" href="#" aria-label="Add a new report">
              <i className="bi bi-plus-circle-fill d-flex align-items-center fs-6"></i>
            </a>
          </h6>
          <ul className="nav flex-column mb-auto">
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="#">
                <i className="bi bi-file-earmark-text d-flex align-items-center fs-6"></i>
                Current month
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="#">
                <i className="bi bi-file-earmark-text d-flex align-items-center fs-6"></i>
                Last quarter
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="#">
                <i className="bi bi-file-earmark-text d-flex align-items-center fs-6"></i>
                Social engagement
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="#">
                <i className="bi bi-file-earmark-text d-flex align-items-center fs-6"></i>
                Year-end sale
              </a>
            </li>
          </ul>

          <hr className="my-3" />

          <ul className="nav flex-column mb-auto">
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="#">
                <i className="bi bi-gear-wide-connected d-flex align-items-center fs-6"></i>
                Settings
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="#">
                <i className="bi bi-door-closed d-flex align-items-center fs-6"></i>
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
