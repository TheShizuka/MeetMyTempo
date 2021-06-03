<?php
require_once('class.Poste.php');
require_once('class.utilisateur.php');

class Interagir implements JsonSerializable
{

    private $aime = false;
    private $ecoute = false;

    private $pseudo = null;
    private $id_utilisateur = 0;
    private $id_poste = 0;

    /**
     * Interagir constructor.
     * @param bool $aime
     * @param bool $ecoute
     */
    public function __construct($aime, $ecoute)
    {
        $this->aime = $aime;
        $this->ecoute = $ecoute;
    }

    /**
     * @return bool
     */
    public function isAime()
    {
        return $this->aime;
    }

    /**
     * @param bool $aime
     */
    public function setAime($aime)
    {
        $this->aime = $aime;
    }

    /**
     * @return bool
     */
    public function isEcoute()
    {
        return $this->ecoute;
    }

    /**
     * @param bool $ecoute
     */
    public function setEcoute($ecoute)
    {
        $this->ecoute = $ecoute;
    }

    /**
     * @return null
     */
    public function getPseudo()
    {
        return $this->pseudo;
    }

    /**
     * @param null $pseudo
     */
    public function setPseudo($pseudo)
    {
        $this->pseudo = $pseudo;
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

    /**
     * @return int
     */
    public function getIdPoste()
    {
        return $this->id_poste;
    }

    /**
     * @param int $id_poste
     */
    public function setIdPoste($id_poste)
    {
        $this->id_poste = $id_poste;
    }

    public function jsonSerialize(){
        return get_object_vars($this);
    }


}