<template>
    <section
        class="px-8 py-16 bg-fixed bg-no-repeat bg-cover flex flex-col justify-around items-center relative z-10 text-white"
        style="background-image: url(/bg1.jpg)"
        id="faq"
    >
        <div class="max-w-4xl  mx-auto">
            <h2 class="text-4xl underline font-bold">Frequently Asked Questions</h2>
            <div class="mt-6" v-for="faq in faqs" :key="faq.questions">
                <h4 class="text-xl font-bold">{{ faq.question }}</h4>
                <p class="faq__answer">{{ faq.answer }}</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "FAQSection",
    data() {
        return {
            faqs: [
                {
                    question: "Can Kaddish be recited anywhere?",
                    answer:
                        "The Kaddish is to be recited only in the presence of a duly-constituted quorum which consists of 10 males (including mourners) above the age of Bar Mitzvah.",
                },
                {
                    question: "For Whom Kaddish Is Said",
                    answer:
                        "Kaddish is said for the deceased father or mother, regardless of how intimate or strained the relationship between deceased and bereaved. (11 months). For other close relatives: brother, sister, son, daughter, and wife, for the 30-day period.",
                },
                {
                    question: "Is the Kaddish Obligation Transferrable?",
                    answer:
                        "Clearly, in our day it would depend on which of the relatives feels closest to the deceased, or finds it easier to accomplish the task of reciting Kaddish, or feels religiously more impelled to do so. Indeed, a friend may wish to say it out of love or loyalty. In fact, a sharing of the responsibility may be more effective. Whoever does undertake to say the Kaddish, however, should be one who is himself orphaned from one of his parents, or he should obtain his parents' express consent.",
                },
            ],
        };
    },
};
</script>

<style scoped>
#faq::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background: rgba(34, 49, 63, 0.7);
}
</style>
