<template>
    <section
        class="text-white flex items-center justify-around md:p-16 p-8 flex-col md:flex-row"
        style="background: #22313f;"
    >
        <div class="max-w-2xl">
            <h3 class="text-4xl my-3">In loving memory of Vital Lindsay-Bowman & Talya Solomon</h3>
            <p class="banner__content">
                Dedicated to the memory of our precious Winnie and Talya who both taught us the meaning of positivity,
                generosity, kindness, acceptance, resilience, laughter, forgiveness and a love of life. Thank you to you
                both for encouraging us to be our better selves.
            </p>
        </div>
        <g-image class="w-80 md:ml-4 mt-4 md:mt-0" src="~/images/tal.jpg" width="500" />
    </section>
</template>

<script>
export default {
    name: "Memorium",
};
</script>

<style scoped>
@media (max-width: 768px) {
    .banner {
        flex-direction: column;
        justify-content: center;
        padding: 1em;
    }
    .banner__image {
        margin: 1em 0;
    }
}
</style>
