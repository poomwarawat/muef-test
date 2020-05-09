import {createStore} from 'redux'
import questionScore from '../reducers/questionScore'

const store = createStore(questionScore)

export default store