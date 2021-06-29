<template>
  <section class="faq" id="faq">
    <span>
      <h2 class="faq__title">Frequently Asked Questions</h2>
      <div class="faq__qa" v-for="faq in faqs" :key="faq.questions">
        <h4 class="faq__question">{{faq.question}}</h4>
        <p class="faq__answer">{{faq.answer}}</p>
      </div>
    </span>
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
            "The Kaddish is to be recited only in the presence of a duly-constituted quorum which consists of 10 males (including mourners) above the age of Bar Mitzvah."
        },
        {
          question: "For Whom Kaddish Is Said",
          answer:
            "Kaddish is said for the deceased father or mother, regardless of how intimate or strained the relationship between deceased and bereaved. (11 months). For other close relatives: brother, sister, son, daughter, and wife, for the 30-day period."
        },
        {
          question: "Is the Kaddish Obligation Transferrable?",
          answer:
            "Clearly, in our day it would depend on which of the relatives feels closest to the deceased, or finds it easier to accomplish the task of reciting Kaddish, or feels religiously more impelled to do so. Indeed, a friend may wish to say it out of love or loyalty. In fact, a sharing of the responsibility may be more effective. Whoever does undertake to say the Kaddish, however, should be one who is himself orphaned from one of his parents, or he should obtain his parents' express consent."
        }
      ]
    };
  }
};
</script>

<style scoped>
.faq {
  padding: 2em 0 4em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: relative;
  background-image: url(/bg1.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 75vh;
  z-index: 1;
  color: #fff;
  /* text-shadow: 1px 0px #fff; */
}
.faq::before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background: rgba(34, 49, 63, 0.7);
}
.faq__title {
  font-size: 2.5rem;
  text-decoration: underline;
  color: #fff;
}
.faq__qa {
  max-width: 50em;
}
.faq__question {
  color: #e4e9ed;
  font-size: 1.5rem;
  font-weight: 900;
  /* text-shadow: 0px 1px #ccc;; */
}
.faq__answer {
  font-size: 1.25rem;
}
@media (max-width: 768px) {
  .faq {
    padding: 0em 1em 1em;
  }
  .faq__title {
    font-size: 2rem;
  }
  .faq__question {
    font-size: 1rem;
    margin: 0;
  }
  .faq__answer {
    font-size: 1rem;
    margin: 1rem 0 1.75rem;
  }
}
</style>
