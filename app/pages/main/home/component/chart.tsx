"use client";
import "chart.js/auto";
import dynamic from "next/dynamic";
import { useState } from "react";
import { ChartData, ChartOptions } from "chart.js";

const Bar = dynamic(() => import("react-chartjs-2").then((mod) => mod.Bar), {
  ssr: false,
});

export const CustomChart = () => {
  const [view, setView] = useState<"month" | "year">("year");

  const data: ChartData<"bar"> = {
    labels: [
      "Jan 23", "Feb 23", "Mar 23", "Apr 23", "May 23",
      "Jun 23", "Jul 23", "Aug 23", "Sep 23", "Oct 23",
      "Nov 23", "Dec 23",
    ],
    datasets: [
      {
        label: "Lorem Ipsum",
        data: [80, 60, 120, 30, 100, 70, 90, 100, 60, 140, 40, 100],
        backgroundColor: "#5E99A0", 
        barThickness: 16,
      },
      {
        label: "Lorem Ipsum",
        data: [50, 40, 80, 20, 60, 40, 70, 50, 50, 100, 30, 60],
        backgroundColor: "#7DB6BC", 
        barThickness: 16,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
        align: "end",
        labels: {
          boxWidth: 10,
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        max: 160,
        grid: {
          color: "#e5e7eb",
        },
        ticks: {
          stepSize: 20,
          callback: (value) => `$${value}`,
        },
      },
    },
  };

  return (
    <div className="overflow-hidden rounded-2xl bg-[#FFFFFF] shadow">
      <div className="px-4 py-5 sm:p-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-lg font-bold text-[#252F40]">
              Revenue Graph
            </h3>
           
          </div>
          <div className="grid grid-cols-2 gap-1">
            <button
              className={` rounded px-3 py-1 ${
                view === "month" ? "text-[#4DB1BC] border border-[#5E99A0] " : "text-[#AFAFAF]"
              }`}
              onClick={() => setView("month")}
            >
              Month
            </button>
            <button
              className={`rounded px-3 py-1 ${
                view === "year" ? "text-[#4DB1BC] border border-[#5E99A0] " : "text-[#AFAFAF]"
              }`}
              onClick={() => setView("year")}
            >
              Year
            </button>
          </div>
        </div>
        <div className="relative lg:h-[240px]">
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};
