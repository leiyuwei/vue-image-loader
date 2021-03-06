import VueImageLoader from './VueImageLoader.vue'

export function install(Vue, options) {

    VueImageLoader.mixins = VueImageLoader.mixins || [];

    options = options || {};

    VueImageLoader.mixins.push({
        props:{
            timeout:{
                type:Number,
                default:(options.timeout || null)
            }
        },
        data() {
            return {
                loadInfo: (options.loadInfo || null),
                loadError: (options.loadError || null)
            }
        }
    })

    Vue.component('image-loader', VueImageLoader);
}