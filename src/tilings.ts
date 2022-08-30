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

  export const polygonName = (sides: number): string => {
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
        default: 
          if(sides < 3){
            throw new Error("polygons must have at least 3 sides");
          }
          return(sides+"-gon");
    }
  }

  //working in degrees
  export const interiorAngle = (sides: number): number => {
    if(sides < 3){
      throw new Error("polygons must have at least 3 sides");
    }
    return(180-360/sides);
  }