<template>
    <div class="banner">
        <div class="banner__content">
            <h1 class="banner_title">Tal Chaim Kaddish Services</h1>
            <p class="banner_text">Tal Chaim provides traditional Jewish Kaddish services in memory of your departed loved ones.</p>
            <p class="banner_text">Kaddish transforms your sense of loss and helplessness into ongoing connection and meaning. </p>
            <a href="#faq" id="learn_more_btn">Learn More</a>
        </div>
    </div>
</template>

<script>
export default {
  name: "Banner",
};
</script>

<style scoped>
.banner {
    padding: 2em 0 4em;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    columns: #fff;
    background-image: url(/bg-2.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    z-index: 1;
    background-position: center bottom;
}
.banner::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(34, 49, 63, 0.5);
    z-index: -1;
}
.banner__content {
    max-width: 50em;
}
.banner_title {
    font-size: 3rem;
    text-decoration: underline;
    color: #00007f;
}
.banner_text {
    font-size: 1.5rem;
    color: #fff;
    font-weight: 600;
}

#learn_more_btn {
    margin: 0 auto;
    display: block;
    width: 10rem;
    text-align: center;
    text-decoration: none;
    margin-top: 4rem;
    background: #22313f;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    font-weight: 700;
    color: #fff;
    cursor: pointer;
}
#learn_more_btn:hover {
    background: #171f27;
}

@media (max-width: 768px) {
  .banner {
    padding: 0em 1em 1em;
  }
}
</style>
