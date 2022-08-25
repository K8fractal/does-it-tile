interface RegularTiling {
    polygon: string;
    count: number;
    type: "TESSELLATION" | "POLYHEDRON" | "HYPERBOLIC";
    name?: string;
}

//regularTiling(sides,count)

export const regularTiling = (sides: number, count: number): RegularTiling => {
    return(cube);
  };

  const cube: RegularTiling = {
    polygon: "square",
    count: 3,
    type: "POLYHEDRON",
    name: "Cube",
  }