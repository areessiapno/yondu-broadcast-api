"use strict";

const YonduBroadcastAPI = require("../lib");

var client = new YonduBroadcastAPI({});

client.brdcstmsg({
	"username": "yourusername",
	"password": "yourpassword",
	"msisdn" : "yournumber",
	"content" : "yourmessage",
	"shortcode_mask" : "yoursendermask",},(err,body,result)=>{
	console.log(result.toJSON());
});
