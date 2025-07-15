<script>
export default {
  data() {
    return {
      filmId: null
    };
  },
  mounted() {
    this.filmId = this.$route.params.id;
    console.log(this.filmId);
  }
};
</script>

<template>
  <div class="about">
    <h1 style="margin-top: 200px">{{ filmId }}</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

