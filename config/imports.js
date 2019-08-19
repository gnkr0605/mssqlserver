/*
    to maintain all the modules
*/
//create json object
//json object contain "all modules imports"
//export the json object
//every one can import json object
//module is the predefined object, used to export
//require() used to import the modules
module.exports = {
    express		:	require("express"),
    mssql		:	require("mssql"),
    bodyparser	:	require("body-parser"),
    cors		:	require("cors")
};
