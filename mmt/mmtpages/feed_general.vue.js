var Feed_general = Vue.component('Feed_general',{
    
    template:`
    <div>
    <div id="page">
    <div id="header">
        <div id="titre">
            <h1>Meet My Tempo </h1>
        </div>
        <div id="nav">
       <router-link class="nav-link"
       :to="{name : 'Feed_general'}"><button class="boutonHeader activ">Géneral</button></router-link>
       <router-link class="nav-link"
       :to="{name : 'Feed_abo'}"><button class="boutonHeader ">Abonnements</button></router-link>
       </div>
    </div>
 
     <div id="abonnements">
 
 
     </div>
 
     <div id="general">
         <div class="post" v-for="post in poste" :key="post.id_poste">
             <div class="nom_post">
                 <img class=image_profil_flux src="img/imageprofit.png" height="100" width="100"/>
                 <h3>{{post.pseudo}}</h3>
             </div>
 
 
             <div class="iconemusic">
                 <img class="musique_affiche" src="img/musique_guerend.png" height="502" width="502" alt=""/>
             </div>
 
             <div class="titre_post">
                 <p class="titre_music">{{post.titre_poste}}</p>
                 <p class="auteur">Made by {{post.auteur}}</p>
             </div>
 
             <div class="durée">
                 <p class="duréegauche">1:39</p> <p class="duréedroite">3:45</p>
 
             </div>
 
             <div class="barre_durée">
                 <img src="img/barre contour 1.png" height="34" width="792" alt=""/>
             </div>
 
             <div class="boutons_post">
 
                 <div class="boutonnote">
                     <img src="img/notedemusique.png" height="86" width="86"/>
                 </div>
 
 
                 <div class="boutonpause">
                     <img src="img/pause.png" height="74" width="74"/>
                 </div>
 
                 <div class="boutoncommentaires">
                     <img src="img/commentaires.png" height="64" width="64"/>
                 </div>
 
 
             </div>
 
 
         </div>
 
 
 
     </div>
 
     <div id="footer">
            <router-link class="nav-link"
            :to="{name : 'Feed_general'}"><button class="boutonFooter activ" ><img src="img/accueil.png" height="50" width="50"/></button></router-link>
                <router-link class="nav-link"
                :to="{name : 'Rechercher_musique'}">><button class="boutonFooter"><img src="img/recherche.png" height="50" width="50"/></button></router-link>
                <router-link class="nav-link"
                :to="{name : 'Messages'}"><button class="boutonFooter"><img src="img/message.png" height="50" width="50"/></button></router-link>
                <router-link class="nav-link"
                :to="{name : 'Profile'}"><button class="boutonFooter "><img src="img/profil.png" height="50" width="50"/></button></router-link>
                <router-link class="nav-link"
                :to="{name : 'Ajouter_poste'}"><button class="boutonFooter "><img src="img/ajouter.png" height="50" width="50"/></button></router-link>
                <router-link class="nav-link"
                :to="{name : 'Settings'}"> <button class="boutonFooter"><img src="img/paramètre.png" height="50" width="50"/></button></router-link>
            
    </div>
 </div>

            
    </div>
    `
    ,
    data(){
        return{
            poste:[],
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
        axios.get(backEnd.listePostG)
        // Réponse et récupération des données
        .then(response => {
        // Récupérer les données
            
            this.poste = response.data;
            console.log(this.poste)
        
            
            
        })

    },
    methods:{


    }
})