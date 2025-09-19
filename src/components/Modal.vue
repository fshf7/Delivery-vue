<template>
    <div class="cart-modal-overlay" :class="{open: isOpen}" @click.self="closeModal()">
        <div class="cart-modal">
            <div class="cart-modal-header">
                <h2 class="cart-modal-header-title">Корзина</h2>
                <span class="cart-modal-header-close" @click="closeModal()">
                    <img src="../assets/images/icons/close.svg" alt="close" />
                </span>
            </div>
            <div class="cart-modal-body">
                <div class="cart-item">
                    <p class="cart-item-title">Ролл угорь стандарт</p>
                    <div class="cart-item-controls">
                        <div class="cart-item-controls-price">250 ₽</div>
                        <button class="btn btn-outline">-</button>
                        <div class="cart-item-controls-count">1</div>
                        <button class="btn btn-outline">+</button>
                    </div>
                </div>
                <div class="cart-item">
                    <p class="cart-item-title">Ролл угорь стандарт</p>
                    <div class="cart-item-controls">
                        <div class="cart-item-controls-price">250 ₽</div>
                        <button class="btn btn-outline">-</button>
                        <div class="cart-item-controls-count">1</div>
                        <button class="btn btn-outline">+</button>
                    </div>
                </div>
                <div class="cart-item">
                    <p class="cart-item-title">Ролл угорь стандарт</p>
                    <div class="cart-item-controls">
                        <div class="cart-item-controls-price">250 ₽</div>
                        <button class="btn btn-outline">-</button>
                        <div class="cart-item-controls-count">1</div>
                        <button class="btn btn-outline">+</button>
                    </div>
                </div>
            </div>
            <div class="cart-modal-footer">
                <div class="cart-modal-footer-price">1250 ₽</div>
                <div class="cart-modal-footer-controls">
                    <button class="btn btn-primary">Оформить заказ</button>
                    <button class="btn btn-outline">Отмена</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const {isOpen} = defineProps({isOpen: Boolean})
    const emit = defineEmits(['toggleModal'])
    const closeModal = () => emit('toggleModal')
</script>

<style scoped>
.cart-modal-overlay {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.40);
    align-items: center;
    justify-content: center;
}

.cart-modal-overlay.open {
    display: flex;
}

.cart-modal {
    width: 100%;
    max-width: 780px;
    padding: 40px 45px;
    border-radius: 5px;
    background: #FFF;
}

.cart-modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 48px;
}

.cart-modal-header-title {
    font-weight: 700;
    font-size: 36px;
    line-height: 100%;
    color: #000;
    margin: 0;
}

.cart-modal-header-close {
    cursor: pointer;
}

.cart-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
}

.cart-item:not(:last-child) {
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #D9D9D9;
}

.cart-item-title {
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    color: #000;
    margin: 0;
}

.cart-item-controls {
    display: flex;
    align-items: center;
}

.cart-item-controls-price {
    margin-right: 47px;
    font-weight: 700;
    font-size: 20px;
    line-height: 32px;
    color: #000;
}

.cart-item-controls button {
    border: 1px solid #40A9FF;
    color: #40A9FF;
}

.cart-item-controls-count {
    margin: 0 15px;
}

.cart-modal-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 50px;
}

.cart-modal-footer-price {
    border-radius: 5px;
    background: #262626;
    font-weight: 700;
    font-size: 20px;
    line-height: 100%;
    padding: 15px 20px;
    color: #FAFAFA;
}

.cart-modal-footer-controls {
    display: flex;
    align-items: center;
    gap: 10px;
}
</style>