<?php session_start(); ?>
<!DOCTYPE html>

<html>

    <head>
        <meta charset="utf-8">
        <title><?= $_SESSION['pseudo']; ?></title>
    
        <link rel="icon" href="mmticon.ico"/>
    

        <!-- Font-awesome -->            
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css">
    
        <link rel="stylesheet" href="style/style.css">
            
        <!-- VueJS -->
        <script src="https://cdn.jsdelivr.net/npm/vue"></script>	
        <!-- Vue-router pour injection des composants => routage & navigation -->
        <script src="https://unpkg.com/vue-router"></script>
    
        <!-- Lib Axios pour Ajax -->
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    
        <!-- Librairie momentJS -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js">
        </script>
    
 

    <body>
        <div id="app"> 
            <router-view></router-view>
        </div>

        <!-- Paramètres de l'application -->
        <script src="param/param.js"></script>

        <!-- les composants utilisés -->
        <script src="mmtpages/accueil.vue.js"></script>
        <script src="mmtpages/profile.vue.js"></script>
        <script src="mmtpages/connexion.vue.js"></script>
        <script src="mmtpages/settings.vue.js"></script>
        <script src="mmtpages/ajouter_poste.vue.js"></script>
        <script src="mmtpages/feed_abo.vue.js"></script>
        <script src="mmtpages/feed_general.vue.js"></script>
        <script src="mmtpages/Messagerie.vue.js"></script>
        <script src="mmtpages/Messages.vue.js"></script>
        <script src="mmtpages/rechercher_groupe.vue.js"></script>
        <script src="mmtpages/rechercher_musique.vue.js"></script>
        <script src="mmtpages/rechercher_personne.vue.js"></script>


        <script>

            var routes = [
            {path: '/',				        name:"Connexion",		                    component:Connexion},

            {path: '/accueil',	        name:"Accueil",	                            component:Accueil},
            {path: '/profile',	            name:"Profile",	                        component:Profile},
            {path: '/settings',	            name:"Settings",	                        component:Settings},
            {path: '/ajouter_poste',	            name:"Ajouter_poste",	                        component:Ajouter_poste},
            {path: '/feed_abo',	            name:"Feed_abo",	                        component:Feed_abo},
            {path: '/feed_general',	            name:"Feed_general",	                        component:Feed_general},
            {path: '/messagerie',	            name:"Messagerie",	                        component:Messagerie},
            {path: '/messages',	            name:"Messages",	                        component:Messages},
            {path: '/rechercher_groupe',	            name:"Rechercher_groupe",	                        component:Rechercher_groupe},
            {path: '/rechercher_musique',	            name:"Rechercher_musique",	                        component:Rechercher_musique},
            {path: '/rechercher_personne',	            name:"Rechercher_personne",	                        component:Rechercher_personne},
            ]
    
            // Initialisation du router
            var router = new VueRouter(
                {routes: routes}
            )
            var app = new Vue({
                el:"#app",
                router:router
            })
            
        </script>



    </body>
</html>