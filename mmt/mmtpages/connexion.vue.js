var Connexion = Vue.component('Connexion',{
    
    template:`

            <form @submit="submit" enctype="multipart/form-data">

                
                <div id="header">
                    <div id="titre">
                        <h1>Meet My Tempo </h1>
                    </div>
                </div>
            
                <div class="connexion">
                    <div class="text_connexion"><p>Connexion</p>
                </div>
            
                <div class="barre_recherche">
            
                    <div class="texte_identification"><label>Pseudo</label></div>
                    <input type="text"  v-model="utilisateur.pseudo" required>
            
                    <div class="texte_identification"><label>Mot de Passe</label></div>
                    <input type="password" v-model="utilisateur.mot_de_passe" required>

                    <button type="submit" class="boutonHeader activ">Connexion</button>
                    <router-link class="nav-link"
                :to="{name : 'Accueil'}">  <button  class="boutonHeader activ">S'inscrire</button></router-link>
            
                </div>
            
                
            
            
            </form>



            

    `
    ,
    data(){
        return{
            utilisateur:{    // Villageois à créer
                pseudo:null,
                mot_de_passe: null,
            }
        }
    },
    methods:{

        submit:function(){

            // Objet FormData pour passage de paramètres
            let params = new FormData() ;
            // Ajout des paramètres de la batailles
            params.append("pseudo",             this.utilisateur.pseudo);    
            params.append("mot_de_passe",       this.utilisateur.mot_de_passe);
            // Appel Ajax via axios création de l'utilisateur
            axios.post(backEnd.creatConnexion, params)
            // Réponse et récupération des données
            .then(response => {
                // Récupérer les données
                console.log("retour de la promesse : ",response);

                if(response.data =="Exists"){
                    this.$router.push('/profile');

                }else{
                    alert("pseudo ou mdp erroné")
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