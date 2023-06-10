 <template>
     <div>{{ name }}</div>
  <div @:click="methods.updateName()" >更新名称</div>
   </template>
  
   <script lang="ts" >
  import {
  defineComponent,
  ref,
  onMounted,
  reactive,
  toRefs,
  watch,
  useSlots,
  computed
} from "vue";
 import { useUserStore } from '@/store/user'
import API from '@/api';
    
 

 const userStore = useUserStore()
export default defineComponent({
  name: "Pinia",
  components: {},
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    
  },
  setup: (props, { emit, slots }) => {
    const state = reactive({
      show: props.show,
    });
    watch(
      () => props.show,
      async (val) => {
      }
    );
    const computeds = {
   
    }
    const methods={
    updateName: () => {
      userStore.updateName('王五')
      },
  }
    onMounted(async () => {

        let result = await API.getUserInfo();
        console.log('result--------',result)
        userStore.updateName(result.data.userName)
    });

 

    return {
      ...toRefs(state),
      methods,
      ...computeds,
      ...toRefs(userStore),

    };
  },
});
  

  
 
   </script>
  