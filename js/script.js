//BELOW IS AN OLD BUT WORKING VERSION

/* 
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger-menu');
  const navMenu = document.querySelector('.main-nav');

  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    console.log('Hamburger clicked, nav active:', navMenu.classList.contains('active'));
  });
});
*/


//BELOW IS A SECOND OLD BUT WORKING VERSION AND BETTER THAN THAT ABOVE

/* THIS NEW ONE BELOW WILL::
Keeps your current hamburger toggle (works exactly like before).
Closes the menu if user clicks anywhere outside the menu.
Closes the menu when user clicks a link inside.  */

/*
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger-menu');
  const navMenu = document.querySelector('.main-nav');

  // Toggle menu on hamburger click
  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    console.log('Hamburger clicked, nav active:', navMenu.classList.contains('active'));
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
      if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        console.log('Clicked outside, nav closed');
      }
    }
  });

  // Close menu when clicking a link inside
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function() {
      if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        console.log('Link clicked, nav closed');
      }
    });
  });
});
*/




//BELOW IS A NEW AND WORKING VERSION, AND MUCH BETTER THAN THAT ABOVE
/* THIS NEW ONE BELOW WILL::
Keeps your current hamburger toggle (works exactly like before).
Closes the menu if user clicks anywhere outside the menu.
Closes the menu when user clicks a link inside.  */

/*
Additional Changes made:

1.Defined navLinks once at the top.

2.Replaced navMenu.querySelectorAll('a').forEach(...) with navLinks.forEach(...).

3.Functionality is exactly the same, including:

	Hamburger toggle

	Clicking outside closes menu

	Clicking a link closes menu

4.Code is cleaner and easier to extend.


Key points for a beginner:

1] DOMContentLoaded ensures JS runs after HTML loads.

2] querySelector grabs a single element; querySelectorAll grabs multiple elements.

3] .classList.toggle('active') adds the class if missing, removes it if present.

4] .contains(event.target) checks if the clicked element is inside a container.

5] forEach loops through all menu links to add the same behavior to each.

*/

// Wait until the full HTML document is loaded before running any code
document.addEventListener('DOMContentLoaded', function() {

  // Grab the hamburger button element from the page
  const hamburger = document.querySelector('.hamburger-menu');

  // Grab the navigation menu element from the page
  const navMenu = document.querySelector('.main-nav');

  // Grab all the links inside the navigation menu
  const navLinks = navMenu.querySelectorAll('a');

  // -------------------------------
  // 1. Toggle menu open/close when clicking the hamburger
  // -------------------------------
  hamburger.addEventListener('click', function() {
    // Toggle "active" class on hamburger (for animation or styling)
    hamburger.classList.toggle('active');

    // Toggle "active" class on the menu to show or hide it
    navMenu.classList.toggle('active');

    // Print to console for debugging
    console.log('Hamburger clicked, nav active:', navMenu.classList.contains('active'));
  });

  // -------------------------------
  // 2. Close the menu if user clicks anywhere outside the menu
  // -------------------------------
  document.addEventListener('click', function(event) {
    // Check if the click was NOT on the menu or the hamburger
    if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {

      // If the menu is currently open
      if (navMenu.classList.contains('active')) {

        // Remove the "active" class to hide the menu
        navMenu.classList.remove('active');

        // Remove the "active" class from hamburger (return it to original state)
        hamburger.classList.remove('active');

        // Debugging message
        console.log('Clicked outside, nav closed');
      }
    }
  });

  // -------------------------------
  // 3. Close the menu when clicking any link inside the menu
  // -------------------------------
  navLinks.forEach(link => {
    // For each link, add a click listener
    link.addEventListener('click', function() {

      // If the menu is currently open
      if (navMenu.classList.contains('active')) {

        // Remove the "active" class to hide the menu
        navMenu.classList.remove('active');

        // Remove the "active" class from hamburger
        hamburger.classList.remove('active');

        // Debugging message
        console.log('Link clicked, nav closed');
      }
    });
  });

});
