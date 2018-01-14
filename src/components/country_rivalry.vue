<template>
  <div class="country-rivalry">
    <h3 class="ui header">Games Played Between {{countryA}} and {{countryB}}</h3>
    <vuetable ref="vuetable"
      :api-url="'http://localhost:4000/api/query/country_rivalry?country_a=' + countryA + '&country_b=' + countryB"
      :show-pagination="false"
      pagination-path=""
      pagination-info-template=""
      pagination-data=""
      :fields="['year', 'round', 'stadium', 'winner', 'loser', 'score', 'pk_score']"
    ></vuetable>
  </div>
</template>

<script>
import Vuetable from 'vuetable-2/src/components/Vuetable'

export default {
  name: 'CountryRivalry',
  components: {
    Vuetable
  },
  props: ['countryA', 'countryB']
}
</script>
