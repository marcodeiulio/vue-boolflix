<template>
  <header>
    <h1>Boolflix</h1>
    <div id="search-module">
      <input
        type="text"
        placeholder="search movies and series"
        v-model="searchQuery"
        @keyup.enter="searchItems"
      />
      <span class="search-icon"
        ><i class="fa-solid fa-search" @click="searchItems"></i
      ></span>
    </div>
  </header>
</template>

<script>
export default {
  name: "BoolHeader",
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    searchItems() {
      this.$emit("searchItems", this.searchQuery);
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/_vars.scss";
header {
  background-color: $black;
  padding: 20px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: $red;
  }

  #search-module {
    display: flex;
    align-items: center;

    input {
      color: $black;
      padding: 5px 10px;
      font-size: 1rem;
    }

    .search-icon {
      cursor: pointer;
      padding: 0 10px;

      .fa-search {
        font-size: 30px;
      }
    }
  }
}
</style>
