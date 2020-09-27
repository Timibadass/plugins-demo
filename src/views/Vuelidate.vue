<template>
  <form @submit.prevent="login" class="form">
    <div class="input__container">
      <label for="fullName" class="input__label">Full Name</label>
      <input
        type="text"
        name="fullName"
        id="fullName"
        v-model="form.fullName"
        class="input__field"
      />
      <p class="error__text" v-if="submitted && !$v.form.fullName.required">
        This field is required
      </p>
      <p class="error__text" v-if="submitted && !$v.form.fullName.minLength">
        Full name needs to have a minimum length of 10
      </p>
    </div>
    <div class="input__container">
      <label for="email" class="input__label">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        v-model="form.email"
        class="input__field"
      />
      <p class="error__text" v-if="submitted && !$v.form.email.required">
        This field is required
      </p>
      <p class="error__text" v-if="submitted && !$v.form.email.email">
        This email is invalid
      </p>
    </div>
    <div class="input__container">
      <label for="email" class="input__label">Age</label>
      <input
        type="number"
        name="age"
        id="age"
        v-model="form.age"
        class="input__field"
      />
      <p class="error__text" v-if="submitted && !$v.form.age.required">
        This field is required
      </p>
      <p class="error__text" v-if="submitted && !$v.form.age.minValue">
        This minimum age required is 18.
      </p>
    </div>
    <div class="input__container">
      <label for="password" class="input__label">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        v-model="form.password"
        class="input__field"
      />
      <p class="error__text" v-if="submitted && !$v.form.password.required">
        This field is required
      </p>
      <p
        class="error__text"
        v-else-if="submitted && !$v.form.password.validPassword"
      >
        Password should contain at least a lower case letter, an upper case
        letter, a number and a special character
      </p>
    </div>
    <input type="submit" value="LOGIN" class="input__button" />
    <p class="confirmation__text" v-if="submitted">Form clicked</p>
  </form>
</template>

<script>
  import {
    required,
    minLength,
    minValue,
    email,
  } from "vuelidate/lib/validators";
  export default {
    data() {
      return {
        submitted: false,
        form: {
          email: null,
          fullName: null,
          age: null,
          password: null,
        },
      };
    },
    validations: {
      form: {
        email: {
          email,
          required,
        },
        fullName: {
          minLength: minLength(10),
          required,
        },
        age: {
          required,
          minValue: minValue(18),
        },
        password: {
          required,
          validPassword(password) {
            let regExp = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z]+)[a-zA-Z0-9!@#$%^&*]{6,}$/;
            return regExp.test(password);
          },
        },
      },
    },
    methods: {
      login() {
        this.submitted = true;
        let invalidForm = this.$v.form.$invalid;
        let form = this.form;
        //check that every field in this form has been entered correctly.
        if (!invalidForm) {
          // process the form data
          this.$store.dispatch("getUser", form);
        }
      },
    },
  };
</script>

<style>
  .form {
    width: 350px;
    margin: auto;
  }

  .input__container {
    width: 100%;
    max-width: 330px;
    margin: 20px auto;
  }

  .input__label {
    display: block;
    width: 100%;
    text-align: left;
    margin-bottom: 5px;
  }

  .input__field {
    width: 100%;
    height: 40px;
    padding: 0;
    box-sizing: border-box;
    border: 1px solid #c4c4c4;
    border-radius: 3px;
    padding-left: 10px;
  }

  .input__button {
    width: 100%;
    max-width: 330px;
    border: 1px solid #c4c4c4;
    border-radius: 3px;
    background-color: limegreen;
    color: #fff;
    height: 40px;
    margin-top: 20px;
    cursor: pointer;
  }

  .error__text {
    text-align: left;
    color: red;
  }
</style>
