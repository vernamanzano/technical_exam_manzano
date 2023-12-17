<template>
    <nav class="hidden z-10 sticky top-0 shadow-md px-8 items-center justify-between bg-whitewash font-Mulish lg:flex">
        <div class="w-1/3 italic font-Judson xl:text-xl">
            800 Hope Street, <br>
            Providence, RI 
        </div>
        <div class="w-1/3">
            <div>
                <a href="/"><img class="w-80 mx-auto" src="../assets/images/radiance-haven.png" alt="Radiance Haven Logo"></a>
            </div>
            <ul class="mx-auto flex items-center justify-center font-light my-4">
                <li><a href="#home" class="border-b-2 border-transparent hover:text-zucchini hover:border-zucchini sm:mx-6">HOME</a></li>
                <li><a href="#services" class="border-b-2 border-transparent hover:text-zucchini hover:border-zucchini sm:mx-6">SERVICES</a></li>
                <li><a href="#about" class="border-b-2 border-transparent hover:text-zucchini hover:border-zucchini sm:mx-6">ABOUT</a></li>
                <li><a href="#contact" class="border-b-2 border-transparent hover:text-zucchini hover:border-zucchini sm:mx-6">CONTACT</a></li>
            </ul>
        </div>
        <div class="w-1/3 flex items-center justify-end gap-2">
            <button class="flex items-center gap-2 font-bold border-b-2 border-transparent hover:text-zucchini hover:border-zucchini">
                <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 0 24 24"><title>phone</title><path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" fill="#323232" /></svg>
                <span class="xl:text-xl">401-331-1115</span>
            </button>
        </div>
    </nav>

    <nav class="z-10 sticky top-0 bg-whitewash shadow-md px-5 py-4 mx-auto lg:hidden lg:justify-between lg:items-center">
        <div class="flex items-center justify-center relative">
            <a href="/"><img class="w-56 sm:w-80 mx-auto" src="../assets/images/radiance-haven.png" alt="Radiance Haven Logo"></a>
            <!-- Mobile menu button -->
            <div @click="toggleNav" class="absolute right-0 top-1/3 lg:hidden">
                <button type="button" class="text-darkcharcoal hover:text-gray-400 focus:outline-none focus:text-gray-400">
                    <svg viewBox="0 0 24 24" class="w-6 h-6">
                    <path
                        fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" fill="#1A422B">
                    </path>
                    </svg>
                </button>
            </div>
        </div>
        <ul :class="showMenu ? 'flex' : 'hidden'" class="flex-col mt-8 space-y-2 text-center font-light text-xl lg:flex lg:space-y-0 lg:flex-row lg:items-center lg:space-x-10 lg:mt-0">
            <li><a @click="toggleNav" href="#home" class="border-b-2 border-transparent hover:text-zucchini hover:border-zucchini sm:mx-6">HOME</a></li>
            <li><a @click="toggleNav" href="#services" class="border-b-2 border-transparent hover:text-zucchini hover:border-zucchini sm:mx-6">SERVICES</a></li>
            <li><a @click="toggleNav" href="#about" class="border-b-2 border-transparent hover:text-zucchini hover:border-zucchini sm:mx-6">ABOUT</a></li>
            <li><a @click="toggleNav" href="#contact" class="border-b-2 border-transparent hover:text-zucchini hover:border-zucchini sm:mx-6">CONTACT</a></li>
        </ul>
    </nav>
</template>
<script setup>
import { ref, getCurrentInstance } from 'vue';

let showMenu = ref(false);

const toggleNav = () => {
  showMenu.value = !showMenu.value;
};

</script>


