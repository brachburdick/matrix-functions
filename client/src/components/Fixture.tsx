import Group from './Group'
// interface FixtureProps {
//     name: string,
//         id: number,
//         libid: number,
//         r: number,
//         g: number,
//         b: number,
//         alpha: number,
//         position: number[],
//         rectWidth?: number,
//         rectHeight?: number,
//         transparency?:number
// }
export class Fixture {
    constructor(
        name: string,
        id: number,
        libid: number,
        position: number[],
        r: number,
        g: number,
        b: number,
        alpha: number,
        rectWidth?: number,
        rectHeight?: number,
        transparency?:number) {
        this.name = name;
        this.id = id;
        this.libid = libid;
        this.r = r;
        this.g = g;
        this.b = b;
        this.alpha = alpha;
        this.position = position;
        this.rectHeight = rectHeight;
        this.rectWidth = rectWidth;
        this.transparency = transparency;
    }
    name: string;
    id: number;
    libid: number;
    r: number;
    g: number;
    b: number;
    alpha: number;
    position: number[];
    rectHeight?: number;
    rectWidth?:number;
    transparency?: number;
    }  

 
export class Par extends Fixture {
    constructor(name: string, id: number, libid: number, r: number, g: number, b: number, alpha: number, position: number[], rectWidth: number, rectHeight: number, transparency: number) {
      super(name, id, libid,position, r, g, b, alpha,rectWidth, rectHeight, transparency)
    }
    }
  

export class Mover extends Fixture {
      constructor(name: string, 
        id: number, 
        libid: number, 
        position: number[], 
        r: number, 
        g: number, 
        b: number, 
        alpha: number, 
        rotation: number,
        tilt:number, 
        rectWidth?: number,
        rectHeight?: number,
        transparency?: number) {
        super(name, id, libid, position,r, g, b, alpha,rectWidth,rectHeight, transparency);
        this.rotation = rotation;
        this.tilt = tilt;
    }
    rotation: number;
    tilt: number;
    }