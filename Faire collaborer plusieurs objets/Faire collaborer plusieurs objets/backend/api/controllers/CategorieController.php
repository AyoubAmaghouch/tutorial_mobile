<?php
require_once __DIR__ . '/../../classes/GestionCategorie.php';
class CategorieController {
    public function listerCategories(): void {
        $gestion = new GestionCategorie();
        $categories = $gestion->getAll();

        // 1. Préparation de la donnée pure (sans HTML)
        $data = [];
        foreach ($categories as $cat) {
            $data[] = [
                'id' => $cat->getId(),
                'nom' => $cat->getNom(),
                'couleur' => $cat->getCouleur(),
                'icone' => $cat->getIcone()
            ];
        }

        // 2. Déclaration de la responsabilité de la réponse
        header('Content-Type: application/json');
        header('Access-Control-Allow-Origin: *'); // Pratique pour le dev local

        // 3. Renvoi des données brutes
        echo json_encode($data);
    }
}

$controller = new CategorieController();
$controller->listerCategories();
?>