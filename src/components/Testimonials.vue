<template>
  <section id="testimonials" class="bg-whitewash">
    <div class="max-w-6xl p-10 mx-auto text-center md:py-20">
      <h1 class="font-Judson text-5xl font-bold text-center text-zucchini md:text-6xl">
        what our <br> customers say...
      </h1>
      <!-- Testimonials Container -->
      <div class="flex flex-col mt-24 md:flex-row md:space-x-6">
        <!-- Testimonial 1 -->
        <div class="flex flex-col items-center p-6 rounded-lg bg-whitewash shadow-md md:w-1/3">
          <img src="../assets/images/avatar-anisha.png" class="w-20 -mt-14" alt="" />
          <h2 class="mt-4 text-lg font-bold">Anisha Li</h2>
          <h3 class=""> Model </h3>
          <p class="my-8 text-sm text-darkcharcoal italic">
            "Radiance Haven is a hidden gem! The ambiance is so soothing, and the staff is incredibly skilled. I had a rejuvenating facial that left my skin glowing."
          </p>
          <div class="flex">
            <StarIcon v-for="index in 5" :key="index" />
          </div>
        </div>

        <!-- Testimonial 2 -->
        <div class="hidden flex-col items-center p-6 rounded-lg bg-whitewash shadow-md md:flex md:w-1/3">
          <img src="../assets/images/avatar-ali.png" class="w-20 -mt-14" alt="" />
          <h2 class="mt-4 text-lg font-bold">Ali Bravo</h2>
          <h3 class=""> Fashion Designer </h3>
          <p class="my-8 text-sm text-darkcharcoal italic">
            "Absolutely love Radiance Haven! The hairstylists here are true artists. They transformed my hair into a work of art, and I left feeling like a million bucks. The attention to detail is unmatched!"
          </p>
          <div class="flex">
            <StarIcon v-for="index in 5" :key="index" />
          </div>
        </div>

        <!-- Testimonial 3 -->
        <div class="hidden flex-col items-center p-6 rounded-lg bg-whitewash shadow-md md:flex md:w-1/3">
          <img src="../assets/images/avatar-shanai.png" class="w-20 -mt-14" alt="" />
          <h2 class="mt-4 text-lg font-bold">Shanai Watts</h2>
          <h3 class=""> Teen Actress </h3>
          <p class="my-8 text-sm text-darkcharcoal italic">
            "Radiance Haven is my go-to place for self-care. The massages are heavenly, and the entire team is friendly and professional. It's my little oasis in the city. Highly recommend!"
          </p>
          <div class="flex">
            <StarIcon v-for="index in 5" :key="index" />
        </div>
      </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import StarIcon from '../components/icons/Staricon.vue';
</script>

<style scoped>
#testimonials {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='24' viewBox='0 0 88 24'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='autumn' fill='%23a5c99c' fill-opacity='0.06'%3E%3Cpath d='M10 0l30 15 2 1V2.18A10 10 0 0 0 41.76 0H39.7a8 8 0 0 1 .3 2.18v10.58L14.47 0H10zm31.76 24a10 10 0 0 0-5.29-6.76L4 1 2 0v13.82a10 10 0 0 0 5.53 8.94L10 24h4.47l-6.05-3.02A8 8 0 0 1 4 13.82V3.24l31.58 15.78A8 8 0 0 1 39.7 24h2.06zM78 24l2.47-1.24A10 10 0 0 0 86 13.82V0l-2 1-32.47 16.24A10 10 0 0 0 46.24 24h2.06a8 8 0 0 1 4.12-4.98L84 3.24v10.58a8 8 0 0 1-4.42 7.16L73.53 24H78zm0-24L48 15l-2 1V2.18A10 10 0 0 1 46.24 0h2.06a8 8 0 0 0-.3 2.18v10.58L73.53 0H78z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>