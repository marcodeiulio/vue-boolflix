<template>
  <div
    class="card"
    :id="movieId || serieId"
    :style="{ backgroundImage: dynamicBackgroundImage }"
  >
    <div class="dimmer">
      <ul>
        <!-- <li>
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
        </li> -->
        <li>
          <h3><strong>Title:</strong> {{ movieTitle || serieName }}</h3>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      flags: ["it", "en"],
      posterBaseUrl: "http://image.tmdb.org/t/p",
      posterWidth: "/w500",
      posterBackground: {
        backgroundImage: `url(${this.dynamicBackgroundImage})`,
      },
    };
  },
  computed: {
    dynamicBackgroundImage() {
      if (this.moviePoster || this.seriePoster) {
        return `url(${this.posterBaseUrl}${this.posterWidth}${
          this.moviePoster || this.seriePoster
        })`;
      } else
        return `url('https://www.altavod.com/assets/images/poster-placeholder.png')`;
    },
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
    movieId: Number,
    seriePoster: String,
    serieName: String,
    serieOriginalName: String,
    serieOriginalLanguage: String,
    serieVoteAverage: Number,
    serieId: Number,
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/_vars.scss";

.flag {
  width: 50px;
}

.card {
  height: 400px;
  width: 300px;
  margin-bottom: 25px;
  background-image: url();
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;

  .dimmer {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    color: white;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    font-family: Arial, sans-serif;
    &:hover {
      background-color: rgba($color: #000000, $alpha: 0.6);
    }
    &:hover ul {
      display: block;
    }
    ul {
      list-style-type: none;
      display: none;

      li {
        font-size: 1.5rem;
      }
    }
  }
}
</style>
