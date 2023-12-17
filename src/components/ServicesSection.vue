<template>
    <div id="services" class="flex flex-col items-center justify-center mb-5 mt-0 pb-0 pt-10 border border-0 border-t-4 border-gingko/20 md:border-0 xl:max-w-7xl xl:flex-row xl:mx-auto xl:gap-20 xl:my-20 xl:pb-16 xl:pt-0 xl:px-10">
        <div class="font-Judson text-5xl font-bold text-center text-zucchini md:text-6xl xl:text-start">
            our services
        </div>
        <ul class="grid grid-cols-2 p-10 gap-5 services md:grid-cols-3 xl:p-0">
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
                <span class="absolute bottom-5 text-white text-center text-md sm:text-2xl"> signature spa day </span>
            </li>
            <li class="relative flex justify-center">
                <img src="../assets/images/service-6.jpg" alt="bridal packages">
                <span class="absolute bottom-5 text-white text-center text-md sm:text-2xl"> bridal packages </span>
            </li>
        </ul>
    </div>
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