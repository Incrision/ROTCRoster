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
  name21 = /^\Bowers #$/;
  name22 = /^\Esparza #$/;
  name23 = /^\Hanson #$/;
  name24 = /^\Hernandez #$/;
  name25 = /^\Jansen #$/;
  name26 = /^\Littleford #$/;
  name27 = /^\Magel #$/;
  name28 = /^\McNamara #$/;
  name29 = /^\Mullins #$/;
  name31 = /^\Perkins #$/;
  name32 = /^\Phillips #$/;
  name33 = /^\Publico #$/;
  name34 = /^\Rodriguez #$/;
  name35 = /^\Russom #$/;
  name36 = /^\Sanderson #$/;
  name37 = /^\Spencer #$/;
  name38 = /^\Taylor #$/;
  name39 = /^\Thisson #$/;
  name40 = /^\Weber #$/;
  
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
  } else if (request.text && name21.test(request.text)) {
    this.res.writeHead(200);
    postMessage(21);
    this.res.end();   
  } else if (request.text && name22.test(request.text)) {
    this.res.writeHead(200);
    postMessage(22);
    this.res.end();   
  } else if (request.text && name23.test(request.text)) {
    this.res.writeHead(200);
    postMessage(23);
    this.res.end();   
  } else if (request.text && name24.test(request.text)) {
    this.res.writeHead(200);
    postMessage(24);
    this.res.end();   
  } else if (request.text && name25.test(request.text)) {
    this.res.writeHead(200);
    postMessage(25);
    this.res.end();   
  } else if (request.text && name26.test(request.text)) {
    this.res.writeHead(200);
    postMessage(26);
    this.res.end();   
  } else if (request.text && name27.test(request.text)) {
    this.res.writeHead(200);
    postMessage(27);
    this.res.end();   
  } else if (request.text && name28.test(request.text)) {
    this.res.writeHead(200);
    postMessage(28);
    this.res.end();   
  } else if (request.text && name29.test(request.text)) {
    this.res.writeHead(200);
    postMessage(29);
    this.res.end();   
  } else if (request.text && name30.test(request.text)) {
    this.res.writeHead(200);
    postMessage(30);
    this.res.end();   
  } else if (request.text && name31.test(request.text)) {
    this.res.writeHead(200);
    postMessage(31);
    this.res.end();   
  } else if (request.text && name32.test(request.text)) {
    this.res.writeHead(200);
    postMessage(32);
    this.res.end();   
  } else if (request.text && name33.test(request.text)) {
    this.res.writeHead(200);
    postMessage(33);
    this.res.end();   
  } else if (request.text && name34.test(request.text)) {
    this.res.writeHead(200);
    postMessage(34);
    this.res.end();   
  } else if (request.text && name35.test(request.text)) {
    this.res.writeHead(200);
    postMessage(35);
    this.res.end();   
  } else if (request.text && name36.test(request.text)) {
    this.res.writeHead(200);
    postMessage(36);
    this.res.end();   
  } else if (request.text && name37.test(request.text)) {
    this.res.writeHead(200);
    postMessage(37);
    this.res.end();   
  } else if (request.text && name38.test(request.text)) {
    this.res.writeHead(200);
    postMessage(38);
    this.res.end();
  } else if (request.text && name39.test(request.text)) {
    this.res.writeHead(200);
    postMessage(39);
    this.res.end();
  } else if (request.text && name40.test(request.text)) {
    this.res.writeHead(200);
    postMessage(40);
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
    botResponse = 'Dye: \n  7024974714 \n cdye@nevada.unr.edu';
  else if(num == 2)
    botResponse = 'Terry: \n  7757425829 \n gwynterry@nevada.unr.edu';
  else if(num == 3)
    botResponse = 'Pendleton: \n  702-467-4577 \n kzn1015@gmail.com'';
  else if(num == 4)
    botResponse = 'Higa: \n 7025402307 \n dylanhiga@nevada.unr.edu';
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
  else if (num == 13)
    botResponse = 'CPT Stackhouse: \n  775-682-7468 \n  astackhouse@unr.edu';
  else if (num == 14)
    botResponse = 'SFC Howes: \n  775-350-5061  \n rhowes@unr.edu';
  else if (num == 15)
    botResponse = 'SSG Roberts: \n  775-682-7476  \n  blakeroberts@unr.edu';
  else if (num == 16)
    botResponse = 'Mr. Gnio: \n 775-682-7472  \n  tgniotczynski@unr.edu';
  else if (num == 17)
    botResponse = 'Mrs. Beach: \n 775-682-7473 \n lharris@unr.edu';
  else if (num == 18)
    botResponse = 'Mr. Lloyd: \n  775-682-7470 \n jameslloyd@unr.edu';
  else if (num == 20)
    botResponse = 'Berggren:  \n  775-434-4663 \n cberggren2000@gmail.com';
  else if (num == 21)
    botResponse = 'Bowers: \n 916-717-7258  \n jmb0002@gmail.com';
  else if (num == 22)
     botResponse = 'Esparza: \n 916-295-2616 \n jacksonwesparza@gmail.com';
  else if (num == 23)
    botResponse = 'Hanson: \n 530-314-0574 \n mrmikeray1@gmail.com';
  else if (num == 24)
    botResponse = 'Hernandez: \n  209-329-5123 \n rubbertoe1217@gmail.com';
  else if (num == 25)
    botResponse = 'Jansen: \n 702-460-0050 \n ajansen@nevada.unr.edu';
  else if (num == 26)
    botResponse = 'Littleford: \n 916-496-4434 \n jt.littleford@gmail.com';
  else if (num == 27)
    botResponse = 'Magel: \n  702-557-7859 \n kmagel@nevada.unr.edu';
  else if (num == 28)
    botResponse = 'McNamara: \n 775-830-9698 \n brennan.mcnamara@gmail.com';
  else if (num == 29)
    botResponse = 'Mullins: \n  702-750-5846 \n djmullin13@gmail.com';
  else if (num == 31)
    botResponse = 'Perkins: \n  775-420-7375 \n ryleeperkins143@gmail.com';
  else if (num == 32)
    botResponse = 'Phillopy: \n 970-426-8767 \n npphillips90@gmail.com';
  else if (num == 33)
    botResponse = 'Publico: \n  925-565-7208 \n scienn.publico@yahoo.com';
  else if (num == 34)
    botResponse = 'Rodriguez: \n  775-409-0192 \n meybelinr2@gmail.com';
  else if (num == 35)
    botResponse = 'Russom: \n 702-686-5189 \n warsiy56@gmail.com';
  else if (num == 36)
    botResponse = 'Sanderson: \n  702-956-7190 \n bsanderson@outlook.com';
  else if (num == 37)
    botResponse = 'Spencer: \n  415-827-8749 \n parkerspencer00@gmail.com';
  else if (num == 38)
    botResponse = 'Taylor: \n  775-470-0943 \n  aaliyahtaylor755@gmail.com';
  else if (num == 39)
    botResponse = 'Thisson: \n  951-314-1393 \n jonasthissen@outlook.com';
  else if (num == 40)
    botResponse = 'Weber: \n 702-469-2584 \n  brandon.1842700@gmail.com';
  
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
