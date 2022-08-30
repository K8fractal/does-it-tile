import { interiorAngle} from "./tilings";

describe('testing interior angle formula', () => {
    test('interior angle of a triangle', () => {
        expect(interiorAngle(3)).toBe(60);
    });
});