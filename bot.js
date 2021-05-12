var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\Thanks$/;
  name1 = /^\Dye #$/;
  name2 = /^\Terry #$/;
  name3 = /^\Pendleton #$/;
  name4 = /^\Higa #$/;
  name5 = /^\Jaeck #$/;
  name6 = /^\Chavez #$/;
  name7 = /^\Munoz #$/;
  name8 = /^\Iverson #$/;
  name9 = /^\Gray #$/;
  name10 = /^\Krysinksi #$/;
  name11 = /^\Trivitt #$/;
  name12 = /^\Moniot #$/;
  name13 = /^\Stackhouse #$/;
  name14 = /^\Howes #$/;
  name15 = /^\Roberts #$/;
  name16 = /^\Gnio #$/;
  name17 = /^\Beach #$/;
  name18 = /^\Lloyd #$/;
  name20 = /^\Berggren #$/;
  
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(99);
    this.res.end();
  } else if (request.text && name1.test(request.text)) {
    this.res.writeHead(200);
    postMessage(1);
    this.res.end();
  } else if (request.text && name2.test(request.text)) {
    this.res.writeHead(200);
    postMessage(2);
    this.res.end();
  } else if (request.text && name3.test(request.text)) {
    this.res.writeHead(200);
    postMessage(3);
    this.res.end();
  } else if (request.text && name4.test(request.text)) {
    this.res.writeHead(200);
    postMessage(4);
    this.res.end();
  } else if (request.text && name5.test(request.text)) {
    this.res.writeHead(200);
    postMessage(5);
    this.res.end();
  } else if (request.text && name6.test(request.text)) {
    this.res.writeHead(200);
    postMessage(6);
    this.res.end();
  } else if (request.text && name7.test(request.text)) {
    this.res.writeHead(200);
    postMessage(7);
    this.res.end();
  } else if (request.text && name8.test(request.text)) {
    this.res.writeHead(200);
    postMessage(8);
    this.res.end();
  } else if (request.text && name9.test(request.text)) {
    this.res.writeHead(200);
    postMessage(9);
    this.res.end();
  } else if (request.text && name10.test(request.text)) {
    this.res.writeHead(200);
    postMessage(10);
    this.res.end();
  } else if (request.text && name11.test(request.text)) {
    this.res.writeHead(200);
    postMessage(11);
    this.res.end();
  } else if (request.text && name12.test(request.text)) {
    this.res.writeHead(200);
    postMessage(12);
    this.res.end();
  } else if (request.text && name13.test(request.text)) {
    this.res.writeHead(200);
    postMessage(13);
    this.res.end();   
  } else if (request.text && name14.test(request.text)) {
    this.res.writeHead(200);
    postMessage(14);
    this.res.end();   
  } else if (request.text && name15.test(request.text)) {
    this.res.writeHead(200);
    postMessage(15);
    this.res.end();   
  } else if (request.text && name16.test(request.text)) {
    this.res.writeHead(200);
    postMessage(16);
    this.res.end();   
  } else if (request.text && name17.test(request.text)) {
    this.res.writeHead(200);
    postMessage(17);
    this.res.end();   
  } else if (request.text && name18.test(request.text)) {
    this.res.writeHead(200);
    postMessage(18);
    this.res.end();   
  } else if (request.text && name20.test(request.text)) {
    this.res.writeHead(200);
    postMessage(20);
    this.res.end();   
  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(num) {
  var botResponse, options, body, botReq;
  
  if(num == 99)
    botResponse = cool();
  else if(num == 1)
    botResponse = 'Dye: 7024974714';
  else if(num == 2)
    botResponse = 'Terry: 7757425829';
  else if(num == 3)
    botResponse = 'Pendleton: 7025927322';
  else if(num == 4)
    botResponse = 'Higa: 7025402307';
  else if(num == 5)
    botResponse = 'Jaeck: 7753035789';
  else if(num == 6)
    botResponse = 'Chavez: 7028852449';
  else if(num == 7)
    botResponse = 'Munoz: 9259150611';
  else if(num == 8)
    botResponse = 'Iverson: 7753158902';
  else if(num == 9)
    botResponse = 'Gray: 7757209151';
  else if(num == 10)
    botResponse = 'Krysinksi: 7755153029';
  else if(num == 11)
    botResponse = 'Trivitt: 7752302891';
  else if(num == 12)
    botResponse = 'LTC Moniot: \n 775-682-7471 \n dmoniot@unr.edu';
  else if(num == 13)
    botResponse = 'CPT Stackhouse: \n  775-682-7468 \n  astackhouse@unr.edu';
  else if(num == 14)
    botResponse = 'SFC Howes: \n  775-350-5061  \n rhowes@unr.edu';
  else if(num == 15)
    botResponse = 'SSG Roberts: \n  775-682-7476  \n  blakeroberts@unr.edu';
  else if(num == 16)
    botResponse = 'Mr. Gnio: \n 775-682-7472  \n  tgniotczynski@unr.edu';
  else if(num == 17)
    botResponse = 'Mrs. Beach: \n 775-682-7473 \n lharris@unr.edu';
  else if(num == 18)
    botResponse = 'Mr. Lloyd: \n  775-682-7470 \n jameslloyd@unr.edu';
  else if(num == 20)
    botResponse = 'Berggren:  \n  775-434-4663 \n cberggren2000@gmail.com';
  
  botResponse += '\n\n*beep boop*';
    
  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };


  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}


exports.respond = respond;
