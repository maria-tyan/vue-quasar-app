<template>
  <div class="stores-block">
    <div
      v-for="store in stores"
      :key="store.code"
      class="stores-block__item"
      @click="openModal(store)"
    >
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
    },
    openModal (store) {
      this.$q.dialog({
        title: store.name,
        message: `<b>Store Type: </b>${store.storeType} <br />
          <b>Email: </b>${store.storeEmail} <br />
          <b>Phone: </b>${store.storePhone} <br />
          <b>Address: </b>${store.address} <br />`,
        persistent: true,
        html: true
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.stores-block {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  min-height: calc(100vh - 50px);
  height: 100%;
  background-color: $dark;

  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    width: 200px;
    height: 200px;
    margin: 20px 10px;
    padding: 20px;
    background-color: $negative;
  }
}
</style>
