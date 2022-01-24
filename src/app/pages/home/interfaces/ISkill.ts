export interface ISkill{
    name: string;
    image: string;
    category: string;
    level: levels;
}

export enum levels {
    LOW,
    BASIC,
    MEDIUM,
    HIGH,
    VERY_HIGH
}