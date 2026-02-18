// Variablen festlegen
const margin = { top: 20, right: 20, bottom: 30, left: 40 },
    width = 650 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

async function getPiechart () {
    let response = await fetch('http://localhost:3001/wetterdaten/temperatur');
    let rawData = await response.json();

    const temperatures = rawData.hourly.temperature_2m;
    let over20 = temperatures.filter(t => t > 20).length;
    let under20 = temperatures.length - over20;

    const data = [
    { label: "Zeit über 20°C", value: over20 },
    { label: "Zeit unter 20°C", value: under20 }
    ];

    const radius = Math.min(width, height) / 2 - margin.top;

    // SVG-Elemente erstellen
    const piechart = d3
        .select("#piechart")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr('transform', `translate(${width / 2}, ${height / 2})`);

    const pie = d3.pie()
        .value(d => d.value);

    const data_ready = pie(data);

    const arc = d3.arc()
        .innerRadius(0)
        .outerRadius(radius);

    piechart.selectAll('slices')
        .data(data_ready)
        .enter()
        .append('path')
        .attr('d', arc)
        .attr('fill', (d, i) => d3.schemeCategory10[i])
        .attr('stroke', 'white')
        .style('stroke-width', '2px');

    piechart.selectAll('labels')
        .data(data_ready)
        .enter()
        .append('text')
        .text(d => d.data.label)
        .attr('transform', d => `translate(${arc.centroid(d)})`)
        .style('text-anchor', 'middle')
        .style('font-size', '22px')
        .style('fill', 'black')
        .style('font-family', 'Arial');
}


getPiechart();
    


async function getLineChart() {
    //Get API data
    const response = await fetch('http://localhost:3001/wetterdaten/wolkenbedeckung');
    const rawData = await response.json();

    //Extraction time and cloud coverage
    const timeArray = rawData.hourly.time;
    const cloudCoverArray = rawData.hourly.cloud_cover;
    const data = timeArray.map((t, i) => ({
        x: new Date(t),
        y: cloudCoverArray[i]
    }));

    //Create SVG container
    const linechart = d3
        .select("#linechart")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    //Set the xy-axis to the time scale
    const xLine = d3.scaleTime()
        .domain(d3.extent(data, d => d.x))
        .range([0, width]);

    const yLine = d3.scaleLinear()
        .domain([0, 100])
        .range([height, 0]);

    //Add x-axis
    linechart.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(d3.axisBottom(xLine).tickFormat(d3.timeFormat("%Y-%m-%d")))
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("transform", "rotate(-45)");

    //Add y-axis
    linechart.append("g")
        .call(d3.axisLeft(yLine));

    //Define polyline function
    const line = d3.line()
        .x(d => xLine(d.x))
        .y(d => yLine(d.y));

    //Add fold lines
    linechart.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "tomato")
        .attr("stroke-width", 2)
        .attr("d", line);


    linechart.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", d => xLine(d.x))
        .attr("cy", d => yLine(d.y))
        .attr("r", 2)
        .attr("fill", "tomato");

}

getLineChart();
