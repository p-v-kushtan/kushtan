function myFunction() {

  var header = document.getElementById("header");
  var x = document.getElementById("nav");
  var main = document.getElementById("main");

  if (x.style.display === "flex") {
    x.style.display = "none";
    main.style.display = "flex";
    header.classList.toggle("change");
  } else {
    x.style.display = "flex";
    main.style.display = "none";
    header.classList.toggle("change");
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gbXlGdW5jdGlvbigpIHtcclxuXHJcbiAgdmFyIGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyXCIpO1xyXG4gIHZhciB4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZcIik7XHJcbiAgdmFyIG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XHJcblxyXG4gIGlmICh4LnN0eWxlLmRpc3BsYXkgPT09IFwiZmxleFwiKSB7XHJcbiAgICB4LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIG1haW4uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgaGVhZGVyLmNsYXNzTGlzdC50b2dnbGUoXCJjaGFuZ2VcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIHguc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgbWFpbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBoZWFkZXIuY2xhc3NMaXN0LnRvZ2dsZShcImNoYW5nZVwiKTtcclxuICB9XHJcbn1cclxuIl19
