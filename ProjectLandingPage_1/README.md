<!-- Add banner here -->

# Project Title

<!-- Add buttons here -->

<!-- Describe your project in brief -->

<!-- The project title should be self explanotory and try not to make it a mouthful. (Although exceptions exist- **awesome-readme-writing-guide-for-open-source-projects** - would have been a cool name)

Add a cover/banner image for your README. **Why?** Because it easily **grabs people's attention** and it **looks cool**(*duh!obviously!*).

The best dimensions for the banner is **1280x650px**. You could also use this for social preview of your repo.

I personally use [**Canva**](https://www.canva.com/) for creating the banner images. All the basic stuff is **free**(*you won't need the pro version in most cases*).

There are endless badges that you could use in your projects. And they do depend on the project. Some of the ones that I commonly use in every projects are given below. 

I use [**Shields IO**](https://shields.io/) for making badges. It is a simple and easy to use tool that you can use for almost all your badge cravings. -->

<!-- Some badges that you could use -->

<!-- ![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/v/release/navendu-pottekkat/awesome-readme?include_prereleases)
: This badge shows the version of the current release.

![GitHub last commit](https://img.shields.io/github/last-commit/navendu-pottekkat/awesome-readme)
: I think it is self-explanatory. This gives people an idea about how the project is being maintained.

![GitHub issues](https://img.shields.io/github/issues-raw/navendu-pottekkat/awesome-readme)
: This is a dynamic badge from [**Shields IO**](https://shields.io/) that tracks issues in your project and gets updated automatically. It gives the user an idea about the issues and they can just click the badge to view the issues.

![GitHub pull requests](https://img.shields.io/github/issues-pr/navendu-pottekkat/awesome-readme)
: This is also a dynamic badge that tracks pull requests. This notifies the maintainers of the project when a new pull request comes.

![GitHub All Releases](https://img.shields.io/github/downloads/navendu-pottekkat/awesome-readme/total): If you are not like me and your project gets a lot of downloads(*I envy you*) then you should have a badge that shows the number of downloads! This lets others know how **Awesome** your project is and is worth contributing to.

![GitHub](https://img.shields.io/github/license/navendu-pottekkat/awesome-readme)
: This shows what kind of open-source license your project uses. This is good idea as it lets people know how they can use your project for themselves.

![Tweet](https://img.shields.io/twitter/url?style=flat-square&logo=twitter&url=https%3A%2F%2Fnavendu.me%2Fnsfw-filter%2Findex.html): This is not essential but it is a cool way to let others know about your project! Clicking this button automatically opens twitter and writes a tweet about your project and link to it. All the user has to do is to click tweet. Isn't that neat? -->

Landing Page Project by udacity.com

# Demo-Preview

<!-- Add a demo for your project -->

<!-- After you have written about your project, it is a good idea to have a demo/preview(**video/gif/screenshots** are good options) of your project so that people can know what to expect in your project. You could also add the demo in the previous section with the product description.

Here is a random GIF as a placeholder. -->

![Random GIF](https://media.giphy.com/media/ZVik7pBtu9dNS/giphy.gif) 

This project is all about converting the landing page from the static version to the dynamic version using JavaScript only.

# Table of contents

<!-- After you have introduced your project, it is a good idea to add a **Table of contents** or **TOC** as **cool** people say it. This would make it easier for people to navigate through your README and find exactly what they are looking for.

Here is a sample TOC(*wow! such cool!*) that is actually the TOC for this README. -->

- [Project Title](#project-title)
- [Demo-Preview](#demo-preview)
- [Table of contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
    - [Project requirement](#project-requirement)
    - [Project solving](#project-solving)
- [The Author](#the-author)
- [Footer](#footer)

# Installation
[(Back to top)](#table-of-contents)

<!-- *You might have noticed the **Back to top** button(if not, please notice, it's right there!). This is a good idea because it makes your README **easy to navigate.*** 

The first one should be how to install(how to generally use your project or set-up for editing in their machine).

This should give the users a concrete idea with instructions on how they can use your project repo with all the steps.

Following this steps, **they should be able to run this in their device.**

A method I use is after completing the README, I go through the instructions from scratch and check if it is working. -->

<!-- Here is a sample instruction:

To use this project, first clone the repo on your device using the command below:

```git init```

```git clone https://github.com/navendu-pottekkat/nsfw-filter.git``` -->

To download this project feel free to clone the repo on your device using the following command:

```git init```

```git clone https://github.com/ZEXAWY/Landing-Page-Project-Udacity.git```

# Usage
[(Back to top)](#table-of-contents)

<!-- This is optional and it is used to give the user info on how to use the project after installation. This could be added in the Installation section also. -->
There's nothing to use in here unless you want to add or develope more stuff in this project feel free to do so, it's not a personal project it's a free source from udacity to practice on doing some great stuff using JavaScript and manipulating the DOM.

# Development
[(Back to top)](#table-of-contents)

<!-- This is the place where you give instructions to developers on how to modify the code.

You could give **instructions in depth** of **how the code works** and how everything is put together.

You could also give specific instructions to how they can setup their development environment.

Ideally, you should keep the README simple. If you need to add more complex explanations, use a wiki. Check out [this wiki](https://github.com/navendu-pottekkat/nsfw-filter/wiki) for inspiration. -->
### Project Requirement:
- Navigation:

    Navigation should be build dynamically as an unordred list <ul></ul> element. and navigating should be build using ```append```, ```appendChild```, and ```innnerHTML```.
- Section active state:

        It should be clear which section is being viewed while scrolling through the page.
- scroll to anchor:

        When clicking an item from the navigation menu, the link should scroll to the appropriate section.

### Project solving:
- the first thing i start building the navigation bar by defining the variables which will hold the sub element inside the main navbar menu, then building my builder function to build the navigation bar dynamically, in this case, i chosed three main gloabal variables to hold everything i will need will going on and these are:
    - ```sections``` to hold the all sections inside the page.
    - ```navbar``` to hold the subelements inside the navigation menu.
    - ```fragment``` for effeciency purpose
- The ```navMenuBuilder``` function, iterating over all the sections in the page to get every section id and section data we use to build our new created elements and link them to each others, and creating a new ```<li>``` elements to hold the anchor's ```<a>``` elements inside the navigation bar menu we will use later to navigate to the right section using the ```id``` attribute inside the ```li``` element using the ```#``` to refer the section we want to go to.
- Adding the class to each ```anchor``` element, and then adding the title to this element to appear with the name according to the section using the ``` data``` attribute we get previously.
- Adding ```eventListener``` to the ```anchor``` element to navigate smoothly. and pervent the default behavior which will jump instantly to the section.
- The final thing is to append all the element to each other, the ```anchor``` to the ```li```, the ```li``` to the ```fragment```, and the ```fragment``` to the main ```navBar``` element.

one more thing is to add ```eventListener``` to the ```window``` to tell the browser when loading he should run the main navMenuBuilder function instantly. instead of just write it down to run after some lines of codes. that's to always run the main navMenuBuilder funtion even if there were error in loading the page in previous lines.

- For the section view state i use ```IntersectionObserver``` class instead of ```getBoundingClientRect``` because i find it easier to deal with without need to assign the ```top``` pixel of the section when it appears, and when a section ```isIntersecting```we add the ```your-active-class``` if it's not not exist, and remove the class when the section ```is not intersecting```. And for that i divided the code into three main pieces:
    - the Object option: where i only need the threshold property.
    - and the callBack function to add and remove the ```your-active-class``` to the intersecting section... extra thing here is i added an ```active``` class to the element in the ```navBar``` to be highlighted according to section instersecting at the moment. 
    - The ```observer``` variable which hold the ```IntersectingObserver``` class and use it when we add another ```eventListener``` to the window while scrolling to use the ```observe``` method on the sections to get the section inView right now.

            this ```active``` class i defined in the CSS file under ```.navbar__menu .menu__link.active```.
- Final thing i add an eventListener to the window while scrolling to observe the sections, and then applying the ```intersectionObserver``` to the current section in view.


# The Author
[(Back to top)](#table-of-contents)

I am a new developer student who like programing so much... My name is ```Ahmed Mohamed Zakaria```, at the moment of typing this file i am only a student of Web Development Professional Track powered by Udacity.com


# Footer
[(Back to top)](#table-of-contents)

<!-- Let's also add a footer because I love footers and also you **can** use this to convey important info.

Let's make it an image because by now you have realised that multimedia in images == cool(*please notice the subtle programming joke). -->
This project is powered by Udacity.com professional web development track and all credit goes to them in creating the foundation files to go throw this project, i only added some function to it to make it dynamic nothing more. the HTML and the CSS files were created by Udacity not by me.

Leave a star in GitHub, give a clap in Medium and share this guide if you found this helpful.

<!-- Add the footer here -->

![Footer](https://github.com/navendu-pottekkat/awesome-readme/blob/master/fooooooter.png) 

