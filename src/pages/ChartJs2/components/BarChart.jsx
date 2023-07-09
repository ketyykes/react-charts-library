import { Bar } from "react-chartjs-2";
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from "chart.js/auto";

function BarChart({ chartData }) {
  return <Bar data={chartData} />;
}

BarChart.propTypes = {
  chartData: PropTypes.array.isRequired,
};
export default BarChart;

