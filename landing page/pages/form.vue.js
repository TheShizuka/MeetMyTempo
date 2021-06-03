var Form = Vue.component('Form',{
    
    template:`
    <form @submit.prevent="submit">

    <div class="rectangle-6"></div>
                                    <h2 class="nous-contacter">Nous Contacter</h2>
                                    <div class="email roboto-normal-black-35px">Email :</div>
                                    <div class="entrez-votre-e-mail roboto-thin-black-30px"><input v-model="form.e_mail" type="email"></div>
                                    <img class="ligne-1" src="img/ligne-1@1x.png" alt=""/>
                                    <div class="objet roboto-normal-black-35px">Objet :</div>
                                    <div class="entrez-ici-la-r-e-votre-message roboto-thin-black-30px"><input v-model="form.objet" type="text"></div>
                                    <img class="ligne-2" src="img/ligne-1@1x.png" alt=""/>
                                    <div class="message roboto-normal-black-35px">Message :</div>
                                    <div class="entrez-ici-votre-message roboto-thin-black-30px"><input v-model="form.message" type="text"></div>
                                    <img class="ligne-3" src="img/ligne-1@1x.png" alt=""/>
                                    <button type="submit" class="composant-1-4"><div class="envoyer">Envoyer</div></button></div>


            
    </form>
    `
    ,
    data(){
        return{
            form:{    // Villageois à créer
                e_mail:null,
                objet:null,
                message:null,

            }
        }

    },
    methods:{

        submit:function(){

            // Objet FormData pour passage de paramètres
            let params = new FormData() ;
            // Ajout des paramètres de la batailles
            params.append("e_mail",             this.form.e_mail);
            params.append("objet",                this.form.objet);            
            params.append("message",             this.form.message);
            // Appel Ajax via axios création de l'utilisateur
            axios.post("prog/creatForm.php", params)
            // Réponse et récupération des données
            .then(response => {
                // Récupérer les données
                console.log("retour de la promesse : ",response);

                if(response.data =="1"){
                    alert("Email envoyé")

                }else{
                    alert("erreur essayer a nouveau")
                }
                // Redirection sur la liste des villageois
                
            })
            // Cas d'erreur
            .catch(error =>{
                console.log("Erreur : ", error);
            })

        }

    }
})