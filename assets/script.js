var menuBtn = $("#icon");

var dropdown = $(".dropdown");


//ES6 syntax
menuBtn.on("click", () => {
dropdown.toggleClass("hide")
})