import { defineComponent } from 'vue'
// import { ButtonStyle } from '@usd-ui/style'

export default defineComponent({
  setup(props, { slots }) {
    return () => <div>{slots.default!()}</div>
  },
})
