<template lang="html">
  <div class="restaurant">
    <h2>{{restaurant.name}}</h2>
    <p class="restaurant__info">
      <counted-icons :value="restaurant.price_level" icon="dollar" :color="style.colors.price"></counted-icons>
      <span class="restaurant__category"> - {{restaurant.category}}</span>
    </p>

    <template v-if="detail">
      <p>{{restaurant.address}}</p>
      <div class="level">
        <div class="level-item">
          <h4 class="restaurant__subtitle">Wait Time</h4>
          <p class="restaurant__info">
            <counted-icons :value="restaurant.wait_time" icon="clock-o fa-fw fa-2x" :color="style.colors.wait"></counted-icons>
          </p>
        </div>
        <div class="level-item">
          <h4 class="restaurant__subtitle">Flair</h4>
          <p class="restaurant__info">
            <counted-icons :value="restaurant.flair" icon="magic fa-fw fa-2x" :color="style.colors.flair"></counted-icons>
          </p>
        </div>
        <div class="level-item">
          <h4 class="restaurant__subtitle">Price</h4>
          <p class="restaurant__info">
            <counted-icons :value="restaurant.price_level" icon="dollar fa-fw fa-2x" :color="style.colors.price"></counted-icons>
          </p>
        </div>
      </div>
    </template>

    <slot></slot>
  </div>
</template>

<script>
import colors from '../colors';
import CountedIcons from '../components/counted-icons.vue';

export default {
  components: {
    CountedIcons,
  },

  data() {
    return {
      style: { colors }
    };
  },

  props: ['restaurant', 'detail'],
};
</script>
