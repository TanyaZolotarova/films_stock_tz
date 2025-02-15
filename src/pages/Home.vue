<script>
import { fetchMovies } from '@/api/movies';
import MovieCard from '@/features/MovieCard.vue';
import Header from '@/components/Header.vue';
import FooterComponent from '@/components/Footer.vue';

export default {
  components: { MovieCard, FooterComponent, Header },
  data() {
    return {
      movies: [],
    };
  },
  async mounted() {
    this.movies = await fetchMovies();
  }
};
</script>

<template>
  <Header/>
  <main class='container'>
    <div class='movies-grid'>
      <MovieCard
          v-for='movie in movies'
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
