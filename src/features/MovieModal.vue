<script>
import {fetchMovieDetails} from '@/api/movies';

export default {
  props: {
    id: [String, Number],
  },
  data() {
    return {
      movie: null,
    };
  },
  async mounted() {
    this.movie = await fetchMovieDetails(this.id);
  },
  methods: {
    closeModal() {
      this.$router.back();
    },
  },
};
</script>

<template>
  <div v-if='movie' class='modal-overlay' @click.self='closeModal'>
    <div class='modal'>
      <button class='close-btn' @click='closeModal'>
        <span class='material-icons'>close</span>
      </button>
      <img
          :src="`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`"
          :alt='movie.title'
      >
      <h2 class='title'>{{ movie.title }}</h2>
      <p>{{ movie.overview }}</p>
      <p class='rating'>
        <strong>Rating:</strong>
        <span class='material-icons'>star</span>
        {{ movie.vote_average }}
      </p>
      <p><strong>Release date:</strong> {{ movie.release_date }}</p>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal {
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #eee;
  color: white;
  width: 50%;
  max-width: 600px;
  text-align: center;
  position: relative;
}

.modal img {
  width: 100%;
  border-radius: 8px;
}

.title {
  color: #fffa4f;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
}

.close-btn .material-icons {
  font-size: 28px;
  color: white;
  transition: color 0.2s;
}

.close-btn:hover .material-icons {
  color: #fffa4f;
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
