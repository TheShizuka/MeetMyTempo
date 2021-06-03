<?php


class clem  implements JsonSerializable
{
    private $nom_du_jeu = null;

    /**
     * clem constructor.
     * @param null $nom_du_jeu
     */
    public function __construct($nom_du_jeu)
    {
        $this->nom_du_jeu = $nom_du_jeu;
    }

    /**
     * @return null
     */
    public function getNomDuJeu()
    {
        return $this->nom_du_jeu;
    }

    /**
     * @param null $nom_du_jeu
     */
    public function setNomDuJeu($nom_du_jeu)
    {
        $this->nom_du_jeu = $nom_du_jeu;
    }
    public function jsonSerialize(){
        return get_object_vars($this);
    }

}