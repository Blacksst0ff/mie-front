<template>
  <div class="flex md12 xs12">
    <div class="row">
      <div class="grid__container flex-left" style="min-width: 200px;" >
        <div class="va-card__header-title" style="color: rgb(35, 1, 88); display: inline-block; margin-top: 5px;">
          {{ mainTitle }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'kpi-view-header',
  data () {
    return {
      mainTitle: this.kpi.name,
    }
  },
  props: {
    kpi: Object,
  },
  methods: {
  },
}
</script>

<style lang="scss">
.va-notification {
  padding: 0;
}

.va-badge {
  font-size: 0.825rem;
}

.grid__container {
  min-width: 70px;
  max-height: 70px;
}

.va-card__header-title {
  @include media-breakpoint-down(xs) {
    font-size: 1rem;
  }
}
</style>
