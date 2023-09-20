import { connectToDB } from "@/utils/database";
import Client from "@/models/client";

export const POST = async (req) => {
  const {
    name,
    contact,
    interested,
    asigned,
    contactRef,
    rsCompany,
    clientMessage,
    clientPhone,
    clientEmail,
    brokerComment,
  } = await req.json();

  try {
    await connectToDB();
    const newClient = new Client({
      name,
      contact,
      interested,
      asigned,
      contactRef,
      rsCompany,
      clientMessage,
      clientPhone,
      clientEmail,
      brokerComment,
    });

    await newClient.save();
    return new Response(JSON.stringify(newClient), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to create a new client", { status: 500 });
  }
};
