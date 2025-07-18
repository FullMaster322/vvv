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
    <span class="raiting">16+</span>
    </div>
  </div>

</template>

<style>
body {
  background: #F4F4F4;
}
.raiting {
  font-family: var(--font-family, "Graphik Kinopoisk LC Web", Tahoma, Arial, Verdana, sans-serif);
    font-size: 18px;
    font-weight: var(--font-weight-regular, 400);
    line-height: 20px;
    
}
.about {
  display: flex;
  margin-left: 320px;
  margin-right: 320px;
  background-color: white;
  width: 1280px;
 
}
h1 {
    font-family: var(--font-family, "Graphik Kinopoisk LC Web", Tahoma, Arial, Verdana, sans-serif);
    font-size: 40px;
    font-weight: var(--font-weight-bold, 700);
    line-height: 48px;
    letter-spacing: -.5px;
}
img {
  margin-top: 112px;
  width: 302px;
  height: 430px;
  margin-left: 40px;
}
.info {
  margin-top: 112px;
  margin-left: 40px
}
p {
  margin-right: 40px
}
</style>
