<template>
  <div id="app">
    <label>
      <input type="checkbox" v-model="isFunnyColor" />
      Радужные цвета
    </label>
    <Donut
      :slices="slices"
      :currentSlice="currentSlice"
      :colors="colors"
      @click="currentSlice = $event"
    />
  </div>
</template>

<script>
import Donut from "./components/donut/";

export default {
  name: "App",
  components: {
    Donut
  },
  data: () => ({
    slices: [
      { id: 1, text: "79200101623", percent: 0.37 },
      { id: 2, text: "79200101623", percent: 0.16 },
      { id: 3, text: "79200101623", percent: 0.12 },
      { id: 4, text: "79200101623", percent: 0.11 },
      { id: 5, text: "79200101623", percent: 0.1 },
      { id: 6, text: "79200101623", percent: 0.05 },
      { id: 7, text: "79200101623", percent: 0.03 },
      { id: 8, text: "79200101623", percent: 0.02 },
      { id: 9, text: "79200101623", percent: 0.01 },
      { id: 10, text: "79200101623", percent: 0.01 },
      { id: 11, text: "79200101623", percent: 0.01 },
      { id: 12, text: "79200101623", percent: 0.01 }
    ],
    currentSlice: undefined,
    funnyColors: [
      "#67B6F4",
      "#ce67f4",
      "#f88888",
      "#ffb57d",
      "#9ddc5d",
      "#5ddcb0",
      "#7b94e0",
      "#e671ad",
      "#c37252",
      "#c39a52",
      "#b2c352",
      "#52c358",
      "#52c3b6"
    ],
    boringColors: [
      "#67B6F4",
      "#67E3F4",
      "#9E88F8",
      "#7D8AFF",
      "#5DA4DC",
      "#5DCDDC",
      "#8E7BE0",
      "#717CE6",
      "#5292C3",
      "#52B6C3",
      "#7E6DC6",
      "#646ECC",
      "#487FAA",
      "#489EAA",
      "#6E5FAD",
      "#5760B2",
      "#3D6D92",
      "#3D8792",
      "#5E5194",
      "#4B5298",
      "#335A79",
      "#337079",
      "#4E437B",
      "#3E447E"
    ],
    isFunnyColor: true
  }),
  computed: {
    colors() {
      return this.isFunnyColor ? this.funnyColors : this.boringColors;
    }
  }
};
</script>

<style>
body {
  font-family: Helvetica, Arial, sans-serif;
  color: #333;
}
#app {
  margin: 60px auto;
  width: 100%;
  max-width: 600px;
}
label {
  display: block;
  margin-bottom: 2em;
  width: fit-content;
}
svg {
  outline: 1px dashed #8000ff;
}
.donut-popper {
  min-width: 96px;
  margin: 0 !important;
  padding: 8px 12px;
  box-sizing: border-box;
  font-size: 12px;
  line-height: 14px;
}
</style>
