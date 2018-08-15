<template>
  <div class="about x-tp">
    <div class="container">
      <h1>This is the work page</h1>
    </div>
    <FooterContact/>
    <Footer/>
  </div>
</template>

<script>
import FooterContact from "@/components/FooterContact.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "work",
  components: {
    FooterContact,
    Footer
  }
};
</script>
