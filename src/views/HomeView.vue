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
     nextRight() {
      const container = this.$el.querySelector(".film-scroll");
      const arrow = this.$el.querySelector(".circle-arrow");

      arrow.style.display = 'none'; 
      container.scrollBy({ left: 943.2, behavior: "smooth" });

      setTimeout(() => {
        arrow.style.display = 'block';
      }, 500);

    },
    nextLeft() {
       const container = this.$el.querySelector(".film-scroll");
       const arrowLeft = this.$el.querySelector(".circle-arrow-left");

      arrowLeft.style.display = 'none'; 
      container.scrollBy({ left: -943.2, behavior: "smooth" });

      setTimeout(() => {
        arrowLeft.style.display = 'block';
      }, 500);
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
        this.films = this.films.slice(0, 18);
        this.page++;
        console.log(data);
        
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
  <div class="links" style="margin-left: 20px; margin-top: 0px;">
    <a href="/"><i class="fas fa-home" style="margin-top: 20px;"></i> Главная</a>
    <a href="#"><i class="fas fa-tv"></i> Онлайн-кинотеатр</a>
    <a href="#"><i class="fas fa-film"></i> Фильмы</a>
    <a href="#"><i class="fas fa-video"></i> Сериалы</a>
    <a href="#"><i class="fas fa-broadcast-tower"></i> Телеканалы</a>
    <a href="#"><i class="fas fa-running"></i> Спорт</a>
    <a href="#"><i class="fas fa-tags"></i> Подписки</a>
    <a href="#"><i class="fas fa-ticket-alt"></i> Билеты в кино</a>
    <a href="#"><i class="fas fa-photo-video"></i> Медиа</a>
  </div>
  .
  <div class="film-list" style="display: flex; justify-content: center;  margin-top: 0; height: 150vh; margin-top: -50vh">
    <div class="films" style="margin: 0; padding: 0;">
      <div style="width: 945px; height: 400px; margin-top: 92px; margin-left: 65px; display: grid; grid-template-columns: 229px 711px;">
        <div style="display: flex; background-color: black; align-items: center; justify-content: center;">
          <div style="width: 486px; height: 360px; padding-left: 40px; padding-top: 20px; padding-right: 40px; padding-bottom: 20px;">
            <h1 style="color: white;">Hello</h1>
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

        <div>
          <h1 style="width: 500px;">Рекомендации ></h1>
          <div style="width: 940px; height: 335px; margin-top: 30px; padding-right: 50px; display: flex;">
            <img
              v-on:click="nextRight()"
              class="circle-arrow"
              src="data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0nNDgnIGhlaWdodD0nNDgnIGZpbGw9JyMwMDAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZmlsbC1ydWxlPSdldmVub2RkJyBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00yOS41MTkgMjMuOTY4IDEzLjMzOSA4LjQ2NiAxNi42NiA1bDE4IDE3LjI0NiAxLjgyMSAxLjc0NS0xLjgzMiAxLjczMi0xOCAxNy4wMi0zLjI5OC0zLjQ4N0wyOS41MiAyMy45NjhaJy8+PC9zdmc+"
            />
            <img
              v-on:click="nextLeft()"
              class="circle-arrow-left"
              src="data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0nNDgnIGhlaWdodD0nNDgnIGZpbGw9JyMwMDAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZmlsbC1ydWxlPSdldmVub2RkJyBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00yOS41MTkgMjMuOTY4IDEzLjMzOSA4LjQ2NiAxNi42NiA1bDE4IDE3LjI0NiAxLjgyMSAxLjc0NS0xLjgzMiAxLjczMi0xOCAxNy4wMi0zLjI5OC0zLjQ4N0wyOS41MiAyMy45NjhaJy8+PC9zdmc+"
            />

            <div class="film-scroll" style="display: flex; overflow-x: auto; scroll-behavior: smooth; scrollbar-width: none; -ms-overflow-style: none;">
              <div
                v-for="film in films"
                :key="film.kinopoiskId"
                class="film-card"
                v-on:click="cl(film.kinopoiskId)"
              >
                <div style="position: relative;">
              <img :src="film.posterUrlPreview" :alt="film.nameRu" style="z-index: 1"/>

      
              <span
        style="position: absolute; top: 5px; left: 5px; color: white; background-color: green; padding-left: 5px; padding-right: 5px; font-weight: 600;"
      >
        {{ film.ratingImdb }}
      </span>
    </div>
                <span class="film-name">{{ film.nameRu }}</span><br />
                <span style="font-size: 13px; color: rgba(0, 0, 0, .6);">{{ film.year }},</span>
                <span style="font-size: 13px; color: rgba(0, 0, 0, .6);">{{ film.genres[0].genre }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


</template>

<style>
.film-scroll::-webkit-scrollbar {
      display: none;
    }
.circle-arrow {
  width: 22px;
  height: 22px;
  background-color: white;
  border: 1px solid white;
  border-radius: 50%;
  padding: 11px;
  position: absolute;
  margin-top: 85px; 
  margin-left: 918px; 
  cursor: pointer; 
  z-index: 9999; 
  background-repeat: no-repeat;
  box-shadow: 0 4px 6px rgba(0, 0, 0, .05), 
              0 1px 0 1px rgba(0, 0, 0, .05), 
              0 0 0 1px rgba(0, 0, 0, .05);
  transition: margin-left 0.3s ease-in-out;
  
}
.circle-arrow:hover {
  margin-left: 919px; 
}


.circle-arrow-left
{
  width: 22px;
  height: 22px;
  background-color: white;
  border: 1px solid white;
  border-radius: 50%;
  padding: 11px;
  position: absolute;
  margin-top: 85px; 
  margin-left: -18px; 
  cursor: pointer; 
  z-index: 9999; 
  background-repeat: no-repeat;
  box-shadow: 0 4px 6px rgba(0, 0, 0, .05), 
              0 1px 0 1px rgba(0, 0, 0, .05), 
              0 0 0 1px rgba(0, 0, 0, .05);
  transition: margin-left 0.3s ease-in-out;
  transform: rotate(180deg);  
}
.circle-arrow-left:hover {
  margin-left: -19px; 
}


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
  cursor: pointer;
  display: inline-block;
  margin-left: 7px;
}
.film-card:hover .film-name {
  color: green;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
}
.film-card:hover img {
  filter: brightness(0.5);
  transition: filter 0.3s ease-in-out;
}

.film-card img {
  width: 150px;
  height: 225px;
}
.film-name {
  color: #000;
  font-size: 15px; 
  font-weight: 800;
  line-height: 18px; 
  cursor: pointer;
  transition: 0.1s;
}
.film-name:hover {
  color: #f50;
}
.film-info {
  padding: 8px;
  font-size: 14px;
}
</style>
