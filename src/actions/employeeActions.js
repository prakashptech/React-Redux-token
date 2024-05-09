export const fetchEmployeeSuccess = (employees) =>({
    type: 'FETCH_EMPLOYEE_SUCCESS',
    payload:{employees},
});
export const fetchEmployeeUpdate = (employees) =>({
    type: 'FETCH_EMPLOYEE_UPDATE',
    payload:{employees},
});
export const fetchEmployeeFailure = (error) =>({
    type: 'FETCH_EMPLOYEE_FAILURE',
    payload:{error},
})
export const fetchEmployeeDelete = (employeeId) =>({
    type: 'FETCH_EMPLOYEE_DELETE',
    payload:{employeeId},
})