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

 <div class="film-list" style="display: flex; justify-content: center;">
  <div class="films" style="margin: 0; padding: 0;">
  <div style="width: 940px; height: 400px; margin-top: 92px; margin-left: 65px; display: grid; grid-template-columns: 229px 711px;">
  <div style="display: flex; background-color: black; align-items: center; justify-content: center;">
    <div style="width: 486px; height: 360px">
      <h1>Hello</h1>
    </div>
  </div>
  <div style="display: grid;">
    <div style="grid-column: 1; grid-row: 1;">
      <iframe
        style="width: 711px; height: 400px; border: none; outline: none; pointer-events: none;"
        src="https://www.youtube.com/embed/rLLdLRHZd7c?playlist=rLLdLRHZd7c&autoplay=1&loop=1&mute=1&controls=0&modestbranding=1&rel=0"
        title="YouTube video player"
        allow="autoplay; encrypted-media"
        allowfullscreen>
      </iframe>
    </div>
    <div style="
      grid-column: 1;
      grid-row: 1;
      width: 100%;
      height: 100%;
      pointer-events: none;
      background: linear-gradient(90deg, #000 6.25%, #000 6.26%, rgba(0, 0, 0, .99) 14.15%, rgba(0, 0, 0, .961) 20.77%, rgba(0, 0, 0, .915) 26.27%, rgba(0, 0, 0, .856) 30.8%, rgba(0, 0, 0, .785) 34.5%, rgba(0, 0, 0, .705) 37.54%, rgba(0, 0, 0, .619) 40.06%, rgba(0, 0, 0, .529) 42.21%, rgba(0, 0, 0, .437) 44.15%, rgba(0, 0, 0, .347) 46.03%, rgba(0, 0, 0, .261) 47.99%, rgba(0, 0, 0, .18) 50.2%, rgba(0, 0, 0, .108) 52.79%, rgba(0, 0, 0, .047) 55.94%, transparent 59.77%);
    "></div>
  </div>




 
</div>



  </div>
</div>

</div>

</template>

<style>
.textOnAFilm {
  grid-row: 1; 
  grid-column: 1; 
  display: flex; 
  justify-content: center; 
  align-items: center; 
  width: 484px; 
  height: 360px;
  
}
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
  top: 72px;
  flex-flow: column wrap;
  display: flex;
  margin-left: 300px;
  width: 235px;
  
}
.links::after {
  content: "";
  position: absolute;
  top: 0;
  right: 10px;
  width: 1px;
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
  margin-left: 15px;
  padding-left: 8px;
  
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
  width: 1080px;
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
