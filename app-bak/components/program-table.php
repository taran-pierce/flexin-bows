<?php

  $json_string = file_get_contents('data/programs/better-body.json');

  $json = json_decode($json_string, true);

  $file_path = 'images/exercises/edited/';
  $file_name_small = $file_path . $starting_exercise . '.jpg';
  $file_name_md = $file_path . $starting_exercise . '-md.jpg';
  $file_name_lg = $file_path . $starting_exercise . '-lg.jpg';

?>
<div class="program">
  <h1><?php print_r($title); ?></h1>
  <div class="flex program">
    <div class="item content">
      <p><strong>Frequency:</strong> <?php print_r($frequency); ?></p>
      <p><strong>Time:</strong> <?php print_r($time); ?></p>
      <p><?php print_r($instructions); ?></p>

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
           <?php
              foreach ($json as $field => $value) {
                print_r('<tr>');

                  print_r('<td>');
                    print_r($value['bodyPart']);
                  print_r('</td>');

                  print_r('<td>');
                    foreach ($value['exercises'] as $field => $eValue) {
                      print_r("<a href='#' data-exercise='" . $eValue['fileName'] . "'>");
                        print_r($eValue['name']);
                      print_r('</a>');
                    }
                  print_r('</td>');

                  print_r('<td>');
                    print_r($value['sets']);
                  print_r('</td>');

                  print_r('<td>');
                    print_r($value['reps']);
                  print_r('</td>');

                print_r('</tr>');
              }
           ?>
        </tbody>
      </table>
    </div>
    <div class="item image">
      <picture class="workout-image">
        <source srcset="<?php print_r($file_name_lg); ?>" media="(min-width: 1200px)" />
        <source srcset="<?php print_r($file_name_md); ?>" media="(min-width: 992px)" />

        <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" srcset="<?php print_r($file_name_small); ?>"
             class="lazyload"
             alt="<?php print_r($starting_exercise); ?>" />
      </picture>
    </div>
  </div>
</div>
