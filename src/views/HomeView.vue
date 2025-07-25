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
          `https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_250_MOVIES&page=${this.page}`,
          {
            method: 'GET',
            headers: {
              'X-API-KEY': this.apiKey,
              'Content-Type': 'application/json'
            }
          }
        );
        const data = await response.json();
        this.films.push(...data.items);
        this.page++;
        console.log(data);
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
<div style="width: 1280px; margin: 0 auto;">
  <div class="links" style="margin-left: 20px; margin-top: 0px">
    <a href="/"><i class="fas fa-home" style="margin-top: 20px"></i> Главная</a>
    <a href="#"><i class="fas fa-tv"></i> Онлайн-кинотеатр</a>
    <a href="#"><i class="fas fa-film"></i> Фильмы</a>
    <a href="#"><i class="fas fa-video"></i> Сериалы</a>
    <a href="#"><i class="fas fa-broadcast-tower"></i> Телеканалы</a>
    <a href="#"><i class="fas fa-running"></i> Спорт</a>
    <a href="#"><i class="fas fa-tags"></i> Подписки</a>
    <a href="#"><i class="fas fa-ticket-alt"></i> Билеты в кино</a>
    <a href="#"><i class="fas fa-photo-video"></i> Медиа</a>
  </div>

  <div class="film-list">
    <div class="films" style="margin-left: 50px;">
      <div v-for="film in films" :key="film.kinopoiskId" class="film-card" v-on:click="cl(film.kinopoiskId)">
        <img :src="film.posterUrlPreview" :alt="film.nameRu" />
        <div class="film-info">
          <strong>{{ film.nameRu }}</strong>
          <p>id: {{ film.kinopoiskId }}</p>
          <p>Год: {{ film.year }}</p>
          <p>Рейтинг: {{ film.ratingKinopoisk && film.ratingKinopoisk !== 'null' ? film.ratingKinopoisk : 'неизвестен' }}</p>
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<style>

.main-container {
  width: 1280px;
  margin: 0 auto;
}

@media (max-width: 1024px) {
  .main-container {
    width: 100%;
    padding: 0 20px;
  }
  .links {
    margin-left: 10px;
  }
  .films {
    margin-left: 20px;
  }
}

@media (max-width: 768px) {
  .links a {
    display: block;
    margin-bottom: 10px;
  }
  .films {
    display: flex;
    flex-wrap: wrap;
    margin-left: 0;
    justify-content: center;
  }
  .film-card {
    width: 100%;
    max-width: 300px;
    margin: 10px;
  }
}

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
  top: 0;
  right: -1px;
  width: 1.5px;
  height: 100%;
  background-color: #ccc; 
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
  background-color: grey;
  border-radius: 20px;
  color: white;
}
.film-card:hover {
  background: #eb469f;
  color: white;
  
}
.film-card img {
  margin: 20px;
  width: 260px;
  height: 360px;
}
.film-info {
  padding: 8px;
  font-size: 14px;
}
</style>
