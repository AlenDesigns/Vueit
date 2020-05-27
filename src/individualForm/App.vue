<template>
  <div class="form">
    <h1 class="form__heading">{{ heading }}</h1>
    <step-form></step-form>
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
  }
};
</script>

<style lang="scss" scoped>
.form {
  

  &__heading {
    
  }
}
</style>