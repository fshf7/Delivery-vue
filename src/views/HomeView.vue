<template>
  <section class="banner">
    <div class="container">
      <div class="banner-item">
        <h2 class="banner-item-title">
          Онлайн-сервис<br />доставки еды на дом
        </h2>
        <p class="banner-item-subtitle">
          Блюда из любимого ресторана привезет курьер в перчатках, маске и
          с антисептиком
        </p>
      </div>
    </div>
  </section>

  <section class="products">
    <div class="container">
      <div class="products-header">
        <h3 class="products-header-title">Рестораны</h3>
        <input type="text" class="products-header-search" placeholder="Поиск блюд в ресторане" />
      </div>
      <div class="products-wrapper" id="rests-container">
        <router-link 
          class="products-card" 
          v-for="rest in restArray" 
          :key="rest.id"
          :to="`/rests?id=${rest.id}`" 
        >
          <div class="products-card-image">
            <img :src="getUrl(rest.image)" alt="rest_1" />
          </div>
          <div class="products-card-description">
            <div class="products-card-description-row">
              <h4 class="products-card-description-title">{{ rest.title }}</h4>
              <div class="products-card-description-bage">{{ rest.time }}</div>
            </div>
            <div class="products-card-description-row">
              <div class="products-card-description-info">
                <div class="products-card-description-raiting">
                  <img src="../assets/images/icons/star.svg" alt="star" />
                  {{ rest.raiting }}
                </div>
                <div class="products-card-description-price">
                  От {{ rest.price }} ₽
                </div>
                <div class="products-card-description-group">{{ rest.price }}</div>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
const getUrl = (name) => {
  return new URL(`../assets/images/rests/${name}`, import.meta.url)
    // return `../assets/images/rests/rest_1.jpg`

}

const restArray = [
  {
    id: 0,
    title: 'Пицца плюс',
    time: 50,
    raiting: 4.5,
    price: 900,
    type: 'Пицца',
    image: 'rest_1.jpg'
  },
  {
    id: 1,
    title: 'Тануки',
    time: 50,
    raiting: 4.5,
    price: 900,
    type: 'Пицца',
    image: 'rest_2.jpg'
  },
  {
    id: 2,
    title: 'FoodBand',
    time: 50,
    raiting: 4.5,
    price: 900,
    type: 'Пицца',
    image: 'rest_3.jpg'
  },
  {
    id: 3,
    title: 'Жадина-пицца',
    time: 50,
    raiting: 4.5,
    price: 900,
    type: 'Пицца',
    image: 'rest_4.jpg'
  },
  {
    id: 4,
    title: 'Точка еды',
    time: 50,
    raiting: 4.5,
    price: 900,
    type: 'Пицца',
    image: 'rest_5.jpg'
  },
  {
    id: 5,
    title: 'PizzaBurger',
    time: 50,
    raiting: 4.5,
    price: 900,
    type: 'Пицца',
    image: 'rest_5.jpg'
  }]
</script>
