# Weather Clock

This is mainly an example react site that does 2 main functions:
It has a clock, and tells you the weather.

## How'd you make it?

Well the source code is right above you, but this was written in react and deployed to Github Pages
using the help of the `gh-pages` plugin and `react-router-dom` (specifically the `HashRouter`).

This site also uses standard javascript to request the location from your browser, and stores your settings
in a browser cookie (using `universal-cookie` its really quite simple).

Most of the code was written with simplicity in mind so I did a decent amount of component abstraction
for a project this size.

Feel free to [view the React.js App live here](https://slamdewey.github.io/weather-clock/).