<template>
    <li class="thumbnail">
        <img :src="thumbnailSrc" alt="">
        <div>
            <h3 class="thumbnail--title">{{thumbnailTitle}}</h3>
            <p class="thumbnail--description">{{thumbnailDesc}}</p>
            <a :href="thumbnailUrl">View {{ thumbnailType}}</a>
        </div>
    </li>
</template>

<script>
export default {
  name: "ImageGrid",
  props: {
    thumbnailUrl: String,
    thumbnailSrc: String,
    thumbnailTitle: String,
    thumbnailType: String,
    thumbnailDesc: String
  }
};
</script>

<style lang="scss">
@import "../styles/components/imagegrid";
</style>
