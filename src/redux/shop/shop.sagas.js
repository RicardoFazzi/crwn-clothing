import { takeLatest, call, put, all } from "redux-saga/effects";
import ShopActionTypes from "./shop.types";
import {
  convertCollectionSnapshotToMap,
  firestore
} from "../../firebase/firebase.utils";
import { fetchCollectionsError, fetchCollectionsSuccess } from "./shop.actions";

export function* fetchCollectionsAsync() {
  yield console.log("Fired");
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();

    const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap)); // put is used instead of dispatch in sagas environment.
  } catch (error) {
    yield put(fetchCollectionsError(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)])
}
