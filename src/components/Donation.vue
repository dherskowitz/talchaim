<template>
    <div class="donation">
        <div class="donation__content">
            <p>
                It is a privilege and honour to be able to assist with this vital mitzvah. There is therefore no
                obligation or expectation regarding remuneration for these services. It is however the Jewish belief
                that when a non-family member is saying Kaddish for the neshomah (soul) of the deceased, the elevation
                of the neshomah is said to be maximized when there is a 'connection' between the one saying Kaddish and
                the deceased. The Rabbis point out that a token donation is sufficient to create this connection.
            </p>
            <p>We have provided a link below should you choose to make a donation with this in mind.</p>
            <button class="">DONATE</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Donation",
};
</script>

<style>
.donation {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    position: relative;
    z-index: 3;
    padding: 2em 0 4em;
    background: #00007f;
    color: #fff;
    text-align: center;
}
.donation__content {
    width: 50em;
    margin: 1em auto;
    max-width: 100%;
    font-weight: 600;
    font-size: 1.2rem;
}
</style>
