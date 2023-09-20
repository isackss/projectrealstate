"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";

import ClientForm from "@/components/ClientForm";


const EditClient = () => {

  const router = useRouter()
  const searchParams = useSearchParams()
  const clientId = searchParams.get("id")
  
  const [submitting, setSubmitting] = useState(false)
  const [client, setClient] = useState({
    name: "",
    contact: "",
    interested: "",
    asigned: "",
    contactRef: "",
    rsCompany: "",
    clientMessage: "",
    clientPhone: "",
    clientEmail: "",
    brokerComment: ""
  });

  useEffect(()=>{
    const getClientDetails = async () => {
      const response = await fetch(`/api/client/${clientId}`)
      const data = await response.json()
      setClient(data)
    }
    clientId && getClientDetails()
  }, [clientId])

  const updateClient = async (e) => {
    e.preventDefault();

    setSubmitting(true)

    try {
      const response = await fetch(`/api/client/${clientId}`, {
        method: "PATCH",
        body: JSON.stringify({
          name: client.name,
          contact: client.contact,
          interested: client.interested,
          asigned: client.asigned,
          contactRef: client.contactRef,
          rsCompany: client.rsCompany,
          clientMessage: client.clientMessage,
          clientPhone: client.clientPhone,
          clientEmail: client.clientEmail,
          brokerComment: client.brokerComment
        })
      })
      if(response.ok){
        router.push("/clientes")
      }
    } catch (error){
      console.log(error)
    } finally {
      setSubmitting(false)
    }
  }

  console.log(client)
  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Actualizar datos del cliente</h1>
      </div>
      <ClientForm 
        type="Editar"
        client={client}
        setClient={setClient}
        submitting={submitting}
        handleSubmit={updateClient}
      />
    </main>
  );
};

export default EditClient;