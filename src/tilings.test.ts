import { register } from "ts-node";
import {
  interiorAngle,
  polygonName,
  regularTiling,
  tilingType,
} from "./tilings";

describe("testing interior angle formula", () => {
  test("interior angle of a triangle", () => {
    expect(interiorAngle(3)).toBe(60);
  });
  test("interior angle of a regular pentagon", () => {
    expect(interiorAngle(5)).toBe(108);
  });
  test("interior angle error cases", () => {
    expect(() => interiorAngle(0)).toThrow();
  });
});

describe("testing polygonName", () => {
  test("names a square correctly", () => {
    expect(polygonName(4)).toBe("square");
  });
  test("names n-gon correctly", () => {
    expect(polygonName(27)).toBe("27-gon");
    expect(polygonName(30)).toBe("30-gon");
  });
  test("minimum number of sides", () => {
    expect(() => polygonName(1)).toThrow();
  });
});

describe("testing regularTiling", () => {
  test("tesselations", () => {
    expect(regularTiling(3, 6).polygon).toBe("triangle");
    expect(regularTiling(3, 6).curvatureType).toBe("FLAT TESSELLATION");
    expect(regularTiling(4, 4).curvatureType).toBe("FLAT TESSELLATION");
    expect(regularTiling(6, 3).curvatureType).toBe("FLAT TESSELLATION");
    expect(regularTiling(3, 6).name).toBe(undefined);
  });
  test("polyhedra", () => {
    expect(regularTiling(3, 4).curvatureType).toBe("POLYHEDRON");
    expect(regularTiling(4, 3).name).toBe("Cube");
    expect(regularTiling(3, 3).name).toBe("Tetrahedron");
  });

  test("hyperbolic", () => {
    expect(regularTiling(5, 4).curvatureType).toBe("HYPERBOLIC");
    expect(regularTiling(10, 3).curvatureType).toBe("HYPERBOLIC");
    expect(regularTiling(3, 8).name).toBe(undefined);
  });
});
