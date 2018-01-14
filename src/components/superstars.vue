<template>
  <div class="superstars">
    <h3 class="ui header">Players in Multiple Cups</h3>
    <vuetable ref="vuetable"
      api-url="http://localhost:4000/api/query/superstars"
      :show-pagination="false"
      pagination-path=""
      pagination-info-template=""
      pagination-data=""
      :fields="['name', 'year', 'country', 'num_goals']"
    ></vuetable>
  </div>
</template>

<script>
import Vuetable from 'vuetable-2/src/components/Vuetable'
export default {
  name: 'Superstars',
  components: {
    Vuetable
  }
}
</script>
