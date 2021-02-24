import {MOVE_SERVICES_CAROUSEL} from "store/constants";

const initialState = {
    loading: false,
    data: [
      {
          id: 0,
          title: 'Architectural designs',
          list: ['Governmental Buildings', 'Educational Buildings', 'Industrial & Logistics Projects', 'Residential Buildings', 'Commercial & Office Buildings', 'High Rise Towers', 'Multi- Storey Car Parking', 'Urban Planning']
    },
      {
          id: 1,
          title: 'Roads civil engineering infrastructure',
          list: ['Educational Buildings', 'Industrial & Logistics Projects', 'Residential Buildings', 'Commercial & Office Buildings', 'High Rise Towers', 'Governmental Buildings', 'Multi- Storey Car Parking', 'Urban Planning']
      },
      {
          id: 2,
          title: 'MEP',
          list: ['Urban Planning', 'Governmental Buildings', 'Educational Buildings', 'Industrial & Logistics Projects', 'Residential Buildings', 'Commercial & Office Buildings', 'High Rise Towers', 'Multi- Storey Car Parking']
      },
      {
          id: 3,
          title: 'Structural designs',
          list: ['Commercial & Office Buildings', 'Governmental Buildings', 'Educational Buildings', 'Industrial & Logistics Projects', 'Residential Buildings', 'High Rise Towers', 'Multi- Storey Car Parking', 'Urban Planning']
      },
      {
          id: 4,
          title: 'Supervision cost control value engineering',
          list: ['Multi- Storey Car Parking', 'Urban Planning', 'Governmental Buildings', 'Educational Buildings', 'Industrial & Logistics Projects', 'Residential Buildings', 'Commercial & Office Buildings', 'High Rise Towers']
      },
      {
          id: 5,
          title: 'PMS',
          list: ['Industrial & Logistics Projects', 'Residential Buildings', 'Governmental Buildings', 'Educational Buildings', 'Commercial & Office Buildings', 'High Rise Towers', 'Multi- Storey Car Parking', 'Urban Planning']
      }
  ],
    activeTab: null,
    error: null
};

export default function servicesReducer(state = initialState, action) {
    switch (action.type) {
        case MOVE_SERVICES_CAROUSEL:
            return {
                ...state,
                activeTab: action.payload
            };
        default:
            return state;
    }
}