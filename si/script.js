const bc = new BroadcastChannel('Channel');

  if (document.URL.includes("default.html")  || document.URL.includes("https://sphinixx.co.uk"))  {

  bc.addEventListener('message', ev => {
  console.log(ev); 
  console.log(ev.data); 
if (ev.data) 
{
document.getElementById("load_box").src = ev.data
}
});

const set1 = setTimeout(ani,1000);
const set2 = setTimeout(ani2,2000);
const set3 = setTimeout(ani3,3000);
const set4 = setTimeout(ani4,4000);
const set5 = setTimeout(ani5,5000);
const set6 = setTimeout(ani6,7000);
const set7 = setTimeout(started,9000);

var i;

function ani()  {
  document.getElementById("ani2").style.display="block"; }
function ani2()  {
  document.getElementById("ani3").style.display="block"; }
function ani3()  {
   document.getElementById("ani4").style.display="block"; }
function ani4()  {
   document.getElementById("ani5").style.display="block"; }
function ani5()  {
   document.getElementById("ani6").style.display="block"; }
function ani6()  {
   document.getElementById("ani7").style.display="block"; }

function started() {
   document.getElementById("animation").style.display="none";
   document.getElementById("hidden").style.display="block";
  document.body.style.backgroundImage= "url(bg.png)"; 

}


function mygames() { 
    document.getElementById("load_box").src = "games.html";
  }
  function myblog() { 
    document.getElementById("load_box").src = "blog.html";
  }
  function myearn() { 
    document.getElementById("load_box").src = "earn.html";
  }
  function myevents() { 
    document.getElementById("load_box").src = "events.html";
  }
  function mypatron() { 
    document.getElementById("load_box").src = "patron.html";
  }
  function myprojects() { 
    document.getElementById("load_box").src = "projects.html";
  }
  function myabout() { 
    document.getElementById("load_box").src = "about.html";
  }
}


  function play_cu(){
    bc.postMessage("https://html-classic.itch.zone/html/9044433/index.html");
  }

  