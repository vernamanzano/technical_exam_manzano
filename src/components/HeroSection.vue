<template>
  <div class="flex items-center">
    <Carousel :autoplay="4000" :wrap-around="true" ref="carouselRef">
      <Slide v-for="(slide, index) in slides" :key="index">
        <div class="relative carousel__item mb-6">
          <div class="absolute bottom-2/3 w-full flex justify-between items-center px-5 md:top-1/2 md:px-10 lg:inset-y-0 ">
            <button @click="prevSlide">
              <svg class="glow-svg" xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 0 24 24"><title>arrow-left</title><path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"/></svg>
            </button>
            <button @click="nextSlide">
              <svg class="glow-svg" xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 0 24 24"><title>arrow-right</title><path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" /></svg>
            </button>
          </div>

          <img :src="slide.image" alt="Radiance Haven Salon Image" class="w-full object-cover" />
          <div class="flex flex-col-reverse lg:flex-col">
            <div :id="'text-container-' + index" class="px-2 text-zucchini font-Judson font-bold italic text-2xl md:absolute lg:text-4xl xl:text-5xl" v-html="formatText(slide.text)"></div>
            <Pagination class="z-10"/>
          </div>
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<style>

.carousel__pagination-button::after {
  background-color: #1A422B;
}

.carousel__pagination-button:hover::after, .carousel__pagination-button--active::after {
  background-color: #A5C99C;
}
.glow-svg {
  fill: rgba(26, 66, 43, .5);
  filter: drop-shadow(0 0 15px rgba(26, 66, 43, 1));
  transition: filter 0.3s ease, fill 0.3s ease;
}

.glow-svg:hover {
  filter: drop-shadow(0 0 15px rgba(165, 201, 156, 1));
  fill: #1A422B;
}

/* text containers */
#text-container-0 {
  top: 15%;
  left: 17%;
  text-align: start;
}

#text-container-1 {
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#text-container-2 {
  top: 21%;
  left: 27%;
  text-align: start;
}

#text-container-3 {
  bottom: 15%;
  right: 5%;
  text-align: end;
}

@media only screen and (max-width: 767px) {
  #text-container-0,
  #text-container-1,
  #text-container-2,
  #text-container-3 {
    top: auto;
    bottom: auto;
    left: auto;
    right: auto;
    transform: none;
    text-align: center;
    margin-top: 24px;
  }
}
</style>

<script setup>
import { ref } from 'vue';
import { Carousel, Pagination, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

// images
import salonImage1 from '../assets/images/salon-img-1.jpg';
import salonImage2 from '../assets/images/salon-img-2.jpg';
import salonImage3 from '../assets/images/salon-img-3.jpg';
import salonImage4 from '../assets/images/salon-img-4.jpg';

const carouselRef = ref(null);

const nextSlide = () => {
  carouselRef.value.next();
};

const prevSlide = () => {
  carouselRef.value.prev();
};

const formatText = (text) => {
  // Replaces newline characters with <br> tags
  return text.replace(/\n/g, '<br>');
};

const slides = [
  { image: salonImage1, text: 'Smile with the perfect look \nwe create just for you.' },
  { image: salonImage2, text: 'Beauty is an art.\nTransform at our skilled hands.' },
  { image: salonImage3, text: 'Discover confidence.\nShine inside and out at our salon.' },
  { image: salonImage4, text: 'Find timeless beauty \nat our glamorous salon.' },
  // Add more slides with image and text
];

</script>
