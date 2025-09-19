<template>
    <footer class="footer">
        <div class="container">
            <div class="footer-box">
                <router-link to="/" class="footer-logo logo">
                    <img src="../assets/images/logo.png" alt="logo" />
                </router-link>
                <div class="footer-nav">
                    <ul>
                        <li><a href="./goods.html">Ресторанам</a></li>
                        <li><a href="./goods.html">Курьерам</a></li>
                        <li><a href="./goods.html">Пресс-центр</a></li>
                        <li><a href="./goods.html">Контакты</a></li>
                    </ul>
                </div>
                <div class="footer-social">
                    <img src="../assets/images/social/IG.png" alt="IG" />
                    <img src="../assets/images/social/FB.png" alt="FB" />
                    <img src="../assets/images/social/VK.png" alt="VK" />
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer {
    min-height: 156px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 60px 0;
}

.footer-box {
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 36px;
}

.footer-nav {
    flex-grow: 1;
}

.footer-nav ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    list-style-type: none;
    padding: 0;
    margin: 0;
    gap: 15px;
}

.footer-nav ul li a {
    text-decoration: none;
    color: #595959;
    font-size: 18px;
    font-weight: 400;
}

.footer-social {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;
}
</style>