<template>
  <div class="row row-equal">
    <div class="flex xl12 xs12">
      <div class="row">
        <div class="flex xs12 md6">
          <va-card>
            <div class="row">
              <div class="flex md8 xs8">
                <p class="no-wrap">{{$t('dashboard.info.completedPullRequests')}}</p>
                <va-progress-bar :value="satisfaction">{{ satisfaction }}%</va-progress-bar>
              </div>
              <div class="flex md4 xs4 text--center">
                <i :class= meteoIcon id="icon-satisfaction"></i>
              </div>
            </div>
            <!--<p class="display-2 mb-1" :style="{color: this.$themes.primary}">97%</p>
            <va-progress-circle
              :value=value
              :color=this.$themes.primary
            >{{ value }}%
            </va-progress-circle>-->
          </va-card>
        </div>
        <div class="flex xs12 md6">
          <va-card>
            <div class="row row-separated">
              <div class="flex xs4">
                <p class="display-2 mb-1 text--center" :style="{color: this.$themes.primary}">3</p>
                <p class="text--center mb-1">{{$t('dashboard.info.customer')}}</p>
              </div>
              <div class="flex xs4">
                <p class="display-2 mb-1 text--center" :style="{color: this.$themes.info}">24</p>
                <p class="text--center no-wrap mb-1">{{$t('dashboard.info.points')}}</p>
              </div>
              <div class="flex xs4">
                <p class="display-2 mb-1 text--center" :style="{color: this.$themes.warning}">91</p>
                <p class="text--center mb-1">{{$t('dashboard.info.units')}}</p>
              </div>
            </div>
          </va-card>
        </div>
      </div>

      <div class="row">
        <div
          class="flex xs12 sm4"
          v-for="(info, idx) in infoTiles"
          :key="idx"
        >
          <va-card class="mb-4" :color="info.color">
            <p class="display-2 mb-0" style="color: white;">{{ info.value }}</p>
            <p>{{$t('dashboard.info.' + info.text)}}</p>
          </va-card>
        </div>
      </div>
    </div>

    <!--<div class="flex xs12 md6 xl3">
      <va-card
        stripe="info"
        :title="$t('dashboard.info.componentRichTheme')"
      >
        Buying the right telescope to take your love of astronomy to the
        next level is a big next step.

        <div class="row mt-3">
          <va-button color="primary" target="_blank" href="https://github.com/epicmaxco/vuestic-ui">
            {{$t('dashboard.info.viewLibrary')}}
          </va-button>
        </div>
      </va-card>
    </div>

    <div class="flex xs12 md6 xl3">
      <va-card
        :image='images[0]'
        square
        titleOnImage
      >
        <template slot="header">
          <va-button
            flat
            icon-right="ion ion-ios-arrow-forward"
            color="primary"
            class="ma-0"
            @click="showModal"
          >
            {{$t('dashboard.info.exploreGallery')}}
          </va-button>
        </template>
      </va-card>
    </div>
    <va-modal v-model="modal">
      <div style="position: relative;">
        <va-button @click="showPrevImage" icon="fa fa-chevron-left" flat style="position: absolute; top: 50%;"/>
        <va-button @click="showNextImage" icon="fa fa-chevron-right" flat style="position: absolute; top: 50%; right: 0;"/>
        <transition>
          <img :src="images[currImage]" style="height: 50vh; max-width: 100%;">
        </transition>
      </div>
    </va-modal>-->
  </div>
</template>

<script>
export default {
  name: 'DashboardInfoBlock',
  data () {
    return {
      infoTiles: [{
        color: 'success',
        value: '803',
        text: 'commits',
        icon: '',
      }, {
        color: 'danger',
        value: '57',
        text: 'components',
        icon: '',
      }, {
        color: 'info',
        value: '5',
        text: 'teamMembers',
        icon: '',
      }],
      modal: false,
      currImage: 0,
      images: [
        'https://i.imgur.com/qSykGko.jpg',
        'https://i.imgur.com/jYwT08D.png',
        'https://i.imgur.com/9930myH.jpg',
        'https://i.imgur.com/2JxhWD6.jpg',
        'https://i.imgur.com/MpiOWbM.jpg',
      ],
      satisfaction: Math.floor(Math.random() * 101),
      color: 'warning', /* ['danger', 'success', 'info', 'gray', 'warning', 'black'] */
      meteoIcon: 'va-icon fontelico fontelico-emo-coffee',
    }
  },
  mounted () {
    this.animateValue()
    this.showMeteoIcon()
  },
  methods: {
    showModal () {
      this.modal = true
    },
    showPrevImage () {
      this.currImage = !this.currImage ? this.images.length - 1 : this.currImage - 1
    },
    showNextImage () {
      this.currImage = this.currImage === this.images.length - 1 ? 0 : this.currImage + 1
    },
    showMeteoIcon () {
      if (this.satisfaction === 100) {
        this.meteoIcon = 'va-icon fontelico fontelico-emo-sunglasses'
      } else if (this.satisfaction >= 90) {
        this.meteoIcon = 'va-icon fontelico fontelico-emo-beer'
      } else if (this.satisfaction >= 80) {
        this.meteoIcon = 'va-icon fontelico fontelico-emo-grin'
      } else if (this.satisfaction >= 70) {
        this.meteoIcon = 'va-icon fontelico fontelico-emo-happy'
      } else if (this.satisfaction >= 50) {
        this.meteoIcon = 'va-icon fontelico fontelico-emo-displeased'
      } else if (this.satisfaction >= 40) {
        this.meteoIcon = 'va-icon fontelico fontelico-emo-unhappy'
      } else if (this.satisfaction >= 25) {
        this.meteoIcon = 'va-icon fontelico fontelico-emo-angry'
      } else if (this.satisfaction !== 0) {
        this.meteoIcon = 'va-icon fontelico fontelico-emo-cry'
      } else {
        this.meteoIcon = 'va-icon fontelico fontelico-emo-shoot'
      }
    },
    animateValue () {
      setTimeout(() => (this.value = 100))
    },
  },
}
</script>

<style lang="scss">mo .row-separated {
    .flex + .flex {
      border-left: 1px solid #e3eaeb;
    }

    @include media-breakpoint-down(xs) {
      p:not(.display-2) {
        font-size: 0.875rem;
      }
    }
  }

  .dashboard {
    .va-card__header--over {
      @include media-breakpoint-up(md) {
        padding-top: 0 !important;
      }
    }

    .va-card__image {
      @include media-breakpoint-up(md) {
        padding-bottom: 0 !important;
      }
    }

    .va-progress-bar__info {
      font-size: 1.175rem;
    }

    #icon-satisfaction {
      font-size: 34px;
      // position: absolute;
      // top: 15px;
      // right: 15px;
    }
  }
</style>
