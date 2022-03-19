import { createStore } from "vuex";

export default createStore({
  state: {
    tablet: 764,
    desktop: 1024,
    winColor: '#4C83B6',
    looseColor: '#B64C4C',
    lolRanks: ['Iron', 'Bronze', 'Silver', 'Gold', 'Platinium', 'Diamond', 'Master', 'GrandMaster', 'Challenger'],
    lolRanksColor: ['#6A6566', '#8A665C', '#64777B', '#DFCB85', '#6CBB84', '#32368D', '#A783C2', '#FE6669', 'white'],
  },
  mutations: {},
  actions: {},
  modules: {},
});
