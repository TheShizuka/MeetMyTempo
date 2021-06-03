var Accueil = Vue.component('Accueil',{
    
    template:`
    <div>
        <div id="header">
            <div id="titre">
            <h1>Meet My Tempo </h1>
        </div>
        </div>

        <div class="connexion">
            <div class="text_connexion"><p>Inscrivez-vous</p>
        </div>

        <form @submit="submit" enctype="multipart/form-data">

            
            <div class="barre_recherche">

                <div class="texte_identification"><label>Identifiant</label></div>
                <input type="text" v-model="utilisateur.pseudo" required>
            
                <div class="texte_identification"><label>Nom</label></div>
                <input type="text"  v-model="utilisateur.nom" required>

                <div class="texte_identification"><label>Prenom</label></div>
                <input type="text"  v-model="utilisateur.prenom" required>

                <div class="texte_identification"><label>E-mail</label></div>
                <input type="email" v-model="utilisateur.e_mail"  required>
            
                <div class="texte_identification"><label>Mot de Passe</label></div>
                <input type="password" v-model="utilisateur.mot_de_passe" required>

                <div class="texte_identification"><label>Description</label></div>
                <input type="text" v-model="utilisateur.description" maxlength="50" required>

                <button type="submit" class="boutonHeader activ">Inscription</button>
            
            </div>
            
                
            
            
        </form>



            
    </div>
    `
    ,
    data(){
        return{
            utilisateur:{    // Villageois à créer
                pseudo:null,
                nom:null,
                prenom:null,
                e_mail: null,
                mot_de_passe: null,
                descriptio:null,
            }
        }
    },
    methods:{

        submit:function(){

            // Objet FormData pour passage de paramètres
            let params = new FormData() ;
            // Ajout des paramètres de la batailles
            params.append("pseudo",             this.utilisateur.pseudo);
            params.append("nom",                this.utilisateur.nom);            
            params.append("prenom",             this.utilisateur.prenom);
            params.append("e_mail",             this.utilisateur.e_mail);            
            params.append("mot_de_passe",       this.utilisateur.mot_de_passe);
            params.append("description",       this.utilisateur.description);

            console.log(params.get('nom'));
            // Appel Ajax via axios création de l'utilisateur
            axios.post(backEnd.creatUtilisateur, params)
            // Réponse et récupération des données
            .then(response => {
                // Récupérer les données
                console.log("retour de la promesse : ",response.data);

                if(response.data =="1"){
                    this.$router.push('/');

                }else{
                    alert("e_mail ou pseudo deja pris")
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