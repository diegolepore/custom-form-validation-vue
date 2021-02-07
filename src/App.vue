<template>
  <div id="app">
    <navbar />
    <div class="flex flex-col h-screen bg-gray-100">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import navbar from './components/navbar'

  export default {
    name: 'App',
    components: {
      navbar
    }
  }
</script>