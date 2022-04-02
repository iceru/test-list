<template>
  <h4>Search Result for {{ title }}</h4>
  <div class="row row-cols-4 g-4">
    <div v-for="item in items" :key="item.imdbID" class="col">
      <div class="card">
        <img
          v-bind:src="item.Poster"
          class="card-img-top"
          v-bind:alt="item.Title"
        />
        <div class="card-body">
          <h5 class="card-title">{{ item.Title }}</h5>
          <p class="card-text">Year: {{ item.Year }}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
export default {
  name: "App",

  data() {
    return {
      items: [],
      search: 1,
      page: 1,
      title: "Batman",
      totalResults: null,
    };
  },

  watch: {
    search(val, oldval) {
      console.log(`new: ${val}, old: ${oldval}`);
    },
  },

  methods: {
    async initialData() {
      let result = await axios.get("http://www.omdbapi.com/", {
        params: this.params,
      });
      this.items = result.data.Search;
      this.totalResults = result.data.totalResults;
    },

    searchMovie() {
      this.page = 1;
      this.initialData();
    },

    getNextUser() {
      window.onscroll = () => {
        if (this.totalResults && this.items.length < this.totalResults) {
          let bottomOfWindow =
            document.documentElement.scrollTop + window.innerHeight >
            document.documentElement.offsetHeight - 100;

          if (bottomOfWindow) {
            this.page++;
            axios
              .get("http://www.omdbapi.com/", {
                params: this.params,
              })
              .then((response) => {
                this.items = [...this.items, ...response.data.Search];
              })
              .catch((error) => {
                console.log(error);
              });
          }
        }
      };
    },
  },

  computed: {
    params() {
      const params = new URLSearchParams();
      params.append("apikey", "715289b");
      params.append("s", this.title);
      params.append("page", this.page);
      return params;
    },
  },

  beforeMount() {
    this.initialData();
  },

  mounted() {
    this.getNextUser();
  },
};
</script>