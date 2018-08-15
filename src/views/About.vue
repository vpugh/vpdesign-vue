<template>
  <div class="about x-tp">
    <h1>This is an about page</h1>
    <FooterContact/>
    <Footer/>
  </div>
</template>

<script>
import FooterContact from "@/components/FooterContact.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "about",
  components: {
    FooterContact,
    Footer
  }
};
</script>

<style scoped>
</style>
