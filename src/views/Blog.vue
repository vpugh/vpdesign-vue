<template>
  <div class="about x-tp">
    <h1>This is the blog</h1>
    <FooterContact/>
    <Footer/>
  </div>
</template>

<script>
import FooterContact from "@/components/FooterContact.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "blog",
  components: {
    FooterContact,
    Footer
  }
};
</script>
