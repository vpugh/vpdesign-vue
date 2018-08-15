<template>
    <li class="recent-posts">
        <a :href="articleLink" target="_blank">
            <img :src="articleCover" alt="">
            <h3>{{ articleTitle }}</h3>
            <small>{{ articleDate }}</small>
        </a>
    </li>
</template>

<script>
export default {
  name: "BlogGrid",
  props: {
    articleLink: String,
    articleCover: String,
    articleTitle: String,
    articleDate: String
  }
};
</script>

<style scoped lang="scss">
@import "../styles/components/bloggrid";
</style>
