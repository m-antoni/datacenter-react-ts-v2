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
    INSERT_EXCEL_DATA_SUCCESS = 'INSERT_EXCEL_DATA_SUCCESS',
    INSERT_EXCEL_DATA_ERROR = 'INSERT_EXCEL_DATA_ERROR',
    VALIDATE_EXCEL_DATA = 'VALIDATE_EXCEL_DATA',
    GET_SUMMARY_SUCCESS = 'GET_SUMMARY_SUCCESS',
    CLEAR_USER_STATE = 'CLEAR_USER_STATE',
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

export interface insertExcelDataSuccess {
    type: UserTypes.INSERT_EXCEL_DATA_SUCCESS;
    payload: any
}

export interface insertExcelDataError {
    type: UserTypes.INSERT_EXCEL_DATA_ERROR;
}

export interface validateExcelData {
    type: UserTypes.VALIDATE_EXCEL_DATA;
    payload: any
}

export interface getSummary {
    type: UserTypes.GET_SUMMARY_SUCCESS;
    payload: any
}

export interface clearUserState {
    type: UserTypes.CLEAR_USER_STATE;
}


export type UserDispatchTypes = 
GetUsersSuccess | GetUserByLinkedInUrl | GetUserByLinkedInUrlError | 
ArchiveRestore | GetArchiveUser | GetSingleSettingSuccess | 
insertExcelDataSuccess | insertExcelDataError | validateExcelData | 
getSummary | clearUserState;


/** USER END TYPES */




/** AUTH TYPES */

export enum AuthTypes {
    AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS',
    AUTH_LOGIN_ERROR = 'AUTH_LOGIN_ERROR',
    AUTH_DETAILS = 'AUTH_DETAILS',
    AUTH_LOGOUT = 'AUTH_LOGOUT',
}


export interface AuthLoginSuccess {
    type: AuthTypes.AUTH_LOGIN_SUCCESS,
    payload: any
}

export interface AuthLoginError {
    type: AuthTypes.AUTH_LOGIN_ERROR
}

export interface AuthDetails {
    type: AuthTypes.AUTH_DETAILS,
    payload: any
}

export interface AuthLogOut {
    type: AuthTypes.AUTH_LOGOUT
}

export type AuthDispatchTypes = AuthLoginSuccess | AuthLoginError | AuthLogOut;

/** AUTH END TYPES */