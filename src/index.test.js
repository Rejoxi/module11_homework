import { check_num } from "./index.js";

describe('Checking the number', () => {
    const even = 8;
    const odd = 3;
    it('should be even', ()=>{
        expect(check_num(even)).toBe(`Число ${even} четное`);
    })
    it('should be odd', ()=>{
        expect(check_num(odd)).toBe(`Число ${odd} нечетное`);
    })
});