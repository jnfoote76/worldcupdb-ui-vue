<template>
  <div class="country-players">
    <h3 class="ui header">Historical Player Results for {{name}}</h3>
    <vuetable ref="vuetable"
      :api-url="'http://localhost:4000/api/query/countrys_players?name=' + name"
      :show-pagination="false"
      pagination-path=""
      pagination-info-template=""
      pagination-data=""
      :fields="['player', 'country', 'goals', 'pks']"
    ></vuetable>
  </div>
</template>

<script>
import Vuetable from 'vuetable-2/src/components/Vuetable'

export default {
  name: 'CountryPlayers',
  components: {
    Vuetable
  },
  props: ['name']
}
</script>
