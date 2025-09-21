<template>
  <section class="products">
    <div class="container">
      <div class="products-wrapper" id="goods-container">
        <div 
          class="products-card" 
          v-for="good in goodArray"
          :key="good.id"
          >
          <div class="products-card-image">
            <img :src="getUrl(good.image)" alt="good_1" />
          </div>
          <div class="products-card-description">
            <div class="products-card-description-row">
              <h5 class="products-card-description-name">
                {{ good.name }}
              </h5>
            </div>
            <div class="products-card-description-row">
              <p class="products-card-description-text">
                {{ good.text }}
              </p>
            </div>
            <div class="products-card-description-row">
              <div class="products-card-description-controls">
                <button class="btn btn-primary">
                  В корзину
                  <img src="../assets/images/icons/shopping-cart.svg" alt="shopping-cart" />
                </button>
                <span class="products-card-description-controls-price">
                  {{ good.price }} ₽
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const getUrl = (name) => {
  return new URL(`../assets/images/goods/${name}`, import.meta.url)
  // return `../assets/images/rests/rest_1.jpg`
}

const goodArray = [{
  id: 0,
  name: 'Ролл угорь стандарт',
  text: 'Рис, угорь, соус унаги, кунжут, водоросли нори.',
  price: 250,
  image: 'good_1.jpg'
},
{
  id: 1,
  name: 'Калифорния лосось стандарт',
  text: 'Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.',
  price: 395,
  image: 'good_2.jpg'
},
{
  id: 2,
  name: 'Окинава стандарт',
  text: 'Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...',
  price: 250,
  image: 'good_3.jpg'
},
{
  id: 3,
  name: 'Цезарь маки хl',
  text: 'Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...',
  price: 250,
  image: 'good_4.jpg'
},
{
  id: 4,
  name: 'Ясай маки стандарт 185 г',
  text: 'Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг',
  price: 250,
  image: 'good_5.jpg'
},
{
  id: 5,
  name: 'Ролл с креветкой стандарт',
  text: 'Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы',
  price: 250,
  image: 'good_6.jpg'
}]


</script>