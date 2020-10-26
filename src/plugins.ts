import { Plugin } from "vue"

export const myPluginAA: Plugin = (app, opts) => {
    app.config.globalProperties.$st = 3.33333

}

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $st: number
    }
}
