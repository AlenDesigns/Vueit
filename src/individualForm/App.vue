<template>
  <div class="form">
    <h1 class="form__heading">{{ heading }}</h1>
    <step-form></step-form>
    <p>{{this.$store.state.count}}</p>
    <button @click='increment'>Increment</button>
  </div>
</template>

<script>
import Form from "./Form.vue";

export default {
  data() {
    return {
      heading: "Form heading"
    };
  },
  components: {
    "step-form": Form
  },
  methods: {
    increment() {
      this.$store.commit('increment');
    }
  }
};
</script>

<style lang="scss" scoped>
.form {
  

  &__heading {
    
  }
}
</style>