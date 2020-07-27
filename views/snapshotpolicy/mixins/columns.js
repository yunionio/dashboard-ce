import { weekOptions, timeOptions } from '../constants'
import {
  getNameDescriptionTableColumn,
  getStatusTableColumn,
  getProjectTableColumn,
  getTimeTableColumn,
} from '@/utils/common/tableColumn'
import i18n from '@/locales'

export default {
  created () {
    this.columns = [
      getNameDescriptionTableColumn({
        onManager: this.onManager,
        hideField: true,
        slotCallback: row => {
          return (
            <side-page-trigger onTrigger={ () => this.handleOpenSidepage(row) }>{ row.name }</side-page-trigger>
          )
        },
      }),
      getStatusTableColumn({ statusModule: 'snapshotpolicy' }),
      {
        field: 'binding_disk_count',
        title: i18n.t('compute.text_1082'),
        width: 120,
        slots: {
          default: ({ row }) => {
            if (row.binding_disk_count <= 0) return row.binding_disk_count
            return [
              <side-page-trigger name='SnapshotPolicySidePage' id={row.id} tab='snapshot-policy-disk' vm={this}>{row.binding_disk_count}</side-page-trigger>,
            ]
          },
        },
      },
      {
        field: 'repeat_weekdays',
        title: i18n.t('compute.text_1083'),
        minWidth: 180,
        showOverflow: 'ellipsis',
        slots: {
          default: ({ row }, h) => {
            let text = ''
            if (row.repeat_weekdays && row.repeat_weekdays.length) {
              text += i18n.t('compute.text_1098') + row.repeat_weekdays.map(item => weekOptions[item - 1]).join('、')
            }
            if (row.time_points && row.time_points.length) {
              text += '; ' + row.time_points.map(item => timeOptions[item]).join('、')
            }
            if (text) {
              text += i18n.t('compute.text_1099')
            }
            return [
              <list-body-cell-wrap copy field='repeat_weekdays' hideField row={row} message={text}>
                {{ text }}
              </list-body-cell-wrap>,
            ]
          },
        },
      },
      getTimeTableColumn(),
      getProjectTableColumn(),
    ]
  },
}
