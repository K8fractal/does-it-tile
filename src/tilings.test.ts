import { interiorAngle, polygonName} from "./tilings";

describe('testing interior angle formula', () => {
    test('interior angle of a triangle', () => {
        expect(interiorAngle(3)).toBe(60);
    });
    test('interior angle error cases', () => {
        expect(() => interiorAngle(0)).toThrow();
    })
});

describe('testing polygonName', () => {
    test('names a square correctly', () => {
        expect(polygonName(4)).toBe('square');
    });
    test('names n-gon correctly', () => {
        expect(polygonName(27)).toBe('27-gon');
        expect(polygonName(1)).toBe('1-gon');
    });
});