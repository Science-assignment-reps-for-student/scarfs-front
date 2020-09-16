import React, { createRef } from 'react';
import Wave from './Wave';
import { WaveType } from '../../../../containers/Default/Wave/WaveContainer';
import { WaveCanvas } from '../style';

interface Props {
  waveData: WaveType[];
}

class WaveController extends React.Component<Props> {
  canvas: React.RefObject<HTMLCanvasElement>;
  ctx: CanvasRenderingContext2D;
  stageWidth: number;
  stageHeight: number;
  waves: Wave[];
  waveData: WaveType[];

  constructor(props) {
    super(props);
    this.waves = [];
    this.canvas = createRef();
    this.waveData = props.waveData;
  }
  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = 30;

    this.canvas.current.width = this.stageWidth;
    this.canvas.current.height = 50;
    this.ctx.scale(2, 2);
    this.resizeWave();
  }
  setWave(waveColors: WaveType[]) {
    waveColors.map(data => {
      const newWave = new Wave(data.color, data.pointNumber);
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
    this.setWave(this.waveData);
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
