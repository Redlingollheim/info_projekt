// src/backend/src/validation.ts
import Ajv, { JSONSchemaType } from "ajv";
import addFormats from "ajv-formats";

const ajv = new Ajv();
addFormats(ajv); // Hinzufügen von Formatvalidierungen wie "email"

interface UserData {
  email: string;
  name: string;
  datum: string;
}

const schema: JSONSchemaType<UserData> = {
  type: "object",
  properties: {
    email: { type: "string", format: "email" 
    },  
    name: { 
      type: "string",
      pattern: "^[a-zA-Z\\s-]+$"  // Leerzeichen und Bindestriche zulassen
    },
    datum: {
       type: "string", format: "date" 
      },
    },
  
  required: ["email", "name", 'datum'],
  additionalProperties: false
};

export const validateUserData = ajv.compile(schema);