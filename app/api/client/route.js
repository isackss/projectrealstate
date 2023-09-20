import { connectToDB } from "@/utils/database"
import Client from "@/models/client"

export const GET = async (request) => {
    try{
        await connectToDB()

        const clients = await Client.find({})
        return new Response(JSON.stringify(clients), {status: 200})
    } catch(error){
        return new Response("Failed to fetch all clients", {status: 500})
    }
}