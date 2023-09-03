const ftime = document.getElementById("fmin");
const rtime = document.getElementById("rmin");
const nsession = document.getElementById("nsession");
const secs = document.getElementById("secs");
const mins = document.getElementById("mins");
const session = document.getElementById("session");
const r=rtime.value;




document.getElementById("submit").addEventListener("click", function () {
  mins.innerHTML = ftime.value;
  nsession.innerHTML = session.value;
  
  ftime.value="";
  rtime.value="";
  session.value="";
});

var timer;
//function for start button
function focustimer(){
  
 if(nsession.innerText>0){
  
    timer=setInterval(function(){
      if (secs.innerText>0){
        secs.innerText--;
      }
      else if(mins.innerText!=0 && secs.innerText==0){
        mins.innerText--;
        secs.innerText=59;
      }
      else if(secs.innerText==0 && mins.innerText==0){
        mins.innerText=1;
        resttimer();
    }},1000);
    


}
else{
  reset();
  console.log("!!!");

}
}

 function resttimer(){

  timer=setInterval(function(){
    if (secs.innerText!=0){
      secs.innerText--;
    }
    else if(mins.innerText!=0 && secs.innerText==0){
      mins.innerText--;
      secs.innerText=59;
    }
   else if( mins.innerText==0 && secs.innerText==0){
      nsession.innerText--;
      mins.innerText=2;
      focustimer();
    }

  },1000)

}

 



document.getElementById("start").addEventListener("click",focustimer);

document.getElementById("restart").addEventListener("click",function(){
  reset();
})

function reset(){
  mins.innerHTML=00;
  secs.innerHTML=00;
  nsession.innerHTML=0;
  stoptimer();
}

function stoptimer(){
  clearInterval(timer);

}

document.getElementById("stop").addEventListener("click",stoptimer);