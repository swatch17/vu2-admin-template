export default [
  {
    id: '102',
    name: '首页',
    icon: 'icon-home',
    path: '/home',
    isOutLink: false,
    children: [],
  },
  {
    id: 1,
    icon: 'icon-department',
    name: '部门管理',
    path: '/department',
    children: [
      {
        id: '1-1',
        name: '部门信息',
        path: '/department/info',
        isOutLink: false,
        children: [],
      },
    ],
  },
  {
    id: 2,
    icon: 'icon-street',
    name: '街道事务',
    path: '/street-work',
    children: [
      {
        id: '2-1',
        name: '子站',
        path: '/street-work/station',
        isOutLink: false,
        children: [
          {
            id: '2-1-10',
            name: '记录列表',
            path: '/street-work/station/list',
            isOutLink: false,
            children: [],
          },
          {
            id: '2-1-2',
            name: '数据图表',
            path: '/street-work/station/data',
            isOutLink: false,
            children: [],
          },
          {
            id: '2-1-3',
            name: '子站信息',
            path: '/street-work/station/info',
            isOutLink: false,
            children: [],
          },
        ],
      },
      {
        id: '2-2',
        name: '台账',
        path: '/street-work/ledger',
        isOutLink: false,
        children: [
          {
            id: '2-2-1',
            name: '台账列表',
            path: '/street-work/ledger/list',
            isOutLink: false,
            children: [],
          },
          {
            id: '2-2-4',
            name: '设备列表',
            path: '/street-work/ledger/device',
            isOutLink: false,
            children: [],
          },
          {
            id: '2-2-2',
            name: '数据图表',
            path: '/street-work/ledger/data',
            isOutLink: false,
            children: [],
          },
          {
            id: '2-2-3',
            name: '配置信息',
            path: '/street-work/ledger/info',
            isOutLink: false,
            children: [],
          },
        ],
      },
      {
        id: '2-3',
        name: '案件',
        path: '/street-work/case',
        isOutLink: false,
        children: [
          {
            id: '2-3-1',
            name: '待办案件',
            path: '/street-work/case/todo',
            isOutLink: false,
            children: [],
          },
          {
            id: '2-3-4',
            name: '案件列表',
            path: '/street-work/case/list',
            isOutLink: false,
            children: [],
          },
          {
            id: '2-3-2',
            name: '数据图表',
            path: '/street-work/case/data',
            isOutLink: false,
            children: [],
          },
          {
            id: '2-3-3',
            name: '配置信息',
            path: '/street-work/case/info',
            isOutLink: false,
            children: [],
          },
        ],
      },
      {
        id: '2-4',
        name: '记录',
        path: '/street-work/record',
        isOutLink: false,
        children: [
          {
            id: '2-4-4',
            name: '记录列表',
            path: '/street-work/record/list',
            isOutLink: false,
            children: [],
          },
          {
            id: '2-4-2',
            name: '数据图表',
            path: '/street-work/record/data',
            isOutLink: false,
            children: [],
          },
          {
            id: '2-4-3',
            name: '配置信息',
            path: '/street-work/record/info',
            isOutLink: false,
            children: [],
          },
        ],
      },
      {
        id: '2-5',
        name: '存档',
        path: '/street-work/archive',
        isOutLink: false,
        children: [
          {
            id: '2-5-4',
            name: '存档列表',
            path: '/street-work/archive/list',
            isOutLink: false,
            children: [],
          },
          {
            id: '2-5-2',
            name: '数据图表',
            path: '/street-work/archive/data',
            isOutLink: false,
            children: [],
          },
          {
            id: '2-5-3',
            name: '配置信息',
            path: '/street-work/archive/info',
            isOutLink: false,
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    icon: 'icon-account',
    name: '人员管理',
    path: '/personnel',
    children: [
      {
        id: '3-1',
        name: '外勤',
        path: '/personnel/out',
        isOutLink: false,
        children: [],
      },
    ],
  },
];
