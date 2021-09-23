'use strict'

function getMac(event) {
    event.preventDefault();
    const countryForm = document.getElementById("form");
    let data = new FormData(countryForm);
    let input = data.get("mac").trim().split('.').join("").split("");
    let mac = '';
    for (let i=0;i<input.length;i+=2){
        if (i>8){
            mac += input[i]+input[i+1];
        } else {
            mac += input[i]+input[i+1]+":";
        }
    }
    let elem = document.createElement(`p`);
    elem.innerHTML = mac;
    document.getElementById("changeMak").insertBefore(elem,document.getElementById("changeMak").firstChild);
}

function getMac1(event) {
    event.preventDefault();
    const countryForm = document.getElementById("form-1");
    let data = new FormData(countryForm);
    let arrayOfStrings = data.get("mac-1").trim().split('.');
    //let input = data.get("mac").trim().split('.').join("").split("");
    let oktet3 = arrayOfStrings[2];

    let mac = '';
    var arr55 = [147,148,149,153,164,171,190,192,193,194,199]
    var arr115 = [48,49,62]
    var arr104 = [165,166,167,168,164,73,74,71,72,169,173,179]
    var arr112 = [70,94,95,96,97,98,99]
    var arr95 = [24,34,40,52]
    var arr96 = [136,21,22,23,28,61,66,120,132,143,145,146]
    var arr124 = [110,111,113,114,116,117,118,121,124,175,176,177,178]
    var arr187 = [80,81,82,83,84,87,88,89,170]
    var arr115 = [75,76,77,78,79,171,172,174,196,195]
    var arr10 = [101,102,103,180,181]
    var arr161 = [126,127,161]
    var arr85 = [138,198,215,216,217,218,219]
 
    var arr100 = [90,91,92,93,104,105,106,107,182,183]
    var arr84 = [134,140]
    var arr89 = [29,123,129,154,104,]
    if(arr55.includes(parseInt(oktet3,10))){
        mac = '10.1.14.55'
    }
    else if(arr115.includes(parseInt(oktet3,10))){
        mac = '10.1.14.101'
    }
 else if(arr161.includes(parseInt(oktet3,10))){
        mac = '10.1.14.161'
    }

else if(arr100.includes(parseInt(oktet3,10))){
        mac = '10.1.14.100'
    }
    else if(arr104.includes(parseInt(oktet3,10))){
        mac = '10.1.14.104'
    }
   else if(arr84.includes(parseInt(oktet3,10))){
        mac = '10.1.14.84'
    }
 else if(arr89.includes(parseInt(oktet3,10))){
         mac = '10.1.14.89'
    }
    else if(arr112.includes(parseInt(oktet3,10))){
        mac = '10.1.14.112'
    }
    else if(arr95.includes(parseInt(oktet3,10))){
        mac = '10.1.14.95'
    }
    else if(arr96.includes(parseInt(oktet3,10))){
        mac = '10.1.14.96'
    }
    else if (arr124.includes(parseInt(oktet3,10))) {
        mac = '10.1.14.124'
    }
	else if (arr10.includes(parseInt(oktet3,10))) {
        mac = '10.1.14.10'
    }
	else if (arr85.includes(parseInt(oktet3,10))) {
        mac = '10.1.14.85'
    }
    else if(arr187.includes(parseInt(oktet3,10))){
        mac = '10.1.14.187'
    }
    else if(arr115.includes(parseInt(oktet3,10))){
        mac = '10.1.14.115'
    }
    else{
        mac = 'Таппай койдум'
    }
    let elem = document.createElement(`p`);
    elem.innerHTML = mac;
    document.getElementById("changeMak-1").insertBefore(elem,document.getElementById("changeMak-1").firstChild);
}

window.addEventListener("load",function f(){
    document.getElementById("form").addEventListener("submit", getMac);
    document.getElementById("form-1").addEventListener("submit", getMac1);
})