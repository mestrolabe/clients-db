import { IClientAcc } from "./client-account";


export enum Gender {
    FEMALE = "მდედრობითი",
    MALE = "მამრობითი",
    OTHER = "სხვა"
}

export interface IClient {
    id: number;
    firstName: string;
    lastName: string;
    gender?: Gender;
    idNumber: string;
    phoneNumber: number;
    mailingAddress: {
        country: string;
        city: string;
        address: string;
    };
    physicalAddress: {
        country: string;
        city: string;
        address: string;
    };
    img?: string | ArrayBuffer;
    accounts?: IClientAcc[];
    sameAddress?: boolean;
}
