<template>
    <Splide :options="{ rewind: true, width: widht, height: height, pagination: false }" aria-label="My Favorite Images">
        <SplideSlide v-for="(imgName, index) in gallery" :key=index>
            <img :src="require(`@/assets/${imgName}`)" alt="imgName" data-position="top center" />
        </SplideSlide>
    </Splide>
</template>

<script>
    import { Splide, SplideSlide } from '@splidejs/vue-splide';
    import '@splidejs/vue-splide/css';
    //To watch slide options visit https://splidejs.com/guides/options/#options

    export default {
        props: {
            gallery: {
                default: function () { return ['pic01.jpg', 'pic02.jpg', 'pic03.jpg']},
                type: Array
            },
            widht: {
                default: '450px',
                type: String
            },
            height: {
                default: '450px',
                type: String
            }
        },
        components: {
            Splide,
            SplideSlide
        }
    }
</script>
