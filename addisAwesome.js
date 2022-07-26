#!/usr/bin/env node

const addisAwesome = function (baseString, callback){

return callback(baseString + " is awesome")
};
addisAwesome("Training", function (response)  {
    console.log(response);
});
