<?php
    header("Access-Control-Allow-Origin: *");
    require_once 'cnx.php';

    $sql = "INSERT INTO form(E_MAIL, OBJET, MESSAGE) VALUES(?, ?, ?)";
                
    $requete = $pdo->prepare($sql);
    $requete->bindValue(1, $_POST['e_mail']);
    $requete->bindValue(2, $_POST['objet']);
    $requete->bindValue(3, $_POST['message']);
    
    echo $requete->execute();
?>