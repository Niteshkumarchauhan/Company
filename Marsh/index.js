let div = document.getElementById("navbar1");
let menu = document.getElementsByClassName("navbartext");
let logo = document.getElementById("logo");
console.log(logo);
document.addEventListener("scroll", function () {
  let scrollPos = window.pageYOffset;

  if (scrollPos > 50) {
    div.style.backgroundColor = "white";
    for (let index = 0; index < menu.length; index++) {
      const element = menu[index];
      element.style.color = "black";
    }
    logo.style.width = "160px";
    logo.style.height = "66px";
  } else {
    div.style.backgroundColor = "transparent";
    for (let index = 0; index < menu.length; index++) {
      const element = menu[index];
      element.style.color = "white";
    }
    logo.style.width = "220px";
    logo.style.height = "74px";
  }
});
