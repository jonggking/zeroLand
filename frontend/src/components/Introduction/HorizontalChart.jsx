import React from "react";
import { render } from "react-dom";
import { ResponsiveBar } from "@nivo/bar";

const HorizentalChart = () => {

  const data = [
    {
      id: "기타",
      index: "9",
      "🤔": 1.8
    },
    {
      id: "주변 사람들이 친환경적으로 행동하는 것을 비웃거나 무시한다",
      index: "8",
      "🤔": 11.2
    },
    {
      id:
        "친환경적 행동을 해도 환경문제가 개선되지 않을 것이라 실천의 필요를 못 느낀다",
      index: "7",
      "🤔": 17.9
    },
    {
      id: "친환경 행동을 실천하고 싶지만 방법을 잘 모른다",
      index: "6",
      "🤔": 23.6
    },
    {
      id:
        "친환경적인 행동이 나의 건강에는 오히려 해가 될 수 있다(예: 미세먼지 많은 날 걸어서 이동)",
      index: "5",
      "🤔": 33.6
    },
    {
      id: "환경에 나쁜 영향을 주는 행동들이 이미 습관이 되어 바꾸기 어렵다",
      index: "4",
      "🤔": 36.3
    },
    {
      id: "친환경적인 행동은 비용이 많이 든다",
      index: "3",
      "🤔": 41
    },
    {
      id: "친환경적인 행동(예: 대중교통 이용)은 시간이 많이 소비된다",
      index: "2",
      "🤔": 43.7
    },
    {
      id: "제품을 구매하거나 행동할 때 친환경적인 대안이 없거나 품질이 떨어진다",
      index: "1",
      "😮": 44.1
    }
  ];

  const keys = ["😮", "🤔"];
  const colors = ["#1D735A", "#68A694"];

  render(
    <div style={{ height: "550px" }}>
      <ResponsiveBar
        data={data}
        keys={keys}
        indexBy="id"
        margin={{
          top: 100,
          right: 300,
          bottom: 100,
          left: 700
        }}
        colors={colors}
        padding={0.25}
        layout="horizontal"
        borderColor="inherit:darker(1.6)"
        enableLabel={false}
        enableGridX={true}
        enableGridY={false}
        theme={{
          axis: {
            domain: {
              line: {
                stroke: "#a9acbe",
                strokeWidth: 2
              }
            }
          },
          grid: {
            line: {
              stroke: "#e7e8ec",
              strokeWidth: 2
            }
          }
        }}
        layers={["grid", "axes", "bars", "markers"]}
        legends={[
          {
            dataFrom: "keys",
            data: keys.map((id, info) => ({
              id,
              info
            }))
          }
        ]}
      />
    </div>,
    document.getElementById("root")
  );
};

export default HorizentalChart;