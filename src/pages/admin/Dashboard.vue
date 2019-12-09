<template>
  <div>
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Загрузи трек">
       <el-upload
        class="track__upload"
        action="http://localhost:8000/admin/upload/track"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        multiple
        :limit="3"
        :on-exceed="handleExceed"
        :file-list="fileList"
       >
         <el-button size="small" type="primary">Click to upload</el-button>
       </el-upload>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Dashboard extends Vue {
  fileList = [{ name: '' }];

  handleRemove() {
    console.log(this.file, this.fileList);
  }

  handlePreview() {
    console.log(this.file);
  }

  handleExceed() {
    this.$message.warning(`The limit is 3, you selected ${this.files.length} files this time, add up to ${this.files.length + this.fileList.length} totally`);
  }

  beforeRemove() {
    return this.$confirm(`Cancel the transfert of ${this.file.name} ?`);
  }
}
</script>

<style scoped>

</style>
