
$(document).ready(function(){
    $(window).scroll(function(){
        var x=$(document).scrollTop();
        console.log(x)
        if(x>600){
             
$ (".bri, .make, .hero").animate({
    "width":"170px",
    "height":"400px"
},1000)
   
        }
    });
});


  $(window).scroll(function(){
        var x=$(document).scrollTop();
        console.log(x)
        if(x>1000){
             
$ (".hair").animate({
    "width":"500px",
    "height":"300px"
},1000)
   
        }
    });
    $(window).scroll(function(){
        var x=$(document).scrollTop();
        console.log(x)
        if(x>1700){
             
$ (".box,.box1,.box2").animate({
    "width":"350px"
    
},1000)
   
        }
       

  
    });
