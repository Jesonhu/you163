export const state = () => {
  return {
    searchHotKeyList : [],
    tabNav : [],
    footerList : []
  }
}

export const mutations = {
  GET_DATA_sHotKey(state, action) {
    state.searchHotKeyList = action.searchHotKeyList
  },
  GET_DATA_tabNav(state, action) {
    state.tabNav = action.tabNav;
  },
  GET_DATA_footerList(state, action) {
    state.footerList = action.footerList;
  }
}
