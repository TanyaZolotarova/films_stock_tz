<script>
export default {
  data() {
    return {
      inputs: {
        name: '',
        email: '',
        password: '',
      },
      passwordVisible: false,
      errors: {
        name: '',
        email: '',
        password: ''
      }
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible;
    },
    validateName() {
      const namePattern = /^[A-ZА-Я][a-zA-ZА-Яа-я]{1,8}$/;
      if (this.inputs.name.length === 0) {
        this.errors.name = '';
        return;
      }this.errors.name = namePattern.test(this.inputs.name) ? '' : 'Name must begin with a capital letter, contain 2 to 9 letters';
    },
    validateEmail() {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (this.inputs.email.length === 0) {
        this.errors.email = '';
        return;
      }this.errors.email = emailPattern.test(this.inputs.email) ? '' : 'Enter a valid email address';
    },
    validatePassword() {
      const passwordPattern = /^(?=.*\d).{5,}$/;
      if (this.inputs.password.length === 0) {
        this.errors.password = '';
        return;
      }this.errors.password = passwordPattern.test(this.inputs.password) ? '' : 'The password must contain a minimum of 5 characters and at least one digit';
    },
    submitForm() {
      this.validateName();
      this.validateEmail();
      this.validatePassword();

      if (!this.errors.name && !this.errors.email && !this.errors.password) {
        console.log('Registration successful!');
        this.inputs = {
          name: '',
          email: '',
          password: '',
        }
        this.$router.push('/');
      }
    }
  }
};
</script>

<template>
  <form @submit.prevent='submitForm' class='form'>
    <h1 class='title'>Register</h1>

    <label class='label'>Name</label>
    <div class='input-container'>
      <span class='material-icons icon'>person</span>
      <input
          v-model='inputs.name'
          type='text'
          placeholder='Enter your name'
          class='input'
          @input='validateName'
          required
      />
    </div>
    <span v-if='errors.name' class='error'>{{ errors.name }}</span>

    <label class='label'>Email</label>
    <div class='input-container'>
      <span class='material-icons icon'>email</span>
      <input
          v-model='inputs.email'
          type='email'
          placeholder='Enter your email'
          class='input'
          @input='validateEmail'
          required
      />
    </div>
    <span v-if='errors.email' class='error'>{{ errors.email }}</span>

    <label class='label'>Password</label>
    <div class='input-container'>
      <span @click='togglePasswordVisibility' class='material-icons icon'>
        {{ passwordVisible ? 'visibility' : 'visibility_off' }}
      </span>
      <input
          v-model='inputs.password'
          :type="passwordVisible ? 'text' : 'password'"
          placeholder='Enter your password'
          class='input'
          @input='validatePassword'
          required
      />
    </div>
    <span v-if='errors.password' class='error'>{{ errors.password }}</span>

    <button type='submit' class='button'>Register</button>
  </form>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

.form {
  padding: 2rem;
  border-radius: 10px;
  border: 1px solid #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  text-align: left;
  color: white;
}

.title {
  text-align: center;
  font-size: 28px;
  color: #fffa4f;
}

.label {
  font-size: 14px;
  font-weight: bold;
  color: #bbb;
}

.input-container {
  display: flex;
  align-items: center;
  background: #333;
  border-radius: 5px;
  padding: 10px;
}

.icon {
  margin-right: 10px;
  color: #bbb;
  cursor: pointer;
}

.input {
  border: none;
  background: none;
  color: white;
  flex: 1;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.error {
  color: red;
  font-size: 12px;
  animation: errorFadeIn 0.5s ease-in-out;
}

@keyframes errorFadeIn {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.button {
  background: #b8962e;
  color: black;
  padding: 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s;
}

.button:hover {
  background: #fffa4f;
}
</style>
