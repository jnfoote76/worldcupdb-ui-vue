<template>
  <div class="most-wins">
    <h3 class="ui header">World Cup Winners</h3>
    <vuetable ref="vuetable"
      api-url="http://localhost:4000/api/query/most_wins"
      :show-pagination="false"
      pagination-path=""
      pagination-info-template=""
      pagination-data=""
      :fields="['country', 'num_wins']"
    ></vuetable>
  </div>
</template>

<script>
import Vuetable from 'vuetable-2/src/components/Vuetable'

export default {
  name: 'MostWins',
  components: {
    Vuetable
  }
}
</script>
