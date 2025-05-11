import type { ChartOptions } from 'lightweight-charts'

export const chartOptionsConfig = (width: number): ChartOptions => ({
  width,
  layout: {
    background: { type: 'solid', color: 'white' },
    textColor: '#000000',
  },
  grid: {
    vertLines: {
      color: '#eee',
      style: 0,
      visible: true,
    },
    horzLines: {
      color: '#eee',
      style: 0,
      visible: true,
    },
  },
  timeScale: {
    timeVisible: true,
    secondsVisible: true,
    rightOffset: 0,
    barSpacing: 10,
    minBarSpacing: 1,
    fixLeftEdge: false,
    fixRightEdge: false,
    lockVisibleTimeRangeOnResize: true,
    borderVisible: true,
    borderColor: '#d1d4dc',
    maxBarSpacing: 0,
    rightBarStaysOnScroll: false,
    visible: false,
    shiftVisibleRangeOnNewBar: false,
    allowShiftVisibleRangeOnWhitespaceReplacement: false,
    ticksVisible: false,
    uniformDistribution: false,
    minimumHeight: 0,
    allowBoldLabels: false,
    ignoreWhitespaceIndices: false,
  },
  autoSize: true,
})
