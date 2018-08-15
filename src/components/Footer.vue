<template>
    <footer>
        <div class="footer-container">
            <div class="grid grid--2col">
                <p class="copyright">© {{currentYear()}} VP&mdash;Designs. All Rights Reserved. 
                <span class="hide-mobile">Created by <a href="http://toripugh.com" target="_blank">Tori Pugh</a></span></p> 
                <ul class="footer-navigation">
                    <li><a href="https://twitter.com/teekatwo" target="_blank">Twitter</a></li>
                    <li><a href="https://facebook.com/vpdesignstudios/" target="_blank">Facebook</a></li>
                    <li><a href="https://dribbble.com/teekatwo" target="_blank">Dribbble</a></li>
                    <li><a href="https://medium.com/@teekatwo" target="_blank">Medium</a></li>
                    <li><a href="https://www.instagram.com/toripugh/" target="_blank">Instagram</a></li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    currentYear() {
      var year = new Date().getFullYear();
      return year;
    }
  }
};
</script>

<style scoped lang="scss">
@import "../styles/components/footer";
</style>
