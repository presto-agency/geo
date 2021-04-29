import { all, fork } from 'redux-saga/effects';

import servicesSaga from "store/services/sagas";
import officesSaga from "store/offices/sagas";
import contactSaga from "store/contact/sagas";
import disciplinesSaga from "store/disciplines/sagas";
import projectsSaga from "store/projects/sagas";
import newsSaga from "store/news/sagas";
import homePageSaga from "store/homePage/sagas";
import servicesPageSaga from "store/servicesPage/sagas/getServicesPageSaga";
import aboutPageSaga from "./about/sagas";
import socialSaga from './social/sagas';

const sagas = [
    homePageSaga,
    servicesPageSaga,
    aboutPageSaga,
    servicesSaga,
    officesSaga,
    contactSaga,
    disciplinesSaga,
    projectsSaga,
    newsSaga,
    socialSaga];

export default function* rootSaga () {
    yield all(sagas.flat().map((saga) => fork(saga)));
}