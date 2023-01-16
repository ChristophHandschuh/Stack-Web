import axios from "axios";
import { action, createStore, thunk } from "easy-peasy";

const store = createStore({
  stacks: [],
  loading: false,
  error: null,
  addFlashcard: action((state, stack_id, type, front, back) => {
    state.stacks[stack_id].flashcards.push({type: type, front: front, back: back});
  }),
  getStacks: thunk(async (actions, payload) => {
    actions.setLoading(true);
    try {
      const response = await axios.get("http://localhost:3001/stacks");
      actions.setData(response.data.results);
      console.log(response.data.results);
    } catch (e) {
      actions.setError(e);
    }
    actions.setLoading(false);
  }),
  changeStackName: action((state, payload) => {
    let stack = state.stacks[payload.id-1];
    stack.name = payload.name.replace("<br>", '');
    axios.post("http://localhost:3001/stackname", {_id: stack._id, name:stack.name});
  }),
  setData: action((state, payload) => {
    state.stacks = payload;
  }),
  setLoading: action((state, payload) => {
    state.loading = payload;
  }),
});

export default store;