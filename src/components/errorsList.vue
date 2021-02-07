<template>
  <div class="flex justify-start mt-3 ml-4 p-1">
    <ul>
      <li v-for="(error, index) in errorsList" :key="index" class="flex items-center py-1">
        <span class="font-medium text-sm ml-3 text-red-700">
          {{ error }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'errorsList',
    props: {
      errorsList: {
        type: Array,
        default: () => ([])
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>