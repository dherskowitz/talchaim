<template>
  <Layout>
    <Banner />
    <KaddishSection />
    <InfoSection />
    <FAQSection />
    <Footer />
  </Layout>
</template>

<script>
import Banner from "~/components/Banner.vue";
import KaddishSection from "~/components/KaddishSection.vue";
import InfoSection from "~/components/InfoSection.vue";
import FAQSection from "~/components/FAQSection.vue";
import Footer from "~/components/Footer.vue";

export default {
  metaInfo: {
    title: "Tal Chaim"
  },
  components: {
    Banner,
    KaddishSection,
    InfoSection,
    FAQSection,
    Footer
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
