var answer=['blondie','madonna','metalica','poison','queen','rush','toto','journey']
var x=null;
var y;
var arr=[]
var wins=null;
var s=13
function rand() {
    var random= Math.floor(Math.random() * (answer.length - 1) ) + 1;
    x=answer[random]
    for(let i of x){
        arr.push(" - ");
    }
    y=$('#current-word').html(arr)
    $("#guesses-remaining").html(s)
    $('#guessed-letters').html(x[0])
}
rand() 
$(window).keyup(function(e){
    console.log(e.which)
    if(e.which!=116){
        if(x.indexOf(e.key)>-1){
            for(let i in x) {
                if (e.key === x[i]) {
                    arr[i] = e.key;
                }
            }
            arr[x.indexOf(e.key)]=e.key
            y.html(arr)
        }
        else{
               $("#guesses-remaining").html(--s)
        }
    }
        if(arr.indexOf(" - ")<0){   
           $("#wins").html(++wins)
           arr=[]
           s=13
           y.html("")
           rand()
        }
        else if(s==0){
            arr=[]
            s=13
            y.html("")
            rand() 
        }
})