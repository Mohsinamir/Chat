/**
 * Created by ATTA-UR- on 14/11/2015.
 */
//var storeAllData = [];
//var chatSub=function(){
//
//    alert("Hello Chat application is now working process best of luck");
//    var storechatData = document.getElementById('txtbox').value; //we use .value because we get value from input field
//    console.log("storechatData");
//    console.log(storechatData);
//    document.getElementById('section').innerHTML = "Mohsin"+":"+storechatData; // we use innerHtml becaause we want to show our data in specific portion in html page
//};


var storeUserName = [];
var tabishchatactive = function () {

    var userName = "Tabish Ikram";
    var inputvalueenable = document.getElementById('txtbox');
    inputvalueenable.readOnly = false;
    storeUserName.push({
        name : userName
    });

};



var salmanchatactive = function () {

    var userName = "Salman Hasan";
    var inputvalueenable = document.getElementById('txtbox');
    inputvalueenable.readOnly = false;

    if(storeUserName && storeUserName.length){
        storeUserName.pop(0,1)
    }
    else{
        storeUserName.push({
            name : userName
        });
    }
};


var mohsinchatactive = function () {

    var userName = "Mohsin Amir";
    var inputvalueenable = document.getElementById('txtbox');
    inputvalueenable.readOnly = false;

    if(storeUserName && storeUserName.length){
        storeUserName.pop(0,1)
    }
    else{
        storeUserName.push({
            name : userName
        });
    }
};

var attachatactive = function () {

    var userName = "Atta";
    var inputvalueenable = document.getElementById('txtbox');
    inputvalueenable.readOnly = false;

    if(storeUserName && storeUserName.length){
        storeUserName.pop(0,1)
    }
    else{
        storeUserName.push({
            name : userName
        });
    }
};


var rawaizchatactive= function () {

    var userName = "Rawaiz";
    var inputvalueenable = document.getElementById('txtbox');
    inputvalueenable.readOnly = false;

    if(storeUserName && storeUserName.length){
        storeUserName.pop(0,1)
    }
    else{
        storeUserName.push({
            name : userName
        });
    }
}


var chatSub = function () {
        var storeChatData = document.getElementById('txtbox').value;

        if(storeUserName && storeUserName.length){
            if(storeChatData){
                   document.getElementById('section').innerHTML = document.getElementById('section').innerHTML+ " <br/>" + storeChatData;
                   document.getElementById('names').innerHTML = storeUserName[0].name
                   document.getElementById('txtbox').value ="";
            }
        }
}


//var usersArray = [
//                     salman ={
//                        id : 1,
//                        name : 'salman',
//                         message :[]
//                    },
//                    mohsin ={
//                        id : 1,
//                        name : 'Mohsin',
//                        message :[]
//                    },
//                    kashif={
//                        id : 1,
//                        name : 'Kashif',
//                        message :[]
//                    },
//                    atta ={
//                        id : 1,
//                        name : 'Atta',
//                        messge : []
//                    },
//                    Tabish ={
//                        id : 1,
//                        name : 'Tabish',
//                        messge : []
//                    }
//
//];
