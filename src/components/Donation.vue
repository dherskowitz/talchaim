<template>
    <div
        class="relative z-10 flex flex-col items-center justify-around px-8 py-16 text-center text-white bg-tc-default"
    >
        <div class="max-w-4xl mx-auto my-4 font-bold">
            <p>
                It is a privilege and honour to be able to assist with this vital mitzvah. There is therefore no
                obligation or expectation regarding remuneration for these services. It is however the Jewish belief
                that when a non-family member is saying Kaddish for the neshomah (soul) of the deceased, the elevation
                of the neshomah is said to be maximized when there is a 'connection' between the one saying Kaddish and
                the deceased. The Rabbis point out that a token donation is sufficient to create this connection.
            </p>
            <p class="my-4">We have provided a link below should you choose to make a donation with this in mind.</p>

            <DonateButton/>

        </div>
    </div>
</template>

<script>
import DonateButton from "~/components/DonateButton"
export default {
    name: "Donation",
    components: {
        DonateButton
    }
};
</script>
<style></style>
