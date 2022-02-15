<template>
  <ul>
    <li>
      <h3>Title: {{ movieTitle || serieName }}</h3>
    </li>
    <li>
      <img
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
    <li>Average Score: {{ movieVoteAverage || serieVoteAverage }}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      flags: ["it", "en"],
    };
  },
  computed: {
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
    movieTitle: String,
    movieOriginalTitle: String,
    movieOriginalLanguage: String,
    movieVoteAverage: Number,
    serieName: String,
    serieOriginalName: String,
    serieOriginalLanguage: String,
    serieVoteAverage: Number,
  },
};
</script>

<style>
/* 
TODO Da rimuovere
 */
img {
  width: 50px;
}
</style>
