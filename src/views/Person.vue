<script>
export default {
 data() {
  return {
    staffId: null,
    apiKey: 'e30ffed0-76ab-4dd6-b41f-4c9da2b2735b',
    actor: {},
    filmsCount: 0,
  };
},

mounted() {
  this.staffId = this.$route.params.idPerson;
  this.getActorById();
},


methods: {
    async getActorById() {
    try {
      const response = await fetch(
        `https://kinopoiskapiunofficial.tech/api/v1/staff/${this.staffId}`,
        {
          method: 'GET',
          headers: {
            'X-API-KEY': this.apiKey,
            'Content-Type': 'application/json'
          }
        }
      );

      const data = await response.json();
      
      this.actor = data;

      this.filmsCount = this.actor.films.length;
      
      console.log(this.actor);
      
    } catch (error) {
      console.error(error);
    }
  },
}
}

</script>

<template>
<div class="outer">
  <div class="container">

   
    <div class="box box1">
      <img :src="actor.posterUrl" class="poster" />
      <button class="watch bigBtn" style="width: 302px">Добавить в папку</button>
      <img src="../assets/vkLogo.png" class="messIMG" style="margin-left: 70px"/>
      <img style="margin-left: 7px" src="../assets/twitterLogo.jpg" class="messIMG"/>
      <img style="margin-left: 7px" src="../assets/telegramLogo.png" class="messIMG"/>
        <ul class="infoBtn" style="margin-left: 35px">
        <li>Нашли ошибку?</li>
        <li style="margin-left: 10px">Добавить инфо</li>
      </ul>
    </div>
    

    
    <div class="filmInfo" style="margin-left: 10px">
      <span class="filmName" style="margin-left: 30px">{{ actor.nameRu || actor.nameEn }}</span>
      <br>

      
      <div style="display: inline;">
        <button class="watch bigBtn" style="margin-left: 30px">Любимая звезда</button>
      </div>

      
      <div class="box box2">
        <h3 class="aboutFilm">О персоне</h3>

        
        <div class="reqInfo" style="margin-top: 0px">
          <div class="leftInfo">Карьера</div>
          <div>{{ actor.profession }}</div>
        </div>

        
        <div class="reqInfo">
          <div class="leftInfo">Дата рождения</div>
          <div>{{ actor.birthday }}</div>
        </div>

        
        <div class="reqInfo">
          <div class="leftInfo">Место рождения</div>
          <div>{{ actor.birthplace }}</div>
        </div>

         <div class="reqInfo">
          <div class="leftInfo">Всего фильмов</div>
          <div>{{ filmsCount }}</div>
        </div>

        
        <div class="box box3">
          
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
</style>