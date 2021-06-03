var Rechercher_groupe = Vue.component('Rechercher_groupe',{
    
    template:`
    <div>

<div id="page">

    <div id="header">
        <div id="titre">
            <h1>Meet My Tempo </h1>
        </div>
        <a href="Accueil.html"><button class="boutonRechercher"><img src="img/fleche.png" height="56" width="56"/></button></a>


          <input type="search" id="Rechercher">


      <div class="boutonplay_profil_groupe">
      <router-link class="nav-link"
      :to="{name : 'Rechercher_musique'}"><button class="boutonFooter"><img src="img/play.png" height="50" width="50"/></button></router-link>
      <router-link class="nav-link"
      :to="{name : 'Rechercher_groupe'}"><button class="boutonFooter activ"><img src="img/profil.png" height="50" width="50"/></button></router-link>
      <router-link class="nav-link"
      :to="{name : 'Rechercher_personne'}"><button class="boutonFooter"><img src="img/profil.png" height="50" width="50"/><img src="img/profil.png" height="50" width="50"/></button></router-link>
      </div>
    </div>

    <div id="general">
      <div class="personne">
        <div class="nom_rechercher">
          <img class=image_profil_flux src="img/imageprofit.png" height="100" width="100"/>
          <h3>Lisa</h3>
        </div>
      </div>
    </div>

    <div id="footer">
            <router-link class="nav-link"
            :to="{name : 'Feed_general'}"><button class="boutonFooter " ><img src="img/accueil.png" height="50" width="50"/></button></router-link>
                <router-link class="nav-link"
                :to="{name : 'Rechercher_musique'}">><button class="boutonFooter activ"><img src="img/recherche.png" height="50" width="50"/></button></router-link>
                <router-link class="nav-link"
                :to="{name : 'Messages'}"><button class="boutonFooter "><img src="img/message.png" height="50" width="50"/></button></router-link>
                <router-link class="nav-link"
                :to="{name : 'Profile'}"><button class="boutonFooter "><img src="img/profil.png" height="50" width="50"/></button></router-link>
                <router-link class="nav-link"
                :to="{name : 'Ajouter_poste'}"><button class="boutonFooter "><img src="img/ajouter.png" height="50" width="50"/></button></router-link>
                <router-link class="nav-link"
                :to="{name : 'Settings'}"> <button class="boutonFooter"><img src="img/paramètre.png" height="50" width="50"/></button></router-link>
            
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