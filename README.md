# flexin-bows
The booklet sucks, look through this instead to get your work out on.

## Setup
* `git clone https://github.com/taran-pierce/flexin-bows.git`
* `cd flexin-bows`
* `npm install`
* `cd app`
* `npm install`


### Gulp Commands

* `gulp` - compiles all assets and brings up project using browsersync
* `gulp prod` - compiles and moves everything to `/dist` for deployment to production

## Directory structure should look as follows:
This of course can be modified, but the gulpfile.js will need to be updated as well if you do so that all assets get placed in the location you are expecting.

```
  /project
  |
  |-app
  |  |-scss
  |  |-js
  |  |-css
  |  |-images
  |  |-fonts
  |
  |-dist
  |  |-css
  |  |-js
  |  |-fonts
  |  |-images
```