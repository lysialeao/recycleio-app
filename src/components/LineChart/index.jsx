import {useRef, useEffect} from "react"
import PropTypes from 'prop-types'
import * as d3 from "d3"

export const LineChart = ({
  data
}) => {
  const ref = useRef(null);

  useEffect(() => {

      const svg = d3.select(ref.current);
      const margin = { top: 20, right: 20, bottom: 30, left: 40 };
      const width = +svg.attr("width") - margin.left - margin.right;
      const height = +svg.attr("height") - margin.top - margin.bottom;

      const x = d3.scaleBand().rangeRound([0, width]).padding(0.1);
      const y = d3.scaleLinear().rangeRound([height, 0]);

      const greens = ["#e5f5e0", "#a1d99b", "#31a354"];
      const color = d3.scaleOrdinal(greens);


      const g = svg.append("g")
          .attr("transform", `translate(${margin.left},${margin.top})`);

      x.domain(data.map(d => d.name));
      y.domain([0, d3.max(data, d => d.count)]);

      g.append("g")
          .attr("class", "axis axis--x")
          .attr("transform", `translate(0,${height})`)
          .call(d3.axisBottom(x));

      g.append("g")
          .attr("class", "axis axis--y")
          .call(d3.axisLeft(y).ticks(10))
      .append("text")
          .attr("transform", "rotate(-90)")
          .attr("y", 6)
          .attr("dy", "0.71em")
          .attr("text-anchor", "end")
          .text("Count");

      g.selectAll(".bar")
          .data(data)
          .enter().append("rect")
          .attr("class", "bar")
          .attr("x", d => x(d.name))
          .attr("y", d => y(d.count))
          .attr("width", x.bandwidth())
          .attr("height", d => height - y(d.count))
          .attr("fill", d => color(d.name));

          g.selectAll(".bar-value")
          .data(data)
          .enter().append("text")
          .attr("class", "bar-value")
          .attr("x", d => x(d.name) + x.bandwidth() / 2)
          .attr("y", d => y(d.count) - 5)
          .attr("text-anchor", "middle")
          .text(d => d.count);

      return () => svg.selectAll('*').remove();

  }, [data]);

  return (
      <svg width="1000" height="500" ref={ref}></svg>
  );
}

LineChart.propTypes = {
  data: PropTypes.array
}