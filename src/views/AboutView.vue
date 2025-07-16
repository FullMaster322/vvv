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
    
    
    <img :src="object.posterUrlPreview"/>
    <div class="info">
    <h1>{{ object.nameRu }} ({{ object.year }})</h1>
    <p>Рейтинг: {{ object.ratingKinopoisk }}</p>
    <p>Длительность: {{ object.filmLength }} минут</p>
    <p style="margin-top: 20px">{{ object.description }}</p> 
    </div>
    
  </div>
</template>

<style>
.about {
  margin-top: 120px;
  display: flex;
  margin-left: 320px;
  margin-right: 320px;
}
h1 {
  font-size: 50px;
}
img {
  width: 350px;
  height: 450px;
}
.info {
  margin-left: 40px
}
</style>
