import { Schema, model, models } from "mongoose";

const ClientSchema = new Schema({
  name: {
    type: String,
    required: [true, "Username is required!"],
    /* match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._áéíóúñ]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"], */
  },
  email: {
    type: String,
    /* unique: [true, "Email already exists!"],
    required: [true, "Email is required!"], */
  },

  /*     image: {
        type: String,
    }, */
  contact: {
    type: String,
  },
  interested: {
    type: String,
  },
  asigned: {
    type: String,
  },
  contactRef: {
    type: String,
  },
  rsCompany: {
    type: String,
  },
  clientMessage: {
    type: String,
  },
  clientPhone: {
    type: String,
  },
  clientEmail: {
    type: String,
  },
  brokerComment: {
    type: String,
  },
});

const Client = models.Client || model("Client", ClientSchema);

export default Client;
