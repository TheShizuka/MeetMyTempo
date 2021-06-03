<?php
    session_start();
    header("Access-Control-Allow-Origin: *");

    require_once 'cnx.php';
    



    $sql = "UPDATE utilisateur SET ABONNEMENT_PREMIUM = ? WHERE PSEUDO = ?";
                
    $requete = $pdo->prepare($sql);
    $requete->bindValue(1, $_POST['abonnement_premium']);
    $requete->bindValue(2, $_SESSION['pseudo']);
    
    echo $requete->execute();
?>