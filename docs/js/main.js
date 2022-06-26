function myFunction() {

  var header = document.getElementById("header");
  var x = document.getElementById("nav");
  var main = document.getElementById("main");
  var footer = document.getElementById("footer");

  if (x.style.display === "flex") {
    x.style.display = "none";
    main.style.display = "flex";
    footer.style.display = "flex";
    header.classList.toggle("change");
  } else {
    x.style.display = "flex";
    main.style.display = "none";
    footer.style.display = "none";
    header.classList.toggle("change");
  }
}
