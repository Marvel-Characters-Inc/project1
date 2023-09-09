## Bootcamp Project 1 (HTML, CSS, JS, API Integration)
For our first project, we developed a SuperHero web app where you can view and learn more about Marvel characters by theme. 

### Homepage
When the homepage loads, the banner image and the theme icons will be displayed on the screen. Available themes are: OG Avengers, Villains, Sheroes, Heroes. When the user selects a theme, the page will diplay 4 characters tagged with that theme. When the user clicks on the character, the interior page will display. The destination URL for interior page is appended with the specific character ID. We used the SuperHero API to pull the character name, character id, and character image using Javascript. 

### Interior Page 

The interior page will display data based on the URL parameter which contains the character ID. Character-specific information such as hero name, real name, and city of origin/organization will display on top of the page.
The "Learn More" button will be at the bottom of the chracter image. By clicking the button it will pop open a modal window with more information. We also used the SuperHero API here to pull the character name, image, and place of birth. Then we used the OMDB API to pull the movie information related to the character selected.

### Modal Window

The character-specific modal window will display the movie image, title, release date, and synopsis. We used the OMDB API to pull the movie matching the character selected. 

## References / Resources
**CSS Framework:**

* Materialize: https://materializecss.com/

**JS Libraries:**
* Materialize: https://cdn.jsdelivr.net/npm/@materializecss/materialize@2.0.2-alpha/dist/js/materialize.min.js

* JQuery: https://code.jquery.com/jquery-3.6.0.min.js

**Wireframe:**
* Whimsical: https://whimsical.com

**Fonts:**
* Google Fonts: https://fonts.google.com/

**APIs Used:**
* Super Hero API: https://superheroapi.com/index.html
* OMDB API: http://www.omdbapi.com/?apikey=[yourkey]&

**Images**
* Homepage Hero Image: https://www.komar.de/en/photomurals-marvel-comic
* Character Images: TBD

## URLs submitted

* **Web App:** https://marvel-characters-inc.github.io/project1/

* **Repo:** https://github.com/Marvel-Characters-Inc/project1

* **Presentation/Slides:** https://docs.google.com/presentation/d/107pUubsnG2vVGDuO5JTxlTbkOKBbWoJ7X5-SMR_ZSo4/edit?usp=sharing

* **Wireframes:** https://whimsical.com/project-1-wireframe-Rfi1YL37Y6MbLsTVNdJyfU

## Application Screenshot
![alttext](./assets/images/marvel-webapp-project-screenshot.png)


## Group Members:
* Cervantes, Yadira (cervantes.lila14@gmail.com)
* Guzman, Jose (jguzman12325@gmail.com)
* Jirik, Scotty (jirikscotty@gmail.com)
* Wheeler, Lenzlee (lwheeler@luc.edu)