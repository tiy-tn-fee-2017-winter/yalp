<template lang="html">
  <button @click="$emit('change', !value)" type="button" role="checkbox" :aria-checked="value" class="checkbox">
    <span class="fa fa-fw" :class="{ 'fa-check-square-o': value, 'fa-square-o': !value }"></span>
  </button>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      required: true
    }
  }
};
</script>
