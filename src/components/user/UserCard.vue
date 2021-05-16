<template>
  <div class="d-flex align--center justify--space-between" >
    <va-card class="row justify--center">
      <div id="user-header-card" class="flex md12 xs12 text--center" slot="header">
        <va-avatar class="ma-auto">
          <img :src="user.picture" :alt="user.name">
        </va-avatar>
        <div class="text--secondary mt-1">
          {{user.profil}}
        </div>
        <div class="va-card__header-title">
          {{user.name}}
        </div>
      </div>
      <div slot="default" class='mt-2'>
        <div class="row">
          <div class="flex xs12">
            <va-input
              v-model="user.email"
              disabled
            >
              <va-icon
                slot="prepend"
                color="gray"
                name="fa fa-envelope-o"
              />
            </va-input>
          </div>
          <div class="flex xs12">
            <va-input
              v-model="user.phone"
              disabled
            >
              <va-icon
                slot="prepend"
                color="gray"
                name="fa fa-phone"
              />
            </va-input>
          </div>
        </div>
        <div class="row">
          <va-input
            v-model="user.address"
            disabled
          >
            <va-icon
              slot="prepend"
              color="gray"
              name="fa fa-building"
            />
          </va-input>
        </div>
        <div class="row">
          <div class="flex md4 xs12 text--secondary ma-auto">
            Responsable:
          </div>
          <div class="flex md8 xs12">
            <va-item>
              <va-item-section avatar>
                <va-avatar>
                  <img :src="supervisor.picture" :alt="supervisor.name">
                </va-avatar>
              </va-item-section>

              <va-item-section>
                <va-item-label>
                  {{ supervisor.name }}
                </va-item-label>

                <va-item-label caption>
                  {{ supervisor.profil }}
                </va-item-label>
              </va-item-section>
            </va-item>
          </div>
        </div>
      </div>
    </va-card>
  </div>
</template>

<script>

import dataUsers from '../customer/data/users.json'

export default {
  name: 'user-card',
  data () {
    return {
      users: dataUsers,
    }
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  computed: {
    supervisor () {
      const i = this.users.findIndex(u => u.id === this.user.manager)
      return this.users[i]
    },
  },
}
</script>

<style lang="scss">
</style>
