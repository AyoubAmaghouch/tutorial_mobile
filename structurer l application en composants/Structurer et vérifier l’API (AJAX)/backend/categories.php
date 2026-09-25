<?php

$categories = [
    [
        "id" => 1,
        "nom" => "Développement Web"
    ],
    [
        "id" => 2,
        "nom" => "Design"
    ],
    [
        "id" => 3,
        "nom" => "Marketing"
    ]
];

header("Content-Type: application/json");

echo json_encode($categories);