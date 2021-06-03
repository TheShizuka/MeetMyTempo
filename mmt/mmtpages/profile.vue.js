var Profile = Vue.component('Profile',{
    template:`   
    
        <?php session_start(); ?>
        <div id="page">
            <div id="header">
                <div class="nom_page_profil">
                    <img class=image_profil_flux src="img/imageprofit.png" height="100" width="100"/>


                    <div class="musique_posté">
                        <p>3</p>
                        <p>Musique Postée</p>
                    </div>

                    <div class="Abonnes">
                        <p>12</p>
                        <p>Abonnés</p>
                    </div>

                    <div class="Abonnements">
                        <p>14</p>
                        <p>Abonnements</p>
                    </div>

                </div>




                <p id="pseudo" class="nom_profil"> {{main}} </p>
                <p id="fondateur" class="badge">Fondateur</p>
                <p id="description" class="decription_profil">{{descrip}}</p>



            </div>

            <div id="general">
                <div class="iconemusic">
                    <img class="musique_affiche" src="img/musique_guerend.png" height="502" width="502" alt=""/>
                </div>


                <div class="nom_musique_profil">
                    <img class=image_profil_flux src="img/musique_guerend.png" height="100" width="100"/>
                    <h3>guerend</h3>
                    <button class="boutonplay">
                        <img src="img/play.png" height="50" width="50"/>
                    </button>
                </div>


            </div>

            <div id="footer">
            <router-link class="nav-link"
            :to="{name : 'Feed_general'}"><button class="boutonFooter" ><img src="img/accueil.png" height="50" width="50"/></button></router-link>
                <router-link class="nav-link"
                :to="{name : 'Rechercher_musique'}">><button class="boutonFooter"><img src="img/recherche.png" height="50" width="50"/></button></router-link>
                <router-link class="nav-link"
                :to="{name : 'Messages'}"><button class="boutonFooter"><img src="img/message.png" height="50" width="50"/></button></router-link>
                <router-link class="nav-link"
                :to="{name : 'Profile'}"><button class="boutonFooter activ"><img src="img/profil.png" height="50" width="50"/></button></router-link>
                <router-link class="nav-link"
                :to="{name : 'Ajouter_poste'}"><button class="boutonFooter"><img src="img/ajouter.png" height="50" width="50"/></button></router-link>
                <router-link class="nav-link"
                :to="{name : 'Settings'}"> <button class="boutonFooter"><img src="img/paramètre.png" height="50" width="50"/></button></router-link>
            </div>
        </div>

    
    

    ` 
    ,

    data(){
        return{
            main:null, // Structure de données des villageois
            fondateur:null,
            descrip:null
        }
    },
    mounted(){
        // Appel Ajax via axios liste des villageois
        axios.get(backEnd.listeUtilisateur)
        // Réponse et récupération des données
        .then(response => {
        // Récupérer les données
            
            this.main = response.data.pseudo;
            this.descrip = response.data.description;
            if(!this.main){
                this.$router.push('/');
            }
            this.fondateur = response.data.abonnement_premium;
            if(this.fondateur == true){
                document.getElementById("fondateur").classList.remove("invisible");
            }else{

                document.getElementById("fondateur").classList.add("invisible");
            }
            
            
        })
    },
    methods:{

        
    }
})