 const request = require('request');

const fs = require('fs');


    const data = fs.readFileSync('memberUrl.txt', 'UTF-8');
    const initial = 'https://api.packagex.app/dev/';
    const auth= 'eyJraWQiOiIrXC9vcnlZNFR1ZUJaSmtXWWZHb0ZPRnlEWGlkMGx1R2xRKzYreG1cLzNuMVU9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI2ZmU3OGM4Yy02ZmYxLTQ1OTktOTRmNy1hOTA3NzQ5ZjM2ZTMiLCJhdWQiOiI1b2NlMGV2cWYwbWZpZnV1aGFiZ2Zqamp1cSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6IjU3MjJlYzE3LTU1MzAtNGViOC05YWI5LTZiZDQ2ZWQ2M2JlYyIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNTg2MTY1NTMyLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9SWDRKUWwzdnQiLCJuYW1lIjoiSnVzaGFpYiBNYWhtb29kIiwiY29nbml0bzp1c2VybmFtZSI6IjZmZTc4YzhjLTZmZjEtNDU5OS05NGY3LWE5MDc3NDlmMzZlMyIsImV4cCI6MTU4NjE2OTEzMywiaWF0IjoxNTg2MTY1NTMzLCJlbWFpbCI6Imp1c2hhaWIubWFobW9vZEB2aXNpb254LmlvIn0.cWdqyaaUel7gx7003nFBA2zdmxLcpLG_Szsa4VwOIg96siM2OedU0D3Jj6Vl8yZR9fCSMzdxrjvfowNxQweniqXeTNeAk4c4DCywjlRjq9RTDgFZZU9Xt0WO3uxmLe18CyWcXnTfnjjvtHFXWqaGk90Bk6lgqBZlpifcpCfaVGeg8mJGthbIWLGTQaVO8O5Y40XhxN8kKqeCf4POOoOcSt7kCcZfmB5EHGzTyIObCCLOdpx1-KLjj68Lsd9yzCdnnAfRcNgJDAoN-pIypfvYbeEDLEMC0TdYg-sDv2A_0x_5FDs8j_CksQ0tU4pqPiqI3bQ04aeFJfB76sv_maQOAw';
    
    const lines = data.split(/\r?\n/);

    lines.forEach((line) => {
        let url = `${initial}${line}`;
      
        request({url: url, time: true,
    
            headers: {
            "Authorization" : auth
        }
        }, (error, response ) => {
            fs.appendFileSync('test.csv',`URL:${url} \n Response:${response.body} \n Status Code:${response.statusCode} \n Execution Time: ${response.elapsedTime} \n` );
        })
        

    });
