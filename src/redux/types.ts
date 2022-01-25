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
    DELETE_LINKEDIN_USER_SUCCESS = 'DELETE_LINKEDIN_USER_SUCCESS',
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

export interface DeleteLinkedInUser {
    type: UserTypes.DELETE_LINKEDIN_USER_SUCCESS
}

export type UserDispatchTypes = GetUsersSuccess | GetUserByLinkedInUrl | GetUserByLinkedInUrlError | DeleteLinkedInUser;
/** USER END TYPES */
