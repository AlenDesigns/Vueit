<template>
  <div class="form__step">
    <div v-for="(section, index) in sections" :key="index">
      <p class="step__name">{{ section }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sections: ["Section A", "Section B", "Section C"]
    };
  }
};
</script>

<style lang="scss">
.fpr {
  background: blue;
}
</style>