// Get all elements
var mname = document.getElementById("mname");
var rname = document.getElementById("rname");
var trophy = document.getElementById("trophy");
var stadium = document.getElementById("stadium");
var ball = document.getElementById("ball");
var messi = document.getElementById("messi");
var ronaldo = document.getElementById("ronaldo");
var mvid = document.getElementById("mvid");
var rvid = document.getElementById("rvid");
var msound = document.getElementById("msound");
var rsound = document.getElementById("rsound");
var fact1 = document.getElementById("fact1");
var fact2 = document.getElementById("fact2");
var fact3 = document.getElementById("fact3");
var fact4 = document.getElementById("fact4");

function Messi() {
  fact1.innerHTML =
    "<p style='padding: 10%; font-size: 1.2em;'><strong>Awards:</strong> 8 Ballon d'Or awards (record), 45 team trophies including FIFA World Cup 2022, 2 Copa America titles, 10 La Liga titles, 4 Champions League titles</p>";
  fact2.innerHTML =
    "<p style='padding: 10%; font-size: 2em; '><strong>Goals:</strong> 892 career goals</p>";
  fact3.innerHTML =
    "<p style='padding: 10%; font-size: 2em; '><strong>Net Worth:</strong> $850 Million</p>";
  fact4.innerHTML =
    "<p style='padding: 10%; font-size: 1.1em; '><strong>Favorite Song:</strong> Muchachos, Ahora Nos Volvimos a Ilusionar - Argentine soccer anthem from 2022 World Cup</p>";

  stadium.style.display = "none";
  mvid.style.display = "block";
  rvid.style.display = "none";

  rsound.pause();
  rsound.currentTime = 0;
  msound.play();
}
function Ronaldo() {
  fact1.innerHTML =
    "<p style='padding: 10%; font-size: 1.2em; '><strong>Awards:</strong> 5 Ballon d'Or awards, 34 team trophies including 5 Champions League titles, 7 league titles across 3 countries</p>";
  fact2.innerHTML =
    "<p style='padding: 10%; font-size: 2em; '><strong>Goals:</strong> 952 career goals (all-time leading scorer)</p>";
  fact3.innerHTML =
    "<p style='padding: 10%; font-size: 2em; '><strong>Net Worth:</strong> $1.4 Billion</p>";
  fact4.innerHTML =
    "<p style='padding: 10%; font-size: 1.2em; '><strong>Favorite Song:</strong> Likes to listen to Drake's , and Rihanna</p>";

  stadium.style.display = "none";
  mvid.style.display = "none";
  rvid.style.display = "block";

  msound.pause();
  msound.currentTime = 0;
  rsound.play();
}
