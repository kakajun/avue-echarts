// 迁徙图
function flaymap() {
  const data = {
    geoCoordMap: {
      // 可以在地图上显示的城市的坐标信息
      安徽省铜陵: [117.81154, 30.945515],
      长春: [125.8154, 44.2584],
      长沙: [113.0823, 28.2568],
      贵阳: [106.6992, 26.7682],
      杨凌: [109.1162, 34.2004],
      深圳: [114.5435, 22.5439],
      济南: [117.1582, 36.8701],
      海口: [110.3893, 19.8516],
      沈阳: [123.1238, 42.1216],
      武汉: [114.3896, 30.6628],
      红安: [114.23, 31.1],
      昆明: [102.9199, 25.4663],
      杭州: [119.5313, 29.8773],
      成都: [103.9526, 30.7617],
      拉萨: [91.1865, 30.1465],
      天津: [117.4219, 39.4189],
      合肥: [117.29, 32.0581],
      呼和浩特: [111.4124, 40.4901],
      哈尔滨: [127.9688, 45.368],
      北京: [116.4551, 40.2539],
      南京: [118.8062, 31.9208],
      南宁: [108.479, 23.1152],
      南昌: [116.0046, 28.6633],
      乌鲁木齐: [87.9236, 43.5883],
      上海: [121.4648, 31.2891],
      三亚: [109.5, 18.2]
    },
    series: [
      {
        name: '合肥',
        data: [
          [{ name: '合肥' }, { name: '长春', value: 66 }],
          [{ name: '合肥' }, { name: '长沙', value: 66 }],
          [{ name: '合肥' }, { name: '贵阳', value: 66 }],
          [{ name: '合肥' }, { name: '杨凌', value: 66 }],
          [{ name: '合肥' }, { name: '深圳', value: 66 }],
          [{ name: '合肥' }, { name: '济南', value: 66 }],
          [{ name: '合肥' }, { name: '海口', value: 66 }],
          [{ name: '合肥' }, { name: '沈阳', value: 66 }],
          [{ name: '合肥' }, { name: '武汉', value: 66 }],
          [{ name: '合肥' }, { name: '昆明', value: 66 }],
          [{ name: '合肥' }, { name: '合肥', value: 118 }],
          [{ name: '合肥' }, { name: '杭州', value: 66 }],
          [{ name: '合肥' }, { name: '成都', value: 66 }],
          [{ name: '合肥' }, { name: '拉萨', value: 66 }],
          [{ name: '合肥' }, { name: '天津', value: 66 }],
          [{ name: '合肥' }, { name: '呼和浩特', value: 66 }],
          [{ name: '合肥' }, { name: '哈尔滨', value: 66 }],
          [{ name: '合肥' }, { name: '北京', value: 66 }],
          [{ name: '合肥' }, { name: '南宁', value: 66 }],
          [{ name: '合肥' }, { name: '南昌', value: 66 }],
          [{ name: '合肥' }, { name: '乌鲁木齐', value: 66 }],
          [{ name: '合肥' }, { name: '上海', value: 66 }]
        ]
      }
    ]
  }
  return data
}
export default {
  flaymap: flaymap(),
  // 柱形图
  bar: {
    categories: ['2016年', '2017年', '2018年', '2019年'],
    series: [
      {
        name: '本期',
        data: [210106.26, 191006.83, 186081.48, 186081.48]
      },
      {
        name: '累计',
        data: [2219897.86, 2234577.44, 2632851.08, 186081.48]
      }
    ],
    subcategories: ['分类1', '分类2']
  },
  progresscircle: [
    {
      value: 40.6,
      name: '2018年03月'
    }
  ],
  pictorialbar: {
    categories: ['2016年', '2017年', '2018年', '2019年'],
    series: [
      {
        name: '本期',
        data: [21010.26, 19100.83, 18608.48, 18608.48]
      }
    ]
  },
  // 折线图
  line: {
    categories: ['2016年', '2017年', '2018年'],
    series: [
      {
        name: '净资产收益率(%)',
        data: [14.3954, 13.3465, 12.2993]
      },
      {
        name: '销售(营业)收入增长率(%)',
        data: [0.6328, 0.6328, 12.7763]
      }
    ]
  },
  // 饼图
  pie: [
    {
      name: '营业成本',
      value: 106599.77
    },
    {
      name: '销售费用',
      value: 65839.4
    },
    {
      name: '管理费用',
      value: 34544.92
    },
    {
      name: '财务费用',
      value: 1087.57
    }
  ],
  // 雷达图
  radar: {
    indicator: [
      {
        name: '销售',
        max: 6500
      },
      {
        name: '管理',
        max: 16000
      },
      {
        name: '信息技术',
        max: 30000
      },
      {
        name: '客服',
        max: 38000
      },
      {
        name: '研发',
        max: 52000
      },
      {
        name: '市场',
        max: 25000
      }
    ],
    series: [
      {
        data: [
          {
            value: [4300, 10000, 28000, 35000, 50000, 19000],
            name: '预算分配（Allocated Budget）'
          },
          {
            value: [5000, 14000, 28000, 31000, 42000, 21000],
            name: '实际开销（Actual Spending）'
          }
        ]
      }
    ]
  },
  // 散点图
  scatter: [
    {
      data: [
        [1, 8.04],
        [2, 6.95]
      ]
    },
    {
      data: [
        [1, 4.04],
        [2, 3.95]
      ]
    }
  ],
  gauge: {
    min: 1,
    max: 100,
    label: '名称',
    value: 50,
    unit: '%'
  },
  threefourthsround: {
    chartData: [
      {
        name: '本科及以上1111',
        value: 13211,
        unit: '元'
      },
      {
        name: '高中',
        value: 42111,
        unit: '元'
      },
      {
        name: '初中及以下',
        value: 81711,
        unit: '元'
      },
      {
        name: '其他',
        value: 121711,
        unit: '元'
      }
    ]
  },
  // 柱线混合图
  biaxial: {
    categories: [
      '北京',
      '上海',
      '杭州',
      '深圳',
      '杭州',
      '深圳',
      '广州',
      '连云港'
    ],
    subcategories: ['分类1', '分类2'],
    series: [
      {
        name: '手机品牌',
        type: 'line',
        data: [113176, 134011, 90718, 349011, 95718, 66020, 57134, 46397]
      },
      {
        name: '其他手机品牌',
        data: [11317, 13490, 9058, 13411, 9018, 6520, 5234, 4397]
      },
      {
        name: 'aaaasaaa',
        type: 'line',
        yAxisIndex: 1,
        data: [10317, 10490, 9158, 11411, 9118, 6120, 5134, 3397]
      }
    ]
  },
  text: {
    value: '我是模拟数据'
  },
  pie2: [
    { name: '医药健康', value: 7482191285.2, percent: 76.6, unit: '元' },
    { name: '城镇开发', value: 839439276.1, percent: 8.59, unit: '元' },
    { name: '投资及其他', value: 760730651.0, percent: 7.79, unit: '元' },
    { name: '现代农业', value: 685395336.3, percent: 7.02, unit: '元' }
  ],
  Anibar: {
    2014: [
      {
        SNAME: '黑龙江',
        TBV: 4.14,
        SQ: 1304.8,
        BQ: 1358.77
      },
      {
        SNAME: '新疆兵团',
        TBV: -12.74,
        SQ: 2397.66,
        BQ: 2092.16
      },
      {
        SNAME: '河北',
        TBV: -13.77,
        SQ: 9.37,
        BQ: 8.08
      },
      {
        SNAME: '广东',
        TBV: 19.23,
        SQ: 176.1,
        BQ: 209.97
      },
      {
        SNAME: '内蒙',
        TBV: -10.1,
        SQ: 42.29,
        BQ: 38.02
      },
      {
        SNAME: '辽宁',
        TBV: -10.39,
        SQ: 197.36,
        BQ: 176.85
      },
      {
        SNAME: '湖北',
        TBV: 8.84,
        SQ: 51.23,
        BQ: 55.76
      },
      {
        SNAME: '江苏',
        TBV: 13.14,
        SQ: 184.2,
        BQ: 208.4
      },
      {
        SNAME: '湖南',
        TBV: 7.85,
        SQ: 31.2,
        BQ: 33.65
      },
      {
        SNAME: '广西',
        TBV: -4.32,
        SQ: 106.98,
        BQ: 102.36
      },
      {
        SNAME: '海南',
        TBV: -16.49,
        SQ: 261.31,
        BQ: 218.22
      },
      {
        SNAME: '新疆农业',
        TBV: -3.29,
        SQ: 5.77,
        BQ: 5.58
      },
      {
        SNAME: '江西',
        TBV: 9.42,
        SQ: 147.52,
        BQ: 161.41
      },
      {
        SNAME: '河南',
        TBV: -3.76,
        SQ: 32.97,
        BQ: 31.73
      },
      {
        SNAME: '安徽',
        TBV: 43.97,
        SQ: 20.65,
        BQ: 29.73
      },
      {
        SNAME: '甘肃',
        TBV: -25.95,
        SQ: 54.25,
        BQ: 40.17
      },
      {
        SNAME: '福建',
        TBV: 33.18,
        SQ: 8.74,
        BQ: 11.64
      },
      {
        SNAME: '新疆畜牧',
        TBV: 17.12,
        SQ: 11.33,
        BQ: 13.27
      },
      {
        SNAME: '吉林',
        TBV: 8.62,
        SQ: 1.74,
        BQ: 1.89
      },
      {
        SNAME: '宁夏',
        TBV: 9.67,
        SQ: 27.72,
        BQ: 30.4
      },
      {
        SNAME: '青海',
        TBV: 0.31,
        SQ: 3.19,
        BQ: 3.2
      },
      {
        SNAME: '山西',
        TBV: 9.38,
        SQ: 0.32,
        BQ: 0.35
      },
      {
        SNAME: '陕西',
        TBV: 25.16,
        SQ: 6.24,
        BQ: 7.81
      },
      {
        SNAME: '云南',
        TBV: -8.89,
        SQ: 44.88,
        BQ: 40.89
      },
      {
        SNAME: '北京',
        TBV: 78.53,
        SQ: 196.92,
        BQ: 351.56
      },
      {
        SNAME: '天津',
        TBV: 15.08,
        SQ: 144.21,
        BQ: 165.95
      },
      {
        SNAME: '贵州',
        TBV: 13.05,
        SQ: 5.21,
        BQ: 5.89
      },
      {
        SNAME: '浙江',
        TBV: -20.83,
        SQ: 13.49,
        BQ: 10.68
      },
      {
        SNAME: '上海',
        TBV: 14.22,
        SQ: 1058.36,
        BQ: 1208.91
      },
      {
        SNAME: '山东',
        TBV: -3.05,
        SQ: 2.95,
        BQ: 2.86
      },
      {
        SNAME: '重庆',
        TBV: 6.38,
        SQ: 60.97,
        BQ: 64.86
      },
      {
        SNAME: '四川',
        TBV: 1.23,
        SQ: 3.24,
        BQ: 3.28
      },
      {
        SNAME: '广州',
        TBV: 16.28,
        SQ: 6.88,
        BQ: 8
      },
      {
        SNAME: '南京',
        TBV: -6.45,
        SQ: 0.31,
        BQ: 0.29
      }
    ],
    2015: [
      {
        SNAME: '黑龙江',
        TBV: -3.34,
        SQ: 1358.77,
        BQ: 1313.36
      },
      {
        SNAME: '新疆兵团',
        TBV: 3.51,
        SQ: 2092.16,
        BQ: 2165.59
      },
      {
        SNAME: '河北',
        TBV: 40.1,
        SQ: 8.08,
        BQ: 11.32
      },
      {
        SNAME: '广东',
        TBV: 13.52,
        SQ: 209.97,
        BQ: 238.35
      },
      {
        SNAME: '内蒙',
        TBV: 38.37,
        SQ: 38.02,
        BQ: 52.61
      },
      {
        SNAME: '辽宁',
        TBV: -15.97,
        SQ: 176.85,
        BQ: 148.61
      },
      {
        SNAME: '湖北',
        TBV: -13.25,
        SQ: 55.76,
        BQ: 48.37
      },
      {
        SNAME: '江苏',
        TBV: 7.66,
        SQ: 208.4,
        BQ: 224.37
      },
      {
        SNAME: '湖南',
        TBV: 4.07,
        SQ: 33.65,
        BQ: 35.02
      },
      {
        SNAME: '广西',
        TBV: -3.77,
        SQ: 102.36,
        BQ: 98.5
      },
      {
        SNAME: '海南',
        TBV: -20.98,
        SQ: 218.22,
        BQ: 172.43
      },
      {
        SNAME: '新疆农业',
        TBV: -35.13,
        SQ: 5.58,
        BQ: 3.62
      },
      {
        SNAME: '江西',
        TBV: 3.74,
        SQ: 161.41,
        BQ: 167.44
      },
      {
        SNAME: '河南',
        TBV: -10.18,
        SQ: 31.73,
        BQ: 28.5
      },
      {
        SNAME: '安徽',
        TBV: -10.09,
        SQ: 29.73,
        BQ: 26.73
      },
      {
        SNAME: '甘肃',
        TBV: 3.19,
        SQ: 40.17,
        BQ: 41.45
      },
      {
        SNAME: '福建',
        TBV: 19.24,
        SQ: 11.64,
        BQ: 13.88
      },
      {
        SNAME: '新疆畜牧',
        TBV: -6.56,
        SQ: 13.27,
        BQ: 12.4
      },
      {
        SNAME: '吉林',
        TBV: -13.23,
        SQ: 1.89,
        BQ: 1.64
      },
      {
        SNAME: '宁夏',
        TBV: 3.13,
        SQ: 30.4,
        BQ: 31.35
      },
      {
        SNAME: '青海',
        TBV: 8.13,
        SQ: 3.2,
        BQ: 3.46
      },
      {
        SNAME: '山西',
        TBV: 17.14,
        SQ: 0.35,
        BQ: 0.41
      },
      {
        SNAME: '陕西',
        TBV: 18.31,
        SQ: 7.81,
        BQ: 9.24
      },
      {
        SNAME: '云南',
        TBV: 57.89,
        SQ: 40.89,
        BQ: 64.56
      },
      {
        SNAME: '北京',
        TBV: 5.91,
        SQ: 351.56,
        BQ: 372.33
      },
      {
        SNAME: '天津',
        TBV: 22.96,
        SQ: 165.95,
        BQ: 204.06
      },
      {
        SNAME: '贵州',
        TBV: 12.9,
        SQ: 5.89,
        BQ: 6.65
      },
      {
        SNAME: '浙江',
        TBV: -10.11,
        SQ: 10.68,
        BQ: 9.6
      },
      {
        SNAME: '上海',
        TBV: 21.98,
        SQ: 1208.91,
        BQ: 1474.62
      },
      {
        SNAME: '山东',
        TBV: 2.45,
        SQ: 2.86,
        BQ: 2.93
      },
      {
        SNAME: '重庆',
        TBV: 0.11,
        SQ: 64.86,
        BQ: 64.93
      },
      {
        SNAME: '四川',
        TBV: -10.98,
        SQ: 3.28,
        BQ: 2.92
      },
      {
        SNAME: '广州',
        TBV: 25.88,
        SQ: 8,
        BQ: 10.07
      },
      {
        SNAME: '南京',
        TBV: 27.59,
        SQ: 0.29,
        BQ: 0.37
      }
    ],
    2016: [
      {
        SNAME: '黑龙江',
        TBV: -7.53,
        SQ: 1313.36,
        BQ: 1214.47
      },
      {
        SNAME: '新疆兵团',
        TBV: 4.59,
        SQ: 2165.59,
        BQ: 2265.08
      },
      {
        SNAME: '河北',
        TBV: 18.55,
        SQ: 11.32,
        BQ: 13.42
      },
      {
        SNAME: '广东',
        TBV: -2.69,
        SQ: 238.35,
        BQ: 231.95
      },
      {
        SNAME: '内蒙',
        TBV: -12.36,
        SQ: 52.61,
        BQ: 46.11
      },
      {
        SNAME: '辽宁',
        TBV: -13.08,
        SQ: 148.61,
        BQ: 129.17
      },
      {
        SNAME: '湖北',
        TBV: 9.43,
        SQ: 48.37,
        BQ: 52.93
      },
      {
        SNAME: '江苏',
        TBV: 3.65,
        SQ: 224.37,
        BQ: 232.56
      },
      {
        SNAME: '湖南',
        TBV: 3.63,
        SQ: 35.02,
        BQ: 36.29
      },
      {
        SNAME: '广西',
        TBV: 2.62,
        SQ: 98.5,
        BQ: 101.08
      },
      {
        SNAME: '海南',
        TBV: -4.37,
        SQ: 172.43,
        BQ: 164.89
      },
      {
        SNAME: '新疆农业',
        TBV: 19.34,
        SQ: 3.62,
        BQ: 4.32
      },
      {
        SNAME: '江西',
        TBV: 4.4,
        SQ: 167.44,
        BQ: 174.8
      },
      {
        SNAME: '河南',
        TBV: 0.21,
        SQ: 28.5,
        BQ: 28.56
      },
      {
        SNAME: '安徽',
        TBV: -23.79,
        SQ: 26.73,
        BQ: 20.37
      },
      {
        SNAME: '甘肃',
        TBV: 2.03,
        SQ: 41.45,
        BQ: 42.29
      },
      {
        SNAME: '福建',
        TBV: -12.1,
        SQ: 13.88,
        BQ: 12.2
      },
      {
        SNAME: '新疆畜牧',
        TBV: 0.65,
        SQ: 12.4,
        BQ: 12.48
      },
      {
        SNAME: '吉林',
        TBV: 7.93,
        SQ: 1.64,
        BQ: 1.77
      },
      {
        SNAME: '宁夏',
        TBV: 0.51,
        SQ: 31.35,
        BQ: 31.51
      },
      {
        SNAME: '青海',
        TBV: 6.94,
        SQ: 3.46,
        BQ: 3.7
      },
      {
        SNAME: '山西',
        TBV: 17.07,
        SQ: 0.41,
        BQ: 0.48
      },
      {
        SNAME: '陕西',
        TBV: 36.36,
        SQ: 9.24,
        BQ: 12.6
      },
      {
        SNAME: '云南',
        TBV: 157.61,
        SQ: 64.56,
        BQ: 166.31
      },
      {
        SNAME: '北京',
        TBV: 10.55,
        SQ: 372.33,
        BQ: 411.6
      },
      {
        SNAME: '天津',
        TBV: 13.9,
        SQ: 204.06,
        BQ: 232.42
      },
      {
        SNAME: '贵州',
        TBV: 18.05,
        SQ: 6.65,
        BQ: 7.85
      },
      {
        SNAME: '浙江',
        TBV: -13.96,
        SQ: 9.6,
        BQ: 8.26
      },
      {
        SNAME: '上海',
        TBV: 3.61,
        SQ: 1474.62,
        BQ: 1527.9
      },
      {
        SNAME: '山东',
        TBV: -10.58,
        SQ: 2.93,
        BQ: 2.62
      },
      {
        SNAME: '重庆',
        TBV: -5.94,
        SQ: 64.93,
        BQ: 61.07
      },
      {
        SNAME: '四川',
        TBV: -2.74,
        SQ: 2.92,
        BQ: 2.84
      },
      {
        SNAME: '广州',
        TBV: 48.16,
        SQ: 10.07,
        BQ: 14.92
      },
      {
        SNAME: '南京',
        TBV: 54.05,
        SQ: 0.37,
        BQ: 0.57
      }
    ],
    2017: [
      {
        SNAME: '黑龙江',
        TBV: -10.88,
        SQ: 1214.47,
        BQ: 1082.32
      },
      {
        SNAME: '新疆兵团',
        TBV: 7.76,
        SQ: 2265.08,
        BQ: 2440.85
      },
      {
        SNAME: '河北',
        TBV: 4.69,
        SQ: 13.42,
        BQ: 14.05
      },
      {
        SNAME: '广东',
        TBV: 10.37,
        SQ: 231.95,
        BQ: 256.01
      },
      {
        SNAME: '内蒙',
        TBV: -17.65,
        SQ: 46.11,
        BQ: 37.97
      },
      {
        SNAME: '辽宁',
        TBV: -0.39,
        SQ: 129.17,
        BQ: 128.66
      },
      {
        SNAME: '湖北',
        TBV: 3.84,
        SQ: 52.93,
        BQ: 54.96
      },
      {
        SNAME: '江苏',
        TBV: 0.39,
        SQ: 232.56,
        BQ: 233.46
      },
      {
        SNAME: '湖南',
        TBV: 3.22,
        SQ: 36.29,
        BQ: 37.46
      },
      {
        SNAME: '广西',
        TBV: 5.33,
        SQ: 101.08,
        BQ: 106.47
      },
      {
        SNAME: '海南',
        TBV: 36.64,
        SQ: 164.89,
        BQ: 225.3
      },
      {
        SNAME: '新疆农业',
        TBV: -1.16,
        SQ: 4.32,
        BQ: 4.27
      },
      {
        SNAME: '江西',
        TBV: 8,
        SQ: 174.8,
        BQ: 188.78
      },
      {
        SNAME: '河南',
        TBV: -3.22,
        SQ: 28.56,
        BQ: 27.64
      },
      {
        SNAME: '安徽',
        TBV: 8.3,
        SQ: 20.37,
        BQ: 22.06
      },
      {
        SNAME: '甘肃',
        TBV: 7.12,
        SQ: 42.29,
        BQ: 45.3
      },
      {
        SNAME: '福建',
        TBV: 14.02,
        SQ: 12.2,
        BQ: 13.91
      },
      {
        SNAME: '新疆畜牧',
        TBV: 10.34,
        SQ: 12.48,
        BQ: 13.77
      },
      {
        SNAME: '吉林',
        TBV: -22.03,
        SQ: 1.77,
        BQ: 1.38
      },
      {
        SNAME: '宁夏',
        TBV: 4.47,
        SQ: 31.51,
        BQ: 32.92
      },
      {
        SNAME: '青海',
        TBV: 11.89,
        SQ: 3.7,
        BQ: 4.14
      },
      {
        SNAME: '山西',
        TBV: 12.5,
        SQ: 0.48,
        BQ: 0.54
      },
      {
        SNAME: '陕西',
        TBV: 57.3,
        SQ: 12.6,
        BQ: 19.82
      },
      {
        SNAME: '云南',
        TBV: 44.03,
        SQ: 166.31,
        BQ: 239.53
      },
      {
        SNAME: '北京',
        TBV: 6.18,
        SQ: 411.6,
        BQ: 437.04
      },
      {
        SNAME: '天津',
        TBV: 21.9,
        SQ: 232.42,
        BQ: 283.32
      },
      {
        SNAME: '贵州',
        TBV: 0,
        SQ: 7.85,
        BQ: 7.85
      },
      {
        SNAME: '浙江',
        TBV: -9.93,
        SQ: 8.26,
        BQ: 7.44
      },
      {
        SNAME: '上海',
        TBV: 4.82,
        SQ: 1527.9,
        BQ: 1601.6
      },
      {
        SNAME: '山东',
        TBV: 23.66,
        SQ: 2.62,
        BQ: 3.24
      },
      {
        SNAME: '重庆',
        TBV: -3.27,
        SQ: 61.07,
        BQ: 59.07
      },
      {
        SNAME: '四川',
        TBV: 15.49,
        SQ: 2.84,
        BQ: 3.28
      },
      {
        SNAME: '广州',
        TBV: 19.44,
        SQ: 14.92,
        BQ: 17.82
      },
      {
        SNAME: '南京',
        TBV: 40.35,
        SQ: 0.57,
        BQ: 0.8
      }
    ],
    2018: [
      {
        SNAME: '黑龙江',
        TBV: 7.19,
        SQ: 1082.32,
        BQ: 1160.1
      },
      {
        SNAME: '新疆兵团',
        TBV: -100,
        SQ: 2440.85,
        BQ: 0
      },
      {
        SNAME: '河北',
        TBV: 6.41,
        SQ: 14.05,
        BQ: 14.95
      },
      {
        SNAME: '广东',
        TBV: -7.26,
        SQ: 256.01,
        BQ: 237.43
      },
      {
        SNAME: '内蒙',
        TBV: 28.29,
        SQ: 37.97,
        BQ: 48.71
      },
      {
        SNAME: '辽宁',
        TBV: -75.35,
        SQ: 128.66,
        BQ: 31.72
      },
      {
        SNAME: '湖北',
        TBV: 4.68,
        SQ: 54.96,
        BQ: 57.53
      },
      {
        SNAME: '江苏',
        TBV: 12.77,
        SQ: 233.46,
        BQ: 263.27
      },
      {
        SNAME: '湖南',
        TBV: 2.83,
        SQ: 37.46,
        BQ: 38.52
      },
      {
        SNAME: '广西',
        TBV: -6.54,
        SQ: 106.47,
        BQ: 99.51
      },
      {
        SNAME: '海南',
        TBV: -3.99,
        SQ: 225.3,
        BQ: 216.3
      },
      {
        SNAME: '新疆农业',
        TBV: 182.9,
        SQ: 4.27,
        BQ: 12.08
      },
      {
        SNAME: '江西',
        TBV: 4.16,
        SQ: 188.78,
        BQ: 196.63
      },
      {
        SNAME: '河南',
        TBV: 7.78,
        SQ: 27.64,
        BQ: 29.79
      },
      {
        SNAME: '安徽',
        TBV: 1.81,
        SQ: 22.06,
        BQ: 22.46
      },
      {
        SNAME: '甘肃',
        TBV: 13.13,
        SQ: 45.3,
        BQ: 51.25
      },
      {
        SNAME: '福建',
        TBV: 13.08,
        SQ: 13.91,
        BQ: 15.73
      },
      {
        SNAME: '新疆畜牧',
        TBV: 5.45,
        SQ: 13.77,
        BQ: 14.52
      },
      {
        SNAME: '吉林',
        TBV: -4.35,
        SQ: 1.38,
        BQ: 1.32
      },
      {
        SNAME: '宁夏',
        TBV: -17.16,
        SQ: 32.92,
        BQ: 27.27
      },
      {
        SNAME: '青海',
        TBV: -4.11,
        SQ: 4.14,
        BQ: 3.97
      },
      {
        SNAME: '山西',
        TBV: 14.81,
        SQ: 0.54,
        BQ: 0.62
      },
      {
        SNAME: '陕西',
        TBV: 17.36,
        SQ: 19.82,
        BQ: 23.26
      },
      {
        SNAME: '云南',
        TBV: 27.3,
        SQ: 239.53,
        BQ: 304.91
      },
      {
        SNAME: '北京',
        TBV: 189.8,
        SQ: 437.04,
        BQ: 1266.55
      },
      {
        SNAME: '天津',
        TBV: 8.83,
        SQ: 283.32,
        BQ: 308.33
      },
      {
        SNAME: '贵州',
        TBV: 54.39,
        SQ: 7.85,
        BQ: 12.12
      },
      {
        SNAME: '浙江',
        TBV: -85.08,
        SQ: 7.44,
        BQ: 1.11
      },
      {
        SNAME: '上海',
        TBV: -2.35,
        SQ: 1601.6,
        BQ: 1564
      },
      {
        SNAME: '山东',
        TBV: -15.12,
        SQ: 3.24,
        BQ: 2.75
      },
      {
        SNAME: '重庆',
        TBV: 11.93,
        SQ: 59.07,
        BQ: 66.12
      },
      {
        SNAME: '四川',
        TBV: -71.65,
        SQ: 3.28,
        BQ: 0.93
      },
      {
        SNAME: '广州',
        TBV: 15.94,
        SQ: 17.82,
        BQ: 20.66
      },
      {
        SNAME: '南京',
        TBV: 27.5,
        SQ: 0.8,
        BQ: 1.02
      },
      {
        SNAME: '西藏',
        TBV: 0,
        SQ: 0,
        BQ: 0.45
      }
    ],
    2019: [
      {
        SNAME: '黑龙江',
        TBV: 6.33,
        SQ: 1160.1,
        BQ: 1233.56
      },
      {
        SNAME: '河北',
        TBV: 47.22,
        SQ: 14.95,
        BQ: 22.01
      },
      {
        SNAME: '广东',
        TBV: -0.96,
        SQ: 237.43,
        BQ: 235.15
      },
      {
        SNAME: '内蒙',
        TBV: 5.05,
        SQ: 48.71,
        BQ: 51.17
      },
      {
        SNAME: '辽宁',
        TBV: 9.99,
        SQ: 31.72,
        BQ: 34.89
      },
      {
        SNAME: '湖北',
        TBV: 12.18,
        SQ: 57.53,
        BQ: 64.54
      },
      {
        SNAME: '江苏',
        TBV: 24.5,
        SQ: 263.27,
        BQ: 327.76
      },
      {
        SNAME: '湖南',
        TBV: 6.54,
        SQ: 38.52,
        BQ: 41.04
      },
      {
        SNAME: '广西',
        TBV: 32.39,
        SQ: 99.51,
        BQ: 131.74
      },
      {
        SNAME: '海南',
        TBV: 7.75,
        SQ: 216.3,
        BQ: 233.06
      },
      {
        SNAME: '新疆农业',
        TBV: -43.38,
        SQ: 12.08,
        BQ: 6.84
      },
      {
        SNAME: '江西',
        TBV: 4.05,
        SQ: 196.63,
        BQ: 204.59
      },
      {
        SNAME: '河南',
        TBV: 2.92,
        SQ: 29.79,
        BQ: 30.66
      },
      {
        SNAME: '安徽',
        TBV: 13.67,
        SQ: 22.46,
        BQ: 25.53
      },
      {
        SNAME: '甘肃',
        TBV: 18.28,
        SQ: 51.25,
        BQ: 60.62
      },
      {
        SNAME: '福建',
        TBV: 5.02,
        SQ: 15.73,
        BQ: 16.52
      },
      {
        SNAME: '新疆畜牧',
        TBV: 4.61,
        SQ: 14.52,
        BQ: 15.19
      },
      {
        SNAME: '吉林',
        TBV: 31.82,
        SQ: 1.32,
        BQ: 1.74
      },
      {
        SNAME: '宁夏',
        TBV: 26.62,
        SQ: 27.27,
        BQ: 34.53
      },
      {
        SNAME: '青海',
        TBV: -5.29,
        SQ: 3.97,
        BQ: 3.76
      },
      {
        SNAME: '山西',
        TBV: 25.81,
        SQ: 0.62,
        BQ: 0.78
      },
      {
        SNAME: '陕西',
        TBV: 1.38,
        SQ: 23.26,
        BQ: 23.58
      },
      {
        SNAME: '云南',
        TBV: -14.29,
        SQ: 304.91,
        BQ: 261.35
      },
      {
        SNAME: '北京',
        TBV: 12.32,
        SQ: 1266.55,
        BQ: 1422.64
      },
      {
        SNAME: '天津',
        TBV: -17.25,
        SQ: 308.33,
        BQ: 255.13
      },
      {
        SNAME: '贵州',
        TBV: 9.57,
        SQ: 12.12,
        BQ: 13.28
      },
      {
        SNAME: '浙江',
        TBV: 59.46,
        SQ: 1.11,
        BQ: 1.77
      },
      {
        SNAME: '上海',
        TBV: -0.56,
        SQ: 1564,
        BQ: 1555.19
      },
      {
        SNAME: '山东',
        TBV: 313.09,
        SQ: 2.75,
        BQ: 11.36
      },
      {
        SNAME: '重庆',
        TBV: 13.84,
        SQ: 66.12,
        BQ: 75.27
      },
      {
        SNAME: '四川',
        TBV: 20.43,
        SQ: 0.93,
        BQ: 1.12
      },
      {
        SNAME: '广州',
        TBV: 13.79,
        SQ: 20.66,
        BQ: 23.51
      },
      {
        SNAME: '南京',
        TBV: 103.92,
        SQ: 1.02,
        BQ: 2.08
      },
      {
        SNAME: '西藏',
        TBV: -4.44,
        SQ: 0.45,
        BQ: 0.43
      }
    ]
  }
}
