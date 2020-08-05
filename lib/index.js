"use strict";

const request = require("request")
    , querystring = require("querystring")
    ;

module.exports = class YonduBroadcastAPI {
    /**
     * YonduBroadcastAPI
     * Creates the instance of the `YonduBroadcastAPI` class.
     *
     * @name YonduBroadcastAPI
     * @function
     * @param {Object} options An object containing:
     *
     *  - `host` (String): YonduBroadcast API host (Optional default: `https://smsapi.mobile360.ph/v2/api`).
     *  - `timeout` (Integer): integer containing the number of milliseconds to wait for a server to send response headers (and start the response body) before aborting the request.  (Optional default: 60000).
     */
    constructor (options) {

        this.host = options.host || "https://smsapi.mobile360.ph/v2/api";
        this.timeout = options.timeout || 60*1000;
        this.request = request;
    }

    /**
     * brdcstmsg
     * Send broadcast message request to YonduBroadcastAPI
     *
     * @name brdcstmsg
     * @function
     * @param {Object} data. To be passed by the client. (mandatory)
     * @param {Function} cb The callback function.
     */
    brdcstmsg (data, cb) {
        return this._request({
            url: "broadcast",
            method: "post",
            data: data
        }, cb);
    }

    /**
     * _request
     * Low level function for making requests to the API endpoints.
     *
     * @name _request
     * @function
     * @param {Object} options An object containing the following fields:
     *
     *  - `url` (String): The api endpoint.
     *  - `method` (String): The request method (default: `get`).
     *  - `query` (Object): The query object.
     *  - `data` (Object): The POST data object.
     *  - `version` (String): API Version. If not specified your pinned verison is used.
     *
     * @param {Function} cb The callback function.
     */
    _request (options, cb) {
        let _url = options.url
          , method = options.method || "get"
          , query = options.query || {}
          , data = options.data
          , timeout = this.timeout
          , qs = querystring.stringify(query)
          , removeTrailingSlash = options.removeTrailingSlash || false
          , url = this.host + "/" + _url + (removeTrailingSlash ? "" : "/") + (qs ? "?" + qs : "")
          ;
          console.log(options);
          
        return request({
            url: url
          , method: method
          , timeout: timeout
          , headers: {
             'Content-Type': 'application/json'
            }
          , json: data ? data : true
        }, (err, res) => {
            if (res && res.body ) 
                cb(err, res.body, res); 
            else 
                cb(err, null, res)
        })
    }
};