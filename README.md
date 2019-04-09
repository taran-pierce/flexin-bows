# flexin-bows `3.1.1`
The booklet sucks, look through this instead to get your work out on.

## Features
* All workout routines for the BowFlex with an image for demonstration

### Future updates
* Better styling for errrythang

### Setup
* `git clone https://github.com/taran-pierce/flexin-bows.git`
* `cd flexin-bows`
* `npm install`
* `npm run dev`
* Export static HTML: `npm run build` then `npm run export`
  * creates static export of site in `/out`

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