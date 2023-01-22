<template>
    <div>
        <h1>about pages</h1>
        <p>現在地:{{ current }}</p>
        <my-counter step="1" @plus-minus="onplus" />
        <my-counter step="2" @plus-minus="onplus" />
        <my-counter step="-1" @plus-minus="onplus" />
        <my-table user-name="PropsUser"></my-table>
        <p>{{ title }}</p>
        <my-form @todo-submit="todoAdd" />
        <my-test-slot>hello world slot</my-test-slot>
        <v-text-field
            label="Main input"
            hide-details="auto"
            v-model="message"
        >
        </v-text-field>
        <my-form-inject />
    </div>
</template>

<script>
import { computed } from 'vue'
import MyTable from '~/components/Atoms/MyTable'
import MyCounter from '~/components/Atoms/MyCounter'
import MyForm from '~/components/Atoms/MyForm'
import MyFormInject from '~/components/Atoms/MyFormInject'
import MyTestSlot from '~/components/Atoms/MyTestSlot'


export default {
    layout: 'default01',
    components: {
        MyTable,
        MyCounter,
        MyForm,
        MyFormInject,
        MyTestSlot
    },
    // provide: {
    //     message: 'provider-message'
    // },
    data() {
        return {
            current: 0,
            title: '',
            message: '',
        }
    },
    provide() {
        return {
            // message: this.message
            message: computed(() => this.message)
        }
    },
    methods: {
        onplus(e) {
            this.current += e;
        },
        todoAdd(e) {
            this.title = e;
        }
    }
}
</script>

<style scoped>

</style>