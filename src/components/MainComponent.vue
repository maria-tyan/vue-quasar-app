<template>
  <div class="stores-block">
    <div
      v-for="store in allStores"
      :key="store.code"
      class="stores-block__item"
      @click="openModal(store)"
    >
      {{ store.name }}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  async mounted () {
    await this.fetchData()
  },
  computed: {
    ...mapGetters({
      allStores: 'stores/allStores'
    })
  },
  methods: {
    ...mapActions({
      fetchData: 'stores/fetchData'
    }),
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
  height: 100%;
  min-height: calc(100vh - 50px);
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
