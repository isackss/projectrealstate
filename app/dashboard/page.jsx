"use client";

const Dashboard = () => {
  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Dashboard</h1>
        {/* <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
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
          </button>
        </div> */}
      </div>

      {/* <h2>Propiedades disponibles</h2> */}
      <section className="container">
        <div className="d-flex flex-column align-items-center">
          <p className="display-6">Tipo de propiedades</p>
          <p>Elige una de las categorías a continuación.</p>
        </div>
        <div className="row gap-3">
          <div className="border p-3 col-sm-3">
            <div>
              <i className="bi bi-house-fill fs-2"></i>
              <div className="h5 mt-2">Casas</div>
              <p className="small">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="small fw-bold">Ver más</div>
          </div>
          <div className="border p-3 col-sm-3">
            <div>
            <i className="bi bi-x-diamond-fill fs-2"></i>
              <div className="h5 mt-2">Terrenos</div>
              <p className="small">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="small fw-bold">Ver más</div>
          </div>
          <div className="border p-3 col-sm-3">
            <div>
              <i className="bi bi-building-fill fs-2"></i>
              <div className="h5 mt-2">Edificios</div>
              <p className="small">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="small fw-bold">Ver más</div>
          </div>
          <div className="border p-3 col-sm-3">
            <div>
            <i className="bi bi-building-fill-check fs-2"></i>
              <div className="h5 mt-2">Apartamentos</div>
              <p className="small">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="small fw-bold">Ver más</div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
