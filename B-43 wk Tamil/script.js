//XML-HTTP REQUEST
//it is used to interract with the server via api
// data has been aleardy in server , we need to bring it to client/browser
//4 steps

//1st step: creat a XHR object
var request = new XMLHttpRequest();

//2nd step: API URL
//.open method
//2 parameters
request.open("GET","https://restcountries.com/v2/all");

//3rd step: establishing the bridge
request.send();

//4th setp: once the data successfully received from server
// onloadis an event
//when we use: once the data / server
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);
}
