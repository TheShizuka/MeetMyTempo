<?php
require_once('class.Poste.php');
require_once('class.class.utilisateur.php');

class Commenteur implements JsonSerializable
{
    private $text = null;
    private $date_commentaire = date;

    private $pseudo = null;
    private $titre_poste = date;

    /**
     * Commenteur constructor.
     * @param $date_commentaire
     * @param $titre_poste
     */
    public function __construct($date_commentaire, $titre_poste)
    {
        $this->date_commentaire = $date_commentaire;
        $this->titre_poste = $titre_poste;
    }

    /**
     * @return null
     */
    public function getText()
    {
        return $this->text;
    }

    /**
     * @param null $text
     */
    public function setText($text)
    {
        $this->text = $text;
    }

    /**
     * @return mixed
     */
    public function getDateCommentaire()
    {
        return $this->date_commentaire;
    }

    /**
     * @param mixed $date_commentaire
     */
    public function setDateCommentaire($date_commentaire)
    {
        $this->date_commentaire = $date_commentaire;
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
     * @return mixed
     */
    public function getTitrePoste()
    {
        return $this->titre_poste;
    }

    /**
     * @param mixed $titre_poste
     */
    public function setTitrePoste($titre_poste)
    {
        $this->titre_poste = $titre_poste;
    }

    public function jsonSerialize(){
        return get_object_vars($this);
    }

}