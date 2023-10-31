`use strict`

var ready = false;
var countdown = 10;

function loadingisfun(i){

    if(i<50){
        loadingtext = ["loading","please wait","just a moment","hold on","hmmmmmm","one second"][Math.round((i/10)%5)]
    }else if(i<100){
        loadingtext = ["should've loaded by now","this is taking forever","you're still waiting"][Math.round((i/20)%2)]
    }else{
        loadingtext = ["not redirecting you","nothing new's going to appear","you won't miss out it's ok"][Math.round((i/25)%2)]
    }


    for(let j = 0; j < Math.min((3+i/10),10); j++){
        loadingtext += [".","!","?","~","-"][Math.round(Math.random()*4)]
    }

    document.querySelector("#loadingthingy").innerText = loadingtext;

    if(!ready){

    setTimeout(function(){
        console.log(i)
        loadingisfun(i+1);
    },50)

    }
}

loadingisfun(0);

setTimeout(function(){
    if(new URLSearchParams(document.location.search).get("site") == ""){

    }else{
        ready = true;
        setTimeout(function(){
        document.querySelector("body > dialog").show()
        document.querySelector("#loadingthingy").innerText = new URLSearchParams(document.location.search).get("site")
        },100)
    }
},1000)

function redirection(){
    let q = setInterval(function(){
        countdown = countdown - 1;
        document.querySelector("#loadingthingy").innerText = new URLSearchParams(document.location.search).get("site") + " in " + countdown;
        if(countdown == 0){clearInterval(q);loadingisfun(0);countdown = 0;ready = false;}
    },50)
    setTimeout(function(){
        document.location = new URLSearchParams(document.location.search).get("site")
    },500)
}