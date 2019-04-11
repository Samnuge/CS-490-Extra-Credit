$(document).ready(init);

function init(){
//code goes here

$('body section:nth-child(1)').on('click',function(){

 $('body section:nth-child(1) div').toggle('display');

    
});

$('body section:nth-child(2)').on('click',function(){

 $('body section:nth-child(2) div').toggle('display');

    
});

$('body section:nth-child(3)').on('click',function(){

 $('body section:nth-child(3) div').css('display','anything');

    
});

}



