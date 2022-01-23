/** COMMON TYPES */

export enum CommonTypes {
    SET_LOADING = 'SET_LOADING'
}

export interface SetLoading {
    type: CommonTypes.SET_LOADING;
    payload: boolean;
}

export type CommonDispatchTypes = SetLoading;

/** END COMMON TYPES */


/** USER TYPES */
export enum UserTypes {
    GET_USER_SUCCESS = 'GET_USER_SUCCESS',
    GET_USER_ERROR = 'GET_USER_ERROR',
    GET_SINGLE_USER_SUCCESS = 'GET_SINGLE_USER_SUCCESS',
    GET_SINGLE_USER_ERROR = 'GET_SINGLE_USER_ERROR',
}

export interface GetUserSuccess {
    type: UserTypes.GET_USER_SUCCESS;
    payload: any
}

export interface GetUserError {
    type: UserTypes.GET_SINGLE_USER_ERROR;
}

export type UserDispatchTypes = GetUserSuccess | GetUserError;

/** USER END TYPES */
