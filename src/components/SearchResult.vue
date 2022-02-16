<template>
  <div>
    <ul>
      <li>
        <img
          v-if="moviePoster || seriePoster"
          :src="`${posterBaseUrl}${posterWidth}${moviePoster || seriePoster}`"
          :alt="moviePoster || seriePoster"
        />
        <img
          v-else
          src="https://www.altavod.com/assets/images/poster-placeholder.png"
          :alt="movieTitle || serieName"
        />
      </li>
      <li>
        <h3>Title: {{ movieTitle || serieName }}</h3>
      </li>
      <li>
        <img
          class="flag"
          v-if="hasFlag"
          :src="flagImg"
          :alt="movieOriginalLanguage || serieOriginalLanguage"
        />
        <span v-else
          >Original Language:
          {{ movieOriginalLanguage || serieOriginalLanguage }}
        </span>
      </li>
      <li>Original Title: {{ movieOriginalTitle || serieOriginalName }}</li>
      <li>
        <i
          v-for="(i, index) in voteMovie || voteSerie || 0"
          :key="index"
          class="fa-solid fa-star"
        ></i>
        <i
          v-for="(i, y) in 5 - voteMovie || 5 - voteSerie"
          :key="y + 5"
          class="fa-regular fa-star"
        ></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flags: ["it", "en"],
      posterBaseUrl: "http://image.tmdb.org/t/p",
      posterWidth: "/w500",
    };
  },
  computed: {
    voteMovie() {
      return Math.ceil(this.movieVoteAverage / 2);
    },
    voteSerie() {
      return Math.ceil(this.serieVoteAverage / 2);
    },
    flagImg() {
      return require(`../assets/img/${
        this.movieOriginalLanguage || this.serieOriginalLanguage
      }.png`);
    },
    hasFlag() {
      return this.flags.includes(
        this.movieOriginalLanguage || this.serieOriginalLanguage
      );
    },
  },
  props: {
    moviePoster: String,
    movieTitle: String,
    movieOriginalTitle: String,
    movieOriginalLanguage: String,
    movieVoteAverage: Number,
    seriePoster: String,
    serieName: String,
    serieOriginalName: String,
    serieOriginalLanguage: String,
    serieVoteAverage: Number,
  },
};
</script>

<style>
.flag {
  width: 50px;
}
</style>
