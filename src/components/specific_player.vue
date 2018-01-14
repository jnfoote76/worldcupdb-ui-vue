<template>
  <div class="specific-player">
    <vuetable ref="vuetable"
      :api-url="'http://localhost:4000/api/query/specific_player?name=' + name"
      :show-pagination="false"
      pagination-path=""
      pagination-info-template=""
      pagination-data=""
      :fields="['year', 'age', 'country', 'position', 'num_goals']"
    ></vuetable>
  </div>
</template>

<script>
import Vuetable from 'vuetable-2/src/components/Vuetable'

export default {
  name: 'SpecificPlayer',
  components: {
    Vuetable
  },
  props: ['name']
}
</script>
