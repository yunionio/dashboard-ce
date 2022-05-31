import i18n from '@/locales'
const options = [
  {
    label: i18n.t('dashboard.text_78'),
    desc: i18n.t('dashboard.text_79'),
    icon: 'dashboard-number',
    h: 2,
    w: 5,
    component: 'NumberCard',
  },
  {
    label: i18n.t('dashboard.text_80'),
    desc: i18n.t('dashboard.text_81'),
    icon: 'dashboard-usage',
    h: 3,
    w: 5,
    component: 'Ring',
  },
  {
    label: i18n.t('dashboard.text_19'),
    desc: i18n.t('dashboard.text_84'),
    icon: 'dashboard-notice',
    h: 4,
    w: 5,
    component: 'Notify',
  },
  {
    label: 'TOP5',
    desc: i18n.t('dashboard.text_85'),
    icon: 'dashboard-top5',
    h: 5,
    w: 4,
    component: 'Top5',
  },
  {
    label: i18n.t('dashboard.text_17'),
    desc: i18n.t('dashboard.text_86'),
    icon: 'dashboard-log',
    h: 5,
    w: 4,
    component: 'Log',
  },
  {
    label: i18n.t('dashboard.text_47'),
    desc: i18n.t('dashboard.text_83'),
    icon: 'dashboard-suggest-detail',
    h: 5,
    w: 13,
    component: 'SuggestsysAlertsDetail',
  },
  {
    label: i18n.t('dashboard.text_54'),
    desc: i18n.t('dashboard.text_82'),
    icon: 'dashboard-suggest-overview',
    h: 5,
    w: 5,
    component: 'SuggestsysAlertsOverview',
  },
  {
    label: i18n.t('dashboard.text_91'),
    desc: i18n.t('dashboard.text_92'),
    icon: 'dashboard-quota',
    h: 7,
    w: 5,
    scope: ['domain', 'system'],
    component: 'Quota',
  },
  {
    label: i18n.t('dashboard.text_91'),
    desc: i18n.t('dashboard.text_92'),
    icon: 'dashboard-quota',
    h: 3,
    w: 5,
    scope: ['project'],
    component: 'ProjectQuota',
  },
  {
    label: i18n.t('monitor.overview_alert_sum'),
    desc: '',
    icon: 'dashboard-usage',
    h: 4,
    w: 5,
    component: 'UnrecoveredAlarm',
  },
  {
    label: i18n.t('dashboard.consumption_percent'),
    desc: i18n.t('dashboard.consumption_percent_info'),
    icon: 'dashboard-usage',
    h: 4,
    w: 5,
    component: 'ConsumptionPercent',
  },
  {
    label: i18n.t('dashboard.consmption_trend'),
    desc: '',
    icon: 'dashboard-trend',
    h: 4,
    w: 10,
    component: 'ConsumptionTrend',
  },
  {
    label: i18n.t('dashboard.vm_history_count'),
    desc: '',
    icon: 'dashboard-trend',
    h: 4,
    w: 10,
    component: 'VmHistoryCount',
  },
  {
    label: i18n.t('dashboard.alerts_trend'),
    desc: '',
    icon: 'dashboard-trend',
    h: 4,
    w: 10,
    component: 'AlertsTrend',
  },
  {
    label: i18n.t('dashboard.cloud_account_health'),
    desc: '',
    icon: 'dashboard-number',
    h: 4,
    w: 5,
    scope: ['system', 'domain'],
    component: 'AccountHealth',
  },
  {
    label: i18n.t('dashboard.userinfo'),
    desc: '',
    icon: 'res-user2',
    h: 4,
    w: 5,
    component: 'UserInfo',
  },
  {
    label: i18n.t('dashborad.server_numbers'),
    desc: '',
    icon: 'dashboard-suggest-detail',
    h: 5,
    w: 8,
    component: 'ServerNumberDetail',
  },
  {
    label: i18n.t('dashboard.optimization_suggestion'),
    desc: '',
    icon: 'res-user2',
    h: 4,
    w: 6,
    component: 'OptimizationSuggestion',
  },
  {
    label: i18n.t('dashboard.monitor'),
    desc: '',
    icon: 'res-user2',
    h: 4,
    w: 8,
    component: 'MonitorInfo',
  },
]

export default options
