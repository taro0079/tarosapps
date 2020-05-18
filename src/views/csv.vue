<template>
    <div>
        <v-row>
            <v-col>
                <v-file-input 
                    @change="fileChange" 
                    accept='.csv'
                    label="File input" 
                    type="file" ></v-file-input>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-data-table
                    :headers="headers"
                    :items="datas"
                    class="elevation-1"
                >
                    <template slot="items" slot-scope="props">
                        <td> {{ props.item.x }}</td>
                        <td> {{ props.item.y }}</td>
                    </template>

                </v-data-table>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-btn 
                    color="success"
                    v-on:click="Draw"
                >Draw</v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <div id='chartContainer' style="height: 370px; width: 100%"></div>
            </v-col>
        </v-row>
    </div>
</template>
<script>
import CanvasJS from '../views/canvasjs.min.js'
export default {
    data: () => ({
        headers: [
            {
                text: "x",
                align: "left",
                sortable: false,
                value: "x"
            },
            {
                text: "y",
                align: "left",
                value: "y",
            }
        ],
        datas: [],
        fdatas: [],
        graphdata: {
            animationEnabled: true,
            theme: "light2",
            axisX: {
                title: "Current (A)",
                crosshair: {
                    enabled: true
                }
            }, 
            axisY:{
                title: "Voltage (V)",
                crosshair: {
                    enabled: true
                }
            },
            toolTip: {
                shared: true
            },
            data: [{
                type: 'line',
                name: "Alldata",
                markerType: "square",
                dataPoints: [] 
            }]
        }
    }),
    
    methods: {
        fileChange: function(file) {
            const File = file
            const reader = new FileReader()
            const datas = []
            const fdatas = []

            const loadFunc = () => {
                const lines = reader.result.split("\n")
                lines.forEach(element => {
                    const expdata = element.split(",")
                    if (expdata.length != 2){
                        return
                    }
                    const data = {
                        x: expdata[0],
                        y: expdata[1]
                    }
                    datas.push(data)

                    const fdata = {
                        x: parseFloat(expdata[0]),
                        y: parseFloat(expdata[1])
                    }
                    fdatas.push(fdata)
                })
                this.datas = datas
                this.fdatas = fdatas
                
            }
            reader.onload = loadFunc
            reader.readAsBinaryString(File)
        },
        Draw: function(){
            this.graphdata.data[0].dataPoints = this.fdatas
            console.log(this.graphdata.data[0])
            var chart = new CanvasJS.Chart("chartContainer", this.graphdata)
            chart.render()
        }
    },
    mounted: function(){
      //  var chart = new CanvasJS.Chart("chartContainer", this.graphdata)
      //  chart.render()
    }
}
</script>