<?php

require_once('class.utilisateur.php');

class Poste implements JsonSerializable
{
    private $id_poste = 0;
    private $titre_poste = null;
    private $la_description = null;
    private $date_poste = date;
    private $url = null;

    private $id_utilisateur = 0;
    private $pseudo = null;

    /**
     * Poste constructor.
     * @param int $id_poste
     * @param null $titre_poste
     * @param null $la_description
     * @param $date_poste
     * @param null $url
     */
    public function __construct($id_poste, $titre_poste, $la_description, $date_poste, $url)
    {
        $this->id_poste = $id_poste;
        $this->titre_poste = $titre_poste;
        $this->la_description = $la_description;
        $this->date_poste = $date_poste;
        $this->url = $url;
    }


    /**
     * @return int
     */
    public function getIdPoste()
    {
        return $this->id_poste;
    }

    /**
     * @param null $iurl
     */
    public function setUrl($url)
    {
        $this->url = $url;
    }

    public function getUrl()
    {
        return $this->url;
    }

    /**
     * @param int $id_poste
     */
    public function setIdPoste($id_poste)
    {
        $this->id_poste = $id_poste;
    }

    /**
     * @return null
     */
    public function getTitrePoste()
    {
        return $this->titre_poste;
    }

    /**
     * @param null $titre_poste
     */
    public function setTitrePoste($titre_poste)
    {
        $this->titre_poste = $titre_poste;
    }

    /**
     * @return null
     */
    public function getLaDescription()
    {
        return $this->la_description;
    }

    /**
     * @param null $la_description
     */
    public function setLaDescription($la_description)
    {
        $this->la_description = $la_description;
    }

    /**
     * @return mixed
     */
    public function getDatePoste()
    {
        return $this->date_poste;
    }

    /**
     * @param mixed $date_poste
     */
    public function setDatePoste($date_poste)
    {
        $this->date_poste = $date_poste;
    }

    public function jsonSerialize(){
        return get_object_vars($this);
    }
}