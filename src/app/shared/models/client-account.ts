export enum AccType {
    CURRENT = "მიმდინარე",
    SAVINGS = "შემნახველი",
    DEPOSIT = "დაგროვებითი"
}
export enum Valute {
    GEL = "GEL",
    USD = "USD",
    EUR = "EUR",
    RUB = "RUB"
}
export enum AccStatus {
    ACTIVE = "აქტიური",
    CLOSED = "დახურული"
}

export interface IClientAcc {
    id: number;
    accNumber: number;
    accType: AccType;
    valute: Valute[];
    accStatus: AccStatus;
}

