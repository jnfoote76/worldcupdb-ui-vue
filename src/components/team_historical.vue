<template>
  <div class="team-historical">
    <h3 class="ui header">{{name}}'s Cumulative Statistics</h3>
    <vuetable ref="vuetable"
      :api-url="'http://localhost:4000/api/query/team_historical?name=' + name"
      :show-pagination="false"
      pagination-path=""
      pagination-info-template=""
      pagination-data=""
      :fields="['country', 'num_cups', 'total_wins', 'total_ties', 'total_losses', 'total_goals', 'total_points']"
    ></vuetable>
  </div>
</template>

<script>
import Vuetable from 'vuetable-2/src/components/Vuetable'

export default {
  name: 'TeamHistorical',
  components: {
    Vuetable
  },
  props: ['name']
}
</script>
