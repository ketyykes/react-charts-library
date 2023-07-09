import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';

// D3.js 庫本身並不是一個 default export，它將多個功能封裝在一個物件中，而不是一個單獨的 default export。因此我們需要使用 * as d3 語法來導入整個 D3.js 物件。

const CanvasChart = ({ data, width, height }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // 使用D3.js繪製圖表
    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.userGain)]) // 設定比例尺的範圍
      .range([height, 0]); // 設定輸出的範圍

    context.clearRect(0, 0, width, height);
    context.fillStyle = 'steelblue';

    data.forEach((d, i) => {
      const barHeight = height - yScale(d.userGain);
      context.fillRect(i * 60, yScale(d.userGain), 40, barHeight);
    });
  }, [data, width, height]);

  return <canvas ref={canvasRef} width={width} height={height} />;
};

CanvasChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      year: PropTypes.number.isRequired,
      userGain: PropTypes.number.isRequired,
      userLost: PropTypes.number.isRequired,
    })
  ).isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default CanvasChart;


