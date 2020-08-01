import { takeLatest, call, put, all } from 'redux-saga/effects';

import {
  firestore,
  convertCollectionSnapshotToMap,
} from '../../firebase/firebase.utils';

import {
  fetchCollecitonsSuccess,
  fetchCollectionFailure,
} from './shop.actions';

import ShopActionTypes from './shop.types';

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot);
    yield put(fetchCollecitonsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionFailure(error.message));
  }

  // return dispatch => {
  //   const collectionRef = firestore.collection('collections');
  //   dispatch(fetchCollectionsStart());

  //   collectionRef
  //     .get()
  //     .then(snapshot => {
  //       const collectionsMap = convertCollectionSnapshotToMap(snapshot);
  //       dispatch(fetchCollecitonsSuccess(collectionsMap));
  //     })
  //     .catch(err => dispatch(fetchCollectionFailure(err.message)));
  // };
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
