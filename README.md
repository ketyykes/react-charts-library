# react-charts-library

## 目錄結構
```
│  App.jsx
│  app.module.scss
│  Data.js
│  global.scss
│  main.jsx
│
├─components
├─pages
│  ├─ChartJs2
│  │  │  ChartJs2.jsx
│  │  │  chartjs2.module.scss
│  │  │
│  │  └─components
│  │          BarChart.jsx
│  │          LineChart.jsx
│  │          PieChart.jsx
│  │
│  └─D3Js
│      │  D3JS.jsx
│      │  D3JS.module.scss
│      │
│      ├─CanvasChart
│      │      CanvasChart.jsx
│      │
│      └─SvgChart
│              SvgChart.jsx
│
└─routers
        index.jsx
```

以下是每個檔案或資料夾的簡要說明：

- `App.jsx`: 主要的應用程式元件。
- `app.module.scss`: 應用程式元件的樣式定義。
- `Data.js`: 資料處理或資料庫相關的檔案。
- `global.scss`: 全域樣式定義。
- `main.jsx`: 專案的進入點。

- `components/`: 存放共用元件的資料夾。
- `pages/`: 存放各個頁面元件的資料夾。
  - `ChartJs2/`: 使用 Chart.js 套件的相關元件。
    - `ChartJs2.jsx`: Chart.js 相關的主要元件。
    - `chartjs2.module.scss`: Chart.js 相關元件的樣式定義。
    - `components/`: 存放與 Chart.js 相關的子元件。
      - `BarChart.jsx`: 柱狀圖元件。
      - `LineChart.jsx`: 折線圖元件。
      - `PieChart.jsx`: 圓餅圖元件。

  - `D3Js/`: 使用 D3.js 套件的相關元件。
    - `D3JS.jsx`: D3.js 相關的主要元件。
    - `D3JS.module.scss`: D3.js 相關元件的樣式定義。
    - `CanvasChart/`: 使用 Canvas 的圖表元件。
      - `CanvasChart.jsx`: 使用 Canvas 的圖表元件。
    - `SvgChart/`: 使用 SVG 的圖表元件。
      - `SvgChart.jsx`: 使用 SVG 的圖表元件。

- `routers/`: 存放路由相關設定的資料夾。
  - `index.jsx`: 路由設定的主要檔案。

## 安裝

在執行這個專案之前，請確保您的環境已經安裝了以下軟體：

- Node.js
- pnpm

接下來，執行以下步驟：

1. 克隆這個專案到您的本機端。
2. 在專案根目錄下執行終端機命令，安裝相依套件：

```
pnpm install
```

3. 安裝完成後，您可以執行以下命令開始開發：

```
pnpm run dev
```

## 使用的套件

這個專案使用了以下主要的套件：

- chart.js: 版本 4.3.0
- d3: 版本 7.8.5
- react: 版本 18.2.0
- react-chartjs-2: 版本 5.2.0
- react-dom: 版本 18.2.0
- react-router: 版本 6.12.1
- react-router-dom: 版本 6.12.1
