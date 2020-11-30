export async function fetchData (context) {
  try {
    const data = await this.$axios.get('https://demoapi.thedenstore.com/api/service?Request=Stores&Language=en-us')
    context.commit('updateStores', data.data)
    return data.data
  } catch (error) {
    console.error(error)
  }
}
