<style lang="scss" scoped>
</style>

<template>
    <div :id="id" class="swiper-container">
        <slot name="pr-gallery-top"></slot>
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
            <!-- Slides -->
            <div class="swiper-slide" v-for="(page, index) in pages">
                <slot :name="`pr-gallery-page-${index}`"></slot>
            </div>
        </div>
        <!-- If we need navigation buttons -->
        <slot name="pr-gallery-left">
            <div class="swiper-button-prev"></div>
        </slot>
        <slot name="pr-gallery-right">
            <div class="swiper-button-next"></div>
        </slot>
        <!-- If we need pagination -->
        <slot name="pr-gallery-bottom">
            <div class="swiper-pagination"></div>
        </slot>
    </div>
</template>

<script lang="ts">
    interface Options {
        fullscreen?: boolean;
    }
    const defaultOptions: Options = {
        fullscreen: false
    };
    const defaultSwiperOptions: any = {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    };
    import {
        Vue,
        Component,
        Watch,
        Prop
    } from "vue-property-decorator";
    import Swiper from 'swiper';
    const uuid = require('uuid/v1');
    @Component
    export default class PageGallery extends Vue {
        swiper: any;
        state: any = {
            options: {}
        };
        @Prop({default: 0}) pages: number;
        @Prop({default: 0}) index: number;
        @Prop({default: defaultOptions}) options: Options;
        @Prop({default: () => defaultSwiperOptions}) swiperOptions: any;
        id: any = uuid();

        created() {

        }

        mounted() {
            this.state.options = {...defaultOptions, ...this.options};
            const swiperOptions = {...defaultSwiperOptions, ...this.swiperOptions, initialSlide: this.index};
            this.$nextTick(() => {
                this.swiper = new Swiper(`#${this.id}`, swiperOptions);
                window.dispatchEvent(new Event("resize"));
            });
            this.bindListeners();
        }

        goToPrevious() {
            this.swiper.slidePrev();
        }

        goToNext() {
            this.swiper.slideNext();
        }

        bindListeners() {
            this.$on('previous', this.goToPrevious);
            this.$on('next', this.goToNext);
        }

        beforeDestroy() {

        }

        destroyed() {

        }
    }
</script>

<style lang="scss">

</style>