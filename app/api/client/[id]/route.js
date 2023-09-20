//GET (read)
import { connectToDB } from "@/utils/database";
import Client from "@/models/client";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const client = await Client.findById(params.id);
    if (!client) return new Response("Client not found!", { status: 404 });
    return new Response(JSON.stringify(client), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};

//PATCH (update)
export const PATCH = async (request, { params }) => {
  const { name, email, contact, interested, asigned, contactRef, rsCompany, clientMessage, clientPhone, clientEmail, brokerComment } = await request.json();

  try {
    connectToDB();
    const existingClient = await Client.findById(params.id);

    if (!existingClient)
      return new Response("Client not found!", { status: 404 });

    existingClient.name = name;
    existingClient.email = email;
    existingClient.contact = contact;
    existingClient.interested = interested;
    existingClient.asigned = asigned;
    existingClient.contactRef = contactRef;
    existingClient.rsCompany = rsCompany;
    existingClient.clientMessage = clientMessage;
    existingClient.clientPhone = clientPhone;
    existingClient.clientEmail = clientEmail;
    existingClient.brokerComment = brokerComment;

    await existingClient.save();

    return new Response(JSON.stringify(existingClient), { status: 200 });
  } catch (error) {
    return new Response("Failed to update client", { status: 500 });
  }
};

//DELETE (delete)
export const DELETE = async (req, { params }) => {
  try {
    await Client.findByIdAndDelete(params.id);
    return new Response("Client deleted seccessfully", { status: 200 });
  } catch (error) {
    return new Response("Failed to delete client", { status: 500 });
  }
};