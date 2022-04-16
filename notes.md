- I chose the Reactjs library because it's a single page application library, it's fast, efficient and SEO friendly. And because I don't have experience with Vue or Angular :)
- I was going to go for the bonus requirement with the fetch API, but didn't find a way to fetch a local JSON file without using a server (you can check out my [task tracker](https://github.com/mg-bizarre/task-tracker) repo where I used a fake REST API server)
- I used `svgstore-cli` to make a SVG sprite out of icons and created a SVG component (I had to change `stroke-width` and `fill`/`stroke` in some places because they didn't look like the design, so that would be something to ask the designers about).  
  The Inter font I found on Google fonts also doesn't quite look like the one in the design (e.g. 'l' shape), but there were no fonts provided in the assets.
- I tried to make reusable components that are flexible (not hard coded) as well as responsive in design.  
  I put the flower images into the public folder to load them dynamically with the rest of the component through `array.map` method.
- For styling I used CSS modules.
- I deployed the project on GitHub pages [here](https://mg-bizarre.github.io/herbarium/).

### What I would add to the project:

- An option to add a new flower with a a choice of color, description and an image.
- A choice of how many flowers are shown on the page and/or pages navigation.
- We could also add a period of year when it should be planted and when it blooms.
- Multiple images of the same flower with a slider.
- Expand the temperature and humidity indicator for more information.

#### Thank you for this assignment and for considering me for your position. It was a fun and pretty React practice for me :)
