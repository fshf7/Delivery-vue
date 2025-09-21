<template>
  <section class="products">
    <div class="container">
      <div class="products-wrapper" id="goods-container">
        <div 
          class="products-card" 
          v-for="good in store.goods"
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
import { store } from '@/store/index';

const getUrl = (name) => {
  return new URL(`../assets/images/goods/${name}`, import.meta.url)
  // return `../assets/images/rests/rest_1.jpg`
}
</script>