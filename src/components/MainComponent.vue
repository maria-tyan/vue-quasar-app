<template>
  <div>
    <div class="" v-for="store in stores" :key="store.code">
      {{ store.name }}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      stores: []
    }
  },
  async created () {
    await this.fetchData()
  },
  methods: {
    async fetchData () {
      try {
        const data = await this.$axios.get('https://demoapi.thedenstore.com/api/service?Request=Stores&Language=en-us')
        this.stores = data.data
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
