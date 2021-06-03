<?php
    session_start();
    header("Access-Control-Allow-Origin: *");

    require_once 'cnx.php';

    $pseudo = $_POST["pseudo"];
    $usernameExists = 0;
    $sql = 'SELECT * FROM utilisateur WHERE PSEUDO = ? AND MOT_DE_PASSE = ?';
    $stmt = $pdo->prepare($sql);
    $stmt->bindValue(1,$_POST['pseudo']);
    $stmt->bindValue(2,$_POST['mot_de_passe']);
    $stmt->execute();
   
    if($result = $stmt->fetch(PDO::FETCH_ASSOC)) {
       // row(s) returned
       $usernameExists = 1;

    } else {
       // no row returned
       $usernameExists = 0;
    }
    $stmt->closeCursor();

    if ($usernameExists) {
        echo "Exists";
        
        $_SESSION['pseudo'] = $result['PSEUDO'];
        $_SESSION['fondateur'] = $result['ABONNEMENT_PREMIUM'];
        $_SESSION['id_user'] = $result['ID_UTILISATEUR'];
        $_SESSION['id_user'] = $result['DESCRIP'];

    }else{
        echo -1;
    }


?>