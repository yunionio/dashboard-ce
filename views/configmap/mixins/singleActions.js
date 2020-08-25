import i18n from '@/locales'
export default {
  created () {
    this.singleActions = [
      {
        label: i18n.t('k8s.text_215'),
        permission: 'k8s_configmaps_update',
        action: async obj => {
          const manager = new this.$Manager('configmaps', 'v1')
          async function fetchData () {
            const { cluster, namespace } = obj
            const { data } = await manager.getSpecific({ id: obj.name, spec: 'rawdata', params: { cluster, namespace } })
            return data
          }
          const configText = await fetchData()
          this.createDialog('K8SEditYamlDialog', {
            data: [obj],
            manager,
            refresh: this.refresh,
            configText,
            success: () => {
              if (this.getResponseData) this.getResponseData()
            },
          })
        },
      },
      {
        label: i18n.t('k8s.text_201'),
        permission: 'k8s_configmaps_delete',
        action: (obj) => {
          const requestParams = {
            cluster: obj.clusterID,
          }
          if (obj.namespace) {
            requestParams.namespace = obj.namespace
          }
          this.createDialog('DeleteResDialog', {
            data: [obj],
            columns: this.columns,
            title: i18n.t('k8s.text_201'),
            name: i18n.t('k8s.text_17'),
            onManager: this.onManager,
            requestParams,
            success: () => {
              if (this.getResponseData) this.getResponseData()
              this.destroySidePages()
            },
          })
        },
      },
    ]
  },
}
