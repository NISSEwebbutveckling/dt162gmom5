<!--Komponent Header, single file component.-->
<!--Skapar komponent som blir header.-->
<template>
<!--DT162G, moment5 -projekt.
    //Nils, 
    //nibo1005@student.miun.se-->
<header>
<!--Använder routerlinks nendan istället för "vanliga länkar."-->
    <RouterLink to="/" title="Klicka här för att komma till Startsidan.">
 <!--Headerbild-->                           
<img src="/src/img/froggy15.png"  alt="Bild, Header" >
<!--Text i bannern + glyps-->
<h1><span class="glyphicon glyphicon-music">  </span>  Musiksamlingen  
<span class="glyphicon glyphicon-music"> </span>
</h1> 
</RouterLink>
   <nav class="navbar navbar-expand-xl navbar-light bg-light">
         <!--Text i bannern + glyps, visas mobilvy-->
           <div id="mobilheader">
<span class="glyphicon glyphicon-music">  </span>  Musiksamlingen  
<span class="glyphicon glyphicon-music"> </span>
 </div>
    <div class="container-fluid">
        <!--Nav, hamburger.-->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo3" aria-controls="navbarTogglerDemo3" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
                    <div class="collapse navbar-collapse show" id="navbarTogglerDemo3">
                        <ul class="navbar-nav me-auto mb-2 mb-xl-0">
                            <li class="nav-item">               
                          <!--Routerlinks med tillhörande sökväg. inkluderas till rootkomponentetn i App.vue-->
                                 <RouterLink class="nav-link" aria-current="page" to="/">Start</RouterLink>
                            </li>
                            <li class="nav-item">
                               <RouterLink class="nav-link" aria-current="page" to="/guest">Musiksamlingen</RouterLink>
                            </li>
                            <li class="nav-item">
                             <RouterLink class="nav-link" aria-current="page" to="/info">Projektinfo</RouterLink>
                              </li>                          
                        </ul>
                    </div>
                </div>  
            </nav>
<div class ="container">
</div>
</header>
</template>
<script>
import { RouterLink } from 'vue-router'
//Anger vilka komponeter som ska användas.
export default {
components: {
//Objekt
//Nu känner Vue av att denna komponent används och ger förslag
//när html kod skrivs så att snipets, m.m. funkar.
RouterLink
}
}
</script>
<!--Style scoped, gäller för endast denna komponent.-->
<style scoped>

</style>
