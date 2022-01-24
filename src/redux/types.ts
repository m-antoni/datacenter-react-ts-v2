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
    GET_USERS_SUCCESS = 'GET_USERS_SUCCESS',
    GET_USER_LINKEDIN_SUCCESS = 'GET_USER_LINKEDIN_SUCCESS',
    GET_USER_LINKEDIN_ERROR = 'GET_USER_LINKEDIN_ERROR',
}

export interface GetUsersSuccess {
    type: UserTypes.GET_USERS_SUCCESS;
    payload: any
}

export interface GetUserByLinkedInUrl {
    type: UserTypes.GET_USER_LINKEDIN_SUCCESS;
    payload: any
}

export interface GetUserByLinkedInUrlError {
    type: UserTypes.GET_USER_LINKEDIN_ERROR
}

export type UserDispatchTypes = GetUsersSuccess | GetUserByLinkedInUrl | GetUserByLinkedInUrlError;
/** USER END TYPES */
