<template lang="html">
  <div class="">
    <template v-for="i in rating">
      <span @click="$emit('change', i)"
        class="fa fa-fw rating rating--full"
        :style="{ color }"
        :class="`fa-${icon}`"></span>
    </template>
    <template v-for="i in (5 - rating)">
      <span @click="$emit('change', rating + i)"
        class="fa fa-fw rating"
        :style="{ color }"
        :class="`fa-${icon}`"></span>
    </template>
  </div>
</template>

<script>
export default {
  props: ['rating', 'icon', 'color'],
};
</script>
