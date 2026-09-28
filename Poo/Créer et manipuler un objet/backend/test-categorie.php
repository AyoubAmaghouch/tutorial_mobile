<?php
    require_once("./categorie.php");
    $cat1 = new Categorie(1,"Design UI/UX","red","iconeA");
    $cat2 = new Categorie(2,"DEV mobile","bleu","iconeB");
    $cat1->afficher();
    $cat2->afficher();
?>

