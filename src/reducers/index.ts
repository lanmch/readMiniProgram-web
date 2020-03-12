import { combineReducers } from 'redux'
import counter from './counter'
import rankList from './rankList'
import bookList from './bookList'
import collectList from './collectList'
import viewHistory from './viewHistory'
import bookInfo from './bookInfo'
import directory from './directory'
import articleDetail from './articleDetail'
export default combineReducers({
  counter,
  rankList,
  bookList,
  collectList,
  viewHistory,
  bookInfo,
  directory,
  articleDetail
})
