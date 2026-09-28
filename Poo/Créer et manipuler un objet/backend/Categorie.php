<?php
    class Categorie {

        public  $id;
        public  $nom;
        public  $couleur;
        public  $icone;

        public function __construct($id, $nom, $couleur, $icone){
            $this->id=$id;
            $this->nom=$nom;
            $this->couleur=$couleur;
            $this->icone=$icone;
        }

        public function afficher() {
        echo $this->nom."-".$this->couleur."-".$this->icone;
    }
    }
?>



