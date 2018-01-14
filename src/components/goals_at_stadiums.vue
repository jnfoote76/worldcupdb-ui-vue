<template>
  <div class="goals-at-stadiums">
    <h3 class="ui header">Statistics on World Cup Stadiums</h3>
    <vuetable ref="vuetable"
      api-url="http://localhost:4000/api/query/goals_at_stadium"
      :show-pagination="false"
      pagination-path=""
      pagination-info-template=""
      pagination-data=""
      :fields="['stadium', 'city', 'country', 'tot_goals', 'goals_per_game']"
    ></vuetable>
  </div>
</template>

<script>
import Vuetable from 'vuetable-2/src/components/Vuetable'

export default {
  name: 'GoalsAtStadiums',
  components: {
    Vuetable
  }
}
</script>
