export const state = () => ({
  usersTable: []
})

export const getters = {
  getUsersTableData: state => state.usersTable
}

export const mutations = {
  UPDATE_USERS_TABLE(state, usersTable) {
    state.usersTable = usersTable;
  },
  ADD_USER_TABLE(state, user) {
    state.usersTable.push(user);
  },
  DELETE_USER_TABLE(state, user) {
    state.usersTable.splice(state.usersTable.indexOf(user), 1)

  }
}