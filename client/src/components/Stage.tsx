import React, { useRef, useEffect } from 'react';
import p5 from 'p5';
import {useStore} from '../store/Store';
import {Fixture, Mover} from './Fixture'
interface StageProps {
  //sprites:Mover[]
} 

const Stage : React.FC<StageProps> = () => {
  const canvasRef = useRef<HTMLDivElement | null>(null);
  const RECT_WIDTH: number = 10
  const RECT_HEIGHT: number = 40
  let t:number = 0
  let p5Instance: p5 | null = null; 
  const fixtures = useStore((state) => state.groups.map(group => group.fixtures).flat());
 
  
  // useEffect will cause rerendering of sketch when dependencies change
  useEffect(() => {
    console.log('useEffect')
    const fixturesReference = {current: fixtures}
    const sketch = (p: p5) => {
      p.setup = () => {
        console.log('Setup')
        p.createCanvas(600, 300).parent(canvasRef.current!);
        p.angleMode(p.DEGREES); // Set the angle mode to degrees
      };


      p.draw = () => {
        p.background(10, 10); // translucent background (creates trails)
       
        console.log('drawing- props.sprites:', fixturesReference)
        for(let i: number = 0; i< fixtures.length; i++){
        
          //the following is the subroutine for creating a Sprite
          p.push(); // Start a new drawing state
          p.translate(fixtures[i].position[0], fixtures[i].position[1]); // Move the origin to the rectangle's position
          p.rotate(fixtures[i].rotation); // Rotate the rectangle
          
          // We draw the rectangle with its center at the origin, as per your requirement
          p.fill(fixtures[i].r, fixtures[i].g, fixtures[i].b,  220); // Set the color (RGBA)
          p.rect(-RECT_WIDTH / 2, 0, RECT_WIDTH, RECT_HEIGHT);
          
          p.pop(); // Restore the original drawing state
        }

      };
    };
    if (p5Instance) {
      p5Instance.remove();
    }

    p5Instance = new p5(sketch);
    return () => {
      fixturesReference.current = fixtures;
      if (p5Instance) {
        p5Instance.remove();
        p5Instance = null;
      }
    };
  }, [fixtures]);


  return <div ref={canvasRef}></div>;
};

export default Stage;
