var counter=0;
var count=parseInt(document.getElementById("carImage").style.marginTop) || 0;

function startCar()
{
     setInterval(moveCar,10);
}
function Restart(){
    location.reload();
}
function moveCar(){
    counter=counter+1;
     if(counter<=500)
     {
        document.getElementById("carImage").style.marginLeft=counter + "px" ;
        document.getElementById("xaxis").value=counter;
     }else
     {
        count=count+1;
        document.getElementById("carImage").style.marginTop=count+"px";
        document.getElementById("yaxis").value=count;
     }
}