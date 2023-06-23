window.onload = function()
{ 
  var navbar = document.getElementById("navbar")
  var sticky = navbar.offsetTop
  window.onscroll = function() { myfunction (navbar,sticky)} 
}

