<?php


class Utilisateur implements JsonSerializable
{
	private $id_utilisateur =0;
	private $pseudo = null;
	private $nom = null;
	private $prenom = null;
	private $e_mail = null;
	private $mot_de_passe = null;
    private $abonnement_premium = false;
    private $token = null;
    private $description = null;
	


    public function __construct($id_utilisateur = 0, $pseudo = null, $nom = null, $prenom = null, $e_mail = null, $mot_de_passe = null, $abonnement_premium = false, $token = null, $description = null)
    {
        $this->id_utilisateur       = $id_utilisateur;
        $this->pseudo               = $pseudo;
        $this->nom                  = $nom;
        $this->prenom               = $prenom;
        $this->e_mail               = $e_mail;
        $this->mot_de_passe         = $mot_de_passe;
        $this->abonnement_premium   = $abonnement_premium;
        $this->token                = $token;
        $this->description         = $description;
        
    }

    public function getIdUtilisateur(){
        return $this->id_utilisateur;
    }

    public function setIdUtilisateur($id_utilisateur)
    {
        $this->id_utilisateur = $id_utilisateur;
    }

    public function getPseudo()
    {
        return $this->pseudo;
    }

    public function setPseudo($pseudo)
    {
        $this->pseudo = $pseudo;
    }

    public function getNom()
    {
        return $this->nom;
    }

    public function setNom($nom)
    {
        $this->nom = $nom;
    }

    public function getPrenom()
    {
        return $this->prenom;
    }

    public function setPrenom($prenom)
    {
        $this->prenom = $prenom;
        
    }

    public function getEMail()
    {
        return $this->e_mail;
    }

    public function setEMail($e_mail)
    {
        $this->e_mail = $e_mail;
    }

    public function getMotDePasse()
    {
        return $this->mot_de_passe;
    }

    public function setMotDePasse($mot_de_passe)
    {
        $this->mot_de_passe = $mot_de_passe;
    }

    public function getToken(){
        return $this->token;
    }

    public function setToken($token)
    {
        $this->token = $token;

    }
    
    public function isAbonnementPremium()
    {
        return $this->abonnement_premium;
    }

    public function setAbonnementPremium($abonnement_premium)
    {
        $this->abonnement_premium = $abonnement_premium;
    }

    public function getDescription()
    {
        return $this->description;
    }

    public function setDescription($description)
    {
        $this->description = $description;
    }

        public function jsonSerialize(){
            return get_object_vars($this);
    }

}
?>