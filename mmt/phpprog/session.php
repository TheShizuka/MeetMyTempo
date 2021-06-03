<?php 
session_start();

if($_SESSION['pseudo']=="0"){
    echo "deconnecté";
}

?>