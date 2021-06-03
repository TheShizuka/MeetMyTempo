<?php
require_once('class.utilisateur.php');
require_once('class.Groupe.php');

class Invitation    implements JsonSerailizable
{

    private $id_invitation = 0;
    private $date_invitation = date;


    private $id_groupe = 0;
    private $id_utilisateur_emetteur = 0;
    private $id_utilisateur_receveur = 0;

    /**
     * Invitation constructor.
     * @param int $id_invitation
     * @param $date_invitation
     */
    public function __construct($id_invitation, $date_invitation)
    {
        $this->id_invitation = $id_invitation;
        $this->date_invitation = $date_invitation;
    }

    /**
     * @return int
     */
    public function getIdInvitation()
    {
        return $this->id_invitation;
    }

    /**
     * @param int $id_invitation
     */
    public function setIdInvitation($id_invitation)
    {
        $this->id_invitation = $id_invitation;
    }

    /**
     * @return mixed
     */
    public function getDateInvitation()
    {
        return $this->date_invitation;
    }

    /**
     * @param mixed $date_invitation
     */
    public function setDateInvitation($date_invitation)
    {
        $this->date_invitation = $date_invitation;
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
     * @return int
     */
    public function getIdUtilisateurEmetteur()
    {
        return $this->id_utilisateur_emetteur;
    }

    /**
     * @param int $id_utilisateur_emetteur
     */
    public function setIdUtilisateurEmetteur($id_utilisateur_emetteur)
    {
        $this->id_utilisateur_emetteur = $id_utilisateur_emetteur;
    }

    /**
     * @return int
     */
    public function getIdUtilisateurReceveur()
    {
        return $this->id_utilisateur_receveur;
    }

    /**
     * @param int $id_utilisateur_receveur
     */
    public function setIdUtilisateurReceveur($id_utilisateur_receveur)
    {
        $this->id_utilisateur_receveur = $id_utilisateur_receveur;
    }

    public function jsonSerialize(){
        return get_object_vars($this);
    }

}