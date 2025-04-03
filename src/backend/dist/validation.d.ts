interface UserData {
    email: string;
    name: string;
    datum: string;
}
export declare const validateUserData: import("ajv").ValidateFunction<UserData>;
export {};
