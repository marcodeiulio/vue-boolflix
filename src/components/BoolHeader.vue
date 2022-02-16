<template>
  <header>
    <input
      type="text"
      placeholder="search query"
      v-model="searchQuery"
      @keyup.enter="searchItems"
    />
    <button id="submit-query" @click="searchItems">Search</button>
  </header>
</template>

<script>
export default {
  name: "BoolHeader",
  data() {
    return {
      searchQuery: "bat",
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
  padding: 20px 10px;

  button {
    color: $black;
  }
  input {
    color: $black;
  }
}
</style>
