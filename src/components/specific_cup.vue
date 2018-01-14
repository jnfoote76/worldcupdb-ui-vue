<template>
  <div class="specific-cup">
    <h3 class="ui header">{{year}} Final Standings</h3>
    <vuetable ref="vuetable"
      :api-url="'http://localhost:4000/api/query/specific_cup_standings?year=' + year"
      :show-pagination="false"
      pagination-path=""
      pagination-info-template=""
      pagination-data=""
      :fields="['country', 'result']"
    ></vuetable>

    <h3 class="ui header">{{year}} Matches</h3>
    <vuetable ref="vuetable"
      :api-url="'http://localhost:4000/api/query/specific_cup_games?year=' + year"
      :show-pagination="false"
      pagination-path=""
      pagination-info-template=""
      pagination-data=""
      :fields="['game_num', 'round', 'date', 'time', 'group', 'stadium', 'winner', 'loser', 'w_goals', 'l_goals', 'pk_score']"
    ></vuetable>
  </div>
</template>

<script>
import Vuetable from 'vuetable-2/src/components/Vuetable'

export default {
  name: 'SpecificCup',
  components: {
    Vuetable
  },
  props: ['year']
}
</script>
