<template lang="html">
  <span class="">
    <template v-for="i in value">
      <span @click="$emit('change', i)"
        class="fa"
        :style="{ color }"
        :class="`fa-${icon}`"></span>
    </template>
  </span>
</template>

<script>
export default {
  props: ['value', 'icon', 'color'],
};
</script>
