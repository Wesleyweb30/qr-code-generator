import prompt  from "prompt";
import promptSchemaQrCode from "../../prompts-schema/prompt-schema-qrcode.js";
import handle from "./handle.js";

async function createQRCode(){
   prompt.get(promptSchemaQrCode, handle);

   prompt.start();
}

export default createQRCode;