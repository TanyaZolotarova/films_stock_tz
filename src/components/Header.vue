<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const searchVisible = ref(false);
    const searchQuery = ref('');
    const showDropdown = ref(false);

    const toggleSearch = () => {
      searchVisible.value = !searchVisible.value;
    };

    const logout = () => {
      localStorage.removeItem('isRegistered');
      router.replace('/');
    };

    return { router, searchVisible, searchQuery, toggleSearch, showDropdown, logout };
  }
};
</script>

<template>
  <header class="header">
    <div class="logo" @click="router.push('/home')">
      <span class="material-icons">live_tv</span>
    </div>

    <nav class="nav">
      <router-link to="/home">Home</router-link>
      <router-link to="/tv-shows">TV Shows</router-link>
      <router-link to="/movies">Movies</router-link>
      <router-link to="/new-popular">New & Popular</router-link>
      <router-link to="/my-list">My List</router-link>
    </nav>

    <div class="icons">
      <div class="search-container">
        <span class="material-icons search-icon" @click="toggleSearch">search</span>
        <input v-if="searchVisible" type="text" v-model="searchQuery" placeholder="Titles, people, genres" class="search-input" />
      </div>

      <span class="material-icons">notifications</span>

      <div class="profile" @click="showDropdown = !showDropdown">
        <span class="material-icons">account_circle</span>
        <div v-if="showDropdown" class="dropdown">
          <span class="material-icons" @click="logout">logout</span>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
}

.logo {
  font-size: 30px;
  cursor: pointer;
}

.nav {
  display: flex;
  gap: 20px;
}

.nav a {
  color: white;
  text-decoration: none;
  font-size: 16px;
}

.nav a:hover {
  color: #fffa4f;
}

.icons {
  display: flex;
  align-items: center;
  gap: 15px;
  position: relative;
}

.search-container {
  display: flex;
  align-items: center;
  position: relative;
}

.search-icon {
  cursor: pointer;
}

.search-input {
  position: absolute;
  right: 0;
  top: 100%;
  color: white;
  background: #333;
  border: 1px solid white;
  padding: 7px;
  border-radius: 5px;
  width: 200px;
}

.profile {
  position: relative;
  cursor: pointer;
}

.dropdown {
  position: absolute;
  top: 40px;
  right: 0;
  background: #333;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid white;
}

@media (max-width: 768px) {
  .header {
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }

  .nav {
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }

  .icons {
    margin-top: 10px;
  }

  .search-input {
    width: 180px;
    right: auto;
    left: 50%;
    transform: translateX(-50%);
  }
}

@media (max-width: 480px) {
  .header {
    padding: 10px;
  }

  .nav {
    flex-direction: column;
    align-items: center;
  }

  .search-input {
    width: 150px;
    right: auto;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
