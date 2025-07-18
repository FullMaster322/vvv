

<template>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
<nav class="navbar">
  <div class="wdt">
  <div class="logo"><i class="fas fa-film"></i>ИНОПОИСК</div>
  <div style="display: flex; width: 760px;">
  <div class="nav-item" style="width: 168px; margin-left: 24px; margin-right: 20px;">
    <i class="fas fa-play"></i>
    <span>Онлайн-кинотеатр</span>
  </div>

  <div class="nav-item" style="width: 135.77px;">
    <i class="fas fa-ticket-alt"></i>
    <span>Билеты в кино</span>
  </div>

  <div class="search-bar">
    <div class="search-bar-mega">
    <input type="text" placeholder="Фильмы, сериалы, персоны">
    <button class="fas fa-sliders-h"></button>
    <button class="fas fa-search"></button>
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
