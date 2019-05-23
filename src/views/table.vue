<template>
  <el-table :data=[]>
      <el-table-column v-for="column in tableColumn" :key="column.key" />
  </el-table>
</template>
<script>
export default {
  name: 'Table',
  props: [
    'teams',
  ],
  created() {
    console.log(this.teams,'asdasd')
  },
  data() {
    return {
      tableColumn: [
          {
              key: 'rank',
              prop: 'rank',
              label: 'rank',
          },
          {
              key: 'teamName',
              prop: 'teamName',
              label: 'Team Name',
          },
      ],
    };
  },
}
</script>
<style lang="scss">

</style>


