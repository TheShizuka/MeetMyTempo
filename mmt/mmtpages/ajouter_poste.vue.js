var Ajouter_poste = Vue.component('Ajouter_poste',{
    
    template:`
    <div>

    <div id="page">
    <div id="header">
      <div id="titre">
        <h1>Meet My Tempo </h1>
      </div>
    </div>
  
    <form @submit="submit" class="connexion">
      <div class="text_connexion"><p>Ajouter votre musique</p></div>
  
      <div class="barre_recherche">
  
        <input type="file"
               id="musique"
               accept=".mp3, .avi" required>
  
        <div class="texte_identification"><label for="name_musique">Nom de la Musique</label></div>
        <input type="text" v-model="post.nom_post" id="name_musique" required>
  
        <div class="texte_identification"><label for="auteur_musique">Auteur</label></div>
        <input type="text" v-model="post.auteur" id="auteur_musique">
  
  
  
  
      </div>
  
      <button type="submit" class="boutonHeader activ">Ajouter</button>
  
  
    </form>
  
  
  
    <div id="footer">
            <router-link class="nav-link"
            :to="{name : 'Feed_general'}"><button class="boutonFooter" ><img src="img/accueil.png" height="50" width="50"/></button></router-link>
                <router-link class="nav-link"
                :to="{name : 'Rechercher_musique'}">><button class="boutonFooter"><img src="img/recherche.png" height="50" width="50"/></button></router-link>
                <router-link class="nav-link"
                :to="{name : 'Messages'}"><button class="boutonFooter"><img src="img/message.png" height="50" width="50"/></button></router-link>
                <router-link class="nav-link"
                :to="{name : 'Profile'}"><button class="boutonFooter "><img src="img/profil.png" height="50" width="50"/></button></router-link>
                <router-link class="nav-link"
                :to="{name : 'Ajouter_poste'}"><button class="boutonFooter activ"><img src="img/ajouter.png" height="50" width="50"/></button></router-link>
                <router-link class="nav-link"
                :to="{name : 'Settings'}"> <button class="boutonFooter"><img src="img/paramètre.png" height="50" width="50"/></button></router-link>
            
    </div>
  
  </div>


            
    </div>
    `
    ,
    data(){
        return{
          main:null,
          post:{ 
            
            nom_post:null,
            auteur: null,
            pseudo:null
          }
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
      submit:function(){
         // Objet FormData pour passage de paramètres
         let params = new FormData() ;
         // Ajout des paramètres de la batailles
         params.append("nom_post",             this.post.nom_post);    
         params.append("auteur",       this.post.auteur);
         params.append("pseudo",       this.main);
         // Appel Ajax via axios création de l'utilisateur
         axios.post(backEnd.creatPost, params)
         // Réponse et récupération des données
         .then(response => {
             // Récupérer les données
             console.log("retour de la promesse : ",response.data);

             if(response.data =="1"){
                 this.$router.push('/profile');
                 alert("musique crée")

             }else{
                 alert("essayer a nouveau")
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