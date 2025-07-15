<script>
export default {
  data() {
    return{
      filmId: null,
      apiKey: 'e30ffed0-76ab-4dd6-b41f-4c9da2b2735b',
      object: [],
    }
  },
mounted() {
  this.filmId = this.$route.params.id;
  this.getFilmById();
},

methods: {
  async getFilmById() {
    try {
      const response = await fetch(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/${this.filmId}`,
        {
          method: 'GET',
          headers: {
            'X-API-KEY': this.apiKey,
            'Content-Type': 'application/json'
          }
        }
      );

      const data = await response.json();
      console.log(data); 
      this.object = data;
    } catch (error) {
      console.error(error);
    }
  }
}
};
</script>

<template>
  <div class="about">
    <h1 style="margin-top: 100px">{{ object.nameRu }}</h1>
    <p style="margin-top: 200px">{{ object.description }}</p>
    
  </div>
</template>

<style>
.about {
  display: flex;
  margin-left: 20px;
  margin-right: 20px;
}
</style>
