import { Line } from "react-chartjs-2";
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from "chart.js/auto";
function LineChart({ chartData }) {
  return <Line data={chartData} />;
}

LineChart.propTypes = {
  chartData: PropTypes.array.isRequired,
};
export default LineChart;
