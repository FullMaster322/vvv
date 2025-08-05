<script>

export default {
  data() {
    return {
      films: [],
      news: [],
      series: [],
      loading: true,
      page: 1,
      maxPages: 5,
      apiKey: 'e30ffed0-76ab-4dd6-b41f-4c9da2b2735b'
    };
  },
  mounted() {
    this.loadNextPage();
    this.News();
    this.Series();
  },
 methods: {
  cl(filmId) {
    console.log(filmId);
    this.$router.push({ name: 'about', params: { id: filmId } });
  },
  
  nextRightN() {
    const container = this.$el.querySelector(".film-scroll");
    const arrow = this.$el.querySelector(".circle-arrow");

    if (!container) return;

    arrow.style.display = 'none';
    container.scrollBy({ left: 943.2, behavior: "smooth" });

    setTimeout(() => {
      arrow.style.display = 'block';
    }, 500);
  },
  nextLeftN() {
    const container = this.$el.querySelector(".film-scroll");
    const arrowLeft = this.$el.querySelector(".circle-arrow-left");

    if (!container) return;

    arrowLeft.style.display = 'none';
    container.scrollBy({ left: -943.2, behavior: "smooth" });

    setTimeout(() => {
      arrowLeft.style.display = 'block';
    }, 500);
  },
 
  nextRightF() {
    const container = this.$el.querySelector(".film-scroll-news");
    const arrow = this.$el.querySelector(".circle-arrow-news");

    if (!container) return;

    arrow.style.display = 'none';
    container.scrollBy({ left: 945, behavior: "smooth" });

    setTimeout(() => {
      arrow.style.display = 'block';
    }, 500);
  },
  nextLeftF() {
    const container = this.$el.querySelector(".film-scroll-news");
    const arrowLeft = this.$el.querySelector(".circle-arrow-left-news");

    if (!container) return;

    arrowLeft.style.display = 'none';
    container.scrollBy({ left: -945, behavior: "smooth" });

    setTimeout(() => {
      arrowLeft.style.display = 'block';
    }, 500);
  },

  nextRightS() {
    const container = this.$el.querySelector(".film-scroll-series");
    const arrow = this.$el.querySelector(".circle-arrow-series");

    if (!container) return;

    arrow.style.display = 'none';
    container.scrollBy({ left: 945, behavior: "smooth" });

    setTimeout(() => {
      arrow.style.display = 'block';
    }, 500);
  },
  nextLeftS() {
    const container = this.$el.querySelector(".film-scroll-series");
    const arrowLeft = this.$el.querySelector(".circle-arrow-left-series");

    if (!container) return;

    arrowLeft.style.display = 'none';
    container.scrollBy({ left: -945, behavior: "smooth" });

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
    } catch (error) {
      console.error(`error:`, error);
      this.loading = false;
    }
  },
  async News() {
    
    try {
      const responseN = await fetch(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_250_TV_SHOWS&page=1`,
        {
          method: 'GET',
          headers: {
            'X-API-KEY': this.apiKey,
            'Content-Type': 'application/json'
          }
        }
      );
      const dataN = await responseN.json();
      this.news = dataN.items || []; 
      console.log(this.news);
      
      
    } catch (error) {
      console.error(`error:`, error);
      this.loading = false;
    }
  },

  async Series() {
    
    try {
      const responseS = await fetch(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=POPULAR_SERIES&page=1`,
        {
          method: 'GET',
          headers: {
            'X-API-KEY': this.apiKey,
            'Content-Type': 'application/json'
          }
        }
      );
      const dataS = await responseS.json();
      this.series = dataS.items || []; 
      console.log(this.series);
      
      
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
  
  <div class="film-list" style="display: flex; justify-content: center;  margin-top: 0; height: 400vh; margin-top: -173vh">
    <div class="films" style="margin: 0; padding: 0;">
      <div style="width: 945px; height: 400px; margin-top: 232px; margin-left: 65px; display: grid; grid-template-columns: 229px 711px;">
        <div style="display: flex; background-color: black; align-items: center; justify-content: center;">
          <div style="width: 486px; height: 360px; padding-left: 40px; padding-top: 20px; padding-right: 40px; padding-bottom: 20px;">
            <h1 style="color: white;">Hello</h1>
          </div>
        </div>
        <div style="display: grid;">
          <div style="grid-column: 1; grid-row: 1;">
            <iframe
              style="width: 711px; height: 400px; border: none; outline: none; pointer-events: none;"
              src="https://www.youtube.com/embed/71NWP1I7W4Y?playlist=71NWP1I7W4Y&autoplay=1&loop=1&mute=1&controls=0&modestbranding=1&rel=0"
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
          <div style="display: flex; width: 600px; cursor: pointer; margin-top: 20px;">
            <a style="font-size: 22px; line-height: 28px; text-decoration: none; color: inherit; font-weight: bold;">В фокусе</a>
          </div>
          <div style="width: 940px; height: 335px; margin-top: 15px; padding-right: 50px; display: flex;">
            <img
              v-on:click="nextRightF()"
              class="circle-arrow-news"
              src="data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0nNDgnIGhlaWdodD0nNDgnIGZpbGw9JyMwMDAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZmlsbC1ydWxlPSdldmVub2RkJyBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00yOS41MTkgMjMuOTY4IDEzLjMzOSA4LjQ2NiAxNi42NiA1bDE4IDE3LjI0NiAxLjgyMSAxLjc0NS0xLjgzMiAxLjczMi0xOCAxNy4wMi0zLjI5OC0zLjQ4N0wyOS41MiAyMy45NjhaJy8+PC9zdmc+"
            />
            <img
              style="margin-top: 110px; "
              v-on:click="nextLeftF()"
              class="circle-arrow-left-news"
              src="data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0nNDgnIGhlaWdodD0nNDgnIGZpbGw9JyMwMDAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZmlsbC1ydWxlPSdldmVub2RkJyBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00yOS41MTkgMjMuOTY4IDEzLjMzOSA4LjQ2NiAxNi42NiA1bDE4IDE3LjI0NiAxLjgyMSAxLjc0NS0xLjgzMiAxLjczMi0xOCAxNy4wMi0zLjI5OC0zLjQ4N0wyOS41MiAyMy45NjhaJy8+PC9zdmc+"
            />

            <div class="film-scroll-news" style="display: flex; overflow-x: auto; scroll-behavior: smooth; scrollbar-width: none; -ms-overflow-style: none;">
              <div
                v-for="newsW in news" :key="newsW.kinopoiskId" class="news-card" v-on:click="cl(newsW.kinopoiskId)">
                <div style="position: relative;">
              <img :src="newsW.posterUrl" style="z-index: 1"/>

              </div>
                
              </div>
            </div>
          </div>
        <div>
          
            <div class="freeDays">
              <div style="width: 868px; height: 470px; align-items: center; text-align: center; justify-content: center; margin-left: 83.5px; padding-top: 50px">
                <img src="../assets/yandexPlus.png" style="width: 190px; height: 28px; cursor: pointer"/>
                <div class="bigTxt" style="padding-top: 20px;">Фильмы и сериалы,<br> премиум‑телеканалы по подписке</div>
                <div class="bigTxt" style="color: #868eff;">90 дней бесплатно</div>
                <div style="width: 100%; height: 146px; align-items: left; text-align: left; justify-content: left;">
                  <div class="bigTxt" style="margin-top: -20px; font-size: 18px; font-weight: 600; line-height: 22px; height: 22px">90 дней бесплатно</div>
                  <div style="width: 100%; height: 12px; display: flex;">
                    <div style="width: 60%; background-color: white"></div>
                    <div style="position: absolute; width: 2px; height: 40px; background-color: #868eff; left: 50%; z-index: 3"></div>
                    <div style="width: 40%; margin-left: 2px; background-image: linear-gradient(270deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, .2) 16.62%);"></div>
                  </div>
                  <div style="align-items: center; text-align: center; justify-content: center; margin-top: 30px; width: 100%; font-size: 16px; line-height: 20px; color: hsla(0, 0%, 100%, .7);">Напишем на почту за 3 дня</div>
                </div>
                <div style="margin-left: 5px">
                  <button class="watch-free" style="width: 235px; height: 52px; margin-top: -15px">
                    <div style=" text-align: center; margin-left: 10px;  color: white; font-size: 15px; padding-right: 10px">
                      Попробовать бесплатно 
                    </div>
                  </button>
                </div>
                  <div style="margin-top: 10px; font-size: 13px; line-height: 16px; text-align: center; color: hsla(0, 0%, 100%, .6);">Подписка Яндекс Плюс<br>90 дней бесплатно, далее 11.99 BYN в месяц</div>
              </div>
            </div>


            <div class="info">
              <div style="display: flex; width: 600px; cursor: pointer; margin-top: 40px;">
                <a style="font-size: 22px; line-height: 28px; text-decoration: none; color: inherit; font-weight: bold;">Смотрят сейчас</a>
                <img style="width: 20px; height: 20px; margin-top: 5px; font-weight: var(--font-weight-semibold, 600); margin-left: 3px" src="data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0nNDgnIGhlaWdodD0nNDgnIGZpbGw9JyNmZmYnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZmlsbC1ydWxlPSdldmVub2RkJyBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00yOS41MTkgMjMuOTY4IDEzLjMzOSA4LjQ2NiAxNi42NiA1bDE4IDE3LjI0NiAxLjgyMSAxLjc0NS0xLjgzMiAxLjczMi0xOCAxNy4wMi0zLjI5OC0zLjQ4N0wyOS41MiAyMy45NjhaJy8+PC9zdmc+"/>
              </div>
              <div style="width: 940px; height: 350px; margin-top: 15px; padding-right: 50px; display: flex;">
                <img
                  v-on:click="nextRightS()"
                  class="circle-arrow-series"
                  src="data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0nNDgnIGhlaWdodD0nNDgnIGZpbGw9JyMwMDAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZmlsbC1ydWxlPSdldmVub2RkJyBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00yOS41MTkgMjMuOTY4IDEzLjMzOSA4LjQ2NiAxNi42NiA1bDE4IDE3LjI0NiAxLjgyMSAxLjc0NS0xLjgzMiAxLjczMi0xOCAxNy4wMi0zLjI5OC0zLjQ4N0wyOS41MiAyMy45NjhaJy8+PC9zdmc+"
                />
                <img
                  style="margin-top: 130px;"
                  v-on:click="nextLeftS()"
                  class="circle-arrow-left-series"
                  src="data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0nNDgnIGhlaWdodD0nNDgnIGZpbGw9JyMwMDAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZmlsbC1ydWxlPSdldmVub2RkJyBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00yOS41MTkgMjMuOTY4IDEzLjMzOSA4LjQ2NiAxNi42NiA1bDE4IDE3LjI0NiAxLjgyMSAxLjc0NS0xLjgzMiAxLjczMi0xOCAxNy4wMi0zLjI5OC0zLjQ4N0wyOS41MiAyMy45NjhaJy8+PC9zdmc+"
                />

                <div class="film-scroll-series" style="display: flex; overflow-x: auto; scroll-behavior: smooth; scrollbar-width: none; -ms-overflow-style: none;">
                  <div
                    v-for="seriesW in series" :key="seriesW.kinopoiskId" class="series-card" style="width: 330px; height: 344px;" v-on:click="cl(seriesW.kinopoiskId)">
                    <div style="position: relative;">
                    <img :src="seriesW.posterUrl" style="z-index: 1" />
                    <span class="raitingF" style="font-size: 16px">{{ seriesW.ratingKinopoisk || seriesW.ratingImdb }} </span>
                   </div>
                  </div>
                </div>
              </div>
              <div style="display: flex; width: 600px; cursor: pointer; margin-top: 40px;">
                <a style="font-size: 22px; line-height: 28px; text-decoration: none; color: inherit; font-weight: bold;">Смотрите Кинопоиск на телевизоре</a>
                <img style="width: 20px; height: 20px; margin-top: 5px; font-weight: var(--font-weight-semibold, 600); margin-left: 3px" src="data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0nNDgnIGhlaWdodD0nNDgnIGZpbGw9JyNmZmYnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZmlsbC1ydWxlPSdldmVub2RkJyBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00yOS41MTkgMjMuOTY4IDEzLjMzOSA4LjQ2NiAxNi42NiA1bDE4IDE3LjI0NiAxLjgyMSAxLjc0NS0xLjgzMiAxLjczMi0xOCAxNy4wMi0zLjI5OC0zLjQ4N0wyOS41MiAyMy45NjhaJy8+PC9zdmc+"/>
              </div>
              <div style="display: flex; margin-left: -7px; ">
                <div  style="cursor: pointer; margin-top: 20px; width: 212px; height: 240px; padding-left: 24px; padding-right: 24px; padding-top: 24px; padding-bottom: 16px; background-color: #141414;">
                  <img style="width: 151px; height: 25px;" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUyIiBoZWlnaHQ9IjI1IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDEyLjU4MkMwIDUuNzU1IDUuNTM3LjIyMiAxMi4zNjcuMjIyYzYuODMgMCAxMi4zNjggNS41MzMgMTIuMzY4IDEyLjM2IDAgNi44MjYtNS41MzcgMTIuMzYtMTIuMzY4IDEyLjM2QzUuNTM3IDI0Ljk0MiAwIDE5LjQwOCAwIDEyLjU4MlptMTQuMTEgNy40MjhoMi41ODRWNS4xNzhoLTMuNzU4Yy0zLjc4IDAtNS43NjYgMS45NDItNS43NjYgNC44MDIgMCAyLjI4MyAxLjA5IDMuNjI4IDMuMDMzIDUuMDE1TDYuODI5IDIwLjAxaDIuNzk3bDMuNzU4LTUuNjEzLTEuMzAyLS44NzVjLTEuNTgtMS4wNjctMi4zNS0xLjg5OS0yLjM1LTMuNjkyIDAtMS41NzkgMS4xMTEtMi42NDYgMy4yMjUtMi42NDZoMS4xNTNWMjAuMDFabTUxLjYwNy0uMzk2YzEuMjk3IDEuNjMzIDMuMSAyLjQ1IDUuNDEgMi40NSAxLjAxMyAwIDEuODU3LS4xNDIgMi41MzItLjQyNi42OTMtLjI4NCAxLjI0NC0uNTY4IDEuNjUzLS44NTJ2LTIuNTg0Yy0uNTMzLjM5LTEuMTEuNzItMS43MzMuOTg2LS42MjIuMjQ4LTEuMzYuMzczLTIuMjEyLjM3My0xLjQ3NSAwLTIuNTY4LS41ODctMy4yNzgtMS43NTktLjY5My0xLjE3Mi0xLjA0LTIuOTItMS4wNC01LjI0NyAwLTIuMzk3LjM0Ny00LjE2NCAxLjA0LTUuMy43MS0xLjE1NSAxLjg1Ny0xLjczMiAzLjQzOC0xLjczMi43NDYgMCAxLjQ0LjEzMyAyLjA3OS40LjY1Ny4yNjYgMS4yMjYuNTUgMS43MDYuODUyVjQuMTljLS40MjctLjMwMi0uOTc4LS41NjgtMS42NTMtLjgtLjY3NS0uMjQ4LTEuNDQtLjM3Mi0yLjI5Mi0uMzcyLTEuMjI2IDAtMi4zMTkuMjIyLTMuMjc4LjY2NmE2LjEzNyA2LjEzNyAwIDAgMC0yLjM3MiAxLjg5MWMtLjY0LjgxNy0xLjEyOSAxLjgyLTEuNDY2IDMuMDEtLjMyIDEuMTcyLS40OCAyLjQ5NS0uNDggMy45NjkgMCAzLjA1NC42NDkgNS40MDcgMS45NDYgNy4wNTlaTTMwLjcwOSAzLjI4NWgxMi4wMlY1Ljc5aC00LjM5N3YxNi4wMDloLTMuMjI1VjUuNzg5aC00LjM5OFYzLjI4NVptMTkuMzgyIDBjMi4wNjEgMCAzLjYyNS4zNzMgNC42OTEgMS4xMiAxLjA4NC43NDUgMS42MjYgMS45MjYgMS42MjYgMy41NDIgMCAxLjI2LS4yOTMgMi4yMi0uODggMi44NzctLjU4Ni42NTctMS4zODYgMS4xMS0yLjM5OCAxLjM1OCAxLjI2MS4yMyAyLjIxMi43MDEgMi44NTIgMS40MTIuNjU3LjY5Mi45ODYgMS42NTEuOTg2IDIuODc3IDAgMS44MjktLjYyMiAzLjE3OC0xLjg2NiA0LjA0OC0xLjI0NC44NTMtMi45NTggMS4yNzktNS4xNDQgMS4yNzloLTUuMzU3VjMuMjg1aDUuNDlabS4xMDcgMTYuMDFjMS4wODQgMCAxLjkzNy0uMjIzIDIuNTU5LS42NjcuNjIyLS40NjIuOTMyLTEuMjQzLjkzMi0yLjM0NCAwLTEuMDMtLjI4NC0xLjc1OC0uODUyLTIuMTg0LS41NTEtLjQyNi0xLjQ0LS42NC0yLjY2Ni0uNjRoLTIuMzQ1djUuODM0aDIuMzcyWm0tLjA4LTguMjMyYy45NiAwIDEuNzE1LS4yMDQgMi4yNjUtLjYxMi41NTEtLjQyNy44MjctMS4xMzcuODI3LTIuMTMxIDAtLjk0MS0uMjU4LTEuNTk4LS43NzMtMS45NzFzLTEuMjgtLjU2LTIuMjkyLS41NmgtMi4zMnY1LjI3NGgyLjI5M1ptMzMuNDM0LS4xNnYxMC44OTVIODAuMzhWMTAuOTA0SDc2LjY1VjguNGgxMC42MzR2Mi41MDNoLTMuNzMxWm0xMi4wMDUgNC43OTVoLjQ1NHYyLjkwNGMtLjE5Ni4zMDEtLjQ4LjU1OS0uODUzLjc3Mi0uMzczLjE5NS0uODQ0LjI5My0xLjQxMy4yOTMtLjY3NSAwLTEuMTgxLS4xNjktMS41MTktLjUwNi0uMzItLjM1NS0uNDgtLjgxNy0uNDgtMS4zODUgMC0uNzY0LjI5My0xLjI5Ni44OC0xLjU5OC41ODYtLjMyIDEuNTYzLS40OCAyLjkzMS0uNDhabTMuNzg1IDYuMWEzMy40MzYgMzMuNDM2IDAgMCAxLS4xNi0zLjI3NnYtNS44NmMwLTEuNjM0LS40MTctMi43ODgtMS4yNTItMy40NjMtLjgxOC0uNjc1LTIuMDctMS4wMTItMy43NTgtMS4wMTItMS4wNjYgMC0yIC4xMzMtMi43OTkuNC0uOC4yNjUtMS40NC41NC0xLjkxOS44MjV2Mi42MzdjLjIxMy0uMTYuNDgtLjMyLjgtLjQ4LjMzNy0uMTYuNjkzLS4zMDIgMS4wNjYtLjQyNi4zOS0uMTI0LjgtLjIyMiAxLjIyNi0uMjkzYTYuMTM1IDYuMTM1IDAgMCAxIDEuMjUyLS4xMzNjLjc2NCAwIDEuMzI0LjE1MSAxLjY4LjQ1My4zNTUuMjg0LjUzMy43OS41MzMgMS41MTh2Ljc0NmgtLjUwN2MtMi40MzQgMC00LjIxLjM4Mi01LjMzIDEuMTQ1LTEuMTIuNzQ2LTEuNjggMS44MDMtMS42OCAzLjE3cy4zNzQgMi40MTUgMS4xMiAzLjE0M2MuNzY0LjcyOCAxLjc2IDEuMDkyIDIuOTg1IDEuMDkyLjkyNCAwIDEuNjI2LS4xMjQgMi4xMDYtLjM3My40OC0uMjY2Ljg3LS41NTkgMS4xNzItLjg3OGguMTM0Yy4wMTcuMTc3LjA0NC4zNjMuMDguNTU5LjA1My4xOTUuMTA2LjM2NC4xNi41MDZoMy4wOTFaTTExMi4zMTQgOC40djEzLjM5OGgtMy4xNzJ2LTUuNTk0aC00LjIzOHY1LjU5NGgtMy4xNzJWOC40aDMuMTcydjUuM2g0LjIzOFY4LjRoMy4xNzJabTUuODM4IDBoLTMuMTcxdjEzLjM5OGg4LjkyOHYzLjA2M2gyLjkzMnYtNS41NjdoLTEuNDEyVjguNGgtMy4xNzJ2MTAuODk0aC00LjEwNVY4LjRabTE4LjIwMSAwaDIuODI1djEzLjM5OGgtMy4wNjV2LTguMjg0bC00Ljg1MSA4LjI4NGgtMi44MjVWOC40aDMuMDY1djguMzFsNC44NTEtOC4zMVptMTAuMzY2IDkuMDNoMS41MTl2NC4zNjhoMy4xNzJWOC40aC00Ljg1MWMtLjc4MiAwLTEuNTAxLjA5Ny0yLjE1OS4yOTNhNC44NiA0Ljg2IDAgMCAwLTEuNjUyLjg1MiAzLjkzMSAzLjkzMSAwIDAgMC0xLjA5MyAxLjQxMmMtLjI2Ni41NS0uNCAxLjE4LS40IDEuODkxIDAgMS4wMy4yMzEgMS44NjUuNjkzIDIuNTA0LjQ2Mi42MjEgMS4xMiAxLjA4MyAxLjk3MyAxLjM4NWwtMy4wMTIgNS4wNjFoMy4yNTFsMi41NTktNC4zNjhabS0xLjU5OS02LjA0N2MuNDI2LS4zMi45ODYtLjQ4IDEuNjc5LS40OGgxLjQzOXY0LjIxaC0xLjUxOWMtLjcyOCAwLTEuMjg4LS4xNi0xLjY3OS0uNDgtLjM3My0uMzM4LS41Ni0uODk3LS41Ni0xLjY3OCAwLS43NDYuMjE0LTEuMjcuNjQtMS41NzJaIiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPgo="/>
                  <p style="font-size: 15px; color: #777; margin-top: 5px;">Телевизор с Алисой<br>от Яндекса</p>
                  <img style="width: 268px; height: 268px; margin-top: -60px; margin-left: -10px;" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjY4IiBoZWlnaHQ9IjI2OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yMDkuNjY1IDE5My45NDMgNTQuNjcyIDE4Mi41MDhWNjkuNTkxbDE1NC45OTMtMTQuNzR2MTM5LjA5MloiIHN0cm9rZT0iIzc3NyIgc3Ryb2tlLXdpZHRoPSIuNDQ3IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KICAgIDxwYXRoIGQ9Ik0yMDkuNjY1IDE5Mi44NzEgNTYuMTkgMTgxLjQzNmwtLjA4OS0xMTAuNzczTDIwOS42NjUgNTYuMjhNMjEzLjE0OSAyMDAuNTUzVjUwLjQ3MyIgc3Ryb2tlPSIjNzc3IiBzdHJva2Utd2lkdGg9Ii40NDciIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgogICAgPHBhdGggZD0iTTIxNS4yMDQgMTk5Ljc0OVY1MS4zNjdsLTIuMDU1LS44OTRMNTIuMjYgNjYuNzMydjEyMC40MjFsMTYwLjg4OSAxMy40IDIuMDU1LS44MDRaIiBzdHJva2U9IiM3NzciIHN0cm9rZS13aWR0aD0iLjQ0NyIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+CiAgICA8cGF0aCBkPSJNMTk3LjUxNiAxOTkuMTI0Yy0xLjYwOCAyLjU5MS04LjA0IDE0Ljc0LTkuMjAxIDE3LjE1Mi0uMTc5LjI2OC0uMTc5LjUzNi0uMjY4LjgwNHYuNTM2IiBzdHJva2U9IiM3NzciIHN0cm9rZS13aWR0aD0iLjQ0NyIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+CiAgICA8cGF0aCBkPSJtMTk3LjMzNyAyMDMuMDU1LjI2OC4xNzguMDkuMDkgNi45NjggOC43NTRhLjQ5LjQ5IDAgMCAwIC40NDYuMjY4bDEuOTY2LS4wODljLjQ0NiAwIC43MTQtLjQ0Ny40NDYtLjgwNC0xLjI1LTEuOTY1LTQuNDY2LTYuNzg5LTYuMTY0LTguNDg3LS44OTMtLjg5My0zLjM5NC0uODkzLTQuMzc3LjYyNi0xLjc4NyAyLjg1OC02Ljg3OSAxMS41MjQtNy43NzIgMTMuMTMybC0uMzU3LjQ0NmMtLjE3OS4yNjgtLjUzNi41MzYtLjg5NC41MzZoLTIuNTAxYy0uMjY4IDAtLjUzNi0uMjY4LS41MzYtLjUzNiAwLS4xNzggMC0uNDQ2LjA4OS0uNjI1Ljk4My0yLjMyMyA3Ljg2Mi0xNy43NzcgNy43NzItMTcuNzc3IiBzdHJva2U9IiM3NzciIHN0cm9rZS13aWR0aD0iLjQ0NyIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+CiAgICA8cGF0aCBkPSJNMjAxLjYyNSAxOTkuNTcxczUuNzE4IDEwLjM2MiA2LjI1NCAxMS4zNDVjLjUzNi45ODMtLjYyNiAxLjM0LS42MjYgMS4zNE03MS42NDYgMTg4Ljc2MXMuMDg5LjUzNi0uMjY4Ljk4M2MtLjI2OC4yNjgtMTIuMzI4IDguODQ0LTE2LjYxNiAxMi4yMzktLjgwNC42MjUtMS4wNzIgMS42MDgtLjYyNiAxLjYwOGgyLjE0NGMuMjY4IDAgMTYuMzQ4LTEwLjYzMSAxNi4zNDgtMTAuNjMxIDIuNzctMS42OTcgNi43LTEuNjk3IDkuMzgtLjgwNCAxLjc4Ny42MjUgNi45NjggMy45MzEgMTEuNTI0IDYuNDMyIDIuNDEyIDEuMzQgMy45MzEgMi4zMjMgNC43MzUgMi44NTkuNDQ3LjM1NyAxLjA3Mi4zNTcgMS42OTcuMTc4bC44MDQtLjM1N2MuMjY4LS4xNzkuMzU4LS41MzYuMDktLjcxNWwtMTQuNTYyLTkuMzhhMi43OTQgMi43OTQgMCAwIDEtLjgwNC0uOTgybC0uMDg5LS4zNTgiIHN0cm9rZT0iIzc3NyIgc3Ryb2tlLXdpZHRoPSIuNDQ3IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KICAgIDxwYXRoIGQ9Ik01Ni42MzggMjAzLjUwMWMtLjk4My40NDctMS42OTgtLjA4OS0uNjI2LS44OTMgMy4xMjctMi41MDEgMTYuODg0LTExLjE2NyAxNi44ODQtMTEuMTY3IDEuNDMtMS4wNzIgMS4xNjItMi40MTIgMS4xNjItMi40MTJNNTYuNDU5IDE4MS40MzZsLTEuNzg3IDEuMDcyTTU0LjY3MiA2OS41OWwxLjY5OCAxLjI1MU0yMTUuMjA0IDE5OS43NDlWNTEuMzY3bC0yLjA1NS0uODk0TDUyLjI2IDY2LjczMnYxMjAuNDIxbDE2MC44ODkgMTMuNCAyLjA1NS0uODA0WiIgc3Ryb2tlPSIjNzc3IiBzdHJva2Utd2lkdGg9Ii40NDciIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgogICAgPHBhdGggZD0iTTcxLjY0NiAxODguNzYxcy4wODkuNTM2LS4yNjguOTgzYy0uMjY4LjI2OC0xMi4zMjggOC44NDQtMTYuNjE2IDEyLjIzOS0uODA0LjYyNS0xLjA3MiAxLjYwOC0uNjI2IDEuNjA4aDIuMTQ0Yy4yNjggMCAxNi4zNDgtMTAuNjMxIDE2LjM0OC0xMC42MzEgMi43Ny0xLjY5NyA2LjctMS42OTcgOS4zOC0uODA0IDEuNzg3LjYyNSA2Ljk2OCAzLjkzMSAxMS41MjQgNi40MzIgMi40MTIgMS4zNCAzLjkzMSAyLjMyMyA0LjczNSAyLjg1OS40NDcuMzU3IDEuMDcyLjM1NyAxLjY5Ny4xNzhsLjgwNC0uMzU3Yy4yNjgtLjE3OS4zNTgtLjUzNi4wOS0uNzE1bC0xNC41NjItOS4zOGEyLjc5NCAyLjc5NCAwIDAgMS0uODA0LS45ODJsLS4wODktLjM1OCIgc3Ryb2tlPSIjNzc3IiBzdHJva2Utd2lkdGg9Ii40NDciIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgogICAgPHBhdGggZD0ibTE5Ny4zMzcgMjAzLjA1NS4yNjguMTc4LjA5LjA5IDYuOTY4IDguNzU0YS40OS40OSAwIDAgMCAuNDQ2LjI2OGwxLjk2Ni0uMDg5Yy40NDYgMCAuNzE0LS40NDcuNDQ2LS44MDQtMS4yNS0xLjk2NS00LjQ2Ni02Ljc4OS02LjE2NC04LjQ4Ny0uODkzLS44OTMtMy4zOTQtLjg5My00LjM3Ny42MjYtMS43ODcgMi44NTgtNi44NzkgMTEuNTI0LTcuNzcyIDEzLjEzMmwtLjM1Ny40NDZjLS4xNzkuMjY4LS41MzYuNTM2LS44OTQuNTM2aC0yLjUwMWMtLjI2OCAwLS41MzYtLjI2OC0uNTM2LS41MzYgMC0uMTc4IDAtLjQ0Ni4wODktLjYyNS45ODMtMi4zMjMgNy44NjItMTcuNzc3IDcuNzcyLTE3Ljc3NyIgc3Ryb2tlPSIjNzc3IiBzdHJva2Utd2lkdGg9IjEuMzQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgogICAgPHBhdGggZD0iTTIwMS42MjUgMTk5LjU3MXM1LjcxNyAxMC4zNjIgNi4yNTMgMTEuMzQ1Yy41MzYuOTgzLS42MjUgMS4zNC0uNjI1IDEuMzQiIHN0cm9rZT0iIzc3NyIgc3Ryb2tlLXdpZHRoPSIxLjM0IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KICAgIDxwYXRoIGQ9Ik0yMTUuMjA0IDE5OS43NDlWNTEuMzY3bC0yLjA1NS0uODk0TDUyLjI2IDY2LjczMnYxMjAuNDIxbDE2MC44ODkgMTMuNCAyLjA1NS0uODA0WiIgc3Ryb2tlPSIjNzc3IiBzdHJva2Utd2lkdGg9IjEuMzQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgogICAgPHBhdGggZD0iTTcxLjY0NiAxODguNzYxcy4wODkuNTM2LS4yNjguOTgzYy0uMjY4LjI2OC0xMi4zMjggOC44NDQtMTYuNjE2IDEyLjIzOS0uODA0LjYyNS0xLjA3MiAxLjYwOC0uNjI2IDEuNjA4aDIuMTQ0Yy4yNjggMCAxNi4zNDgtMTAuNjMxIDE2LjM0OC0xMC42MzEgMi43Ny0xLjY5NyA2LjctMS42OTcgOS4zOC0uODA0IDEuNzg3LjYyNSA2Ljk2OCAzLjkzMSAxMS41MjQgNi40MzIgMi40MTIgMS4zNCAzLjkzMSAyLjMyMyA0LjczNSAyLjg1OS40NDcuMzU3IDEuMDcyLjM1NyAxLjY5Ny4xNzhsLjgwNC0uMzU3Yy4yNjgtLjE3OS4zNTgtLjUzNi4wOS0uNzE1bC0xNC41NjItOS4zOGEyLjc5NCAyLjc5NCAwIDAgMS0uODA0LS45ODJsLS4wODktLjM1OCIgc3Ryb2tlPSIjNzc3IiBzdHJva2Utd2lkdGg9IjEuMzQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgogICAgPG1hc2sgaWQ9ImEiIGZpbGw9IiNmZmYiPgogICAgICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMTQ1LjA4OCAxOTQuNDc5LjA3OS0uMTc5LTM0Ljg0LTIuNjggMS4xOTEgNC4xNzFjLjIxNC43NDcuMzIxIDEuMTIxLjUzNCAxLjQwOS4xODguMjU0LjQzNS40Ni43MTUuNTk4LjMxOC4xNTUuNjk2LjE4NiAxLjQ1MS4yNDlsMjUuNDQgMi4wOTVjLjk3NC4wOCAxLjQ4NC4xMjIgMS45MTYuMDE1LjMzNy0uMDY0Ljc1NC0uMjI1IDEuMzc3LS40NjVsMi4xNjEtLjgzNGMuNTE3LS4xOTkuNzc1LS4yOTkuOTk4LS40NDguMTk4LS4xMzMuMzc1LS4yOTMuNTI2LS40NzguMTctLjIwOS4yOTQtLjQ1Ny41NDMtLjk1NWwuNDctLjk0LjY0NS0xLjI5LTEuNDM4LS4xMi0xLjc2OC0uMTQ4Wm0tMS41NyAzLjU1OC4wOS0uMjAzLjkwNy0yLjA1OCAxLjY5NS4xNDItLjIzLjQ2Yy0uMjc1LjU1MS0uMzI4LjY0LS4zODMuNzA3YTEuMDU2IDEuMDU2IDAgMCAxLS4yMzIuMjExYy0uMDcuMDQ3LS4xNjMuMDkxLS43MzYuMzEybC0xLjExMS40MjlaIi8+CiAgICA8L21hc2s+CiAgICA8cGF0aCBkPSJtMTQ1LjE2NyAxOTQuMyAxLjIyNi41NDEuNzY0LTEuNzMyLTEuODg4LS4xNDUtLjEwMiAxLjMzNlptLS4wNzkuMTc5LTEuMjI2LS41NC0uNzU5IDEuNzIgMS44NzMuMTU2LjExMi0xLjMzNlptLTM0Ljc2MS0yLjg1OS4xMDItMS4zMzYtMS45Mi0uMTQ4LjUyOSAxLjg1MiAxLjI4OS0uMzY4Wm0xLjE5MSA0LjE3MSAxLjI4OS0uMzY5LTEuMjg5LjM2OVptLjUzNCAxLjQwOS0xLjA3Ny43OTcgMS4wNzctLjc5N1ptLjcxNS41OTgtLjU5IDEuMjAzLjU5LTEuMjAzWm0xLjQ1MS4yNDktLjExIDEuMzM1LjExLTEuMzM1Wm0yNS40NCAyLjA5NS0uMTEgMS4zMzUuMTEtMS4zMzVabTEuOTE2LjAxNS0uMjUxLTEuMzE2LS4wMzYuMDA3LS4wMzUuMDA4LjMyMiAxLjMwMVptMS4zNzctLjQ2NS0uNDgyLTEuMjUxLjQ4MiAxLjI1MVptMi4xNjEtLjgzNC0uNDgzLTEuMjUuNDgzIDEuMjVabS45OTgtLjQ0OC43NDUgMS4xMTQtLjc0NS0xLjExNFptLjUyNi0uNDc4LTEuMDM5LS44NDcgMS4wMzkuODQ3Wm0uNTQzLS45NTUtMS4xOTktLjU5OSAxLjE5OS41OTlabS40Ny0uOTQtMS4xOTktLjU5OSAxLjE5OS41OTlabS42NDUtMS4yOSAxLjE5OS41OTkuODg1LTEuNzctMS45NzMtLjE2NS0uMTExIDEuMzM2Wm0tMS40MzgtLjEyLS4xMTIgMS4zMzUuMTEyLTEuMzM1Wm0tMy4yNDggMy4yMDcgMS4yMjYuNTQxLjAwOS0uMDIyLjAwOS0uMDIxLTEuMjQ0LS40OThabS0uMDkuMjAzLTEuMjI1LS41NDItMS4zMDggMi45NTUgMy4wMTUtMS4xNjMtLjQ4Mi0xLjI1Wm0uMDktLjIwMy0xLjIyNi0uNTQxLS4wMS4wMjEtLjAwOS4wMjIgMS4yNDUuNDk4Wm0uOTA3LTIuMDU4LjExMi0xLjMzNS0uOTUyLS4wNzktLjM4Ni44NzMgMS4yMjYuNTQxWm0xLjY5NS4xNDIgMS4xOTkuNTk5Ljg4NS0xLjc3LTEuOTcyLS4xNjUtLjExMiAxLjMzNlptLS4yMy40Ni0xLjE5OC0uNTk5IDEuMTk4LjU5OVptLS4zODMuNzA3IDEuMDM5Ljg0Ny0xLjAzOS0uODQ3Wm0tLjIzMi4yMTEtLjc0NS0xLjExNC43NDUgMS4xMTRabS0uNzM2LjMxMi40ODMgMS4yNS0uNDgzLTEuMjVabS0uNjg4LTMuODQ5LS4wNzkuMTggMi40NTEgMS4wODEuMDgtLjE3OS0yLjQ1Mi0xLjA4MlptLTMzLjcxNy0uODAzIDM0Ljg0IDIuNjguMjA1LTIuNjcyLTM0Ljg0LTIuNjgtLjIwNSAyLjY3MlptMi41ODMgMi40NjYtMS4xOTItNC4xNy0yLjU3Ny43MzYgMS4xOTIgNC4xNzEgMi41NzctLjczN1ptLjMyMi45OGMtLjAzNC0uMDQ1LS4wNzktLjEyOC0uMzIyLS45OGwtMi41NzcuNzM3Yy4xODQuNjQ0LjM1MiAxLjMwOC43NDUgMS44MzhsMi4xNTQtMS41OTVabS4yMjguMTkyYS42MjEuNjIxIDAgMCAxLS4yMjgtLjE5MmwtMi4xNTQgMS41OTVhMy4zMSAzLjMxIDAgMCAwIDEuMjAyIDEuMDA0bDEuMTgtMi40MDdabS45NzEuMTE3Yy0uODY1LS4wNzEtLjkzNS0uMDk5LS45NzEtLjExN2wtMS4xOCAyLjQwN2MuNi4yOTQgMS4yODYuMzI4IDEuOTMxLjM4MWwuMjItMi42NzFabTI1LjQ0IDIuMDk1LTI1LjQ0LTIuMDk1LS4yMiAyLjY3MSAyNS40NCAyLjA5NS4yMi0yLjY3MVptMS40ODQuMDVjLS4xNjYuMDQxLS40MDguMDM5LTEuNDg0LS4wNWwtLjIyIDIuNjcxYy44NzIuMDcyIDEuNjUxLjE1MyAyLjM0OC0uMDE5bC0uNjQ0LTIuNjAyWm0uNTczIDIuNjE3Yy40ODUtLjA5MiAxLjAzNy0uMzExIDEuNjA4LS41MzFsLS45NjQtMi41MDFjLS42NzYuMjYxLS45NTcuMzY0LTEuMTQ2LjRsLjUwMiAyLjYzMlptMS42MDgtLjUzMSAyLjE2MS0uODMzLS45NjUtMi41MDEtMi4xNi44MzMuOTY0IDIuNTAxWm0yLjE2MS0uODMzYy40NjEtLjE3OC44ODYtLjMzNCAxLjI2MS0uNTg1bC0xLjQ5LTIuMjI4Yy0uMDcuMDQ3LS4xNjMuMDkxLS43MzYuMzEybC45NjUgMi41MDFabTEuMjYxLS41ODVjLjMwOS0uMjA3LjU4NS0uNDU4LjgxOS0uNzQ2bC0yLjA3Ny0xLjY5M2ExLjA1NiAxLjA1NiAwIDAgMS0uMjMyLjIxMWwxLjQ5IDIuMjI4Wm0uODE5LS43NDZjLjI4Ni0uMzUuNDgxLS43NTcuNzAzLTEuMjAybC0yLjM5Ny0xLjE5OGMtLjI3NS41NTEtLjMyOC42NC0uMzgzLjcwN2wyLjA3NyAxLjY5M1ptLjcwMy0xLjIwMi40Ny0uOTM5LTIuMzk3LTEuMTk5LS40Ny45NCAyLjM5NyAxLjE5OFptLjQ3LS45MzkuNjQ2LTEuMjkxLTIuMzk4LTEuMTk5LS42NDUgMS4yOTEgMi4zOTcgMS4xOTlabS0uNDQyLTMuMjI2LTEuNDM4LS4xMi0uMjIzIDIuNjcxIDEuNDM5LjEyLjIyMi0yLjY3MVptLTEuNDM4LS4xMi0xLjc2OC0uMTQ3LS4yMjMgMi42NzEgMS43NjguMTQ3LjIyMy0yLjY3MVptLTQuNTg1IDQuMDAyLS4wODkuMjAyIDIuNDUgMS4wODQuMDkxLS4yMDQtMi40NTItMS4wODJabS0uMDE5LjA0MyAyLjQ4OS45OTYtMi40ODktLjk5NlptLjkyNi0yLjEwMS0uOTA3IDIuMDU4IDIuNDUyIDEuMDgyLjkwNy0yLjA1OC0yLjQ1Mi0xLjA4MlptMy4wMzMtLjY1My0xLjY5NS0uMTQxLS4yMjMgMi42NzEgMS42OTUuMTQxLjIyMy0yLjY3MVptLjg1NyAyLjM5NS4yMy0uNDYtMi4zOTctMS4xOTktLjIzLjQ2MSAyLjM5NyAxLjE5OFptLS41NDMuOTU1Yy4xNzItLjIxMS4zMDEtLjQ3Mi41NDMtLjk1NWwtMi4zOTctMS4xOThjLS4xMzkuMjc3LS4yMTEuNDE2LS4yNTEuNDktLjAzNy4wNjYtLjAxOC4wMjYuMDI4LS4wMzFsMi4wNzcgMS42OTRabS0uNTI2LjQ3OGMuMTk4LS4xMzMuMzc1LS4yOTMuNTI2LS40NzhsLTIuMDc3LTEuNjk0YS4yOTcuMjk3IDAgMCAxIC4wNjEtLjA1NmwxLjQ5IDIuMjI4Wm0tLjk5OC40NDhjLjUwMi0uMTkzLjc3Mi0uMjk3Ljk5OC0uNDQ4bC0xLjQ5LTIuMjI4Yy4wNjItLjA0MS4xMDUtLjA1NS4wMzctLjAyNi0uMDc4LjAzMy0uMjIyLjA5MS0uNTEuMjAybC45NjUgMi41Wm0tMS4xMTIuNDI5IDEuMTEyLS40MjktLjk2NS0yLjUtMS4xMTEuNDI5Ljk2NCAyLjVaIiBmaWxsPSIjNzc3IiBtYXNrPSJ1cmwoI2EpIi8+Cjwvc3ZnPgo="/>
                </div>
                <div  style="cursor: pointer; margin-left: 8px; margin-top: 20px; width: 160px; height: 135px; background-color: #141414;">
                  <img style="width: 103px; height: 16px; margin-top: 60px; margin-left: 30px;" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA0IiBoZWlnaHQ9IjE3IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik01Ni42MzUgNy43MjRzLS45NjMtLjY0My0xLjU1OC0uODkyYzAgMC0xLjg0My0uOTIyLTIuMjA5LTEuMzYxIDAgMC0uNzE4LS43MzEtLjI5Ny0xLjU4IDAgMCAuMTc2LS41NTYuOTM1LS41NTYgMCAwIC45ODguMDU5Ljk4OC45MzZ2MS4yMzdoMy41NGwtLjAwNS0xLjgyMlM1OC4zLjcwMiA1My44NTguNTdjMCAwLTMuNDk1LS4yNDgtNC40OTcgMS43ODUgMCAwLS4zOTQuNDU0LS4zOTQgMi4wMzNWNS41M3MtLjA0IDEuMzE2LjU4MyAyLjE2NWMwIDAgLjM1Mi41NTYgMS4yMTkgMS4xNyAwIDAgMS43NiAxLjAyNCAyLjgxNyAxLjYxIDAgMCAxLjA2Ni42NTguOTI2IDEuNzA1IDAgMC0uMDg3IDEuMDc0LTEuMTE3IDEuMDMgMCAwLS45NDItLjA0NS0uOTQyLTEuMXYtMS4yMzZINDguNjh2MS43OTZzLS4xMDUgMy40MzYgNC43NDMgMy40MzZjMCAwIDQuNjMzLjEwMSA0Ljg0OS0zLjUyNnYtMS40NjJzLjE2NC0yLjIyMy0xLjYzNy0zLjM5NFpNMzcuODI1LjkxMmwtMS4yMjEgOC4xMzZoLS4yODZMMzUuMTUuOTg1aC02LjA5NWwtLjMwNiAxNC43MzNoMy42MWwuMDQyLTExLjFoLjI4NEwzNC42IDE1LjcxNmgzLjc5N2wxLjg4OS0xMS4wOTRoLjI1MWwuMDg3IDExLjA5NmgzLjYyOEw0My44NjEuOTEyaC02LjAzNlpNMTUuNzcxLjkxMmwtMi41NiAxNC43NjloNC4xNDNMMTguODcgNC4yM2guMzQxbDEuNTE2IDExLjQ1aDQuMTQzTDIyLjMxLjkxM0gxNS43N1pNOTguNTQgNy42Mzh2Mi4xNDdoMS4wMXYyLjMwNGMwIDEuMTI2LS45MyAxLjE0Ny0uOTMgMS4xNDctMS4xMyAwLTEuMDg3LTEuMDctMS4wODctMS4wN3YtNy45N2MwLS44MjEgMS4wMDMtLjg2NSAxLjAwMy0uODY1Ljk2MiAwIC45NjkuOTguOTY5Ljk4djEuMjExaDMuNzA4Yy4xMjEtMi4zNjYtLjMzNS0yLjkzOC0uMzM1LTIuOTM4LS45MTktMi4xNC00LjM5OS0yLjAyMi00LjM5OS0yLjAyMi01LjM0NyAwLTQuNzUzIDQuMjQ5LTQuNzUzIDQuMjQ5djcuNzA1Yy4xMTQgMy45ODUgNS4zODMgMy41OCA1LjQ3MiAzLjU3NyAyLjM0NC0uMjY4IDMuMDUyLTEuMDQgMy4wNTItMS4wNC42NTEtLjUwMS44MTktMS4xOTUuODE5LTEuMTk1LjE4Ni0uNDA0LjIzMy0xLjY5Mi4yMzMtMS42OTJWNy42MzhIOTguNTRaTTg2LjU4NyA5LjkyM2gtLjE2TDgyLjY4NC45MTNoLTQuNDc5djE0LjgwNWgzLjY0NWwtLjIxOC05LjAwOGguMTYzbDMuODc4IDkuMDA4aDQuMzQyVi45MTJoLTMuNjlsLjI2MiA5LjAxWk02OS4wMjcgMTEuNzFzLjA1NCAxLjE4LTEuMDQ0IDEuMThjMCAwLTEuMTU0LjA2Mi0xLjE1NC0xLjE1MUw2Ni44MTcuOTEySDYyLjcxdjEwLjc0cy0uNDIgNC4wNjYgNS4zMyA0LjA2NmMwIDAgNC45OTcuMDU5IDQuOTk3LTMuODc5Vi45MTNoLTQuMDExVjExLjcxWk04LjY1NCA3LjcyM3MtLjk2MS0uNjQzLTEuNTU3LS44OTFjMCAwLTEuODQyLS45MjItMi4yMDctMS4zNjEgMCAwLS43MTgtLjczMy0uMjk3LTEuNTggMCAwIC4xNzUtLjU1Ni45MzMtLjU1NiAwIDAgLjk5LjA1OS45OS45MzZ2MS4yMzdoMy41NDFsLS4wMDctMS44MjNTMTAuMzIuNzAxIDUuODguNTdjMCAwLS4zMzUtLjAyMy0uODI2LjAwMyAwIDAtMi42OS4xNTYtMy42NTMgMS43NS0uMDA1LjAxMy0uMDEzLjAyMS0uMDE5LjAzMiAwIDAtLjM5Mi40NTMtLjM5MiAyLjAzM1Y1LjUzcy0uMDQxIDEuMzE3LjU4MiAyLjE2NmMwIDAgLjM1Mi41NTYgMS4yMTkgMS4xNyAwIDAgMS43NiAxLjAyMyAyLjgxNiAxLjYxIDAgMCAxLjA2OC42NTYuOTI3IDEuNzA0IDAgMC0uMDg3IDEuMDc1LTEuMTE3IDEuMDMgMCAwLS45NDItLjA0NS0uOTQyLTEuMDk5di0xLjIzN0guNzAydjEuNzk4cy0uMTA2IDMuNDM1IDQuNzQyIDMuNDM1YzAgMCA0LjYzMi4xMDEgNC44NS0zLjUyNlYxMS4xMnMuMTYxLTIuMjI1LTEuNjQtMy4zOTZaIiBmaWxsPSIjZmZmIi8+PC9zdmc+"/>
                  <p style="font-size: 13px; color: #777; margin-top: 25px; margin-left: 35px;">2013 г. и новее</p>
                </div>
                <div style="cursor: pointer; margin-left: 8px; padding-left: 4px; margin-top: 20px; width: 324px; height: 135px; background-color: #141414;">
                    <img style="width: 81px; height: 35px; margin-top: 50px; margin-left: 40px;" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODIiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zNS44ODYgMTguNDlDMzUuODg2IDguODI4IDI4LjA1My45OTQgMTguMzkuOTk0IDguNzI4Ljk5NC44OTQgOC44MjguODk0IDE4LjQ5YzAgOS42NjIgNy44MzQgMTcuNDk2IDE3LjQ5NiAxNy40OTYgOS42NjMgMCAxNy40OTYtNy44MzQgMTcuNDk2LTE3LjQ5NlptLTIuNzE1LS4wMDZjMCAzLjk1LTEuNTQgNy42Ni00LjMyOCAxMC40NTJhMTQuNjg1IDE0LjY4NSAwIDAgMS0xMC40NTEgNC4zMjhBMTQuNjg3IDE0LjY4NyAwIDAgMSA3Ljk0IDI4LjkzNmExNC42OTMgMTQuNjkzIDAgMCAxLTQuMzI4LTEwLjQ1MmMwLTguMTQ2IDYuNjMtMTQuNzc3IDE0Ljc3OS0xNC43NzdsLjgzMS4wMVY1LjM1M2wtLjgzMS0uMDFhMTMuMDY0IDEzLjA2NCAwIDAgMC05LjI5NCAzLjg1IDEzLjA2NSAxMy4wNjUgMCAwIDAtMy44NDggOS4yOTEgMTMuMDcgMTMuMDcgMCAwIDAgMy44NDggOS4yOTQgMTMuMDYgMTMuMDYgMCAwIDAgOS4yOTQgMy44NTJjNi44OTQgMCAxMi42NS01LjM4NyAxMy4xMTItMTIuMjYxIDAgMCAuMDAyLS4wMjUuMDAyLS4wNTJoLTguODAydi0xLjYzaDkuNzQzbC43MjQtLjAwNHYuODAxWm0tMTAuNDY3IDYuMTYyaC0zLjQ4VjEwLjY3OGgtMS42NjV2MTUuNjA2aDUuMTQ1di0xLjYzOFptLTkuOS0xMy45NzhhMi4yMzcgMi4yMzcgMCAwIDEgMi4yMzQgMi4yMzQgMi4yMzMgMi4yMzMgMCAwIDEtNC40NjQgMGMwLTEuMjMgMS0yLjIzNCAyLjIzLTIuMjM0WiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik00OS43MjcgNy4yNDJ2MTguMTE1aDExLjAwNXY0LjM4SDQ0LjQxNVY3LjI0Mmg1LjMxMlpNNzIuMDEzIDE2Ljk3MXY0LjE4OGg0LjI2N3YzLjkyNWMtLjc4Ni4yOTgtMi4zMi41OTUtMy43OC41OTUtNC43MiAwLTYuMjkxLTIuMzc0LTYuMjkxLTcuMTkgMC00LjU5NCAxLjQ5Ny03LjI5OSA2LjIxNS03LjI5OSAyLjYyMiAwIDQuMTE5LjgxNiA1LjM1NCAyLjM3MmwzLjI2LTIuOTY0Qzc5LjA1IDcuNzgzIDc1LjU2OCA2LjkzIDcyLjMxIDYuOTNjLTcuMzM4IDAtMTEuMTk2IDMuOTY0LTExLjE5NiAxMS41MjIgMCA3LjUyMyAzLjQ4MyAxMS41OTggMTEuMTU5IDExLjU5OCAzLjUyIDAgNi45NjYtLjg5IDguODM3LTIuMTg1VjE2Ljk3MmgtOS4wOThaIiBmaWxsPSIjZmZmIi8+PC9zdmc+"/>
                    <p style="font-size: 13px; color: #777; margin-top: 15px; margin-left: 35px;">Телевизоры и приставки</p>
                </div>
                <div style="cursor: pointer; margin-top: 20px; width: 176px; height: 280px; background-color: #141414; margin-left: 8px;">
                  <img style="width: 151px; height: 25px;" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUyIiBoZWlnaHQ9IjI1IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDEyLjU4MkMwIDUuNzU1IDUuNTM3LjIyMiAxMi4zNjcuMjIyYzYuODMgMCAxMi4zNjggNS41MzMgMTIuMzY4IDEyLjM2IDAgNi44MjYtNS41MzcgMTIuMzYtMTIuMzY4IDEyLjM2QzUuNTM3IDI0Ljk0MiAwIDE5LjQwOCAwIDEyLjU4MlptMTQuMTEgNy40MjhoMi41ODRWNS4xNzhoLTMuNzU4Yy0zLjc4IDAtNS43NjYgMS45NDItNS43NjYgNC44MDIgMCAyLjI4MyAxLjA5IDMuNjI4IDMuMDMzIDUuMDE1TDYuODI5IDIwLjAxaDIuNzk3bDMuNzU4LTUuNjEzLTEuMzAyLS44NzVjLTEuNTgtMS4wNjctMi4zNS0xLjg5OS0yLjM1LTMuNjkyIDAtMS41NzkgMS4xMTEtMi42NDYgMy4yMjUtMi42NDZoMS4xNTNWMjAuMDFabTUxLjYwNy0uMzk2YzEuMjk3IDEuNjMzIDMuMSAyLjQ1IDUuNDEgMi40NSAxLjAxMyAwIDEuODU3LS4xNDIgMi41MzItLjQyNi42OTMtLjI4NCAxLjI0NC0uNTY4IDEuNjUzLS44NTJ2LTIuNTg0Yy0uNTMzLjM5LTEuMTEuNzItMS43MzMuOTg2LS42MjIuMjQ4LTEuMzYuMzczLTIuMjEyLjM3My0xLjQ3NSAwLTIuNTY4LS41ODctMy4yNzgtMS43NTktLjY5My0xLjE3Mi0xLjA0LTIuOTItMS4wNC01LjI0NyAwLTIuMzk3LjM0Ny00LjE2NCAxLjA0LTUuMy43MS0xLjE1NSAxLjg1Ny0xLjczMiAzLjQzOC0xLjczMi43NDYgMCAxLjQ0LjEzMyAyLjA3OS40LjY1Ny4yNjYgMS4yMjYuNTUgMS43MDYuODUyVjQuMTljLS40MjctLjMwMi0uOTc4LS41NjgtMS42NTMtLjgtLjY3NS0uMjQ4LTEuNDQtLjM3Mi0yLjI5Mi0uMzcyLTEuMjI2IDAtMi4zMTkuMjIyLTMuMjc4LjY2NmE2LjEzNyA2LjEzNyAwIDAgMC0yLjM3MiAxLjg5MWMtLjY0LjgxNy0xLjEyOSAxLjgyLTEuNDY2IDMuMDEtLjMyIDEuMTcyLS40OCAyLjQ5NS0uNDggMy45NjkgMCAzLjA1NC42NDkgNS40MDcgMS45NDYgNy4wNTlaTTMwLjcwOSAzLjI4NWgxMi4wMlY1Ljc5aC00LjM5N3YxNi4wMDloLTMuMjI1VjUuNzg5aC00LjM5OFYzLjI4NVptMTkuMzgyIDBjMi4wNjEgMCAzLjYyNS4zNzMgNC42OTEgMS4xMiAxLjA4NC43NDUgMS42MjYgMS45MjYgMS42MjYgMy41NDIgMCAxLjI2LS4yOTMgMi4yMi0uODggMi44NzctLjU4Ni42NTctMS4zODYgMS4xMS0yLjM5OCAxLjM1OCAxLjI2MS4yMyAyLjIxMi43MDEgMi44NTIgMS40MTIuNjU3LjY5Mi45ODYgMS42NTEuOTg2IDIuODc3IDAgMS44MjktLjYyMiAzLjE3OC0xLjg2NiA0LjA0OC0xLjI0NC44NTMtMi45NTggMS4yNzktNS4xNDQgMS4yNzloLTUuMzU3VjMuMjg1aDUuNDlabS4xMDcgMTYuMDFjMS4wODQgMCAxLjkzNy0uMjIzIDIuNTU5LS42NjcuNjIyLS40NjIuOTMyLTEuMjQzLjkzMi0yLjM0NCAwLTEuMDMtLjI4NC0xLjc1OC0uODUyLTIuMTg0LS41NTEtLjQyNi0xLjQ0LS42NC0yLjY2Ni0uNjRoLTIuMzQ1djUuODM0aDIuMzcyWm0tLjA4LTguMjMyYy45NiAwIDEuNzE1LS4yMDQgMi4yNjUtLjYxMi41NTEtLjQyNy44MjctMS4xMzcuODI3LTIuMTMxIDAtLjk0MS0uMjU4LTEuNTk4LS43NzMtMS45NzFzLTEuMjgtLjU2LTIuMjkyLS41NmgtMi4zMnY1LjI3NGgyLjI5M1ptMzMuNDM0LS4xNnYxMC44OTVIODAuMzhWMTAuOTA0SDc2LjY1VjguNGgxMC42MzR2Mi41MDNoLTMuNzMxWm0xMi4wMDUgNC43OTVoLjQ1NHYyLjkwNGMtLjE5Ni4zMDEtLjQ4LjU1OS0uODUzLjc3Mi0uMzczLjE5NS0uODQ0LjI5My0xLjQxMy4yOTMtLjY3NSAwLTEuMTgxLS4xNjktMS41MTktLjUwNi0uMzItLjM1NS0uNDgtLjgxNy0uNDgtMS4zODUgMC0uNzY0LjI5My0xLjI5Ni44OC0xLjU5OC41ODYtLjMyIDEuNTYzLS40OCAyLjkzMS0uNDhabTMuNzg1IDYuMWEzMy40MzYgMzMuNDM2IDAgMCAxLS4xNi0zLjI3NnYtNS44NmMwLTEuNjM0LS40MTctMi43ODgtMS4yNTItMy40NjMtLjgxOC0uNjc1LTIuMDctMS4wMTItMy43NTgtMS4wMTItMS4wNjYgMC0yIC4xMzMtMi43OTkuNC0uOC4yNjUtMS40NC41NC0xLjkxOS44MjV2Mi42MzdjLjIxMy0uMTYuNDgtLjMyLjgtLjQ4LjMzNy0uMTYuNjkzLS4zMDIgMS4wNjYtLjQyNi4zOS0uMTI0LjgtLjIyMiAxLjIyNi0uMjkzYTYuMTM1IDYuMTM1IDAgMCAxIDEuMjUyLS4xMzNjLjc2NCAwIDEuMzI0LjE1MSAxLjY4LjQ1My4zNTUuMjg0LjUzMy43OS41MzMgMS41MTh2Ljc0NmgtLjUwN2MtMi40MzQgMC00LjIxLjM4Mi01LjMzIDEuMTQ1LTEuMTIuNzQ2LTEuNjggMS44MDMtMS42OCAzLjE3cy4zNzQgMi40MTUgMS4xMiAzLjE0M2MuNzY0LjcyOCAxLjc2IDEuMDkyIDIuOTg1IDEuMDkyLjkyNCAwIDEuNjI2LS4xMjQgMi4xMDYtLjM3My40OC0uMjY2Ljg3LS41NTkgMS4xNzItLjg3OGguMTM0Yy4wMTcuMTc3LjA0NC4zNjMuMDguNTU5LjA1My4xOTUuMTA2LjM2NC4xNi41MDZoMy4wOTFaTTExMi4zMTQgOC40djEzLjM5OGgtMy4xNzJ2LTUuNTk0aC00LjIzOHY1LjU5NGgtMy4xNzJWOC40aDMuMTcydjUuM2g0LjIzOFY4LjRoMy4xNzJabTUuODM4IDBoLTMuMTcxdjEzLjM5OGg4LjkyOHYzLjA2M2gyLjkzMnYtNS41NjdoLTEuNDEyVjguNGgtMy4xNzJ2MTAuODk0aC00LjEwNVY4LjRabTE4LjIwMSAwaDIuODI1djEzLjM5OGgtMy4wNjV2LTguMjg0bC00Ljg1MSA4LjI4NGgtMi44MjVWOC40aDMuMDY1djguMzFsNC44NTEtOC4zMVptMTAuMzY2IDkuMDNoMS41MTl2NC4zNjhoMy4xNzJWOC40aC00Ljg1MWMtLjc4MiAwLTEuNTAxLjA5Ny0yLjE1OS4yOTNhNC44NiA0Ljg2IDAgMCAwLTEuNjUyLjg1MiAzLjkzMSAzLjkzMSAwIDAgMC0xLjA5MyAxLjQxMmMtLjI2Ni41NS0uNCAxLjE4LS40IDEuODkxIDAgMS4wMy4yMzEgMS44NjUuNjkzIDIuNTA0LjQ2Mi42MjEgMS4xMiAxLjA4MyAxLjk3MyAxLjM4NWwtMy4wMTIgNS4wNjFoMy4yNTFsMi41NTktNC4zNjhabS0xLjU5OS02LjA0N2MuNDI2LS4zMi45ODYtLjQ4IDEuNjc5LS40OGgxLjQzOXY0LjIxaC0xLjUxOWMtLjcyOCAwLTEuMjg4LS4xNi0xLjY3OS0uNDgtLjM3My0uMzM4LS41Ni0uODk3LS41Ni0xLjY3OCAwLS43NDYuMjE0LTEuMjcuNjQtMS41NzJaIiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPgo="/>
                  <p style="font-size: 15px; color: #777; margin-top: 5px;">Телевизор с Алисой<br>от Яндекса</p>
                  
                </div>
                
                <div style="margin-top: 145px; margin-left: -689px; display: flex;">
                  <div style="cursor: pointer; margin-left: 9px; margin-top: 20px; width: 160px; height: 135px; background-color: #141414;">
                    <img style="width: 81px; height: 35px; margin-top: 50px; margin-left: 40px;" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODIiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zNS44ODYgMTguNDlDMzUuODg2IDguODI4IDI4LjA1My45OTQgMTguMzkuOTk0IDguNzI4Ljk5NC44OTQgOC44MjguODk0IDE4LjQ5YzAgOS42NjIgNy44MzQgMTcuNDk2IDE3LjQ5NiAxNy40OTYgOS42NjMgMCAxNy40OTYtNy44MzQgMTcuNDk2LTE3LjQ5NlptLTIuNzE1LS4wMDZjMCAzLjk1LTEuNTQgNy42Ni00LjMyOCAxMC40NTJhMTQuNjg1IDE0LjY4NSAwIDAgMS0xMC40NTEgNC4zMjhBMTQuNjg3IDE0LjY4NyAwIDAgMSA3Ljk0IDI4LjkzNmExNC42OTMgMTQuNjkzIDAgMCAxLTQuMzI4LTEwLjQ1MmMwLTguMTQ2IDYuNjMtMTQuNzc3IDE0Ljc3OS0xNC43NzdsLjgzMS4wMVY1LjM1M2wtLjgzMS0uMDFhMTMuMDY0IDEzLjA2NCAwIDAgMC05LjI5NCAzLjg1IDEzLjA2NSAxMy4wNjUgMCAwIDAtMy44NDggOS4yOTEgMTMuMDcgMTMuMDcgMCAwIDAgMy44NDggOS4yOTQgMTMuMDYgMTMuMDYgMCAwIDAgOS4yOTQgMy44NTJjNi44OTQgMCAxMi42NS01LjM4NyAxMy4xMTItMTIuMjYxIDAgMCAuMDAyLS4wMjUuMDAyLS4wNTJoLTguODAydi0xLjYzaDkuNzQzbC43MjQtLjAwNHYuODAxWm0tMTAuNDY3IDYuMTYyaC0zLjQ4VjEwLjY3OGgtMS42NjV2MTUuNjA2aDUuMTQ1di0xLjYzOFptLTkuOS0xMy45NzhhMi4yMzcgMi4yMzcgMCAwIDEgMi4yMzQgMi4yMzQgMi4yMzMgMi4yMzMgMCAwIDEtNC40NjQgMGMwLTEuMjMgMS0yLjIzNCAyLjIzLTIuMjM0WiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik00OS43MjcgNy4yNDJ2MTguMTE1aDExLjAwNXY0LjM4SDQ0LjQxNVY3LjI0Mmg1LjMxMlpNNzIuMDEzIDE2Ljk3MXY0LjE4OGg0LjI2N3YzLjkyNWMtLjc4Ni4yOTgtMi4zMi41OTUtMy43OC41OTUtNC43MiAwLTYuMjkxLTIuMzc0LTYuMjkxLTcuMTkgMC00LjU5NCAxLjQ5Ny03LjI5OSA2LjIxNS03LjI5OSAyLjYyMiAwIDQuMTE5LjgxNiA1LjM1NCAyLjM3MmwzLjI2LTIuOTY0Qzc5LjA1IDcuNzgzIDc1LjU2OCA2LjkzIDcyLjMxIDYuOTNjLTcuMzM4IDAtMTEuMTk2IDMuOTY0LTExLjE5NiAxMS41MjIgMCA3LjUyMyAzLjQ4MyAxMS41OTggMTEuMTU5IDExLjU5OCAzLjUyIDAgNi45NjYtLjg5IDguODM3LTIuMTg1VjE2Ljk3MmgtOS4wOThaIiBmaWxsPSIjZmZmIi8+PC9zdmc+"/>
                    <p style="font-size: 13px; color: #777; margin-top: 15px; margin-left: 35px;">2014 г. и новее</p>
                  </div>
                  <div style="cursor: pointer; margin-left: 8px; margin-top: 20px; width: 160px; height: 135px; background-color: #141414;">
                    <img style="width: 56px; height: 56px; margin-top: 40px; margin-left: 50px;" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTciIGhlaWdodD0iNTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01MC40NDggNi43ODhDNDUuMjE1IDEuNTc3IDM3LjY5Ni45OTQgMjguNTA0Ljk5NGMtOS4xOTIgMC0xNi43MzUuNTktMjEuOTY0IDUuODE0QzEuMzEgMTIuMDMyLjc4MiAxOS41NTEuNzgyIDI4Ljc0NWMwIDkuMTkzLjUzIDE2LjcxNiA1Ljc2IDIxLjk0IDUuMjMgNS4yMjQgMTIuNzYxIDUuNzU1IDIxLjk2MiA1Ljc1NSA5LjIgMCAxNi43MzMtLjUzIDIxLjk2Mi01Ljc1NSA1LjIzLTUuMjI2IDUuNzU2LTEyLjc0NyA1Ljc1Ni0yMS45MzggMC05LjE5Mi0uNTQxLTE2LjcyNi01Ljc3NC0yMS45NTlaTTI2LjQ2MSAzOC45OTRhLjM0NS4zNDUgMCAwIDEtLjM0Ni4zNGgtNC43MTlhLjM0Ny4zNDcgMCAwIDEtLjM2LS4zNFYyNi42MzdhLjM0NS4zNDUgMCAwIDEgLjM2LS4zNGg0LjcyOGEuMzQ1LjM0NSAwIDAgMSAuMzQ2LjM0bC0uMDA5IDEyLjM1N1ptOS4yNTkgMGEuMzQ0LjM0NCAwIDAgMS0uMzQ4LjM0SDMwLjg2YS4zNDcuMzQ3IDAgMCAxLS4zNS0uMzR2LTEwLjY3YzAtMS44NjItLjExLTMuNzc2LTEuMDcyLTQuNzM4LS44MjctLjgyOC0yLjM3LTEuMDItMy45Ny0xLjA2SDE3LjMxYS4zNDYuMzQ2IDAgMCAwLS4zNDguMzQydjE2LjEyNmEuMzUuMzUgMCAwIDEtLjM2MS4zNEgxMi4wOWEuMzQ1LjM0NSAwIDAgMS0uMzQ4LS4zNFYxOC40NDdhLjM0Mi4zNDIgMCAwIDEgLjIxNi0uMzE2LjM0NC4zNDQgMCAwIDEgLjEzMi0uMDI1aDEyLjk5MmMzLjM5NiAwIDYuOTQ1LjE1NSA4LjY5NSAxLjkwN3MxLjkxNyA1LjMwNSAxLjkxNyA4LjcwNWwuMDI1IDEwLjI3NlptOS4yNzEgMGEuMzQ2LjM0NiAwIDAgMS0uMzUuMzRoLTQuNTFhLjM0NS4zNDUgMCAwIDEtLjM1LS4zNFYxOC40NDdhLjM0Mi4zNDIgMCAwIDEgLjIxNy0uMzE2LjM0NC4zNDQgMCAwIDEgLjEzMi0uMDI1aDQuNTExYS4zNDguMzQ4IDAgMCAxIC4zNS4zNHYyMC41NDhaIiBmaWxsPSIjZmZmIi8+PC9zdmc+"/>
                    
                  </div>
                  <div style="cursor: pointer; margin-left: 8px; margin-top: 20px; width: 160px; height: 135px; background-color: #141414;">
                    <img style="width: 96px; height: 17px; margin-top: 60px; margin-left: 30px;" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iMTgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNS41MTggMTQuODExYzIuMTM5IDEuOTE5IDUuMzQxIDIuOTU0IDguNzkyIDIuOTU0IDMuNDYgMCA2LjczLTEuMDIzIDguODEtMi45NTQgMS41NDQtMS40MzIgMi4zNi0zLjUwMiAyLjM2LTUuNDQ2IDAtMi4wMDYtLjc2OS0zLjk4LTIuMzYtNS40MjNDNDAuODg3IDEuOTE0IDM3Ljk2My45OTQgMzQuMzEuOTk0Yy0zLjMgMC02LjgwNyAxLjEzMy04Ljc5MiAyLjk0M2E3LjMxOCA3LjMxOCAwIDAgMC0yLjM5MiA1LjQyOGMwIDIuMDI2Ljc3NyAzLjk5NiAyLjM5MiA1LjQ0NlptMTMuNTA4LTEuMDdjLTEuMTg2IDEuMTc5LTIuODg0IDEuODEyLTQuNzE2IDEuODEyLTEuODE4IDAtMy41NTMtLjY0Ny00LjcyNC0xLjgxMy0xLjEyMy0xLjExNy0xLjcyMy0yLjY5OC0xLjcyMy00LjM3NSAwLTEuNjg0LjU5NC0zLjI2NiAxLjcyMy00LjM4NSAxLjE3LTEuMTYgMi45MTItMS44MDIgNC43MjQtMS44MDIgMS44MDcgMCAzLjU0Ni42NDkgNC43MTYgMS44MDIgMS4xMzYgMS4xMiAxLjcyOCAyLjY5NyAxLjcyOCA0LjM4NSAwIDEuNzYtLjU0OSAzLjIwMy0xLjcyNyA0LjM3NVoiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMy4zNjUgMi4xNDRjMS43ODEtLjc5NSAzLjg3OS0xLjE0IDUuNzI1LTEuMTQgMy4yNTYuMDA0IDUuOTEzIDEuMDY4IDYuODUyIDEuNTYuMzc0LjIwNi41NzItLjA0My41NzItLjIzNXYtLjU5M2gyLjF2NS4xMDhoLTEuODhhMy41NTEgMy41NTEgMCAwIDAtMS4xNjUtMS45NDhjLS4zNTQtLjI4OS0uOC0uNTM0LTEuMTgxLS43MDQtMS4xMjEtLjUtMi44ODMtLjk3Ny00Ljk2NC0uOTctMS43NiAwLTMuNDQ4LjMyNy00LjI4NC44NS0uNTI3LjMzLS43OTMuNzM4LS43OTMgMS4yMTkgMCAuNjc2LjU4Mi45NTMuODY4IDEuMDQyLjc5LjI0NCAyLjU3NS40MjEgMy45MzMuNTU2LjI2My4wMjYuNTEuMDUuNzMuMDc0IDEuMjk4LjEzNSA0LjAxMS40OTkgNS4yMTEuNzkzLjYxOC4xNTIgMS4zNzQuNDIyIDEuODUyLjY0Ny41NS4yNTggMS4wNzguNTk0IDEuNTEgMS4wMjVhNC4zMjEgNC4zMjEgMCAwIDEgMS4yMTcgMy4wMzdjMCAxLjc1LTEuMDM1IDIuNzEzLTEuNTA3IDMuMDg5LS44NzIuNjk1LTEuOTQ1IDEuMTQyLTIuODEzIDEuMzlsLS4wODMuMDI0Yy0uOTE4LjI2My0yLjI0NS42NDMtNC42NTQuNjQzLTEuNDQgMC0yLjIyMy0uMTY0LTMuMzQtLjM5OGwtLjE5NC0uMDRBMTguMzY1IDE4LjM2NSAwIDAgMSAzLjY3IDE2LjA3Yy0uMzkxLS4xNzctLjUwMy4xOTUtLjUwMy4yODV2Ljc5M0guODM5di01Ljg2OGgyLjA5NWMwIC42OTYuMzMxIDEuMzk5LjU0MSAxLjY1NS44NDUgMS4wMzEgMS43NSAxLjQzOCAyLjYxMyAxLjc0NS43NDkuMjY4IDIuODAyLjc4MiA0LjUxLjc4MiAyLjE5IDAgMy40NjEtLjUyOSAzLjc1LS42NDlsLjAzOS0uMDE2LjAzNi0uMDE0Yy4yNTktLjA5OSAxLjIyNC0uNDY3IDEuMjI0LTEuNTQ2IDAtMS4wOTktLjk0My0xLjMzNS0xLjU1NC0xLjQ5bC0uMDcyLS4wMThjLS43Mi0uMTgyLTIuNDMzLS4zNjItNC4yMjUtLjU1bC0uMzE2LS4wMzRjLTEuOTE4LS4yMDEtMy44NDQtLjUwNC00Ljc0NS0uNy0xLjk2MS0uNDMtMi43NDQtMS4xNTItMy4yMjYtMS41OTdsLS4wNC0uMDM2QzEuNDM5IDguNzgzLjM3NCA3Ljc1NS4zNzUgNi4wMzJjMC0xLjk2NyAxLjM0Ni0zLjE1NCAyLjk5LTMuODg4Wk01NS4wOTggMS45M2wxMC4yNDEgOS4yNDMtLjEwNC02LjIyM2MtLjAxMS0uODE2LS4xNjItMS4xNTctMS4wNDQtMS4xNTdoLTEuOTI2di0xLjg2aDguNzU4djEuODZoLTEuODhjLS45IDAtLjk1Ni4yODktLjk2NyAxLjE1N2wuMTU5IDExLjg5aC0zTDUzLjU0IDYuMzE0bC4wMDIgNy40NzFjLjAxMS44MTMuMDQ5IDEuMTk1Ljg4NiAxLjE5NWgyLjEwM3YxLjg2MWgtOC42VjE0Ljk4aDIuMDFjLjcyNCAwIC43MjItLjY2NS43MjEtMS4xOFY1LjAyMmMwLS41NjMtLjA4LTEuMjI2LTEuMjU4LTEuMjI2aC0xLjYzVjEuOTNoNy4zMjRaTTgxLjU0NiAxNC45NDNjLS4wNy4wMjEtLjQzNi4wMzItLjUxOC4wMzJoLTEuODIydjEuODYxaDEwLjIxNnYtMS44NjJIODcuNWMtLjA4MiAwLS40NDMtLjAxLS41MTMtLjAzM2EuNjM5LjYzOSAwIDAgMS0uNDA0LS4zNTdjLS4wMjctLjA2My0uMDQtLjM0My0uMDQtLjQwMlYxMS4yMjRjMC0uMDcyLS4wMDEtLjE4LjA2OS0uMjZsMS42MDYtMS44MzIgNC4wNi00LjYzMmMuNTEzLS41OC43OS0uNzA2IDEuNDczLS43MDZoMS44OFYxLjkzaC04LjQxNnYxLjg2M2gxLjI3Yy4zNiAwIC40NzEuMzc3LjMwNS41NzYtLjAyNy4wMzMtMy41MjYgNC4xNDQtMy41NyA0LjE4NS0uMDQzLjA0LS4wNy4wMy0uMTAyLS4wMTRhMzM5Ni4yMyAzMzk2LjIzIDAgMCAwLTMuNDg5LTQuMTc3Yy0uMjQ0LS4zMDEtLjA1My0uNTczLjIzMi0uNTczaDEuMjM4VjEuOTNINzIuODN2MS44NjNoMS44MTljLjc5NCAwIDEuMzE2LjUgMS42MTMuODI1LjI0LjI2MSA1LjQ3MiA2LjE5IDUuNjA0IDYuMzYzLjEyLjE1Ny4xMjUuMTg4LjEyNS4yNTlsLS4wMDEgMi45NDJjMCAuMDYtLjAxMy4zNC0uMDQuNDAyYS42NDIuNjQyIDAgMCAxLS40MDQuMzU4WiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg=="/>
                    
                  </div>
                </div>
              </div>
            </div>

          

          <div style="cursor: pointer; display: flex; width: 600px; cursor: pointer; margin-top: 20px;">
            <a style="font-size: 22px; line-height: 28px; text-decoration: none; color: inherit;">Рекомендации</a>
            <img style="width: 20px; height: 20px; margin-top: 5px; font-weight: var(--font-weight-semibold, 600); margin-left: 3px" src="data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0nNDgnIGhlaWdodD0nNDgnIGZpbGw9JyMwMDAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZmlsbC1ydWxlPSdldmVub2RkJyBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00yOS41MTkgMjMuOTY4IDEzLjMzOSA4LjQ2NiAxNi42NiA1bDE4IDE3LjI0NiAxLjgyMSAxLjc0NS0xLjgzMiAxLjczMi0xOCAxNy4wMi0zLjI5OC0zLjQ4N0wyOS41MiAyMy45NjhaJy8+PC9zdmc+"/>
          </div>
          <div style="width: 940px; height: 335px; margin-top: 15px; padding-right: 50px; display: flex;">
            <img
              v-on:click="nextRightN()"
              class="circle-arrow"
              src="data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0nNDgnIGhlaWdodD0nNDgnIGZpbGw9JyMwMDAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZmlsbC1ydWxlPSdldmVub2RkJyBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00yOS41MTkgMjMuOTY4IDEzLjMzOSA4LjQ2NiAxNi42NiA1bDE4IDE3LjI0NiAxLjgyMSAxLjc0NS0xLjgzMiAxLjczMi0xOCAxNy4wMi0zLjI5OC0zLjQ4N0wyOS41MiAyMy45NjhaJy8+PC9zdmc+"
            />
            <img
              v-on:click="nextLeftN()"
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

      
              <span class="raitingF">{{ film.ratingImdb }} </span>
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
  
</div>


</template>

<style>
body {
  font-family: Graphik Kinopoisk LC Web, Tahoma, Arial, Verdana, sans-serif;
}
.bigTxt {
    font-size: 44px;
    font-weight: 700;
    line-height: 50px;
    color: #fff;
    height: 100px;
    unicode-bidi: isolate;
    
}
.freeDays {
  position: relative;
  width: 1035px;
  height: 614px;
  background-image: url("https://avatars.mds.yandex.net/get-ott/1531675/83d830fa-7239-4585-ae1d-03d0c01d3b1d/960x540");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  margin-left: -45px;
  
}
.raitingF {
  position: absolute; 
  top: 5px; 
  left: 5px; 
  color: white; 
  background-color: green; 
  padding-left: 5px; 
  padding-right: 5px; 
  font-weight: 600;
  font-size: 13px;
}
.film-scroll::-webkit-scrollbar {
      display: none;
    }
.film-scroll-news::-webkit-scrollbar {
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
  z-index: 2; 
  background-repeat: no-repeat;
  box-shadow: 0 4px 6px rgba(0, 0, 0, .05), 
              0 1px 0 1px rgba(0, 0, 0, .05), 
              0 0 0 1px rgba(0, 0, 0, .05);
  transition: margin-left 0.3s ease-in-out;
  
}
.circle-arrow:hover {
  margin-left: 919px; 
}


.circle-arrow-news-left
{
  width: 22px;
  height: 22px;
  background-color: white;
  border: 1px solid white;
  border-radius: 50%;
  padding: 11px;
  position: absolute;
  margin-top: 110px; 
  margin-left: -18px; 
  cursor: pointer; 
  z-index: 2; 
  background-repeat: no-repeat;
  box-shadow: 0 4px 6px rgba(0, 0, 0, .05), 
              0 1px 0 1px rgba(0, 0, 0, .05), 
              0 0 0 1px rgba(0, 0, 0, .05);
  transition: margin-left 0.3s ease-in-out;
  transform: rotate(180deg);  
}
.circle-arrow-news-left:hover {
  margin-left: -19px; 
}

.circle-arrow-news {
  width: 22px;
  height: 22px;
  background-color: white;
  border: 1px solid white;
  border-radius: 50%;
  padding: 11px;
  position: absolute;
  margin-top: 110px; 
  margin-left: 918px; 
  cursor: pointer; 
  z-index: 2; 
  background-repeat: no-repeat;
  box-shadow: 0 4px 6px rgba(0, 0, 0, .05), 
              0 1px 0 1px rgba(0, 0, 0, .05), 
              0 0 0 1px rgba(0, 0, 0, .05);
  transition: margin-left 0.3s ease-in-out;
  
}
.circle-arrow-news:hover {
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
  z-index: 2; 
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

.circle-arrow-left-news
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
  z-index: 2; 
  background-repeat: no-repeat;
  box-shadow: 0 4px 6px rgba(0, 0, 0, .05), 
              0 1px 0 1px rgba(0, 0, 0, .05), 
              0 0 0 1px rgba(0, 0, 0, .05);
  transition: margin-left 0.3s ease-in-out;
  transform: rotate(180deg);  
}
.circle-arrow-left-news:hover {
  margin-left: -19px; 
}

.film-scroll-series::-webkit-scrollbar {
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
  z-index: 2; 
  background-repeat: no-repeat;
  box-shadow: 0 4px 6px rgba(0, 0, 0, .05), 
              0 1px 0 1px rgba(0, 0, 0, .05), 
              0 0 0 1px rgba(0, 0, 0, .05);
  transition: margin-left 0.3s ease-in-out;
  
}
.circle-arrow:hover {
  margin-left: 919px; 
}


.circle-arrow-series-left
{
  width: 22px;
  height: 22px;
  background-color: white;
  border: 1px solid white;
  border-radius: 50%;
  padding: 11px;
  position: absolute;
  margin-top: 130px; 
  margin-left: -18px; 
  cursor: pointer; 
  z-index: 2; 
  background-repeat: no-repeat;
  box-shadow: 0 4px 6px rgba(0, 0, 0, .05), 
              0 1px 0 1px rgba(0, 0, 0, .05), 
              0 0 0 1px rgba(0, 0, 0, .05);
  transition: margin-left 0.3s ease-in-out;
  transform: rotate(180deg);  
}
.circle-arrow-series-left:hover {
  margin-left: -19px; 
}

.circle-arrow-series {
  width: 22px;
  height: 22px;
  background-color: white;
  border: 1px solid white;
  border-radius: 50%;
  padding: 11px;
  position: absolute;
  margin-top: 130px; 
  margin-left: 918px; 
  cursor: pointer; 
  z-index: 2; 
  background-repeat: no-repeat;
  box-shadow: 0 4px 6px rgba(0, 0, 0, .05), 
              0 1px 0 1px rgba(0, 0, 0, .05), 
              0 0 0 1px rgba(0, 0, 0, .05);
  transition: margin-left 0.3s ease-in-out;
  
}
.circle-arrow-series:hover {
  margin-left: 919px; 
}

.circle-arrow-left-series
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
  z-index: 2; 
  background-repeat: no-repeat;
  box-shadow: 0 4px 6px rgba(0, 0, 0, .05), 
              0 1px 0 1px rgba(0, 0, 0, .05), 
              0 0 0 1px rgba(0, 0, 0, .05);
  transition: margin-left 0.3s ease-in-out;
  transform: rotate(180deg);  
}
.circle-arrow-left-series:hover {
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
  color: #f50;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
}
.film-card:hover img {
  filter: brightness(0.5);
  transition: filter 0.3s ease-in-out;
}
.film-card:hover .raitingF {
  display: none;
}
.news-card {
  cursor: pointer;
  display: inline-block;
  margin-left: 7px;
}
.news-card:hover img {
  filter: brightness(0.5);
  transition: filter 0.3s ease-in-out;
}
.news-card img {
  width: 229px;
  height: 294px;
}

.series-card {
  cursor: pointer;
  display: inline-block;
  margin-left: 7px;
}
.series-card:hover img {
  filter: brightness(0.5);
  transition: filter 0.3s ease-in-out;
}
.series-card:hover {
  cursor: pointer;
  display: inline-block;
  margin-left: 7px;
}
.series-card img {
  width: 229px;
  height: 335px;
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
.info {
  position: relative;
  width: 935px;
  height: 1140px;
  overflow: hidden;
  padding: 0 50px 50px;
  color: #fff;
  background-color: #000;
  margin-left: -45px;
  
}
</style>
