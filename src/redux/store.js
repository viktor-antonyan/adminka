import {createStore, applyMiddleware, combineReducers, compose} from "redux";
import {dashboardReducer} from "./reducers/dashboardReducer";
import ReduxThunk from 'redux-thunk';
import {usersReducer} from "./reducers/usersReducer";
import {organizationReducer} from "./reducers/organizationReducer";
import {reducer as formReducer} from 'redux-form'
import {authReducer} from "./reducers/authReducer";
import {roleReducer} from "./reducers/roleReducer";
import {typeTaskReducer} from "./reducers/typeTaskReducer";
import {priorityReducer} from "./reducers/priorityReducer";
import {typeWorkReducer} from "./reducers/typeWorkReducer";
import {typeGroupReducer} from "./reducers/groupReducer";
import {typeStickerReducer} from "./reducers/stickerReducer";
import {typeExplainReducer} from "./reducers/explainReducer";
import {typeResultReducer} from "./reducers/resultpageReducer";
import {typeObjectReducer} from "./reducers/typeObjectReducer";
import {atributeReducer} from "./reducers/atributeReducer";
import {regionsReducer} from "./reducers/regionsReducer";
import {cityReducer} from "./reducers/cityReducer";
import {electronicJournalReducer} from "./reducers/electronicJournalReducer";
import {finishDashboardReducer} from "./reducers/finishDashboardReducer";
import {noteReducer} from "./reducers/noteTaskReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    dashboardReducer, usersReducer, organizationReducer,authReducer,roleReducer,
    typeTaskReducer,priorityReducer,typeWorkReducer,typeGroupReducer,typeStickerReducer,
    typeExplainReducer,typeResultReducer,typeObjectReducer,atributeReducer,regionsReducer,
    cityReducer,electronicJournalReducer, finishDashboardReducer,noteReducer,
    form: formReducer,
})

export const store = createStore(reducers, composeEnhancers(applyMiddleware(ReduxThunk)))
