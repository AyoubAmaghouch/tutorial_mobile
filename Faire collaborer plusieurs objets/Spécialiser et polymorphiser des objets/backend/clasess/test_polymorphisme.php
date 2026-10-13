
<?php

require_once __DIR__ . '/User.php';
require_once __DIR__ . '/Auteur.php';

$utilisateurs = [
    new User(),
    new Auteur()
];

foreach ($utilisateurs as $user) {
    echo $user->getRoleName() . "<br>";
}
