<template>
  <header>
    <h1>Boolflix</h1>
    <div>
      <input
        type="text"
        placeholder="search movies and series"
        v-model="searchQuery"
        @keyup.enter="searchItems"
      />
      <button id="submit-query" @click="searchItems">Search</button>
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

  button {
    color: $black;
    padding: 5px;
    font-size: 0.8rem;
  }
  input {
    color: $black;
    padding: 5px 10px;
    font-size: 0.8rem;
  }
}
</style>
