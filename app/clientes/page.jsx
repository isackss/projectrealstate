import Link from "next/link";


const Clientes = () => {
  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Clientes</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          {/* <div className="btn-group me-2">
            <button type="button" className="btn btn-sm btn-outline-secondary">
              Share
            </button>
            <button type="button" className="btn btn-sm btn-outline-secondary">
              Export
            </button>
          </div>
          <button
            type="button"
            className="btn btn-sm btn-outline-secondary dropdown-toggle d-flex align-items-center gap-1"
          >
            <i className="bi bi-calendar3 d-flex align-items-center fs-6"></i>
            This week
          </button> */}
          <Link href="/clientes/crear" className="btn btn-primary">Crear</Link>
        </div>
      </div>
      {/* <button className="btn btn-primary">Kevin</button> */}
      {/* <canvas className="my-4 w-100" id="myChart" width="900" height="380"></canvas> */}

      <h2>Section title</h2>
      
    </main>
  );
};

export default Clientes;