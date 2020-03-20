import { battleship, weather, facebook } from './images.js';

export default [
  {
    title: 'Weather App',
    description:
      'This is a browser app which uses the openweathermap API. Users can input a city to find out the weather type and temperature, and toggle between Fahrenheit or Celsius. The page displays a different background image depending on the weather.',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Webpack'],
    image: weather,
    links: {
      github: 'https://github.com/evaveskova/weather_app',
      preview: 'https://rawcdn.githack.com/evaveskova/weather_app/ecffe243249ba9cf81392a69c195cd32363d5b98/dist/index.html',
    },
  },

  {
    title: 'Battleship',
    description:
      'This is a browser version of the game Battleship where users can input their name, have their board randomly populated with ships, and play against a computer.',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Webpack'],
    image: battleship,
    links: {
      github: 'https://github.com/KerronKing/Battleship-JS',
      preview: 'https://rawcdn.githack.com/KerronKing/Battleship-JS/56aac3cd696ecbe534c9d4430eeab7607ba826b0/dist/index.html',
    },
  },

  {
    title: 'Facebook Lite',
    description:
      'This is a page which has similar, basic functionalities to that of Facebook. Users can sign up, log in, or log out. They can create posts, like and comment on posts, send friend requests, and remove friends from their list. Users can also see posts made by their friends.',
    skills: ['HTML5', 'CSS3', 'Bootstrap', 'Ruby on Rails'],
    image: facebook,
    links: {
      github: 'https://github.com/evaveskova/microverse_facebook',
      preview: 'https://still-ridge-12937.herokuapp.com/users/sign_in',
    },
  },
];
