<?php
    session_start();
    header("Access-Control-Allow-Origin: *");

    require_once 'classes/class.utilisateur.php';
    require_once 'cnx.php';

    // Liste des villageois, de leur spécialité et lieu d'habitation
    $sql = "SELECT * FROM utilisateur WHERE PSEUDO = ?" ;
    // Préparation de la requête
    $requete = $pdo->prepare($sql);
    $requete->bindValue(1,$_SESSION['pseudo']);
    // Tableau qui contiendra la liste des villageois
    $liste = array();

    // Si la requête renvoie quelque chose
    if ($requete->execute()) {
        // Parcours des résultats
        while ($donnees = $requete->fetch()) {
            $utilisateur = new utilisateur(
                $donnees['ID_UTILISATEUR'],
                $donnees['PSEUDO'],
                $donnees['NOM'],
                $donnees['PRENOM'],
                $donnees['E_MAIL'],
                $donnees['MOT_DE_PASSE'],
                $donnees['ABONNEMENT_PREMIUM'],
                $donnees['TOKEN'],
                $donnees['DESCRIP']
            );
            $liste = $utilisateur;                
        
        }
    }
    // Encodage et affichage du flux Json
    echo json_encode($liste);
    exit();

?>