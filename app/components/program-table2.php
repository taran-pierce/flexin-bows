<?php

  $json_string = file_get_contents($file);
  $json = json_decode($json_string, true);

  $file_path = 'images/exercises/edited/';
  $file_name_small = $file_path . $starting_exercise . '.jpg';
  $file_name_md = $file_path . $starting_exercise . '-md.jpg';
  $file_name_lg = $file_path . $starting_exercise . '-lg.jpg';

  $title = $json['title'];
  $frequency = $json['frequency'];
  $time = $json['time'];
  $instructions = $json['content'];
  $starting_exercise = $json['startingExercise'];

?>
<div class="program">
  <h1><?php print_r($title); ?></h1>
  <div class="flex program">
    <div class="item content">
      <p><strong>Frequency:</strong> <?php print_r($frequency); ?></p>
      <p><strong>Time:</strong> <?php print_r($time); ?></p>
      <p><?php print_r($instructions); ?></p>

      <?php
        print_r('<ul id="program-nav" class="sub-nav">');
          foreach ($json['plan'] as $field => $table) {
          print_r('<li class="' . ($field == 0 ? ' active' : '') . '">');
            print_r('<a href="#main-table-' . $field . '">');
              print_r($table['days']);
            print_r('</a>');
          print_r('</li>');
          }
        print_r('</ul>');

        foreach ($json['plan'] as $field => $table) {
        print_r('<table class="exercises' . ($field == 0 ? ' active' : '') . '" id="main-table-' . $field . '">'  );
          print_r('
            <thead>
              <tr>
                <th><h4>Body Part</h4></th>
                <th><h4>Exercise</h4></th>
                <th><h4>Sets</h4></th>
                <th><h4>Reps</h4></th>
              </tr>
            </thead>
          ');
          foreach ($table['program'] as $field => $cValue) {
            print_r('<tr>');

              print_r('<td>');
                print_r($cValue['bodyPart']);
              print_r('</td>');

              print_r('<td>');
                foreach ($cValue['exercises'] as $field => $eValue) {
                  print_r("<a href='#' data-exercise='" . $eValue['fileName'] . "'>");
                    print_r($eValue['name']);
                  print_r('</a>');
                }
              print_r('</td>');

              print_r('<td>');
                print_r($cValue['sets']);
              print_r('</td>');

              print_r('<td>');
                print_r($cValue['reps']);
              print_r('</td>');

            print_r('</tr>');
          }
        print_r('</table>');
        }
      ?>
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
