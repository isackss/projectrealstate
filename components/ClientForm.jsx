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
            defaultValue={client?.contact}
            name="contact"
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
            value={client?.interested}
            onChange={(e) =>
              setClient({ ...client, interested: e.target.value })
            }
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
            value={client?.asigned}
            className="form-select"
            onChange={(e) => setClient({ ...client, asigned: e.target.value })}
          >
            <option>No asignado</option>
            <option>Corredor1</option>
            <option>Corredor2</option>
          </select>
        </div>
        <div className="mb-3 col-sm-6">
          <label className="form-label">Medio publicitario</label>
          <select
            value={client?.contactRef}
            className="form-select"
            onChange={(e) =>
              setClient({ ...client, contactRef: e.target.value })
            }
          >
            <option>No seleccionado</option>
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
            value={client?.rsCompany}
            onChange={(e) =>
              setClient({ ...client, rsCompany: e.target.value })
            }
            className="form-select"
          >
            <option value={false}>No</option>
            <option value={true}>Sí</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Mensaje inicial del cliente</label>
          <textarea
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
            value={client?.clientPhone}
            onChange={(e) =>
              setClient({ ...client, clientPhone: e.target.value })
            }
            placeholder="Escriba el número de teléfono."
            required
            className="form-control"
          />
        </div>
        <div className="mb-3 col-sm-6">
          <label className="form-label">Correo</label>
          <input
            type="email"
            value={client?.clientEmail}
            onChange={(e) =>
              setClient({ ...client, clientEmail: e.target.value })
            }
            placeholder="correo@dominio.com"
            required
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Comentarios del corredor</label>
          <textarea
            value={client?.brokerComment}
            onChange={(e) =>
              setClient({ ...client, brokerComment: e.target.value })
            }
            placeholder="Escriba el comentario"
            className="form-control"
          />
        </div>
        <div className="d-flex justify-content-end mb-5">
          <Link href="/clientes" className="btn btn-secondary mx-2">
            Cancelar
          </Link>
          <button
            type="submit"
            disabled={false}
            className="btn btn-primary"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ClientForm;
