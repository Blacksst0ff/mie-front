const config = state => state.app.config
const palette = state => state.app.config.palette
const isLoading = state => state.app.isLoading
const getAllUser = state => state.user.users
const getAllDealModes = state => state.dealMode.dealModes
const getAllDealModels = state => state.dealModel.dealModels

const myCustomer = (state) => (id) => {
  return state.customer.customers.filter(c => c.users.includes(id))
}

const myDeal = (state, getters) => (id) => {
  const deals = state.deal.deals.filter(d => getters.myCustomer(id).map(c => { return c.id }).includes(d.client_id))
  return deals.map(function (d) {
    return {
      ...d,
      ...{ customer: getters.getCustomer(d.client_id) },
      ...{ sla: getters.getSlaByDeal(d.id) },
    }
  })
}

const getCustomer = (state) => (id) => {
  return state.customer.customers.find(c => c.id === id)
}

const getDeal = (state) => (id) => {
  return state.deal.deals.find(d => d.id === id)
}

const getCustomerByName = (state) => (name) => {
  return state.customer.customers.find(c => c.name === name)
}

const getSla = (state) => (id) => {
  return state.sla.sla.find(s => s.id === id)
}

const getSlaByDeal = (state) => (id) => {
  return state.sla.sla.filter(s => s.deal_id === id)
}

const getCustomerByDeal = (state) => (id) => {
  return state.customer.customers.find(c => c.deals.includes(id))
}

const getUser = (state) => (id) => {
  return state.user.users.find(u => u.id === id)
}

const getDealMode = (state) => (id) => {
  return state.dealMode.dealModes.find(u => u.id === id)
}

const getDealModel = (state) => (id) => {
  return state.dealModel.dealModels.find(u => u.id === id)
}

const getUserPicture = (state) => (id) => {
  return state.user.users.find(u => u.id === id).picture
}

const getUserName = (state) => (id) => {
  return state.user.users.find(u => u.id === id).name
}

const getCustomerUsersAttached = (state) => (userIds) => {
  return state.user.users.filter(u => userIds.includes(u.id))
}

const getCustomerDealsAttached = (state) => (id) => {
  return state.deal.deals.filter(d => d.client_id === id)
}

const getSlaIndicators = (state) => (id) => {
  return state.indicator.indicators.filter(i => i.sla_id === id)
}

const countSlaByDeal = (state) => (id) => {
  return state.sla.sla.filter(s => s.deal_id === id).length
}

export {
  config,
  palette,
  isLoading,
  myCustomer,
  myDeal,
  getCustomer,
  getDeal,
  getCustomerByName,
  getSla,
  getUser,
  getDealMode,
  getDealModel,
  getUserPicture,
  getUserName,
  getCustomerUsersAttached,
  getCustomerDealsAttached,
  getCustomerByDeal,
  getSlaByDeal,
  getSlaIndicators,
  getAllUser,
  getAllDealModes,
  getAllDealModels,
  countSlaByDeal,
}
