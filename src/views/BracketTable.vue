<template>
  <el-table :data=teams>
      <el-table-column
        v-for="column in tableColumn"
        :key="column.key"
        :prop="column.prop"
        :label="column.label"
        :width="column.width"
        >
        <template slot-scope="scope">
          <div v-if="column.key ==='image'" style="width: 20px; height: 20px;">
            <img style="width: 100%; height: 100%;" :src="scope.row.logoSrc" />
          </div>
          <div v-else>
            {{ scope.row[column.key] }}
          </div>
        </template>
      </el-table-column>
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
            key: 'image',
            prop: 'image',
            label: '로고',
            width: 40,
          },
          {
            key: 'rank',
            prop: 'rank',
            label: 'rank',
            width: 40,
          },
          {
            key: 'name',
            prop: 'name',
            label: 'Team Name',
          },
      ],
    };
  },
}
</script>
<style lang="scss">

</style>


