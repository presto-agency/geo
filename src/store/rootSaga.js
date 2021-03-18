import { all, fork } from 'redux-saga/effects';

import servicesSaga from "store/services/sagas";
import officesSaga from "store/offices/sagas";
import contactSaga from "store/contact/sagas";
import disciplinesSaga from "store/disciplines/sagas";

const sagas = [servicesSaga, officesSaga, contactSaga, disciplinesSaga];

export default function* rootSaga () {
    yield all(sagas.flat().map((saga) => fork(saga)));
}