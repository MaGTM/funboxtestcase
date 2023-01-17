export interface IProduct {
    id: number,
    available: boolean,
    notAvailableText?: string,
    filling: string,
    portion: number,
    gift: string,
    size: number,
    afterSelectedText?: string
}