var progress=document.querySelector(".progress");
var loading=setInterval(loader,50);
var count=0;
function loader(){
    if(count==101)
    {
        clearInterval(loading);
    }
    else{
        progress.textContent=count+"%";
        count++;
    }
}