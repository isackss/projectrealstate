"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ActionButtom from "@/components/ActionButtom";
import Modal from "@/components/Modal";

const Clientes = () => {
  const [clientsList, setClientList] = useState([]);
  const [clientInfo, setClientInfo] = useState({});
  const [show, setShow] = useState(false);
  const router = useRouter();

  const fetchClients = async () => {
    const response = await fetch("/api/client");
    const data = await response.json();
    setClientList(data);
  };

  const handleClose = () => setShow(false);

  const handleShow = (clientId) => {
    setClientInfo(clientsList.find((client) => client._id == clientId));
    setShow(true);
  };

  const handleEdit = (client) => {
    router.push(`/clientes/actualizar?id=${client._id}`)
  }

  const handleDelete = async (client) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this client?"
    );

    if (hasConfirmed) {
      try {
        await fetch(`/api/client/${client._id.toString()}`, {
          method: "DELETE",
        });
        const filteredClients = clientsList.filter((p) => p._id !== client._id);
        setClientList(filteredClients);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <Modal show={show} clientInfo={clientInfo} handleClose={handleClose} />
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Clientes</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <Link
            href="/clientes/crear"
            className="d-none d-md-block btn btn-sm btn-outline-primary"
          >
            Crear
          </Link>
          <Link
            href="/clientes/crear"
            className="btn btn-outline-primary d-block d-md-none"
          >
            <i className="bi bi-person-plus-fill d-flex align-items-center justify-content-center"></i>
          </Link>
        </div>
      </div>

      <h2>Listado de clientes</h2>
      {clientsList.length == 0 ? (
        <div className="alert alert-primary">No hay registros.</div>
      ) : (
        <div className="table-responsive">
          <table className="table table-hover align-middle">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Interesado</th>
                <th>Corredor</th>
                <th>Contacto</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {clientsList.map((client, key) => (
                <tr key={client._id}>
                  <td>{client._id}</td>
                  <td>{client.name}</td>
                  <td>{client.interested}</td>
                  <td>{client.asigned}</td>
                  <td>{client.contact}</td>
                  <td>
                    <div className="d-flex gap-2">
                      <button
                        className="btn btn-outline-success"
                        onClick={() => handleShow(client._id)}
                      >
                        <i className="bi bi-eye-fill"></i>
                      </button>
                      <button 
                        className="btn btn-outline-success"
                        onClick={()=>handleEdit(client)}
                      
                      >
                        <i className="bi bi-pencil-square"></i>
                      </button>
                      <button
                        className="btn btn-outline-success"
                        onClick={() => handleDelete(client)}
                      >
                        <i className="bi bi-trash3-fill"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
};

export default Clientes;
