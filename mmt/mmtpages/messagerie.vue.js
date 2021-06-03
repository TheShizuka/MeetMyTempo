var Messagerie = Vue.component('Messagerie',{
    
    template:`
    <div>

    <div id="page">

  <div id="header">
  <router-link class="nav-link"
  :to="{name : 'Messages'}"><button class="boutonRechercher"><img src="img/fleche.png" height="56" width="56"/></button></router-link>


      <img class=image_profil_messagerie src="img/imageprofit.png" height="100" width="100"/>
    <div id="titre_message">
      <h1>Lucas</h1>

    </div>



  </div>


  <div id="general">

    <p class="expediteur">boujour</p>
    <p class="receveur">coucou</p>
    <p class="expediteur">boujour</p>
    <p class="receveur">coucou</p>
    <p class="expediteur">boujour</p>
    <p class="receveur">coucou</p>
    <p class="expediteur">boujour</p>
    <p class="receveur">coucou</p>

    </div>




  </div>

  <div id="footer">
    <input type="text" id="taper_message">

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