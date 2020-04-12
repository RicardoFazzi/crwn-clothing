import ShopActionTypes from "./shop.types";
import {
  convertCollectionSnapshotToMap,
  firestore
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = (data) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: data
});

export const fetchCollectionsError = (error) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: error
});

export const fetchCollectionStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());
    // onSnapshot se queda escuchando si cambia la data para actualizarse.
    collectionRef.get().then(snapShot => {
      const collectionMap = convertCollectionSnapshotToMap(snapShot);
      dispatch(fetchCollectionsSuccess(collectionMap))
    }, (error) => {
      dispatch(fetchCollectionsError(error.message));
    });
  };
};
