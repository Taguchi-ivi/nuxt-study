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
    </div>
</template>

<script>
import MyTable from '~/components/Atoms/MyTable'
import MyCounter from '~/components/Atoms/MyCounter'
import MyForm from '~/components/Atoms/MyForm'


export default {
    layout: 'default01',
    components: {
        MyTable,
        MyCounter,
        MyForm
    },
    data() {
        return {
            current: 0,
            title: ''
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