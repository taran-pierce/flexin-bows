# flexin-bows `3.4.5`
The booklet sucks, look through this instead to get your work out on.

## Features
* All workout routines for the BowFlex with an image for demonstration
* Created build and deployment pipeline in Azure
* Basic unit testing with Jest
* Toggle hiding working description
* Toggle for larger or small image
* Added ESLint

### Future updates
* Better styling for errrythang
* Better styling for small-table layout

### Setup
* `git clone https://github.com/taran-pierce/flexin-bows.git`
* `cd flexin-bows`
* `npm install`
* `npm run dev`
* Export static HTML: `npm run build` then `npm run export`
  * creates static export of site in `/out`
* `npm run workingDir`: shows working directory, helpful when debugging CICD

### Directory structure:

```
  /flexin-bows
  |
  |-/components
  |  |-Header
  |  |-Layout
  |  |-ImageCard
  |  |-Workout
  |  |-WorkoutList
  |  |-WorkoutTable
  |  |-WorkoutTableHeader
  |
  |-/data
  |  |
  |  |-/programs
  |  |  |
  |  |  |-better-body.json
  |
  |-/pages
  |  |-index
  |  |-workout
  |  
  |-/out
  |
  |-/static/
  |  |
  |  |-/images
  |
  |-/tests       
```
