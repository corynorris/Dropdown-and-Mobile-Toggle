document.getElementById("categories").addEventListener('click', function() {
	
  //Show the drop down
  classie.toggle(document.getElementById("categories-dropdown-content"), "hidden");
  //Animate the changer
  classie.toggle(document.getElementById('dropdown'), 'close');

});

document.getElementById("menu-toggle").addEventListener('click', function() {
	classie.toggle(document.getElementById("menu"), "hidden");
	classie.toggle(document.getElementById("menu-toggle"), 'close');

});
