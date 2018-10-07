<?php
  # Page Vars
  $active_link = '/';

  include 'templates/top.php';
?>
<section>
  <div class="container">
    <h1>Flexin Bows with Terry</h1>
    <div class="program">
      <div class="flex program">
        <div class="item">
          <h2>20 Minute Better Body Workout</h2>
          <p><strong>Frequency:</strong> 3 days per week (M-W-F)</p>
          <p><strong>Time:</strong> 20 Minutes</p>
          <p>Insert big paragraph of shit I probably won't transcribe. Just work out.</p>
          <table class="exercises" id="main-table">
            <thead>
              <tr>
                <th><h4>Body Part</h4></th>
                <th><h4>Exercise</h4></th>
                <th><h4>Sets</h4></th>
                <th><h4>Reps</h4></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Chest</td>
                <td class="exercises">
                  <a href="#" data-exercise="decline-bench-press">Decline Bench Press</a></td>
                <td>1-2</td>
                <td>10-15</td>
              </tr>
              <tr>
                <td>Back</td>
                <td class="exercises">
                  <a href="#" data-exercise="shoulder-extension">Seated Lat Rows</a>
                </td>
                <td>1-2</td>
                <td>10-15</td>
              </tr>
              <tr>
                <td>Shoulders</td>
                <td class="exercises">
                  <a href="#" data-exercise="decline-bench-press">Crossover Seated Rear Deltoid</a>
                </td>
                <td>1-2</td>
                <td>10-15</td>
              </tr>
              <tr>
                <td>Arms</td>
                <td class="exercises">
                  <a href="#" data-exercise="decline-bench-press">Standing Biceps Curl</a>
                  <a href="#" data-exercise="decline-bench-press">Triceps Pushdown</a>
                </td>
                <td>1-2</td>
                <td>10-15</td>
              </tr>
              <tr>
                <td>Legs</td>
                <td class="exercises">
                  <a href="#" data-exercise="decline-bench-press">Calf Raise</a>
                  <a href="#" data-exercise="decline-bench-press">Truck Rotation</a>
                </td>
                <td>1-2</td>
                <td>10-15</td>
              </tr>
              <tr>
                <td>Trunk</td>
                <td class="exercises">
                  <a href="#" data-exercise="decline-bench-press">Seated Abdominal Crunch</a>
                </td>
                <td>1-2</td>
                <td>10-15</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="item">
          <picture class="workout-image">
            <source srcset="images/exercises/edited/decline-bench-press.jpg" media="(min-width: 1200px)" />
            <source srcset="images/exercises/edited/decline-bench-press-md.jpg" media="(min-width: 992px)" />

            <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" srcset="images/exercises/edited/decline-bench-press-sm.jpg"
                 class="lazyload"
                 alt="decline bench press" />
          </picture>
        </div>
      </div>
    </div>
  </div>
</section>
<?php include 'templates/bottom.php' ?>
