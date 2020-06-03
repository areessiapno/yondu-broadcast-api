"use strict";

const YonduBroadcastAPI = require("../lib");

var client = new YonduBroadcastAPI({
    username: "yourusername"
  , password: "yourpassword"
});

client.brdcstmsg({
	"username": "yourusername",
	"password": "yourpassword",
	"msisdn" : "yournumber",
	"content" : "yourmessage",
	"shortcode_mask" : "yoursendermask",},(err,body,result)=>{
	console.log(result.toJSON());
});
