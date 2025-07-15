<script>
export default {
  data() {
    return{
      filmId: null,
      apiKey: 'e30ffed0-76ab-4dd6-b41f-4c9da2b2735b'
    }
  },
  mounted() {
    this.filmId = this.$route.params.id;
    console.log(this.filmId);
  },
  methods: {
      async getFilmById() {
         const response = await fetch(
          `https://kinopoiskapiunofficial.tech/api/v2.2/films/top/${this.filmId}`,
          {
            method: 'GET',
            headers: {
              'X-API-KEY': this.apiKey,
              'Content-Type': 'application/json'
            }
          }
        );
        
      }
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
