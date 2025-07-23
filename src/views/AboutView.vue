<script>
export default {
 data() {
  return {
    kinopoiskId: null,
    apiKey: 'e30ffed0-76ab-4dd6-b41f-4c9da2b2735b',
    object: {},
    staff: {},
    actors: [],
    actorsCount: 0,
    dubbingActors: [],
    dubbingActorsCount: 0,
  };
},

mounted() {
  this.kinopoiskId = this.$route.params.id;
  this.getFilmById();
  this.getStaffById();
},
computed: {
 formattedCountries() {
  if (!this.object.countries || !Array.isArray(this.object.countries)) {
    return '';
  }
  return this.object.countries.map(item => item.country).join(', ');
},
formattedGenres() {
  if (!this.object.genres || !Array.isArray(this.object.genres)) {
    return '';
  }
  return this.object.genres.map(item => item.genre).join(', ');
},


},

methods: {
  async getFilmById() {
    try {
      const response = await fetch(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/${this.kinopoiskId}`,
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
  },
 async getStaffById() {
  try {
    const getStaff = await fetch(
      `https://kinopoiskapiunofficial.tech/api/v1/staff?filmId=${this.kinopoiskId}`,
      {
        method: 'GET',
        headers: {
          'X-API-KEY': this.apiKey,
          'Content-Type': 'application/json'
        }
      }
    );

    const staffData = await getStaff.json();

    
    
    this.actors = staffData.filter(person => person.professionText === "Актеры");

    this.actorsCount = this.actors.length;

    this.actors = this.actors.slice(0, 10);

    

    this.dubbingActors = staffData.filter(person => person.professionText === "Режиссеры дубляжа");

    this.dubbingActorsCount = this.dubbingActors.length;

    this.dubbingActors = this.dubbingActors.slice(0, 5);
    
    console.log(staffData );
    

    console.log(this.dubbingActors[0].nameRu);
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
      <button class="watch bigBtn" style="width: 302px">Добавить в папку</button>
    </div>
    
    <div class="box box2">
      
<div class="filmInfo">
  <span class="filmName">{{ object.nameRu }} ({{ object.year }})</span>
  <span class="originalName">
  {{ object.nameOriginal || '' }} 
  {{ object.ratingAgeLimits ? object.ratingAgeLimits.replace('age', '') : '' }}+
  <br>
  
</span>
<div style="display: inline;">
  <button class="watch bigBtn">Буду смотреть</button>
  <button class="watch miniBtn">•••</button>
</div>
  <h3 class="aboutFilm">О фильме</h3>
  <div class="reqInfo" style="margin-top: -10px">
    <div class="leftInfo">
      Год производства
    </div>
    <div class="rightInfo">
      {{ object.year }}
    </div>
  </div>
  <div class="reqInfo">
    <div class="leftInfo">
      Страна
    </div>
    <div class="rightInfo">
      {{ formattedCountries }}
    </div>
  </div>
   <div class="reqInfo">
    <div class="leftInfo">
      Жанр
    </div>
    <div class="rightInfo">
      {{ formattedGenres }}
    </div>
  </div>
   <div class="reqInfo">
    <div class="leftInfo" style="min-width: 160px; ">
      Слоган
    </div>
    <div class="rightInfo" style="color: rgba(0, 0, 0, .6); font-size: 14px">
      "{{ object.slogan !== 'null' ? object.slogan: 'нет слогана'}}"
    </div>
  </div>
  <div class="reqInfo">
    <div class="leftInfo">
      Возраст
    </div>
    <div class="rightInfo" style="border: 1px solid black; padding-left: 2px; padding-right: 2px; padding-top: 1px; padding-bottom: 1px;">
      {{ object.ratingAgeLimits ? object.ratingAgeLimits.replace('age', '') : '' }}+
    </div>
  </div>
  <div class="reqInfo">
    <div class="leftInfo">
      Рейтинг MPAA
    </div>
    <div class="rightInfo" style="border: 1px solid black; padding-left: 3px; padding-right: 3px; padding-top: 1px; padding-bottom: 1px;">
      {{ object.ratingMpaa }}
    </div>
  </div>
   <div class="reqInfo">
    <div class="leftInfo">
      Время
    </div>
    <div class="rightInfo">
      {{ Math.trunc(object.filmLength / 60) }} ч
      {{ object.filmLength % 60 }} мин
    </div>
  </div>
  
</div>

    </div>
    <div class="box box3">
  <div class="ratingBlock">
    <span class="raiting">{{ object.ratingKinopoisk }}</span>
    <span class="voteCount">{{ object.ratingKinopoiskVoteCount }} оценок</span>
    <button class="gradeFilm">Оценить фильм</button>
    <span class="voteCount" style="padding-top: 10px">{{ object.reviewsCount && object.reviewsCount !== 'null' ? object.reviewsCount : 'неизвестно сколько' }} рецензий</span>

   
<span class="inMainRole">В главных ролях ></span>
<div style="padding-top: 5px">
  <div class="actorInfo" v-for="actor in actors" :key="actor.staffId">
    {{ actor.nameRu || actor.nameEn }}
  </div>
  <div class="actorsCount">
    {{ this.actorsCount }} актеров
  </div>
</div>


<span class="inMainRole" style="padding-top: 20px">Режиссёры дубляжа ></span>
<div style="padding-top: 5px">
  <div class="actorInfo" v-for="dubbingActor in dubbingActors" :key="dubbingActor.staffId">
    {{ dubbingActor.nameRu || dubbingActor.nameEn }}
  </div>
    <div class="actorsCount">
    {{ this.dubbingActorsCount }} актеров
  </div>
</div>

  
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
  gap: 10px; 
  padding-top: 112px;
  background-color: white;
  height: 87.5vh;
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
  padding-left: 25px;
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
  height: 450px;
}
.filmInfo {
  display: flex;
  flex-direction: column; 
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
.gradeFilm {
      margin-top: 10px;
      font-family: var(--font-family, "Graphik Kinopoisk LC Web", Tahoma, Arial, Verdana, sans-serif);
      font-weight: var(--font-weight-bold, 550);
      width: 200px;
      padding: 8px 8px;
      background-color: #3498db;
      color: white;
      border: none;
      border-radius: 15px;
      font-size: 13px;
      cursor: pointer;
      transition: .2s ease, transform .2s ease;
      background: rgba(0, 0, 0, .05);
      color: black;
}
    

 .gradeFilm:hover {
      transform: scale(1.05);
      background: rgba(0, 0, 0, .09);
    }
  
  .watch {
    font-size: 16px;
    margin-top: 20px;
   
    color: #000;
    background: rgba(0, 0, 0, .05);
    transition: .2s ease, transform .2s ease;
    border-radius: 20px;
    font-family: inherit;
    
    font-style: normal;
    cursor: pointer;
    text-decoration: none;
    border: none;
    outline: none;

  }
  
  .bigBtn {
    width: 200px;
    padding-left: 22px;
    padding-top: 14px;
    padding-bottom: 14px;
    padding-right: 26px;
    font-weight: var(--kp-ui-kit-button-font-weight, 600);
  }
  .bigBtn:hover {
    transform: scale(1.05);
    background: rgba(0, 0, 0, .09);
  }
  .miniBtn {
    margin-left: 10px;
    width: 52px;
    height: 52px;
    border-radius: 100%;
    font-weight: var(--kp-ui-kit-button-font-weight, 100);
  }
  .miniBtn:hover {
    background: rgba(0, 0, 0, .09);
  }
  .aboutFilm {
    padding-top: 50px;
    font-size: 22px;
    line-height: 28px;
    margin-block-start: 0;
    font-family: var(--font-family, "Graphik Kinopoisk LC Web", Tahoma, Arial, Verdana, sans-serif);
  }
  .reqInfo {
    display: flex;
    font-family: var(--font-family, "Graphik Kinopoisk LC Web", Tahoma, Arial, Verdana, sans-serif);
    font-size: 13px;
    line-height: 18px;
    margin-top: 15px;
  }
  .leftInfo {
    width: 160px;
    color: rgba(0, 0, 0, .6);
    
  }
  .rightInfo {
    color: black;
  }
  .actorInfo {
    list-style: none; 
    font-family: var(--font-family, "Graphik Kinopoisk LC Web", Tahoma, Arial, Verdana, sans-serif);
    font-size: 13px;
    text-decoration: none;
    word-break: break-word;
    color: #000;
    margin-top: 5px;
  }
  .inMainRole {
    padding-top: 70px;
    font-size: 15px;
    line-height: 20px;
    font-family: var(--font-family, "Graphik Kinopoisk LC Web", Tahoma, Arial, Verdana, sans-serif);
    font-weight: var(--font-weight-semibold, 600);
    text-decoration: none;
    color: inherit;
    padding-inline-end: 16px;
  }
  .actorsCount {
    font-family: var(--font-family, "Graphik Kinopoisk LC Web", Tahoma, Arial, Verdana, sans-serif);
    font-size: 13px;
    color: #f50;
    background-color: transparent;
    padding-top: 10px;
  }
</style>
