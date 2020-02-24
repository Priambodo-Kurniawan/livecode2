<template>
  <div class="home">
    <div class="uk-container">
      <div uk-grid>
        <MovieCard v-for="(movie, index) in movies" :movie="movie" :key="index" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MovieCard from '@/components/MovieCard.vue';
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    MovieCard
  },
  data() {
    return {
      movies: null
    }
  },
  mounted() {
    axios.get('http://localhost:3000/movies')
    .then(response => {
      this.movies = response.data;
    })
  }
}
</script>
