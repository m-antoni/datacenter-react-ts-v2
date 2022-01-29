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
    ARCHIVE_RESTORE_USER_SUCCESS = 'ARCHIVE_RESTORE_USER_SUCCESS',
    GET_ARCHIVE_USER_SUCCESS = 'GET_ARCHIVE_USER_SUCCESS',
    GET_SINGLE_SETTING_SUCCESS = 'GET_SINGLE_SETTING_SUCCESS',
}

export enum ArchiveRestoreTypes{
     ARCHIVE = 'archive',
     RESTORE = 'restore'
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

export interface ArchiveRestore {
    type: UserTypes.ARCHIVE_RESTORE_USER_SUCCESS
}

export interface GetArchiveUser {
    type: UserTypes.GET_ARCHIVE_USER_SUCCESS;
    payload: any
}

export interface GetSingleSettingSuccess {
    type: UserTypes.GET_SINGLE_SETTING_SUCCESS;
    payload: any
}

export type UserDispatchTypes = GetUsersSuccess | GetUserByLinkedInUrl | GetUserByLinkedInUrlError | ArchiveRestore | GetArchiveUser | GetSingleSettingSuccess;
/** USER END TYPES */
