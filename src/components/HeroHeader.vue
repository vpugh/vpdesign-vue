<template>
    <section class="jumbotron" :class="pattern">
        <div class="container">
            <h2 class="jumbotron-title atiza--bold">{{ title }}</h2>
            <p class="jumbotron-subtitle">{{ subtitle }}</p>
        </div>
    </section>
</template>

<script>
export default {
  name: "HeroHeader",
  props: {
    title: String,
    subtitle: String,
    pattern: String
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/components/jumbotron";
</style>
