<template>
    <div
        class="p-16 flex flex-col justify-around items-center bg-cover bg-no-repeat relative z-10 banner"
        style="background-image: url(/bg-2.jpg);background-position:center bottom;"
    >
        <div class="max-w-4xl text-center">
            <h1 class="text-5xl underline text-tc-default font-bold mb-8">Tal Chaim Kaddish Services</h1>
            <p class="text-2xl text-white mb-4">
                Tal Chaim provides traditional Jewish Kaddish services in memory of your departed loved ones.
            </p>
            <p class="text-2xl text-white">
                Kaddish transforms your sense of loss and helplessness into ongoing connection and meaning.
            </p>
            <a
                href="#faq"
                id=""
                class="bg-gray-900 hover:bg-gray-700 px-4 py-2 inline-block text-white font-semibold mt-4"
                >Learn More</a
            >
        </div>
    </div>
</template>

<script>
export default {
    name: "Banner",
};
</script>

<style scoped>
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
</style>
