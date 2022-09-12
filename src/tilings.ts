export type tilingType =
  | "FLAT TESSELLATION"
  | "POLYHEDRON"
  | "HYPERBOLIC"
  | "BRANCHING";
interface RegularTiling {
  polygon: string;
  count: number;
  curvatureType: tilingType;
  name?: string;
}

// const regularPolyhedraNames = new Map<[number, number], string>([
//   [[3, 3], "Tetrahedron"],
//   [[3, 4], "Octahedron"],
//   [[3, 5], "Icosahedron"],
//   [[4, 3], "Cube"],
//   [[5, 3], "Dodecahedron"],
// ]);
const regularPolyhedraName = (sides: number, count: number): string => {
  //key is 1000*sides+count
  const regularPolyhedraNames = new Map<number, string>([
    [3003, "Tetrahedron"],
    [3004, "Octahedron"],
    [3005, "Icosahedron"],
    [4003, "Cube"],
    [5003, "Dodecahedron"],
  ]);
  return (
    regularPolyhedraNames.get(sides * 1000 + count) || "not a regular polyhedra"
  );
};

export const regularTiling = (sides: number, count: number): RegularTiling => {
  let angleSum = interiorAngle(sides) * count;
  // first check
  let regularTilingType: tilingType;
  let name: string | undefined;
  if (angleSum < 360) {
    regularTilingType = "POLYHEDRON";
    //additional checks: not needed for regular case
    name = regularPolyhedraName(sides, count);
  } else if (angleSum == 360) {
    //additional checks: not needed for regular case
    regularTilingType = "FLAT TESSELLATION";
  } else {
    //angleSum > 360
    regularTilingType = "HYPERBOLIC";
  }

  return {
    polygon: polygonName(sides),
    count: count,
    curvatureType: regularTilingType,
    name,
  };
};

const cube: RegularTiling = {
  polygon: "square",
  count: 3,
  curvatureType: "POLYHEDRON",
  name: "Cube",
};

export const polygonName = (sides: number): string => {
  switch (sides) {
    case 3:
      return "triangle";
    case 4:
      return "square";
    case 5:
      return "pentagon";
    case 6:
      return "hexagon";
    case 7:
      return "heptagon";
    case 8:
      return "octagon";
    case 9:
      return "nonagon";
    case 10:
      return "decagon";
    case 12:
      return "dodecagon";
    default:
      if (sides < 3) {
        throw new Error("polygons must have at least 3 sides");
      }
      return sides + "-gon";
  }
};

//working in degrees
export const interiorAngle = (sides: number): number => {
  if (sides < 3) {
    throw new Error("polygons must have at least 3 sides");
  }
  return 180 - 360 / sides;
};
