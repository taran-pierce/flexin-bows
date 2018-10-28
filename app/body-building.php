<?php
  # Page Vars
  $active_link = "/";

  include "templates/top.php";
?>
<section>
  <div class="container">
    <?php
      # component vars
      $file = 'data/programs/body-building.json';
      $starting_exercise = "decline-bench-press";

      include "components/program-table2.php";
    ?>
  </div>
</section>
<?php include "templates/bottom.php" ?>
