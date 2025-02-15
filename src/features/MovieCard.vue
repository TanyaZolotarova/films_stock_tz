<script>
export default {
  props: {
    movie: Object,
    required: true,
  },
  methods: {
    openMovie() {
      this.$router.push(`/movie/${this.movie.id}`);
    },
  },
};
</script>

<template>
  <div class='movie-card' @click='openMovie'>
    <img
        :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
        :alt='movie.title'
        loading='lazy'
    >
    <h3 class='title'>{{ movie.title }}</h3>
    <p class='rating'>
      <span class='material-icons'>star</span>
      {{ movie.vote_average }}
    </p>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

.movie-card {
  border-radius: 10px;
  border: 1px solid #eee;
  overflow: hidden;
  text-align: center;
  padding: 10px;
  color: white;
  transition: transform 0.2s;
  cursor: pointer;
}

.movie-card:hover {
  transform: scale(1.05);
}

.movie-card .title {
  color: #fffa4f;
}

.movie-card img {
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
}

.rating {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-size: 18px;
}

.rating .material-icons {
  color: #b8962e;
  font-size: 20px;
}
</style>
