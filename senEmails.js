var sendpulse = require("sendpulse-api");

var API_USER_ID = "b1c7d34235ca14a123b7e72a85994f20";
var API_SECRET = "3fa725fcb1b79669325c2285ace9e02d";
var TOKEN_STORAGE = "/tmp/";





sendpulse.init(API_USER_ID, API_SECRET, TOKEN_STORAGE, function(token) {
    if (token && token.is_error) {
        // error handling
        console.log(token)
    }

    console.log( token);

    /**
     * Function to process response data
     *
     * @param data
     */

})
    var answerGetter = function(data) {
      console.log(data);
      console.log("[done:] ")
    }

   

    var email = {
      "html" : "<h1>Example text</h1>",
      "text" : "Example text",
      "subject" : "Example subject",
      "from" : {
        "name" : "Alex",
        "email" : "some@domain.com"
      },
      "to" : [
        {
          "name" : "markus",
          "email" : "horix77777@gmail.com"
        },
      ],
      "bcc" : [
        {
          "name" : "John",
          "email" : "horix77777@gmail.com"
        },
      ]
    };
    
    sendpulse.smtpSendMail(answerGetter,email);