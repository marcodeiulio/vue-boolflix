<template>
  <div id="app">
    <BoolHeader @searchItems="searchItems" />
    <!--     <input
      type="text"
      placeholder="search query"
      v-model="searchQuery"
      @keyup.enter="searchItems"
    />
    <button id="submit-query" @click="searchItems">Search</button> -->
    <h2 v-if="fetchedMoviesFlag">Movies</h2>
    <section id="movies-results">
      <div class="wrapper">
        <SearchResult
          v-for="(movie, index) in movies[0]"
          :key="movie.id || index"
          :movie-poster="movie.backdrop_path"
          :movie-title="movie.title"
          :movie-original-title="movie.original_title"
          :movie-original-language="movie.original_language"
          :movie-vote-average="movie.vote_average"
          :movie-id="movie.id"
          :movie-release-date="movie.release_date"
          :movie-overview="movie.overview"
        />
      </div>
    </section>
    <h2 v-if="fetchedShowsFlag">TV Shows</h2>
    <section id="series-results">
      <div class="wrapper">
        <SearchResult
          v-for="(serie, index) in series[0]"
          :key="serie.id || index"
          :serie-poster="serie.backdrop_path"
          :serie-name="serie.name"
          :serie-original-name="serie.original_name"
          :serie-original-language="serie.original_language"
          :serie-vote-average="serie.vote_average"
          :serie-id="serie.id"
          :serie-firstair-date="serie.first_air_date"
          :serie-overview="serie.overview"
        />
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import SearchResult from "./components/SearchResult.vue";
import BoolHeader from "./components/BoolHeader.vue";

export default {
  name: "App",
  components: {
    SearchResult,
    BoolHeader,
  },
  data() {
    return {
      api: {
        baseUri: "https://api.themoviedb.org/3",
        moviesEndpoint: "search/movie",
        seriesEndpoint: "search/tv",
        api_key: "3f606812feca15a95aae9e1e4b7e1f3b",
      },
      movies: [],
      series: [],
      fetchedMoviesFlag: 0,
      fetchedShowsFlag: 0,
    };
  },
  computed: {
    movieFlag() {
      return this.movies.length > 0;
    },
  },
  methods: {
    searchItems(query) {
      this.movies = [];
      this.series = [];
      this.fetchedMoviesFlag = 0;
      this.fetchedShowsFlag = 0;

      if (!query) return;

      const { api_key, baseUri, moviesEndpoint, seriesEndpoint } = this.api;

      const config = {
        params: {
          api_key,
          query: query,
        },
      };

      this.fetchAPI(baseUri, config, moviesEndpoint, this.movies);
      this.fetchAPI(baseUri, config, seriesEndpoint, this.series);
      this.fetchedMoviesFlag = 1;
      this.fetchedShowsFlag = 1;
    },
    fetchAPI(baseUri, config, endpoint, target /* ratings */) {
      axios.get(`${baseUri}/${endpoint}`, config).then((res) => {
        target.push(res.data.results);
        console.log(target);
      });
    },
  },
};
</script>

<style lang="scss">
@import "./assets/scss/style.scss";
#app {
  color: white;
  h2 {
    font-size: 2.5rem;
    margin-left: 15px;
  }
}

#movies-results,
#series-results {
  padding-left: 20px;
  display: flex;
  overflow: auto;
  .wrapper {
    display: flex;
  }
}
</style>
