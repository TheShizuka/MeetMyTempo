var Settings = Vue.component('Settings',{
    template:`   
    
    <form id="page"  >
            <div id="header">
            <a href="Accueil.html"><button class="boutonRechercher"><img src="img/fleche.png" height="56" width="56"/></button></a>
    
            <div id="titre">
            <h1>Meet My Tempo </h1>
            </div>
    
    
    
        </div>
        
        
        <div id="general">
        
            <div class="setting_type">
            <form @submit="submit">
            <button type="submit" id="voir_top" class="being_pro but">
            Passer en Version Pro
            </button>
        </form>
            
                <br>
            <button>Mentions légales</button>
                <br>
            <button class="" id="prostat">Voir mes statistique de profil</button>
                <br>
            <button>Réclamation droit d'auteur</button>
            </div>
        </div>
        <form @submit="deco">
            <button  id="voir_top" type="deco" class ="but">
            Se Déconnecter
            </button>
        </form>
        
    
        <div id="footer">
            <router-link class="nav-link"
            :to="{name : 'Feed_general'}"><button class="boutonFooter " ><img src="img/accueil.png" height="50" width="50"/></button></router-link>
                <router-link class="nav-link"
                :to="{name : 'Rechercher_musique'}">><button class="boutonFooter "><img src="img/recherche.png" height="50" width="50"/></button></router-link>
                <router-link class="nav-link"
                :to="{name : 'Messages'}"><button class="boutonFooter "><img src="img/message.png" height="50" width="50"/></button></router-link>
                <router-link class="nav-link"
                :to="{name : 'Profile'}"><button class="boutonFooter "><img src="img/profil.png" height="50" width="50"/></button></router-link>
                <router-link class="nav-link"
                :to="{name : 'Ajouter_poste'}"><button class="boutonFooter "><img src="img/ajouter.png" height="50" width="50"/></button></router-link>
                <router-link class="nav-link"
                :to="{name : 'Settings'}"> <button class="boutonFooter activ"><img src="img/paramètre.png" height="50" width="50"/></button></router-link>
            
    </div>
    </form>

    
    

    ` 
    ,

    data(){
        return{
            fondateur:null,
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
        
            this.fondateur = response.data.abonnement_premium;
            
            if(this.fondateur == true){
                document.getElementById("prostat").classList.remove("pro_user");
            }else{

                document.getElementById("prostat").classList.add("pro_user");
            }
            
            
        })
        // Cas d'erreur
        .catch(error =>{
            console.log("Erreur : ", error);
        })
     
    },
    methods:{
        submit:function(){
            let params = new FormData() ;

            params.append("abonnement_premium",                  "1");
            console.log("click")

            axios.post(backEnd.updatePremium, params)

            .then(response => {
                document.getElementById("prostat").classList.remove("pro_user");

            })
            // Cas d'erreur
            .catch(error =>{
                console.log("Erreur : ", error);
            });

        },
        deco:function(){
            axios.post(backEnd.killSession)

            .then(response => {
                this.$router.push('/');

            })
            // Cas d'erreur
            .catch(error =>{
                console.log("Erreur : ", error);
            });
            

        }


        
    }
})