import { all, fork } from 'redux-saga/effects';

import servicesSaga from "store/services/sagas";
import officesSaga from "store/offices/sagas";
import contactSaga from "store/contact/sagas";
import disciplinesSaga from "store/disciplines/sagas";
import projectsSaga from "store/projects/sagas";
import newsSaga from "store/news/sagas";
import homePageSaga from "store/homePage/sagas";
import aboutPageSaga from "./about/sagas";

const sagas = [homePageSaga, servicesSaga, officesSaga, contactSaga, disciplinesSaga, projectsSaga, newsSaga, aboutPageSaga];

export default function* rootSaga () {
    yield all(sagas.flat().map((saga) => fork(saga)));
}