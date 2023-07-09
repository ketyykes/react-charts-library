import { Pie } from "react-chartjs-2";
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from "chart.js/auto";

function PieChart({ chartData }) {
  return <Pie data={chartData} />;
}

PieChart.propTypes = {
  chartData: PropTypes.array.isRequired,
};
export default PieChart;
