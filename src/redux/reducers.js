import { persistCombineReducers } from "redux-persist"
import storage from "redux-persist/es/storage" // default: AsyncStorage

import hydratation from "./modules/hydratation"
import routes from "./modules/routes"
import authentication from "./modules/authentication"
import community from "./modules/community"
import witchMail from "./modules/witchMail"

const config = {
  key: "root",
  storage,
}

const reducer = persistCombineReducers(config, {
  hydratation,
  routes,
  authentication,
<<<<<<< HEAD
=======
  community,
  witchMail,
>>>>>>> 540de49b855d7002c6af367b4a71718ff8fda55b
})

const rootReducer = (state, action) => {
  if (action.type === "CLEAR_STORE") {
    const { hydratation } = state
    state = { hydratation }
  }
  return reducer(state, action)
}

export default rootReducer
