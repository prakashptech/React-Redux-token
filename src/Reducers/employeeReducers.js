const initialState = {
    employees:[],
    token:null,
}

export const employeeReducers = (state=initialState, action)=>{
    switch(action.type){
        case 'FETCH_EMPLOYEE_SUCCESS':
            return {
                ...state,
                employees:action.payload.employees,
                error:null,
            };
            case 'FETCH_EMPLOYEE_FAILURE':
                return {
                    ...state,
                    employees:[],
                    error:action.payload.error,
                };
            case 'FETCH_EMPLOYEE_UPDATE':
                return {
                    ...state,
                    employees:state.employees.map(employees=>
                    employees.id===action.payload.employees.id ? action.payload.employees:employees
                    ),
                    error:null,
                };
            case 'FETCH_EMPLOYEE_DELETE':
                return {
                    ...state,
                    employees:state.employees.filter(employees=>
                    employees.id !== action.payload.employeeId
                    ),
                    error:null,
                };
            default:
                return state;
    }
}