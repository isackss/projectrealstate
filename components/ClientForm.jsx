import Link from "next/link";

const ClientForm = ({ type, client, setClient, submitting, handleSubmit }) => {
  
  const onChangeInput = (e) => {
    setClient({ ...client, [e.target.name]: e.target.value });
    if (e.target.tagName.toLowerCase() == "select") {
      e.target.firstChild.setAttribute("disabled", "disabled");
    }
  };

  return (
    <section>
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism row"
      >
        <div className="mb-3 col-sm-6">
          <label className="form-label">Nombre del cliente</label>
          <input
            value={client?.name}
            name="name"
            onChange={onChangeInput}
            placeholder="Escriba el nombre completo del cliente."
            required
            className="form-control"
          />
        </div>
        <div className="mb-3 col-sm-6">
          <label className="form-label">Forma de contacto</label>
          <select
            name="contact"
            value={client?.contact}
            onChange={onChangeInput}
            className="form-select"
            required
          >
            <option>Seleccione una opción</option>
            <option>Correo</option>
            <option>Llamada</option>
            <option>Visita</option>
          </select>
        </div>
        <div className="mb-3 col-sm-6">
          <label className="form-label">Interés</label>
          <select
            name="interested"
            value={client?.interested}
            onChange={onChangeInput}
            className="form-select"
          >
            <option>Seleccione una opción</option>
            <option>Propiedad</option>
            <option>Proyecto</option>
          </select>
        </div>
        <div className="mb-3 col-sm-6">
          <label className="form-label">Asignado a</label>
          <select
            name="asigned"
            value={client?.asigned}
            className="form-select"
            onChange={onChangeInput}
          >
            <option>Seleccione un corredor</option>
            <option>Corredor1</option>
            <option>Corredor2</option>
          </select>
        </div>
        <div className="mb-3 col-sm-6">
          <label className="form-label">Medio publicitario</label>
          <select
            name="contactRef"
            value={client?.contactRef}
            className="form-select"
            onChange={onChangeInput}
          >
            <option>Sellecione una opción</option>
            <option>Familiar / Amigo</option>
            <option>Feria</option>
            <option>Internet</option>
            <option>La Prensa</option>
            <option>Página web</option>
            <option>Páginas amarillas</option>
            <option>Revista</option>
            <option>Otros</option>
          </select>
        </div>
        <div className="mb-3 col-sm-6">
          <label className="form-label">¿Es empresa de Bienes Raíces?</label>
          <select
            name="rsCompany"
            value={client?.rsCompany}
            onChange={onChangeInput}
            className="form-select"
          >
            <option>Seleccione una opción</option>
            <option value={false}>No</option>
            <option value={true}>Sí</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Mensaje inicial del cliente</label>
          <textarea
            name="clientMessage"
            value={client?.clientMessage}
            onChange={(e) =>
              setClient({ ...client, clientMessage: e.target.value })
            }
            placeholder="Escriba detalles de la solicitud o requerimiento del cliente."
            required
            className="form-control"
          />
        </div>
        <div className="mb-3 col-sm-6">
          <label className="form-label">Teléfono de contacto</label>
          <input
            name="clientPhone"
            value={client?.clientPhone}
            onChange={onChangeInput}
            placeholder="Escriba el número de teléfono."
            required
            className="form-control"
          />
        </div>
        <div className="mb-3 col-sm-6">
          <label className="form-label">Correo</label>
          <input
            name="clientEmail"
            type="email"
            value={client?.clientEmail}
            onChange={onChangeInput}
            placeholder="correo@dominio.com"
            required
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Comentarios del corredor</label>
          <textarea
            name="brokerComment"
            value={client?.brokerComment}
            onChange={onChangeInput}
            placeholder="Escriba el comentario"
            className="form-control"
          />
        </div>
        <div className="d-flex justify-content-end mb-5">
          <Link href="/clientes" className="btn btn-secondary mx-2">
            Cancelar
          </Link>
          <button type="submit" disabled={submitting} className="btn btn-primary">
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ClientForm;
