<script>

export default {
  data() {
    return {
      page: 1,
      search: '',
      apiKey: 'e30ffed0-76ab-4dd6-b41f-4c9da2b2735b',
      isVisible: false,
      searchFilms: {},
    };
  },
  
  methods: {
     cl(filmId) {
      console.log(filmId);
      this.$router.push({ name: 'about', params: { id: filmId } });
    },
    async logSearch() {
      console.log(this.search);
      const encoded = encodeURIComponent(this.search);
      this.isVisible = true;

      if (this.search === '') {
        this.isVisible = false;
      }
      try {
        
        const response = await fetch(
          `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${encoded}&page=${this.page}`,
          {
            method: 'GET',
            headers: {
              'X-API-KEY': this.apiKey,
              'Content-Type': 'application/json'
            }
          }
        );

        const data = await response.json();
        this.searchFilms = data;
        console.log(data);
        this.searchFilms.films = this.searchFilms.films.slice(0, 8);

      } catch (error) {
        console.error(`error:`, error);
        
      }
    },
  
  }
  
};

</script>

<template>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
<nav class="navbar">
  <div class="wdt">
  <a class="logo" href="/">
  <img src="./assets/logo.svg" width="164px" height="36px" style="margin: 0; padding-top: 5px;"/>
  </a>

  <div style="display: flex; width: 730px;">
  <div class="nav-item" style="width: 168px; margin-left: -90px; margin-right: 10px;">
    <i class="fas fa-play"></i>
    <span>Онлайн-кинотеатр</span>
  </div>

  <div class="nav-item" style="width: 135.77px;">
    <i class="fas fa-ticket-alt"></i>
    <span>Билеты в кино</span>
  </div>

  <div class="search-bar" style="z-index: 9999;">
    <div class="search-bar-mega">
    <input type="text" placeholder="Фильмы, сериалы, персоны" v-model="search" v-on:input="logSearch">
    <button class="fas fa-sliders-h"></button>
    <button class="fas fa-search"></button>
   
    </div>
     <div :style="{ display: isVisible ? 'block' : 'none' }" 
     style="position: fixed; top: 60px; width: 350px; background-color: white; z-index: 9999;" 
     class="search-dropdown"
     >
     
    <div v-for="film in searchFilms.films" :key="film.filmId" style="margin-bottom: 10px; border-bottom: 1px solid #ccc; cursor: pointer;" v-on:click="cl(film.filmId)"> 
    <div style="display: flex">
      <img :src="film.posterUrl" style="width: 32px; height: 48px; padding: 5px"/>
      <div>
      <p style="color: black; margin-top: 10px; margin-left: 5px; font-size: 15px;">{{ film.nameRu }}</p>
      <div style="display: flex">
        <p style="color: black; margin-top: -10px; margin-left: 5px; font-size: 13px; line-height: 15px;">{{ film.rating & film.rating !== null ? film.rating: 'нет рейтинга' }}</p>
        <p style="color: rgba(0,0,0,.6); margin-top: -10px; margin-left: 5px; font-size: 13px; line-height: 15px;">{{ film.nameEn || film.nameRu }}</p>
        <p style="color: rgba(0,0,0,.6); margin-top: -10px; margin-left: 5px; font-size: 13px; line-height: 15px;">{{ film.year }}</p>
      </div>
      </div>
    </div>
    
  </div>
    </div>
  </div>
  </div>
  <button class="watch-free">
    <div style="width: 89px; height: 24px; text-align: center; margin-left: 10px; margin-top: 8px; color: white">
     Смотреть кино 
     </div>
  </button>

  <a href="#" class="login"> Войти</a>
  </div>
</nav>

<RouterView />
</template>

<style scoped>

</style>
