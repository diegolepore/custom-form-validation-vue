<template>
  <nav class="navbar w-full py-1 bg-white shadow-lg border-b border-blue-400">
    <div class="w-full flex items-center justify-end mt-0 px-6 py-2">
        <div class="order-2 md:order-3 flex flex-wrap items-center">
          <div class="auth flex items-center w-full md:w-full">
              <router-link to="/login" class="navbar__btn text-gray-800  p-2 rounded border border-gray-300 ml-4 hover:opacity-80">Log in</router-link>
              <router-link to="/signup" class="navbar__btn text-gray-800  p-2 rounded border border-gray-300 ml-4 hover:opacity-80">Sign up</router-link>
          </div>
        </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'navbar'
  }
</script>

<style lang="scss">
.navbar {
  &__btn {
    &.router-link-active {
      @apply text-white;
      @apply bg-blue-600;
    }
  }
}
</style>