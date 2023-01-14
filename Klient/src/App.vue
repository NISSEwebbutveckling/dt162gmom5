
<!--Detta är root-komponent i applikationen, denna innehåller i sin tur andra komponenter.
TEMPLATES, VIEW-->
<template>
<!--DT162G, moment5, projekt 
    Nils, 
    nibo1005@student.miun.se-->
<!--Headerkomponent-->
<Header />
<main>
<!--Importerar, vyer, view visas berodende på vilken undersida besökaren befinner sig på, vilken routes. -->
<RouterView />
</main>
<Footer />
</template>

<!--SCRIPTS-->
<script>
import { RouterView } from 'vue-router'
//Import headerkomponent.
import Header from "./components/Header.vue";
//Import footerkomponent.
import Footer from "./components/Footer.vue";
//Header och vilken Router.
export default {
    //Inkluderar nedan komponenter.
    components: {
        Header,
        Footer,
        RouterView
    }
}
</script>

<!--DESIGN-->
<!--Style scoped, stylen gäller då för endast denna komponent.-->
<style scoped>
main  {
max-width: 1000px;
width: 100%;
margin: 0 auto;
}
</style>
