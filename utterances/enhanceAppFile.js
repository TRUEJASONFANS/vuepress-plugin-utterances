import Comments from './Comments.vue';
import Utterances from './Utterances.vue';

export default ({ Vue }) => {
    Vue.component('Utterances', Utterances)
    Vue.component('Comments', Comments)
}
