<template>
    <Layout>
        <Navbar />
        <Banner />
        <InfoSection />
        <FAQSection />
        <Contact />
        <KaddishSection />
        <Donation />
        <Memorium />
        <Footer />
    </Layout>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import Memorium from "~/components/Memorium.vue";
import KaddishSection from "~/components/KaddishSection.vue";
import InfoSection from "~/components/InfoSection.vue";
import FAQSection from "~/components/FAQSection.vue";
import Footer from "~/components/Footer.vue";
import Contact from "~/components/Contact.vue";
import Banner from "~/components/Banner.vue";
import Donation from "~/components/Donation.vue";

export default {
    metaInfo: {
        title: "Tal Chaim",
    },
    components: {
        Navbar,
        Memorium,
        KaddishSection,
        InfoSection,
        FAQSection,
        Footer,
        Banner,
        Contact,
        Donation,
    },
};
</script>

<style>
.home-links a {
    margin-right: 1rem;
}
</style>
