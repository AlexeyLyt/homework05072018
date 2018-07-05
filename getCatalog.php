<?php
    require_once 'Catalog.php';

    $all = Catalog::createAllPersonByBD();
    echo $all;

?>