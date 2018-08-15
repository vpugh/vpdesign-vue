<template>
  <div id="app" :class="color[Math.floor(Math.random() * color.length)]">
    <div class="header" :class="{'dark': currentPage}">
      <div class="logo">
        <svg version="1.1" id="triangle" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="88px" height="72.8px" viewBox="0 0 88 72.8" enable-background="new 0 0 88 72.8" xml:space="preserve">
        <path fill="rgba(255, 255, 255, 0.29)" d="M84.3,0H44H3.7C1.7,0,0,2,0,4.4c0,0.8,0.2,1.5,0.5,2.2L1,7.4l19.2,30.5l20.7,32.9l0.3,0.5
        c0.7,0.9,1.7,1.5,2.8,1.5s2.1-0.6,2.8-1.5l0.3-0.5l20.7-32.9L87.2,7.2l0.2-0.4C87.8,6.1,88,5.3,88,4.4C88,2,86.3,0,84.3,0z M65,16.8
        L64.9,17l-9.3,14.8l-10,15.9l-0.2,0.3c-0.3,0.4-0.8,0.7-1.4,0.7s-1-0.3-1.4-0.7l-0.2-0.3l-10-15.9l-9.3-14.7L23,16.7
        c-0.2-0.3-0.2-0.7-0.2-1.1c0-1.2,0.8-2.1,1.8-2.1H44h19.5c1,0,1.8,1,1.8,2.1C65.3,16,65.2,16.5,65,16.8z"></path>
        </svg>
        <router-link to="/">
            <span>VP&mdash;Designs</span>
        </router-link>
      </div>
      <ul id="nav" class="header-nav">
        <li><router-link to="/work">Work</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/services">Services</router-link></li>
        <li><router-link to="/blog">Blog</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
import WebFontLoader from "webfontloader";

export default {
  watch: {
    $route: function() {
      this.thisPage();
    }
  },
  created() {
    WebFontLoader.load({
      typekit: {
        id: "qie0vrf"
      }
    });

    this.thisPage();
  },
  data() {
    return {
      color: ["orange", "green", "blue"],
      currentPage: null
    };
  },
  methods: {
    thisPage() {
      if (this.$route.fullPath == "/") {
        this.currentPage = false;
      } else {
        this.currentPage = true;
      }
    }
  }
};
</script>

<style lang="scss">
@import "./styles/variables/all";
@import "./styles/base/all";
a:-webkit-any-link {
  text-decoration: none;
  color: color(text, base);
}
html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
a {
  text-decoration: none;
}
img {
  max-width: 100%;
}
body {
  background-color: color(background, base);
  padding: 0;
  margin: 0;
  font-family: $calluna, $sans-serif;
  font-size: calc(16px + (22 - 18) * (100vw - 320px) / (1024 - 320));
  color: color(text, base);

  &.active {
    overflow: hidden;
  }
}

@import "./styles/components/navigation";
</style>
