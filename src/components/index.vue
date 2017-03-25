<template>
  <div class="hello">
    <h1>Mondial DB: A World Cup Database</h1>
    <form>
      <select v-model="selected">
        <option v-for="(option, index) in queryOptions" :value="index" :disabled="option.disabled">
          {{ option.query }}
        </option>
      </select>
      <br />

      <div v-for="prompt in queryOptions[selected].prompts">
        {{ prompts[prompt] }} <input type="text" :name="prompt" />
      </div>

      <div v-if="queryOptions[selected].prompts">
        <input class="submit" type="submit" value="Submit Query" />
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
  {query: 'Please Select A Query', prompts: null, disabled: true},
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
      prompts: prompts,
      queryOptions: queryOptions,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
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

.inputField {
  margin-bottom: 10px;
}

.submit {
  margin-top: 10px;
}

</style>
