# The Movie Project

This is a movie project based on The Movie Database (TMDB) API `https://www.themoviedb.org/documentation/api`. 
This projects display movies, casts, rating, trailers and various other data.
This project will test your skills using Postman to explore the API and get the data you want.

# Requirements: 

- Modern, responsive and simple to use interface.
- Once you fetch data or anything it should be stored in the state management system you are using. Optimize your network calls.

### Home Page
- Show a section for the most popular movies.
- Show a section for the most trending movies.
- Tha ability to bookmark the movies.
### Navbar 
- Universal nav that is shown on every page of the website.
- Include a Home button that moves the user to the home page.
- Include a Genre button that display a dropdown list of all movies genre.
- Include a Actor button that moves the user to the Actors Page.
- Include an About page that describes the website.
- Include a Bookmarked button that displays the movies user wanted to bookmark
- Include Sign In button that displays a modal for the user to Sign in using Google. Once the use is logged in display their name and avatar.
- In Home page show a filter based on "popular, release date, top rated, now playing, and upcoming"

### Footer

- Universal footer that include links to main pages in the website.
- You and your partner names and links.
- Anything you want to add.

### Movies Page
- Display a list of movies.
- Display the movie poster
- Display the movie name
- Display the movie rating
- Display the movie genre
- Tha ability to bookmark the movie.
- The ability to search for a specific movie.
- Once you click on a movie, it will move you to the singe page of that movie.
- Use lazy loading functionality. 

### Single Movie Page

- Display the poster of the movie and a description.
- Display 5 of the actors that played in the movie.
- Display a section for related movies, at least 5.
- Display the trailer of the movie.
- Display the director name.
- Display the movie rating and votes count.
- Tha ability to bookmark the movie.
- Once you click on an actor you move to their page.

### Actors Page
- Display list of actors showing their name, and image same as movies page.
- Once you click on an actor you go to their own page.
- Use lazy loading functionality. 

### Single Actor Page
- Display actor image
- Display actor name
- Display actor gender
- Display actor popularity
- Display the birth and death date if available.
- Display the actor biography
- Display a list of movies that the actor participated in.

### Bookmarked Page
- Display the movies the user bookmarked. Only if they are signed in.

# Instructions: 

## File structure

- depending on what flow to take
    - Follow the component container pattern, so your two main folders inside the `src` will be the `components` folder that will contain your components and `containers` that will contain container components. *You can read more about container components [here](https://reactpatterns.com/#container-component) or you can ask you team leader about it for more clarity.*
    - similar concept you can use the component page 
    take a look [here](https://blog.bitsrc.io/structuring-a-react-project-a-definitive-guide-ac9a754df5eb)

- Use `scss` instead of css if you going with `react-bootstrap`
- You can use `postcss` if you are going with another library that uses something like `tailwind`
- Global style variables will be inside a `style` folder inside the `src` inside a `_variables.scss.` If you are using `react-bootstrap` this can come in handy!
- The main folder names inside the `src` should be lower case like `components` and `container or pages` other folders inside them should be TitleCase like `ProgressBar` and files inside these folder will be TitleCase too like `ProgressBar.js.` If you need styles then add them with the same `.js` file name like `ProgressBar.scss`

Your project hierarchy should look something similar to this:

```
.
├── src
	├── components
		├── ProgressBar
			├── ProgressBar.js
			├── ProgressBar.scss
	├── containers
		├── About
				├── ContactForm.js
				├── About.js
	├── style
		├── _variables.scss
```

- All dependencies inside the `package.json` should be used in the project.
- It's recommended to use Yarn to install the packages.
- General use images should be inside a folder inside `src` under `images` and try to use `svg` as much as possible. Component specific images should be under their folders.

## Software requirements:

- You should have prettier installed and make sure your code is well formatted before committing it.
- You should have eslint installed and make sure your code is following the [Airbnb guidelines](https://github.com/airbnb/javascript/tree/master/react) before committing.
- You should install [Husky](https://github.com/typicode/husky) to make sure that your code gets checked before you commit anything. 
- For Styling use Tailwind, Styled Components, React-Bootstrap, or Material UI.
- Follow the [Git feature branch workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow)
- Follow the [Angular commit message format](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-format)
- This project should be deployed to [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/)
- For state management use Redux or Redux-toolkit. 
- For any data fetching build a custom hook and use [Axios](https://github.com/axios/axios).

[Helpful article about prettier and eslint](https://www.mkapica.com/react-eslint/)

### Scripts

This project was created using `create-react-app` and `yarn` as the package manager.
