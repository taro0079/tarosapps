<template>
<div>
    <div id="chartContainer" style="height: 370px; width: 100%;"></div>
</div>
</template>
<script>
import  graphdraw from '../components/graph.js'
export default {

    mounted: function(){
        graphdraw()

    },

       
}
</script>