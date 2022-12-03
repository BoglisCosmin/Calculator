var res1="";
var res2="0";
var resa="";
var indexNumber;
var indexPunct;
var indexSemn;
let nr1;
let nr2;
let res=0;
let contor=0;
let index=0;
let car;
let oldOperator="+";
let newOperator="";

function number(numar){

    indexPunct=0;
    index=0;
    indexSemn=1;

    if(res2.length>19){
        return;
    }

    if(res2=="0"){
        res2="";
    }

    if(indexNumber==1){
        res2="";
        indexNumber=0;
    }
    res2=res2.concat(numar);
    document.getElementById("ecran2").innerHTML=res2;
  
}

function semn(operator){


    if(resa.slice(-1)=="/" && res2=="0"){
        alert("you can't divide / 0")
        return;
    }

    contor++;
    indexNumber=1;
    indexPunct=1;
    if(index==0){
        nr2=res2;
        car=res2;
        index=1;
        res2="0";
        res1=car;
    }
  

    if(res2.slice(-1)=="."){
        contor--;
         indexNumber=0;
         return;
    }
  
    if(res1.slice(-1)==operator){
        contor--;
        return;
    }else
    if(res1.slice(-1)=="x" || res1.slice(-1)=="/"|| res1.slice(-1)=="+"||res1.slice(-1)=="-")
    { 
        contor--;
        res1=res1.substring(0,res1.length-1);
    }
   
    res1=parseFloat(res1);
    console.log(typeof res1, res1);


   if(oldOperator=="+"){
    res=res+res1;
    console.log(typeof res, res);
    res=res.toString();
    console.log(typeof res, res);
    console.log(typeof res1, res1);
    res1=res;
    res1=res1.toString();
    console.log(typeof res1, res1);
    res=parseFloat(res);
}

if(oldOperator=="-"){
    res=res-res1;
    console.log(typeof res, res);
    res=res.toString();
    console.log(typeof res, res);
    console.log(typeof res1, res1);
    res1=res;
    res1=res1.toString();
    console.log(typeof res1, res1);
    res=parseFloat(res);
}

if(oldOperator=="x"){
    res=res*res1;
    console.log(typeof res, res);
    res=res.toString();
    console.log(typeof res, res);
    console.log(typeof res1, res1);
    res1=res;
    res1=res1.toString();
    console.log(typeof res1, res1);
    res=parseFloat(res);
}

if(oldOperator=="/"){
    res=res/res1;
    console.log(typeof res, res);
    res=res.toString();
    console.log(typeof res, res);
    console.log(typeof res1, res1);
    res1=res;
    res1=res1.toString();
    console.log(typeof res1, res1);
    res=parseFloat(res);
}

    res1=res1.concat(operator);
    console.log("contor:"+ contor);
    


    document.getElementById("ecran2").innerHTML=res2;   
    
  
    document.getElementById("ecran1").innerHTML=res1;
    oldOperator=operator;
    resa=res1;
    res1=res1.substring(0,res1.length-1);
}

function punct(pct){
    indexNumber=0;
    if(indexPunct==1){
        res2="0";
        indexPunct=0;
    }

    

    if(res2.indexOf(".")!=-1){
        return; 
    }

 

    res2=res2.concat(pct);
    document.getElementById("ecran2").innerHTML=res2;
}


function deleteOne(){
    
     if(res2.charAt(0)=="0"){
         return;
     }
 
  
   
   
 
     res2=res2.substring(0,res2.length-1);
     
     if(res2.length == 0){
     res2="0";
     }
 
 
     document.getElementById("ecran2").innerHTML=res2;
     
 }
 

function stergereCE(){
    res2="0";  
    document.getElementById("ecran2").innerHTML=res2;
}


function clearAll(){
    res=0;
    res1="0";
    res2="0";
    document.getElementById("ecran1").innerHTML="&nbsp;";
    document.getElementById("ecran2").innerHTML=res2;
    index=0; 
    contor=0;
    indexSemn=1;
    indexPunct=0;
}

