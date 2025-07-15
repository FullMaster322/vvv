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
<div class="film-list">
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
