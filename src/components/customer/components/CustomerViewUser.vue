<template>
  <va-list
    fit
  >
    <template v-if="emptyUser()">
      <div class="empty-result">
        Nobody is attached to this customer yet!
      </div>
    </template>
    <template v-for="user in users">
      <va-item :key="'item' + user.id">
        <va-item-section avatar>
          <va-avatar>
            <img :src="user.picture" :alt="user.name">
          </va-avatar>
        </va-item-section>

        <va-item-section>
          <va-item-label>
            {{ user.name }}
          </va-item-label>

          <va-item-label caption>
            {{ user.profil }}
          </va-item-label>
        </va-item-section>

        <va-item-section side>
          <va-button
            flat small
            icon="fa fa-eye"
            @click="showUserModal = true"
          />
          <va-button
            flat small
            color="red"
            icon="fa fa-trash"
            @click="deleteUser(user.id)"
          />
        </va-item-section>
      </va-item>
      <va-modal
        v-model="showUserModal"
        :key="'modal' + user.id"
        okText="Close"
        cancelText=""
      >
        <user-card :user=user />
      </va-modal>
    </template>
  </va-list>
</template>

<script>

import UserCard from '../../user/UserCard'

export default {
  name: 'customer-view-user',
  components: {
    UserCard,
  },
  props: {
    users: Array,
  },
  data () {
    return {
      showUserModal: false,
      hasContentSlot: true,
    }
  },
  methods: {
    deleteUser (id) {
      if (confirm('Do you really want to delete this user ?')) {
        const i = this.users.findIndex(user => user.id === id)
        this.users.splice(i, 1)
      }
    },
    emptyUser () {
      return !this.users
    },
    notify (name) {
      this.showToast(`Curently editing ${name}`, {
        icon: 'fa-pencil',
        position: 'bottom-right',
      })
    },
  },
}
</script>

<style lang="scss">
</style>
