<template>
<div class="champions-league">
    <el-row >
        <el-col :span="4">
            <div style="border: 1px solid black">32강</div>
            <Table :teams="team18_19['32'].A" />
            <Table :teams="team18_19['32'].B" />
            <Table :teams="team18_19['32'].C" />
            <Table :teams="team18_19['32'].D" />
            <Table :teams="team18_19['32'].E" />
            <Table :teams="team18_19['32'].F" />
            <Table :teams="team18_19['32'].G" />
            <Table :teams="team18_19['32'].H" />
            <!-- <Table />
            <Table />
            <Table />
            <Table />
            <Table />
            <Table />
            <Table /> -->
        </el-col>
        <el-col :span="4">16강</el-col>
        <el-col :span="4">8강</el-col>
        <el-col :span="4">4강</el-col>
        <el-col :span="4">결승</el-col>
    </el-row>
    <el-button>Button</el-button>
</div>
</template>

<script>

import team18_19 from '@/data/2018_2019.js';
import * as d3 from 'd3'
import Table from '@/views/BracketTable';

export default {
    components: {
        Table,
    },
    data() {
        return {
            testData: {
                name: 'Eve',
                children: [
                    {
                        name: '2',
                    }
                ],
            },
            team18_19,
        };
    },
    mounted() {
        this.$nextTick(() => {
            const test = {
                "name": "Eve",
                "children": [
                    {
                        "name": "Cain"
                    },
                    {
                        "name": "Seth",
                        "children": [
                            {
                                "name": "Enos"
                            },
                            {
                                "name": "Noam"
                            }
                        ]
                    },
                    {
                        "name": "Abel"
                    },
                    {
                        "name": "Awan",
                        "children": [
                            {
                                "name": "Enoch"
                            }
                        ]
                    },
                    {
                        "name": "Azura"
                    }
                ]
            };
            /*
            console.log(z2018_2019)
            console.log(this.testData)
            console.log(root)
            // const tree = d3.tree().size([200, 200]);
            const svg = d3.select('.champions-league').append('svg').attr('viewBox', [-20, -20, 800, 800]);

            const tree = function(data) {
                const root = d3.hierarchy(data);
                root.dx = 10;
                root.dy = 800 / (root.height + 1);
                return d3.tree().nodeSize([root.dx, root.dy])(root);
            }
            const root = tree(test);

            let x0 = Infinity;
            let x1 = -x0;
            root.each(d => {
                if (d.x > x1) x1 = d.x;
                if (d.x < x0) x0 = d.x;
            });

            const g = svg.append("g")
                .attr('transform', `translate(${root.dy / 3}, ${root.dx - x0})`);
            

            let node = g.append("g")
                .attr("stroke", "#fff")
                .attr("stroke-width", 2)
                .selectAll(".node");

            let link = svg.append("g")
                .attr("fill", "none")
                .attr("stroke", "#000")
                // .attr("stroke-width", "2")
                .selectAll(".link");

            let text = svg.append("g")
                .attr("fill", "none")
                .attr("stroke", "#000")
                // .attr("stroke-width", "2")
                .selectAll(".text");

            node = node.data(root.descendants())
                .enter()
                .append('circle')
                .attr("transform", d => `translate(${d.y},${d.x})`)
                .attr('r', 4);

            link = link.data(root.links())
                .enter()
                .append('line')
                .classed('link', true)
                .attr('x1', function(d) {return d.source.x;})
                .attr('y1', function(d) {return d.source.y;})
                .attr('x2', function(d) {return d.target.x;})
                .attr('y2', function(d) {return d.target.y;});
            
            text = text.data(root.descendants())
                .enter()
                .append('text')
                .attr('x', function(d) { return d.x})
                .attr('y', function(d) { return d.y})
                .attr('dx', '-0.5em')
                .attr('dy', '0em')
                .attr('fill', 'black')
                .text(function(d) { return d.data.name })
                */
        });
    },
}
</script>
<style>
</style>
