<script>

export default {
  data() {
    return {
      films: [],
      loading: true,
      page: 1,
      maxPages: 5,
      apiKey: 'e30ffed0-76ab-4dd6-b41f-4c9da2b2735b'
    };
  },
  mounted() {
    this.loadNextPage();
  },
  methods: {
    cl(filmId) {
      console.log(filmId);
      this.$router.push({ name: 'about', params: { id: filmId } });
      
    },
    async loadNextPage() {
      if (this.page > this.maxPages) {
        this.loading = false;
        return;
      }

      try {
        const response = await fetch(
          `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=${this.page}`,
          {
            method: 'GET',
            headers: {
              'X-API-KEY': this.apiKey,
              'Content-Type': 'application/json'
            }
          }
        );
        const data = await response.json();
        this.films.push(...data.films);
        this.page++;

        setTimeout(this.loadNextPage, 1000);
      } catch (error) {
        console.error(`error:`, error);
        this.loading = false;
      }
    }
    
  }
  
};
</script>

<template>
 <div class="links">
  <a href="/"><i class="fas fa-home"></i> Главная</a>
  <a href="#"><i class="fas fa-tv"></i> Онлайн-кинотеатр</a>
  <a href="#"><i class="fas fa-film"></i> Фильмы</a>
  <a href="#"><i class="fas fa-video"></i> Сериалы</a>
  <a href="#"><i class="fas fa-broadcast-tower"></i> Телеканалы</a>
  <a href="#"><i class="fas fa-running"></i> Спорт</a>
  <a href="#"><i class="fas fa-tags"></i> Подписки</a>
  <a href="#"><i class="fas fa-ticket-alt"></i> Билеты в кино</a>
  <a href="#"><i class="fas fa-photo-video"></i> Медиа</a>
</div>
<div class="film-list" style="width: 1280px; margin-left: 320px;">
   <div class="films">
   
      <div v-for="film in films" :key="film.filmId" class="film-card" v-on:click="cl(film.filmId)">
        <img :src="film.posterUrlPreview" :alt="film.nameRu" />
        <div class="film-info">
          <strong>{{ film.nameRu }}</strong>
          <p>id: {{ film.filmId }}</p>
          <p>Год: {{ film.year }}</p>
          <p>Рейтинг: {{ film.rating && film.rating !== 'null' ? film.rating : 'неизвестен' }}</p>
        </div>
      </div>
     
    </div>
    
</div>

</template>

<style>
.links {
  position: fixed;
  height: 100%;
  background-color: white;
  margin-top: 15px;
  flex-flow: column wrap;
  display: flex;
  margin-left: 320px;
  width: 235px;
}
.links::after {
  content: "";
  position: absolute;
  top: -15px;
  right: -1px;
  width: 1.5px;
  height: 100%;
  background-color: #ccc; /* цвет линии */
}

.links a {
  font-size: 15px;
  font-weight: bold;
  font-style: normal;
  line-height: 18px;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.6);
  margin-left: 35px;
  cursor: pointer;
  transition: 0.2s;
  text-decoration: none;
  margin-top: 10px;
  font-family: var(--font-family, "Graphik Kinopoisk LC Web", Tahoma, Arial, Verdana, sans-serif);
}
.links a:hover {
  color: black;
}
.film-list {
  align-items: center;
  justify-content: center;
  margin-left: 200px;
  margin-right: 320px;
  background-color: white;
}
.films {
  width: 1030px;
  margin-left: 255px;
  margin-top: 72px;
}
.film-card {
  width: 300px;
  height: 550px;
  display: inline-block;
  margin: 18px;
  background-color: #ffffff;
  text-align: center;
  transition: 0.2s;
  cursor: pointer;
  border: 3px solid #eb469f;
  border-radius: 20px;
}
.film-card:hover {
  background: #eb469f;
  color: white;
  
}
.film-card img {
  margin-top: 20px;
  width: 260px;
  height: 360px;
}
.film-info {
  padding: 8px;
  font-size: 14px;
}
</style>
