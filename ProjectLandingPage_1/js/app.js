/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

// putting all section in a const variable 
const sections = document.querySelectorAll('section');
// getting all the element we gonna put in the navigation bar
const navbar = document.getElementById('navbar__list');
// this is something i don't understand till now so let's skip it for now.
const fragment = document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

// Defining a function to build the navigation bar menu...
function navMenuBuilder(){
    // Iterating over all the sections on the page 
    for(const section of sections){
        // Giving a name for the for the created Element using the data attribute inside the section and make it the name for the element in the nav bar.
        const title = section.dataset.nav;
        // Adding ID for the new created element with the ID of the section .
        const sectionId = section.id;
        // Creating a new list of item inside the navigation bar
        const listItem = document.createElement('li');
        // Creating Anchor element to add it inside the 'li' Element, and use this anchor element to scroll to the required section.
        const link = document.createElement('a');
        // Adding the 'menu__link' class to the anchor element.
        link.classList.add('menu__link');
        // Addign the 'href' attribute and link it to the section id with the (#) + (section id).
        // Here i use the `` instead of '' to facilate adding my variable.
        link.href = `#${sectionId}`;
        // Giving the name to the element.
        link.textContent = title;
        // Creating an EventListener to scroll to the section on clicking on the element from the navigation bar with a smooth behavior.
        link.addEventListener('click', e =>{
            // Pervent the default scroll begavior which is instantly jump to the section instead of scrolling smoothly to it.
            e.preventDefault();
            // Defining the behavior of scrolling >>> "smooth".
            section.scrollIntoView({
                behavior: 'smooth'
            });
        });
        // Append the 'link' Element to the listItem element.
        listItem.appendChild(link);
        // Append the 'listItem' element to the fragment.
        fragment.appendChild(listItem);
    };
    // Append the fragment to the navigation bar we want to create 
    navbar.appendChild(fragment);
};
// Telling the browser to run the 'navMenuBuilder' function as soon as it loads the page.
window.addEventListener('load', navMenuBuilder);


// Add class 'active' to section when near top of viewport

// Here insted of using getBoundingClientRect(), i found another way which is easier in term of specification.
// The Class is 'IntersectionObserver()', which take two parameters: 
// The 'callBack' function as the first parameter.
// The 'Option' Object as the second parameter.

// Starting by the 'Option' Object, i want to define only the threshold value.
const observerOptions = {
    threshold: 0.65
};

// Defining the 'callBack' function we going to use inside the 'IntersectionObserver()' Class
const observerCallBack = (entries)=>{
    // Creating 'links' variable to connect the anchor element in the navigation bar with seciton while scrolling
    // The 'the links' variable only contains the <a> elements in the all navigation menu
    const links = navbar.querySelectorAll('a.menu__link')
    // Checking if the first element is intersecting which mean is it display on the screen right now?
    // The first element in this case will be the first section we intersect while we scrolling... then the entries[0] == the first section displays on the screen
    if(entries[0].isIntersecting){
        // Adding 'your-active-class' to the current section in view
        entries[0].target.classList.add('your-active-class')
        // Adding 'active' class to the element in navigation menu bar which is attached to this section.
        links.forEach(link =>{
            if(link.textContent === entries[0].target.dataset.nav){
                link.classList.add('active')
                // Otherwise, remove the 'active' class.
            }else{
                link.classList.remove('active')
            }
        })
        //Oherwise, remove 'your-active-class'.
    }else{
        entries[0].target.classList.remove('your-active-class')
    };
};

// Scroll to anchor ID using scrollTO event
// Creating a new function inside a variable 'Observer'
const observer = new IntersectionObserver(observerCallBack, observerOptions);
// While scolling on the window the browser should observe for the 'observer' variable  
window.addEventListener('scroll', ()=>{
    for(const section of sections){
        observer.observe(section)
    }
});

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active