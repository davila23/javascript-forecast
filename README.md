## Weather App

_(a functional React/Redux skills demo app)_

### > [Link to online production build](https://javascript-forecast.herokuapp.com/) <

### Frontend:

- **Modern Redux**
  - react-redux: useSelector/useDispatch hooks
  - redux-toolkit: reduced boilerplate and tidy syntax with createSlice, configureStore, etc.
- **Modern React**: 100% functional components with built-in and custom hooks.
- **Material UI**: full usage of Material design with responsive layout, global theme, darkMode, svg Icons, transitions, etc.
- **react-window**: FixedSizeList for fast and performant long lists used for city search results.

### Backend:

- Small and efficient **Node.js / express / axios** backend serving the following:
  - static react production build
  - custom internal API for querying cities and countries data
  - external API proxy to fetch current weather data by city ID
  - additional data injection to api responses from local country data in JSON
  - environment variables for api keys security
  - server side error handling and reporting at frontend

### Data Sources:

- countries and cities extras/links to flags: local JSON in node
- flags svg's from https://restcountries.eu/
- weather: https://openweathermap.org/current (You will need to generate your own API KEY if you clone this repo)
- maps: https://developers.google.com/maps/documentation/maps-static/intro?hl=de (You will need to generate your own API KEY if you clone this repo)

### Instructions

- Pull the repo, go to root directory and install deps with `npm install` or `yarn install`
- Execute script `npm run dev` or `yarn dev` in root directory.
- Remember to create a .env file with your own credentials to the [weather api](https://openweathermap.org/current) and place it in `/code/server/`. (Use the same syntax as in file `.env.example`)

### > [Link to online production build](https://javascript-forecast.herokuapp.com/) <

**_Daniel Avila_**

_daniel.avila@rottay.com_

_https://www.linkedin.com/in/avila-daniel/_



### Images Demo:
<img width="440" alt="Captura de Pantalla 2020-05-21 a la(s) 13 13 40" src="https://user-images.githubusercontent.com/50145471/82580129-23a15800-9b65-11ea-8c16-00d8c2d53a92.png">
<img width="588" alt="Captura de Pantalla 2020-05-21 a la(s) 13 13 15" src="https://user-images.githubusercontent.com/50145471/82580131-2439ee80-9b65-11ea-9821-37239ee81159.png">
<img width="421" alt="Captura de Pantalla 2020-05-21 a la(s) 13 14 23" src="https://user-images.githubusercontent.com/50145471/82580117-1e440d80-9b65-11ea-8a78-d5ea741c91e5.png">
