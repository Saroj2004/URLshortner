
let btn = document.getElementById("shorten");
let shorturl=document.getElementById("shorturl");
let Copy =document.getElementById("copy");

btn.addEventListener('click', short);

async function short(){
    let longURL = document.getElementById("longurl").value;
    let shortURL = document.getElementById("shorturl");

    const result = await fetch(`https://api.shrtco.de/v2/shorten?url=${longURL}`);
    const data = await result.json();

    shortURL.value = data.result.short_link2;
}
let copied = document.getElementById("copy");
copied.onclick=function() {
    
    document.getElementById("color").style.color="#000";

   
    
}

Copy.addEventListener("click",()=>{
    navigator.clipboard.writeText(shorturl.value);
    copy.innerHTML ="copied";

    setTimeout(() => {
        copy.innerHTML="copied";
        
    },1000);
});





    
