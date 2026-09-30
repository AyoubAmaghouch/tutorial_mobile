<?php

header("Content-Type: application/json");

$file = "./data.json";

$categories = json_decode(
    file_get_contents($file),
    true
);


// GET
if ($_SERVER["REQUEST_METHOD"] === "GET") {

    echo json_encode([
        "status" => "success",
        "data" => $categories
    ]);

    exit;
}


// POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $data = json_decode(
        file_get_contents("php://input"),
        true
    );

    $data["id"] = count($categories) + 1;

    $categories[] = $data;

    file_put_contents(
        $file,
        json_encode($categories, JSON_PRETTY_PRINT)
    );

    echo json_encode([
        "status" => "success",
        "message" => "Catégorie ajoutée",
        "data" => $data
    ]);

    exit;
}


// PUT
if ($_SERVER["REQUEST_METHOD"] === "PUT") {

    $data = json_decode(
        file_get_contents("php://input"),
        true
    );

    foreach ($categories as &$categorie) {

        if ($categorie["id"] == $data["id"]) {

            $categorie["nom"] = $data["nom"];
            $categorie["couleur"] = $data["couleur"];
            $categorie["icone"] = $data["icone"];
        }
    }

    file_put_contents(
        $file,
        json_encode($categories, JSON_PRETTY_PRINT)
    );

    echo json_encode([
        "status" => "success",
        "message" => "Catégorie modifiée",
        "data" => $data
    ]);

    exit;
}


// DELETE
if ($_SERVER["REQUEST_METHOD"] === "DELETE") {

    $data = json_decode(
        file_get_contents("php://input"),
        true
    );

    $categories = array_filter(
        $categories,
        function ($categorie) use ($data) {

            return $categorie["id"] != $data["id"];
        }
    );

    $categories = array_values($categories);

    file_put_contents(
        $file,
        json_encode($categories, JSON_PRETTY_PRINT)
    );

    echo json_encode([
        "status" => "success",
        "message" => "Catégorie supprimée"
    ]);

    exit;
}