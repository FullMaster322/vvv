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
  
  <div class="outer">
  <div class="container">
    <div class="box box1">
      <img :src="object.posterUrlPreview" class="poster"/>
    </div>
    <div class="box box2">
      
    <div class="filmInfo">
  <span class="filmName">{{ object.nameRu }} ({{ object.year }})</span>
  <span class="originalName">
  {{ object.nameOriginal || '' }} 
  {{ object.ratingAgeLimits ? object.ratingAgeLimits.replace('age', '') : '' }}+
</span>
</div>

    </div>
    <div class="box box3">
  <div class="ratingBlock">
    <span class="raiting">{{ object.ratingKinopoisk }}</span>
    <span class="voteCount">{{ object.ratingKinopoiskVoteCount }} оценок</span>
  </div>
</div>

  </div>
</div>



</template>

<style>
body {
  background-color: #F4F4F4;
  -webkit-font-smoothing: antialiased;
}
.outer {
  width: 100%;
  display: flex;
  justify-content: center;
  
  height: 100%;
}

.container {
  width: 1280px;
  display: flex;
  gap: 10px; /* необязательный отступ между блоками */
  padding-top: 112px;
  background-color: white;
}

.box1 {
  width: 302px;
  height: 100px;
  background-color: white;
  padding-left: 42px;
  padding-right: 9px;
  
}

.box2 {
  width: 600px;
  height: 100px;
  background-color: white;
  padding-left: 20px;
  padding-right: 0px;
  
}

.box3 {
  width: 240px;
  height: 100px;
  background-color: white;
  padding-left: 20px;
  margin-top: 4px;
}
.poster {
  width: 302px;
  height: 430px;
}
.filmInfo {
  display: flex;
  flex-direction: column; /* вертикальное расположение */
}
.filmName {
  display: block;
  font-family: var(--font-family, "Graphik Kinopoisk LC Web", Tahoma, Arial, Verdana, sans-serif);
  font-size: 40px;
  font-weight: var(--font-weight-bold, 700);
  line-height: 48px;
  letter-spacing: -.5px;
}
.originalName {
  margin-top: 12px;
  display: block;
  margin-right: 8px;
  font-size: 18px;
  letter-spacing: -.2px;
  color: rgba(0, 0, 0, .6);
  font-family: var(--font-family, "Graphik Kinopoisk LC Web", Tahoma, Arial, Verdana, sans-serif);
}
.ratingBlock {
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  gap: 4px; 
}

.raiting {
  color: #777;
  font-size: 32px;
  font-weight: bold;
  font-family: var(--font-family, "Graphik Kinopoisk LC Web", Tahoma, Arial, Verdana, sans-serif);
  line-height: 40px;
}
.voteCount {
  font-family: var(--font-family, "Graphik Kinopoisk LC Web", Tahoma, Arial, Verdana, sans-serif);
  font-size: 13px;
  line-height: 18px;
  color: rgba(0, 0, 0, .6);
  margin-top: -3px;
}
</style>
