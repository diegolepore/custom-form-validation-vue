<template>
  <div class="my-10">
    <!-- Auth Card Container -->
    <div class="grid place-items-center mx-2">
      <!-- Auth Card -->
      <div
        class="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 px-6 py-10 sm:px-10 sm:py-6 bg-white rounded-lg shadow-md lg:shadow-lg"
      >
        <!-- Card Title -->
        <h2
          class="text-center font-semibold text-3xl lg:text-4xl text-gray-800"
        >
          Login
        </h2>

        <form @submit.prevent="submitForm" class="mt-10" novalidate="true">
          <!-- Email Input -->
          <label
            for="email"
            class="block text-xs mt-2 font-semibold text-gray-600 uppercase"
            >Email</label
          >
          <input
            id="email"
            v-model="formData.email"
            type="email"
            name="email"
            placeholder="Email address"
            class="block w-full py-3 px-1 mt-2 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200"
          />

          <!-- Password Input -->
          <label
            for="password"
            class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >Password</label
          >
          <input
            id="password"
            v-model="formData.password"
            type="password"
            name="password"
            placeholder="Password"
            class="block w-full py-3 px-1 mt-2 mb-4 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200"
          />

          <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-50">
            Login
          </button>

          <!-- Another Auth Routes -->
          <div class="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center justify-center">
            <router-link to="/signup" class="flex-2 underline">
              Don't have an Account? Register!
            </router-link>
          </div>
        </form>

       <errorsList :errors-list="errorsList" />

      </div>
    </div>
  </div>
</template>

<script>
import validationFormMixin from '../mixins/validationFormMixin'
import errorsList from '../components/errorsList'

export default {
  name: "Login",
  mixins: [validationFormMixin],
  components: {
    errorsList
  },
  data() {
    return {
      formData: {
        email: null,
        password: null
      }
    }
  },
  methods: {
    submitForm() {
      if(this.validateForm()) {
        alert('Form submit successful')
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>