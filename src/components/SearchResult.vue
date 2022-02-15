<template>
  <ul>
    <li>
      <h3>Title: {{ movieTitle || serieName }}</h3>
    </li>
    <li>
      Original Language: {{ movieOriginalLanguage || serieOriginalLanguage }}
    </li>
    <li>Original Title: {{ movieOriginalTitle || serieOriginalName }}</li>
    <li>Average Score: {{ movieVoteAverage || serieVoteAverage }}</li>
  </ul>
</template>

<script>
export default {
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

<style></style>
