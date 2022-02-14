<template>
  <ul>
    <li>
      <h3>Title: {{ movieTitle }}</h3>
    </li>
    <li>Original Language: {{ movieOriginalLanguage }}</li>
    <li>Original Title: {{ movieOriginalTitle }}</li>
    <li>Average Score: {{ movieVoteAverage }}</li>
  </ul>
</template>

<script>
export default {
  props: {
    movieTitle: String,
    movieOriginalTitle: String,
    movieOriginalLanguage: String,
    movieVoteAverage: Number,
  },
};
</script>

<style></style>
