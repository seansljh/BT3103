import { Pie } from 'vue-chartjs'

export default {
  extends: Pie,
  data: function () {
    return {
        datacollection: {
            labels: ["Africa", "Asia", "North America"],
            datasets: [{
                label: "Population (millions)",
                backgroundColor: ["#3e95cd", "#8e5ea2","#c45850"],
                data: [2478,5267,433]
              }]
        },
        options: {
            title: {
              display: true,
              text: 'Predicted world population (millions) in 2050'
            },
            responsive: true,
            maintainAspectRatio: true
        }
    }
  },
  mounted () {
    this.renderChart(this.datacollection, this.options)
  }
}