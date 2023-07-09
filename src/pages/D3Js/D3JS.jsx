import CanvasChart from './CanvasChart/CanvasChart';
import SvgChart from './SvgChart/SvgChart';

import { d3js, d3h1 } from "./D3JS.module.scss";
import { UserData } from "../../Data.js";

const D3Js = () => {


  return (
    <div className={d3js}>
      <h1 className={d3h1}>React + D3.js + Canvas Example</h1>
      <CanvasChart data={UserData} width={400} height={200} />
      <SvgChart data={UserData} />
    </div>
  );
};

export default D3Js;
