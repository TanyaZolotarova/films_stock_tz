<script>
import {useRouter} from 'vue-router';

export default {
  data() {
    return {
      searchVisible: false,
      searchQuery: '',
      showDropdown: false,
      menuActive: false
    };
  },
  computed: {
    router() {
      return useRouter();
    }
  },
  methods: {
    toggleSearch() {
      this.searchVisible = !this.searchVisible;
      if (this.searchVisible) {
          document.addEventListener('click', this.handleOutsideClick);
      } else {
        document.removeEventListener('click', this.handleOutsideClick);
      }
    },
    handleOutsideClick(event) {
      if (!this.$refs.searchContainer.contains(event.target)) {
        this.searchVisible = false;
        document.removeEventListener('click', this.handleOutsideClick);
      }
    },
    toggleMenu() {
      this.menuActive = !this.menuActive;
    },
    logout() {
      localStorage.removeItem('isRegistered');
      this.router.replace('/');
    }
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleOutsideClick);
  }
};
</script>

<template>
  <header class='header'>
    <div class='logo' @click="router.push('/home')">
      <span class='material-icons'>live_tv</span>
    </div>

    <nav class='nav' :class="{'active': menuActive}">
      <router-link to='/home'>Home</router-link>
      <router-link to='/tv-shows'>TV Shows</router-link>
      <router-link to='/movies'>Movies</router-link>
      <router-link to='/new-popular'>New & Popular</router-link>
      <router-link to='/my-list'>My List</router-link>
    </nav>

    <div class='icons'>
      <div class='search-container' ref='searchContainer'>
        <span class='material-icons search-icon' @click='toggleSearch'>search</span>
        <transition name='fade'>
          <input
              v-if='searchVisible'
              type='text'
              v-model='searchQuery'
              @input="$emit('search', searchQuery.trim())"
              placeholder='movies search'
              class='search-input'
          />
        </transition>
      </div>

      <span class='material-icons'>notifications</span>

      <div class='profile' @click='showDropdown = !showDropdown'>
        <span class='material-icons'>account_circle</span>
        <div v-if='showDropdown' class='dropdown'>
          <span class='material-icons' @click='logout'>logout</span>
        </div>
      </div>
      <span class='material-icons burger-icon' @click='toggleMenu'>menu</span>
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
  position: relative;
  display: flex;
  align-items: center;
}

.search-container .search-icon {
  cursor: pointer;
}

.search-input {
  height: 30px;
  width: 200px;
  border: 1px solid white;
  background: black;
  color: white;
  padding: 5px 10px;
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  opacity: 1;
  transform: scale(1);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

.profile {
  position: relative;
  cursor: pointer;
}

.dropdown {
  position: absolute;
  top: 40px;
  right: 0;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid white;
  background: black;
  color: white;
}

.burger-icon {
  display: none;
  cursor: pointer;
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
  }

  .burger-icon {
    display: block;
  }

  .nav {
    display: none;
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
  }

  .nav.active {
    display: flex;
  }

  .nav a {
    width: 100%;
    text-align: center;
  }

  .nav a:hover {
    color: #fffa4f;
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
  }
}
</style>
