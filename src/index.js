import prompt from "prompt";

import promptSchemaMain from './prompts-schema/prompt-schema-main.js'
import createQRCode from "./service/qr-code/create.js";
import createPassword from "./service/password/create.js";

async function main(){
   prompt.get(promptSchemaMain, async (err, result) => {
      if(err) console.log("Error ", err);
      if(result.select == 1) await createQRCode();
      if(result.select == 2) await createPassword();
   });

   prompt.start();
}

main();