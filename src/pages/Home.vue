<script>
import {fetchMovies} from '@/api/movies';
import MovieCard from '@/features/MovieCard.vue';
import Header from '@/components/Header.vue';
import FooterComponent from '@/components/Footer.vue';

export default {
  components: {MovieCard, FooterComponent, Header},
  data() {
    return {
      movies: [],
      searchQuery: ''
    };
  },
  async mounted() {
    this.movies = await fetchMovies();
  },
  computed: {
    filteredMovies() {
      if (!this.searchQuery) {
        return this.movies;
      }
      return this.movies.filter(movie =>
          movie.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  methods: {
    updateSearch(query) {
      this.searchQuery = query;
    }
  }
};
</script>

<template>
  <Header @search='updateSearch'/>
  <main class='container'>
    <div class='movies-grid'>
      <MovieCard
          v-for='movie in filteredMovies'
          :key='movie.id'
          :movie='movie'
      />
    </div>
  </main>
  <FooterComponent/>
</template>

<style scoped>
.container {
  padding: 20px;
  text-align: center;
}

.movies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
  justify-content: center;
}
</style>
