<template>
    <section id="services" class="flex flex-col items-center justify-center space-y-5 p-5 border border-0 border-t-4 border-gingko/20 md:p-10 lg:border-0 xl:flex-row xl:mx-auto xl:gap-20">
        <div class="font-Judson text-4xl font-bold text-center text-zucchini sm:text-5xl md:text-6xl md:pb-10">
            our services
        </div>
        <ul class="grid grid-cols-2 services gap-5 md:gap-10 lg:grid-cols-3">
            <li class="relative flex justify-center">
                <img src="../assets/images/service-1.jpg" alt="hair studio services">
                <span class="absolute bottom-5 text-white text-center text-md sm:text-2xl">hair studio</span>
            </li>
            <li class="relative flex justify-center">
                <img src="../assets/images/service-2.jpg" alt="nail care services">
                <span class="absolute bottom-5 text-white text-center text-md sm:text-2xl"> nail care </span>
            </li>
            <li class="relative flex justify-center">
                <img src="../assets/images/service-3.jpg" alt="massage services">
                <span class="absolute bottom-5 text-white text-center text-md sm:text-2xl"> massage </span>
            </li>
            <li class="relative flex justify-center">
                <img src="../assets/images/service-4.jpg" alt="face & skin services">
                <span class="absolute bottom-5 text-white text-center text-md sm:text-2xl"> face & skin </span>
            </li>
            <li class="relative flex justify-center">
                <img src="../assets/images/service-5.jpg" alt="signature spa day">
                <span class="absolute bottom-5 text-white text-center text-md sm:text-2xl"> signature spa </span>
            </li>
            <li class="relative flex justify-center">
                <img src="../assets/images/service-6.jpg" alt="bridal packages">
                <span class="absolute bottom-5 text-white text-center text-md sm:text-2xl"> bridal packages </span>
            </li>
        </ul>
    </section>
</template>

<script setup>
</script>

<style scoped>
.services img {
    min-width: 100px;
    max-width: 300px;
    border-radius: 0.5rem;
}
</style>