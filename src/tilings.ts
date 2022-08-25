interface RegularTiling {
    polygon: string;
    count: number;
    type: "TESSELLATION" | "POLYHEDRON" | "HYPERBOLIC";
    name?: string;
}

//regularTiling(sides,count)

export const regularTiling = (sides: number, count: number): RegularTiling => {
    return({
        polygon: polygonName(sides),
        count: count,
        type: "POLYHEDRON",
        name: "Cube",
      });
  };

  const cube: RegularTiling = {
    polygon: "square",
    count: 3,
    type: "POLYHEDRON",
    name: "Cube",
  }

  const polygonName = (sides: number): string => {
    switch(sides){
        case 3: return("triangle");
        case 4: return("square");
        case 5: return("pentagon");
        case 6: return("hexagon");
        case 7: return("heptagon");
        case 8: return("octagon");
        case 9: return("nonagon");
        case 10: return("decagon");
        case 12: return("dodecagon");
        default: return(sides+"-gon");
    }
  }

  //working in degrees
  const interiorAngle = (sides: number): number => {
    return(180-360/sides);
  }