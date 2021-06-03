<?php
require_once('class.utilisateur.php');

class Groupe implements JsonSerializable
{
    private $id_groupe =0;
    private $nom_groupe = null;
    private $date_groupe = date;

    private $id_utilisateur = 0;

    /**
     * Groupe constructor.
     * @param int $id_groupe
     * @param null $nom_groupe
     * @param $date_groupe
     */
    public function __construct($id_groupe, $nom_groupe, $date_groupe)
    {
        $this->id_groupe = $id_groupe;
        $this->nom_groupe = $nom_groupe;
        $this->date_groupe = $date_groupe;
    }

    /**
     * @return int
     */
    public function getIdGroupe()
    {
        return $this->id_groupe;
    }

    /**
     * @param int $id_groupe
     */
    public function setIdGroupe($id_groupe)
    {
        $this->id_groupe = $id_groupe;
    }

    /**
     * @return null
     */
    public function getNomGroupe()
    {
        return $this->nom_groupe;
    }

    /**
     * @param null $nom_groupe
     */
    public function setNomGroupe($nom_groupe)
    {
        $this->nom_groupe = $nom_groupe;
    }

    /**
     * @return mixed
     */
    public function getDateGroupe()
    {
        return $this->date_groupe;
    }

    /**
     * @param mixed $date_groupe
     */
    public function setDateGroupe($date_groupe)
    {
        $this->date_groupe = $date_groupe;
    }

    /**
     * @return int
     */
    public function getIdUtilisateur()
    {
        return $this->id_utilisateur;
    }

    /**
     * @param int $id_utilisateur
     */
    public function setIdUtilisateur($id_utilisateur)
    {
        $this->id_utilisateur = $id_utilisateur;
    }

    public function jsonSerialize(){
        return get_object_vars($this);
    }


}