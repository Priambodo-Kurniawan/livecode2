<template>
  <div>
      <div v-if="detailMovie">
        <h1>Movie Detail {{detailMovie.title}}</h1>
        <div class="uk-container">
            <div uk-grid>
                <div class="uk-width-auto">
                    <img :src="detailMovie.poster" alt="poster">
                </div>
                <div class="uk-width-expand">
                    <p class="uk-text-left">
                        <span>Year: {{detailMovie.year}}</span><br>
                        <span>Type: {{detailMovie.type}}</span><br>
                        <span>IMDB: <a :href="'https://www.imdb.com/title/'+detailMovie.imdbID">See IMDB Review</a></span>
                    </p>
                    <ul class="uk-list uk-list-striped uk-text-left">
                        <review-card v-for="(rate, index) in detailMovie.Rates" :key="index" :data="rate" />
                    </ul>
                    <!-- This is a button toggling the modal -->
                    <button class="uk-button uk-button-default uk-margin-small-right" type="button" uk-toggle="target: #modal-add-review">Open</button>
                </div>
            </div>
        </div>

        <!-- This is the modal -->
        <div id="modal-add-review" uk-modal>
            <div class="uk-modal-dialog uk-modal-body">
                <h2 class="uk-modal-title">Add Review</h2>
                <form @submit.prevent="addReview()">
                    <fieldset class="uk-fieldset">

                        <legend class="uk-legend">Legend</legend>

                        <div class="uk-margin">
                            <input class="uk-input" v-model="review.reviewer" type="text" placeholder="Reviewer">
                        </div>
                        
                        <div class="uk-margin">
                            <input class="uk-input" v-model="review.point" type="number" placeholder="Point">
                        </div>

                         <div class="uk-margin" uk-margin>
                            <button class="uk-button uk-button-default">Submit</button>
                        </div>


                    </fieldset>
                </form>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
import ReviewCard from '@/components/Review.vue';

export default {
    name: 'MovieDetail',
    data() {
        return {
            detailMovie: null,
            review: {
                reviewer: null,
                point: 0
            }
        }
    },
    components: {
        ReviewCard
    },
    mounted() {
        let idMovie = this.$route.params.id;

        this.initData();
    },
    methods: {
        initData() {
            axios.get(`http://localhost:3000/movies/${this.$route.params.id}`)
            .then(movie => {
                this.detailMovie = movie.data;
            })
        },
        addReview(e) {
            axios.post(`http://localhost:3000/rates/${this.$route.params.id}`, this.review)
            .then(response => {
                this.initData();
                UIkit.notification('sukses menambahkan review');
                UIkit.modal('#modal-add-review').hide();
            });
            
            return false
        },
        deleteReview(idReview) {
            axios.delete(`http://localhost:3000/rates/${idReview}`)
            .then(response => {
                this.initData();
                UIkit.notification('sukses mendelete review');
            });
        }
    }
}
</script>

<style>

</style>