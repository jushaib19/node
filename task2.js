const axios = require('axios');
const fs = require('fs');


    const data = fs.readFileSync('memberUrl.txt', 'UTF-8');
    const initial = 'https://api.packagex.app/dev/';
    const auth = "eyJraWQiOiIrXC9vcnlZNFR1ZUJaSmtXWWZHb0ZPRnlEWGlkMGx1R2xRKzYreG1cLzNuMVU9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI2ZmU3OGM4Yy02ZmYxLTQ1OTktOTRmNy1hOTA3NzQ5ZjM2ZTMiLCJhdWQiOiI1b2NlMGV2cWYwbWZpZnV1aGFiZ2Zqamp1cSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6IjRkYzE3MWViLTVmNmEtNDY3Yi1hNDhlLTRjNTlkMTkxMDI2NSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNTg2MTY5MzI0LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9SWDRKUWwzdnQiLCJuYW1lIjoiSnVzaGFpYiBNYWhtb29kIiwiY29nbml0bzp1c2VybmFtZSI6IjZmZTc4YzhjLTZmZjEtNDU5OS05NGY3LWE5MDc3NDlmMzZlMyIsImV4cCI6MTU4NjE3MjkyNSwiaWF0IjoxNTg2MTY5MzI1LCJlbWFpbCI6Imp1c2hhaWIubWFobW9vZEB2aXNpb254LmlvIn0.T027_de61b-DOXIXz6FSHZZ_ICyc1ph1ZdvyF_6PBjUzbr0IyKQ26sHk60qbh-pW3P7SpFgvSySkJ4FFnZn7SC1Jjo1rTIlmfQxglTD0pCIZt446PrSX06eLPKpVp9iV8AgCcrpg5gkuZB-cgVHm_QN55cyE289zGCa_61x6C-fEPd6T4KQ7evwpivjBapS05ZrSOnvRRNaccewA4xZDdE0Xo7NhTAj4AC2k35x51Yo9aQcy7rFSMe-C-jDcR_hORVzz_AT54IGbqI8TvvieTBBncLX9_hRbuSjgw5yyQ4pgaGc-p2QJOD0p4ZCIzDG3KLXtempum_tyj-J7Jmay5g";

    const lines = data.split(/\r?\n/);

    lines.forEach((line) => {
        let url = `${initial}${line}`;
        let start = Date.now();
        axios.get(url, {
     headers:{
        "Authorization" : auth
     }
 })
 .then(function(response) {
//     console.log("checkingggggg");
   console.log(response.data);
   console.log(response.status);
   let jsonResponse = JSON.stringify(response.data);
   let timee = Date.now() - start;
fs.appendFileSync('test2.csv',`URL:${url} \n Response:${jsonResponse} \n Status Code:${response.status} \n Execution Time:${timee} \n` );
 })
 .catch(function(error) {
  console.log(error);
 });

        
 });
