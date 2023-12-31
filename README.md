# Getting Started
1. Create a new project with Create React App.
2. Delete the src and public directory and all of its contents.
3. Create a new public directory and a new index.html file inside of public.
4. Use the ! emmet shortcut to generate a fresh html document in the index.html file. Place <div id="root"></div> in the <body> of the html document you created. (like we did in earlier videos!)
5. Create a new src directory and a components directory inside of src.
6. Create an App.jsx and a index.js file inside of src.
7. Write the basic "entry point" code for the index.js file, avoid copy/paste so you can practice writing it yourself!

# Instructions
1. Configure React Router in your application. You may use the same structure as the walkthrough video, or (if you have a better idea) you may decide on your own structure. Just make sure that it works!

2. You should create three Links that look like buttons in your application. The first says "Go Home", the second says "View Films", and the last one says "View People" (or another endpoint of your choosing). Clicking these  links will navigate you to the respective pages for each of these things. You can code them directly in the App.jsx or make your own <Navbar /> component instead.

3. Start by only configuring ONE route. Say, for /films. After navigating to localhost:3000/films, you should see your list of films that you rendered to the browser in the previous lab. The caveat? You shouldn't need any if/else if/else logic in your render methods. The data should only be loaded and displayed when you navigate to /films. You should use useEffect() and fetch() to make this request.

4. Once you have that route working, configure another one for /films/:filmid. With this route, you should be able to craft a Link for any film you have displayed on /films to navigate to /films/<id>, where you will list out all of the information pertaining to only that film.

5. Now that you have /films and /films/:filmid working, repeat tasks 3 and 4 with another two endpoints (like People) in the Studio Ghibli API.

 

# Closing Remarks
At the end of this lab, you should have a Studio Ghibli "wiki" based on the data available through the API. You can extend this as much as you want - style it as much as you want - but at the end of the day you should realize that what you've just done is create your first real application using only data provided by a third-party API! This is what web developers do all the time so give yourself a pat on the back, and keep coding!
