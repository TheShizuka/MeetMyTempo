<?php


class form implements JsonSerializable
{

    private $e_mail = null;
    private $objet = null;
    private $message = null;

    /**
     * form constructor.
     * @param null $e_mail
     * @param null $objet
     * @param null $message
     */
    public function __construct($e_mail, $objet, $message)
    {
        $this->e_mail = $e_mail;
        $this->objet = $objet;
        $this->message = $message;
    }

    /**
     * @return null
     */
    public function getEMail()
    {
        return $this->e_mail;
    }

    /**
     * @param null $e_mail
     */
    public function setEMail($e_mail)
    {
        $this->e_mail = $e_mail;
    }

    /**
     * @return null
     */
    public function getObjet()
    {
        return $this->objet;
    }

    /**
     * @param null $objet
     */
    public function setObjet($objet)
    {
        $this->objet = $objet;
    }

    /**
     * @return null
     */
    public function getMessage()
    {
        return $this->message;
    }

    /**
     * @param null $message
     */
    public function setMessage($message)
    {
        $this->message = $message;
    }


    public function jsonSerialize(){
        return get_object_vars($this);
    }

}