let openNav = document.getElementById("hamburger");
openNav.addEventListener("click", () => {
  let sidenav = document.getElementById("sidenav");
  sidenav.style.width = "260px";
  sidenav.style.visibility = "visible";
  sidenav.style.opacity = "100%";
});

let closeNav = document.getElementById("closeNav");
closeNav.addEventListener("click", () => {
  let sidenav = document.getElementById("sidenav");
  sidenav.style.width = "0";
  sidenav.style.visibility = "hidden";
  sidenav.style.opacity = "0";
});
