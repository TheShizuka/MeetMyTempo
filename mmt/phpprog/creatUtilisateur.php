<?php
    header("Access-Control-Allow-Origin: *");

    require_once 'cnx.php';




    $sql = "INSERT INTO utilisateur(PSEUDO, NOM, PRENOM, E_MAIL, MOT_DE_PASSE, DESCRIP) VALUES(?, ?, ?, ?, ?, ?)";
                
    $requete = $pdo->prepare($sql);
    $requete->bindValue(1, $_POST['pseudo']);
    $requete->bindValue(2, $_POST['nom']);
    $requete->bindValue(3, $_POST['prenom']);
    $requete->bindValue(4, $_POST['e_mail']);
    $requete->bindValue(5, $_POST['mot_de_passe']);
    $requete->bindValue(6, $_POST['description']);
    
    
    echo $requete->execute();
?>