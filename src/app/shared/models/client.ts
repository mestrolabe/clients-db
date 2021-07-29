import { IClientAcc } from "./client-account";

export enum Gender {
    FEMALE = "მდედრობითი",
    MALE = "მამრობითი"
}


export interface IClient {
    id: number;
    firstName: string;
    lastName: string;
    gender?: 'მდედრობითი' | 'მამრობითი' | '';
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
