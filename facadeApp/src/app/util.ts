export class Util {

    static GetRndInteger(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

}