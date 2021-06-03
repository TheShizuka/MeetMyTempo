var Messages = Vue.component('Messages',{
    
    template:`
    <div>

    <div id="page">
    <div id="header">
      <div class="nom_post">
      <img class=image_profil_flux src="img/imageprofit.png" height="100" width="100"/>

      </div>
      <div id="titre_message">
          <h1>Message</h1>
      </div>


          <input type="search" id="Rechercher">
          <button class="boutonAjouter"> + </button>

    </div>


    <div id="general">

    <router-link class="nav-link"
    :to="{name : 'Messagerie'}"><div class="personne">
        <div class="nom_rechercher">
          <img class=image_profil_flux src="img/imageprofit.png" height="100" width="100"/>
          <h3>Lisa</h3>
          <p class="date_message">22:05</p>

        </div>
        <p class="texte_message">blablablablablablablablablablablabla</p>

      </div>
      </router-link>




    </div>

    <div id="footer">
            <router-link class="nav-link"
            :to="{name : 'Feed_general'}"><button class="boutonFooter " ><img src="img/accueil.png" height="50" width="50"/></button></router-link>
                <router-link class="nav-link"
                :to="{name : 'Rechercher_musique'}">><button class="boutonFooter"><img src="img/recherche.png" height="50" width="50"/></button></router-link>
                <router-link class="nav-link"
                :to="{name : 'Messages'}"><button class="boutonFooter activ"><img src="img/message.png" height="50" width="50"/></button></router-link>
                <router-link class="nav-link"
                :to="{name : 'Profile'}"><button class="boutonFooter "><img src="img/profil.png" height="50" width="50"/></button></router-link>
                <router-link class="nav-link"
                :to="{name : 'Ajouter_poste'}"><button class="boutonFooter"><img src="img/ajouter.png" height="50" width="50"/></button></router-link>
                <router-link class="nav-link"
                :to="{name : 'Settings'}"> <button class="boutonFooter"><img src="img/paramètre.png" height="50" width="50"/></button></router-link>
            
    </div>
  </div>


            
    </div>
    `
    ,
    data(){
        return{
            main:null
        }
    },
    mounted(){
        axios.get(backEnd.listeUtilisateur)
        // Réponse et récupération des données
        .then(response => {
        // Récupérer les données
            
            this.main = response.data.pseudo;
            if(!this.main){
                this.$router.push('/');
            }
        })

    },
    methods:{


    }
})