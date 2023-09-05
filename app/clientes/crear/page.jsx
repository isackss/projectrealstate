"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import ClientForm from "@/components/ClientForm";


const CrearCliente = () => {

  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)
  const [client, setClient] = useState({
    name: "",
    contact: "",
    interested: "",
    asigned: "",
    contactRef: "",
    rsCompany: false,
    clientMessage: "",
    clientPhone: "",
    clientEmail: "",
    brokerComment: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem("clients")) || [];
    setSubmitting(true)
    console.log(typeof(data))
    data.push(client)
    
    localStorage.setItem("clients", JSON.stringify(data))
    router.push("/clientes")

    console.log(client)
  }

  console.log(client)
  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Registro de clientes</h1>
      </div>
      <ClientForm 
        type="Crear"
        client={client}
        setClient={setClient}
        submitting={submitting}
        handleSubmit={handleSubmit}
      />
    </main>
  );
};

export default CrearCliente;
