<template>
  <a
    :href="resultLink()"
    class="card"
    :id="movieId || serieId"
    :style="{ backgroundImage: dynamicBackgroundImage }"
  >
    <div class="dimmer">
      <ul>
        <li>
          <h3>
            <span class="highlight">Title: </span> {{ movieTitle || serieName }}
          </h3>
        </li>
        <li>
          <span class="highlight">Original Language: </span>
          <img
            v-if="hasFlag"
            class="flag"
            :src="flagImg"
            :alt="movieOriginalLanguage || serieOriginalLanguage"
          />
          <span v-else>
            {{ movieOriginalLanguage || serieOriginalLanguage }}
          </span>
        </li>
        <li>
          <span class="highlight">Original Title:</span>
          {{ movieOriginalTitle || serieOriginalName }}
        </li>
        <li>
          <span class="highlight">Rating: </span>
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
  </a>
</template>

<script>
export default {
  data() {
    return {
      flags: ["it", "en"],
      posterBaseUrl: "http://image.tmdb.org/t/p",
      posterWidth: "/w1280",
      posterBackground: {
        backgroundImage: `url(${this.dynamicBackgroundImage})`,
      },
      resultLinkUri: "https://www.google.com/search?q=",
    };
  },
  computed: {
    resultLinkQuery() {
      return this.movieTitle
        ? `${this.movieTitle.replace(" ", "+")}+${this.movieReleaseDate}+movie`
        : `${this.serieName.replace(" ", "+")}+${
            this.serieFirstairDate
          }+tv+series`;
    },
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
  methods: {
    resultLink() {
      return this.resultLinkUri + this.resultLinkQuery;
    },
  },
  props: {
    moviePoster: String,
    movieTitle: String,
    movieOriginalTitle: String,
    movieOriginalLanguage: String,
    movieVoteAverage: Number,
    movieId: Number,
    movieReleaseDate: String,
    seriePoster: String,
    serieName: String,
    serieOriginalName: String,
    serieOriginalLanguage: String,
    serieVoteAverage: Number,
    serieId: Number,
    serieFirstairDate: String,
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/_vars.scss";

.flag {
  width: 40px;
  margin-left: 5px;
}

.card {
  // height: 380px;
  // width: 300px;
  height: 230px;
  width: 380px;
  margin: 25px 10px;
  background-image: url();
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
  transition: transform 0.8s;
  border-radius: 5px;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.8s;
  }

  .dimmer {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    color: white;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    border-radius: 5px;
    padding: 5px;
    transition: background-color 0.8s;
    &:hover {
      background-color: rgba($color: #000000, $alpha: 0.8);
      transition: background-color 0.8s;
    }
    &:hover ul {
      visibility: visible;
      opacity: 1;
      transition: visibility 0s, opacity 0.8s;
    }
    ul {
      list-style-type: none;
      visibility: hidden;
      opacity: 0;
      transition: visibility 0.4s, opacity 0.8s;

      li {
        font-size: 1.5em;
        .highlight {
          color: $red;
          font-size: 1.8rem;
        }
      }
    }
  }
}
</style>
