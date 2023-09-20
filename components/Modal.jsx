import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example({show, handleClose, clientInfo}) {

  console.log(clientInfo)
  
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{clientInfo.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><span className='fw-bold'>Forma de contacto:</span> {clientInfo.contact}</p>
          <p><span className='fw-bold'>Interés:</span> {clientInfo.interested}</p>
          <p><span className='fw-bold'>Asignado a:</span> {clientInfo.asigned}</p>
          <p><span className='fw-bold'>Medio publicitario:</span> {clientInfo.contactRef}</p>
          <p><span className='fw-bold'>Es empresa de Bienes y Raíces:</span> {clientInfo.rsCompany == "true" ? "Sí" : "No"}</p>
          <p><span className='fw-bold'>Mensaje inicial del cliente:</span> {clientInfo.clientMessage}</p>
          <p><span className='fw-bold'>Teléfono de contacto:</span> {clientInfo.clientPhone}</p>
          <p><span className='fw-bold'>Correo:</span> {clientInfo.clientEmail}</p>
          <p><span className='fw-bold'>Comentarios del corredor:</span> {clientInfo.brokerComment}</p>
        </Modal.Body>
        <Modal.Footer>
{/*           <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          <Button variant="primary" onClick={handleClose}>
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;