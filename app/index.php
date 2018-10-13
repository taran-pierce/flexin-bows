<?php
  # Page Vars
  $active_link = "/";

  include "templates/top.php";
?>
<section>
  <div class="container">
    <?php
      # component vars
      $title = "20 Minute Better Body Workout";
      $frequency = "3 days per week (M-W-F)";
      $time = "20 Minutes";
      $instructions = "Insert big paragraph of shit I probably won't transcribe. Just work out.";
      $starting_exercise = "decline-bench-press";

      include "components/program-table.php";
    ?>
  </div>
</section>
<?php include "templates/bottom.php" ?>
