"use client";

import React, { useState } from "react";
import Link from "next/link";

import ClientForm from "@/components/ClientForm";

const CrearInventario = ({ submitting }) => {
  const [property, setProperty] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(property)
  }

  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Registro de propiedades</h1>
      </div>
    </main>
  );
};

export default CrearInventario;
