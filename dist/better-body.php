<?php
  # Page Vars
  $active_link = "/better-body.php";

  include "templates/top.php";
?>
<section>
  <div class="container">
    <?php
      # component vars
      $file = 'data/programs/better-body-refactor.json';
      $starting_exercise = "decline-bench-press";

      include "components/program-table2.php";
    ?>
  </div>
</section>
<?php include "templates/bottom.php" ?>
