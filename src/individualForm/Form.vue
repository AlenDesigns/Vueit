<template>
  <div>
    <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
        <label class="form__label">Name</label>
        <input class="form__input" v-model.trim="$v.name.$model"/>
    </div>
    <div class="error" v-if="!$v.name.required">Field is required</div>
    <div class="error" v-if="!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</div>
  </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      sections: ["Section A", "Section B", "Section C"],
      name: ''
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(4)
    }
  }
};
</script>

<style lang="scss">
.test {
  background: blue;
}
</style>