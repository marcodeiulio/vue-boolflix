<template>
  <div id="app">
    <input type="text" placeholder="search query" v-model="searchQuery" />
    <button id="submit-query" @click="fetchMovies">Search</button>
    <SearchResult
      v-for="(movie, index) in movies[0]"
      :key="movie.id || index"
      :movie-title="movie.title"
      :movie-original-title="movie.original_title"
      :movie-original-language="movie.original_language"
      :movie-vote-average="movie.vote_average"
    />
  </div>
</template>

<script>
import axios from "axios";
import SearchResult from "./components/SearchResult.vue";

export default {
  name: "App",
  components: {
    SearchResult,
  },
  data() {
    return {
      searchQuery: "",
      api: {
        baseUri: "https://api.themoviedb.org/3",
        moviesEndpoint: "search/movie",
        seriesEndpoint: "search/tv",
        api_key: "3f606812feca15a95aae9e1e4b7e1f3b",
      },
      movies: [],
    };
  },
  methods: {
    fetchMovies() {
      this.movies = [];

      const { api_key, baseUri, moviesEndpoint } = this.api;

      const config = {
        params: {
          api_key,
          query: this.searchQuery,
        },
      };

      axios.get(`${baseUri}/${moviesEndpoint}`, config).then((res) => {
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
