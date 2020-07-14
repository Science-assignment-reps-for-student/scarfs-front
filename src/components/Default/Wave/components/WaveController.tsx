import React, { createRef } from 'react';
import Wave from './Wave';
import { WaveCanvas } from '../style';

interface Props {
  colors: string[];
}

class WaveController extends React.Component<Props> {
  canvas: React.RefObject<HTMLCanvasElement>;
  ctx: CanvasRenderingContext2D;
  stageWidth: number;
  stageHeight: number;
  waves: Wave[];
  colors: string[];

  constructor(props) {
    super(props);
    this.waves = [];
    this.canvas = createRef();
    this.colors = props.colors;
  }
  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = 20;

    this.canvas.current.width = this.stageWidth * 2;
    this.canvas.current.height = 30;
    this.ctx.scale(2, 2);
    this.resizeWave();
  }
  setWave(waveColors) {
    let count = 0;
    waveColors.map(waveColor => {
      const newWave = new Wave(waveColor, count);
      count++;
      this.waves.push(newWave);
    });
  }
  drawWave() {
    this.waves.map(wave => {
      wave.draw(this.ctx);
    });
  }
  resizeWave() {
    this.waves.map(wave => {
      wave.resize(this.stageWidth, this.stageHeight);
    });
  }
  animate() {
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
    this.drawWave();
    requestAnimationFrame(this.animate.bind(this));
  }
  setWaveController() {
    this.ctx = this.canvas.current.getContext('2d');
    window.addEventListener('resize', this.resize.bind(this), {
      once: false,
      passive: false,
      capture: false,
    });
    this.setWave(this.colors);
    this.resize();
    requestAnimationFrame(this.animate.bind(this));
  }
  componentDidMount() {
    this.setWaveController();
  }
  render() {
    return <WaveCanvas ref={this.canvas} />;
  }
}

export default WaveController;
