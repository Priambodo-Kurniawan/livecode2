<template>
    <div class="uk-width-1-3@m">
        <div class="uk-card uk-card-default">
            <div class="uk-card-media-top">
                <img :src="movie.poster" alt="">
            </div>
            <div class="uk-card-body">
                <h3 class="uk-card-title">{{movie.title}}</h3>
                <p>
                    <span>Year: {{movie.year}}</span><br>
                    <span>Type: {{movie.type}}</span><br>
                    <span>IMDB: <a :href="'https://www.imdb.com/title/'+movie.imdbID">See IMDB Review</a></span>
                </p>
            </div>
            <div class="uk-card-footer">
                <router-link :to="{'name': 'MovieDetail', params: {id: movie.id}}" class="uk-button uk-button-text">Read more</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['movie']
}
</script>