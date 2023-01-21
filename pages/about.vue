<template>
    <div>
        <h1>about pages</h1>
        <my-table user-name="PropsUser"></my-table>
    </div>
</template>

<script>
import MyTable from '~/components/Atoms/MyTable'
export default {
    layout: 'default01',
    components: {
        MyTable
    }
}
</script>