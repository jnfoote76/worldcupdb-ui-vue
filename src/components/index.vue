<template>
  <div class="index">
    <img src="../assets/soccer_ball.jpg" />
    <h1>Mondial DB: A World Cup Database</h1>
    <form>
      <select v-model="selected">
        <option v-for="(option, index) in queryOptions" :value="index" :disabled="option.disabled">
          {{ option.query }}
        </option>
      </select>
      <br />

      <div v-for="prompt in queryOptions[selected].prompts">
        {{ prompts[prompt] }} <input type="text" v-model="selectedInputs[prompt]" />
      </div>

      <div v-if="queryOptions[selected].prompts">
        <router-link tag="button" :to="{ name: 'Query', params: { queryIndex: selected, year: selectedInputs['year'], player: selectedInputs['player'], country: selectedInputs['country'], countryA: selectedInputs['countryA'], countryB: selectedInputs['player'] }}">
          Run Query
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
const prompts = {
  year: 'Enter a valid World Cup year (eg. 1998):',
  player: 'Enter a player\'s name (eg. Cristiano Ronaldo):',
  country: 'Enter a country\'s name (eg. France):',
  countryA: 'Country 1:',
  countryB: 'Country 2:'
}

const queryOptions = [
  {query: 'Please Select a Query', prompts: null, disabled: true},
  {query: 'Specific Cup Query', prompts: ['year'], disabled: false},
  {query: 'Specific Player Query', prompts: ['player'], disabled: false},
  {query: 'Superstars Query', prompts: [], disabled: false},
  {query: 'Team Historical Query', prompts: ['country'], disabled: false},
  {query: 'Country Players Query', prompts: ['country'], disabled: false},
  {query: 'Crest Image Query', prompts: [], disabled: false},
  {query: 'Goals At Stadiums Query', prompts: [], disabled: false},
  {query: 'Most Wins Query', prompts: [], disabled: false},
  {query: 'Country Rivalry Query', prompts: ['countryA', 'countryB'], disabled: false}
]

export default {
  name: 'hello',
  data () {
    return {
      selected: 0,
      selectedInputs: {
        'year': '',
        'player': '',
        'country': '',
        'countryA': '',
        'countryB': ''
      },
      prompts: prompts,
      queryOptions: queryOptions
    }
  },
  watch: {
    selectedInputs: function (val) {
      console.log(val)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index {
  margin-top: 100px;
  text-align: center;
}

img {
  height: 250px;
  width: 350px;
}

h1 {
  font-weight: normal;
}

input {
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
}

select {
  margin-bottom: 20px;
  margin-left: 5px;
}

.submit {
  margin-top: 10px;
}

</style>
