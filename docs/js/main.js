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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gbXlGdW5jdGlvbigpIHtcclxuXHJcbiAgdmFyIGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyXCIpO1xyXG4gIHZhciB4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZcIik7XHJcbiAgdmFyIG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XHJcbiAgdmFyIGZvb3RlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9vdGVyXCIpO1xyXG5cclxuICBpZiAoeC5zdHlsZS5kaXNwbGF5ID09PSBcImZsZXhcIikge1xyXG4gICAgeC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBtYWluLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIGZvb3Rlci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICBoZWFkZXIuY2xhc3NMaXN0LnRvZ2dsZShcImNoYW5nZVwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgeC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICBtYWluLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIGZvb3Rlci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBoZWFkZXIuY2xhc3NMaXN0LnRvZ2dsZShcImNoYW5nZVwiKTtcclxuICB9XHJcbn1cclxuIl19
