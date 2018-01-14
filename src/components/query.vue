<template>
  <div class="query">
    <form v-on:submit.prevent="submitForm">
      <div class="form-group">
        <select v-model="selectedQueryIndex">
          <option v-for="(option, index) in queryOptions" :value="index" :disabled="option.disabled">
            {{ option.query }}
          </option>
        </select>

        <span v-for="(prompt, index) in queryOptions[selectedQueryIndex].prompts">
          <label :for="prompt">{{ prompts[prompt] }}</label> <input type="text" v-model="selectedInputs[prompt]" />
        </span>

        <span v-if="queryOptions[selectedQueryIndex].prompts">
          <input class="submit" type="submit" value="Run Query" />
        </span>
      </div>
    </form>

    <div v-if="submittedQueryIndex == 1">
      <SpecificCup :year="submittedInputs['year']"></SpecificCup>
    </div>

    <div v-if="submittedQueryIndex == 2">
      <SpecificPlayer :name="submittedInputs['player']"></SpecificPlayer>
    </div>

    <div v-if="submittedQueryIndex == 3">
      <Superstars></Superstars>
    </div>

    <div v-if="submittedQueryIndex == 4">
      <TeamHistorical :name="submittedInputs['country']"></TeamHistorical>
    </div>

    <div v-if="submittedQueryIndex == 5">
      <CountryPlayers :name="submittedInputs['country']"></CountryPlayers>
    </div>

    <div v-if="submittedQueryIndex == 6">
      <CrestImage></CrestImage>
    </div>

    <div v-if="submittedQueryIndex == 7">
      <GoalsAtStadiums></GoalsAtStadiums>
    </div>

    <div v-if="submittedQueryIndex == 8">
      <MostWins></MostWins>
    </div>

    <div v-if="submittedQueryIndex == 9">
      <CountryRivalry :countryA="submittedInputs['countryA']" :countryB="submittedInputs['countryB']"></CountryRivalry>
    </div>
  </div>
</template>

<script>
import SpecificCup from '@/components/specific_cup'
import SpecificPlayer from '@/components/specific_player'
import Superstars from '@/components/superstars'
import TeamHistorical from '@/components/team_historical'
import CountryPlayers from '@/components/country_players'
import CrestImage from '@/components/crest_image'
import GoalsAtStadiums from '@/components/goals_at_stadiums'
import MostWins from '@/components/most_wins'
import CountryRivalry from '@/components/country_rivalry'

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
  name: 'Query',
  components: {
    SpecificCup,
    SpecificPlayer,
    Superstars,
    TeamHistorical,
    CountryPlayers,
    CrestImage,
    GoalsAtStadiums,
    MostWins,
    CountryRivalry
  },
  mounted () {
    console.log(this.$route.params)
    if ('queryIndex' in this.$route.params) {
      this.selectedQueryIndex = this.$route.params.queryIndex
    }

    if ('year' in this.$route.params) {
      this.selectedInputs.year = this.$route.params.year
    }

    if ('player' in this.$route.params) {
      this.selectedInputs.player = this.$route.params.player
    }

    if ('country' in this.$route.params) {
      this.selectedInputs.country = this.$route.params.country
    }

    if ('countryA' in this.$route.params) {
      this.selectedInputs.countryA = this.$route.params.countryA
    }

    if ('countryB' in this.$route.params) {
      this.selectedInputs.countryB = this.$route.params.countryB
    }

    this.submitForm()
  },
  data () {
    return {
      selectedQueryIndex: 0,
      submittedQueryIndex: 0,
      prompts: prompts,
      queryOptions: queryOptions,
      selectedInputs: {
        'year': '',
        'player': '',
        'country': '',
        'countryA': '',
        'countryB': ''
      },
      submittedInputs: {
        'year': '',
        'player': '',
        'country': '',
        'countryA': '',
        'countryB': ''
      },
      inputList: []
    }
  },
  methods: {
    submitForm: function () {
      if (this.selectedQueryIndex !== 0) {
        this.submittedQueryIndex = this.selectedQueryIndex
        this.submittedInputs['year'] = this.selectedInputs['year']
        this.submittedInputs['player'] = this.selectedInputs['player']
        this.submittedInputs['country'] = this.selectedInputs['country']
        this.submittedInputs['countryA'] = this.selectedInputs['countryA']
        this.submittedInputs['countryB'] = this.selectedInputs['countryB']
      }
    }
  }
}
</script>

<style>
form {
  margin-bottom: 20px;
  text-align: center;
}

span {
  margin-left: 5px;
}

h3 {
  text-align: center;
}
</style>
