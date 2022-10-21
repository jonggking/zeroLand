import { useState, useRef } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto"; 

export const BarChart = () => {
  const ref = useRef();

  const data = {
    labels: ["제품을 구매할 때 친환경적인 대안이 없거나 품질이 떨어진다", "친환경적인 행동은 시간이 많이 소비된다", "친환경적인 행동은 비용이 많이 든다", "환경에 영향을 주는 행동이 습관이 되어 바꾸기 어렵다", "친환경적인 행동이 건강에는 오히려 해가 될 수 있다", "친환경적인 행동 실천 방법을 모른다", "친환경적인 행동을 해도 문제는 개선되지 않을 것이다", "주변의 친환경적인 행동을 비웃거나 무시한다", "기타"],
    datasets: [
      {
        label: "확률(%)",
        data: [44.1, 43.7, 41, 36.3, 33.6, 23.6, 17.9, 11.2, 1.8],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  return <Bar ref={ref} data={data} />;
};
export default BarChart;