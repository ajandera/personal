<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Experience</h5>
                        <p class="card-text">Start coding at age of 15, develop more than 10 own projects, working for more than 15 clients and 13 years of profesional experience.</p>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Projects</h5>
                        <p class="card-text">Delivered or worked on a more than 50 project in more than 5 countries all around the world as a developer or part of the development team.</p>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Startups</h5>
                        <p class="card-text">Co-founder of 2 existing startups. Predictive analytics tool <a href="https://storepredictor.com" target="_blank">storePredictor</a> and Artificial Inteligence optimize tool <a href="https://nixtee.com" target="_blank">Nixtee</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>  
</template>

<script lang="ts">

import {Component, Prop, Vue} from 'nuxt-property-decorator';

@Component
export default class Info extends Vue {
    @Prop() readonly language!: string;
    @Prop() readonly languages!: string[];
    $t: any;
}
</script>

<style lang="css" scoped>
 .card {
    border-color: rgb(26, 184, 68);
 }
</style>
