/*
* process data example
* {"cpuUsage":"64.0%","memoryUsage":"2.6%","pid":1}
* ->
* [
*   {
*       data
*   }
* ]
*
*  chart data example
*  series = [
*       {
*           name: 'cpu usage',
*           data: ['10', '20', ...]
*       },
*       {
*           name: 'memory usage',
*           data: ['50', '70', ...]
*       },
*  ]
* */

class ChartProcData {

}
function procDataToChartData(procData) {
    let data = [];
    Object.keys(procData).map(key=> {
        if (key === "pid") {
            return;
        }
    })
}