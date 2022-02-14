<template>
  <div id="app">
    <input type="text" placeholder="search query" v-model="searchQuery" />
    <button id="submit-query" @click="fetchMovies">Search</button>
    <ul>
      <li v-for="(movie, index) in movies[0]" :key="movie.id || index">
        <ul>
          <li>{{ movie.title }}</li>
          <li>{{ movie.original_title }}</li>
          <li>{{ movie.original_language }}</li>
          <li>{{ movie.vote_average }}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  components: {},
  data() {
    return {
      searchQuery: "",
      api: {
        moviesEndpoint: "search/movie?",
        seriesEndpoint: "",
        api_key: "api_key=3f606812feca15a95aae9e1e4b7e1f3b",
      },
      movies: [],
    };
  },
  methods: {
    fetchMovies() {
      axios
        .get(
          `https://api.themoviedb.org/3/${this.api.moviesEndpoint}${this.api.api_key}&query=${this.searchQuery}`
        )
        .then((res) => {
          this.movies.push(res.data.results);
          // console.log(res.data.results);
          console.log(this.movies);
        });
    },
  },
};
</script>

<style lang="scss">
@import "./assets/scss/style.scss";
</style>
