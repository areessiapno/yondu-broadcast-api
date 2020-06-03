Documentation

You can see below the API reference of this module.

YonduBroadcastAPI (options)

Creates the instance of the YonduBroadcastAPI class.

Params

String yourUserName: API username (mandatory).

String yourPassword : API password (mandatory).

Integer timeout : integer containing the number of milliseconds to wait for a server to send response headers (and start the response body) before aborting the request. (Optional default: 60000).

brdcstmsg(data, cb)

Send broadcast sms request to api

Object data : (mandatory).

Function cb The callback function.
