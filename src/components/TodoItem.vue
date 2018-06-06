<template>
    <div class="todoItem" :class="[isCritical ? 'todoItem-isCritical': '']">
        <div class="todoItem__header">
          <div class="todoItem__panelContainer">
            <div class="todoItem__panel">
              <span class="todoItem__dot"></span>
              <span class="todoItem__dot"></span>
              <span class="todoItem__dot"></span>
            </div>
          </div>
          <label :for="`todoItem__check${index}`" class="todoItem__input">
              <input @input="handleCheck()" :value="isDone" :checked="isDone" :id="`todoItem__check${index}`" class="todoItem__check" type="checkbox">
              <i v-if="isDone" class="todoItem__checkFa fas fa-check-square"></i>
              <i v-else class="todoItem__boxFa far fa-square"></i>
          </label>
          <div class="todoItem__content">
              <input class="w100 formControl" v-if="showTitleInput" type="text" v-model="newTitle" @blur="leaveTitleInput" @keydown.esc="leaveTitleInput"  @keydown.enter="updateTitle">
              <p v-else @dblclick="enterTitleInput" class="todoItem__title" :class="{'todoItem__title-isDone': isDone}">{{ title }}</p>
              <div class="todoItem__status">
                  <i v-if="hasSavedDate || hasSavedTime" class="todlItem__statusIcon far fa-calendar-alt"></i>
                  <i v-if="hasSavedFile" class="todlItem__statusIcon far fa-file"></i>
                  <i v-if="savedComment.trim() != ''" class="todlItem__statusIcon far fa-comment-dots"></i>
              </div>
          </div>
          <div class="todoItem__tool">
              <i @click="handleStared()" 
                  class="todoItem__starFa  fa-star" 
                  :class="[ isCritical ? 'fas todoItem__starFa-isCritical' :'far']"></i>
              <i @click="handleEdit" class="todoItem__editIcon fas fa-pencil-alt"></i>
          </div>
        </div>
        <div v-show="isEdit" class="todoItem__editSection">
          <div class="editSection__body">
            <div class="editSection__inputGroup">
              <p class="todoItem__subTitle"><i class="far fa-calendar-alt"></i> DeadLine</p>
              <date-picker @selected="selectDate" :value="date" :clear-button="true" format="yyyy/MM/dd" input-class="formControl"></date-picker>
              <vue-timepicker v-model="time"></vue-timepicker>
            </div>
            <div class="editSection__inputGroup">
              <p class="todoItem__subTitle"><i class="far fa-file"></i> File</p>
              <input class="hide" @change="processFile($event)" :id="`fileUpload${index}`" type="file">
              <span v-if="file != null">{{ file.name }}</span>
              <label class="editSection__uploadIcon" :for="`fileUpload${index}`">+</label>
            </div>
            <div class="editSection__inputGroup">
              <p class="todoItem__subTitle"><i class="far fa-comment-dots"></i> Comment</p>
              <textarea class="editSection__commentInput" placeholder="Add Comment" v-model="comment" name="" id="" cols="10" rows="10"></textarea>
            </div>
          </div>
          <div class="editSection__footer">
            <div @click="cancelEdit" class="editSection__btn editSection__btn-cancel">X Cancel</div>
            <div @click="saveEdit" class="editSection__btn editSection__btn-primary">＋ Save</div>
          </div>
        </div>
    </div>
</template>

<script>
import DatePicker from 'vuejs-datepicker';
import VueTimepicker from 'vue2-timepicker';
export default {
  components: {
    DatePicker,
    VueTimepicker
  },
  props: {
    isDone: {type: Boolean, default: false},
    isCritical: {type: Boolean, default: false},
    title: {type: String, default: ''},
    index: {type: Number},
    savedFile: {},
    deadlineDate: {type: Date},
    deadlineTime: {type: Object},
    savedComment: {type: String}
  },
  data() {
    return {
      newTitle: this.title,
      isEdit: false,
      comment: '',
      date: '',
      time: {hh: '', mm: ''},
      file: {},
      showTitleInput: false
    }
  },
  created() {
    this.date = this.deadlineDate;
    this.time = this.deadlineTime;
    this.comment = this.savedComment;
  },
  computed: {
    hasSavedTime() {
      return this.deadlineTime.hh != '' && this.deadlineTime.mm != '';
    },
    hasSavedDate() {
      return this.deadlineDate != null;
    },
    hasSavedFile() {
      return this.savedFile != undefined && this.savedFile.__proto__.constructor == File;
    },
  },
  methods: {
    enterTitleInput() {
      this.showTitleInput = true;
    },
    leaveTitleInput() {
      this.showTitleInput = false;
      this.newTitle = this.title;
    },
    updateTitle() {
      this.showTitleInput = false;
      this.$emit('update-title', {
        newTitle: this.newTitle,
        index: this.index
      });
    },
    handleCheck() {
      this.$emit('item-completed', this.index);
    },
    handleStared() {
      this.$emit('item-stared', this.index);
    },
    handleEdit() {
      if(!this.isEdit) {
        this.$emit('item-click-edit', this.index);
      } else {
        this.cancelEdit();
      }
    },
    cancelEdit() {
      this.isEdit = false;
      this.comment = this.savedComment;
      this.date = this.deadlineDate;
      this.time = this.deadlineTime;
      this.file = null;
    },
    selectDate(payload) {
      this.date = payload;
    },
    processFile(e) {
      this.file = e.target.files[0];
    },
    // changeTime(payload) {
    //   this.time = `${payload.data.hh}:${payload.data.mm}`;
    // },
    saveEdit() {
      this.$emit('save-edit', {
        date: this.date,
        time: this.time,
        comment: this.comment,
        file: this.file,
        index: this.index
      });
      this.isEdit = false;
    },
  }
}

</script>
<style lang="scss">
.todoItem {
  width: 100%;
  background: #f2f2f2;
  margin-bottom: 5px;
  &-isCritical {
    background: #fff2dc;
  }
}
.todoItem__header {
  display: flex;
  padding: 10px 0;
}
.todoItem__panelContainer {
  flex-basis: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: move;
}
.todoItem__panel {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50%;
}
.todoItem:hover .todoItem__dot {
  display: block;
  flex-basis: 4px;
  width: 4px;
  background-color: #d8d8d8;
  border-radius: 50%;
}
.editSection__inputGroup {
  margin-bottom: 20px;
}
.todoItem__input {
  cursor: pointer;
  width: 35px;
  padding: 5px;
  font-size: 16px;
}
.todoItem__check {
  display: none;
}
.todoItem__boxFa {
  color: #fff;
  background-color: #fff;
}
.todoItem__checkFa {
  color: #4a90e2;
}
.todoItem__content {
  flex: 1 0 400px;
  margin: 0 10px 0 0;
}
.todoItem__title {
  font-family: "Roboto Medium";
  font-size: 24px;
  margin: 0;
  &-isDone {
    text-decoration: line-through;
    color: #9b9b9b;
  }
}
.todoItem__status {
  color: #9b9b9b;
}
.todlItem__statusIcon {
  margin-right: 10px;
}
.todoItem__tool {
  flex: 1;
}
.todoItem__starFa {
  cursor: pointer;
  margin-right: 15px;
  &-isCritical {
    color: #f5a623;
  }
}
.todoItem__editIcon {
  cursor: pointer;
}
.todoItem__editSection {
  border-top: 2px solid #c8c8c8;
  box-shadow: 0 4px 4px 0 #c8c8c8;
}
/**
以下是 .editSection
*/
.editSection__body {
  padding: 10px 40px;
}
.editSection__footer {
  width: 100%;
  border-radius: 0 0 5px 5px;
  display: flex;
  justify-content: space-around;
}
.todoItem__subTitle {
  font-family: "Roboto-Medium";
  font-size: 16px;
  color: #000;
}
.editSection__commentInput {
  width: 100%;
  border-radius: 2px;
  border: none;
  font-family: Roboto-Regular;
  font-size: 16px;
  color: #000000;
  line-height: 24px;
  padding: 10px 20px;
}
.editSection__uploadIcon {
  cursor: pointer;
  padding: 10px 15px;
  color: white;
  background: #c8c8c8;
  border-radius: 2px;
  &:hover {
    background-color: darken(#c8c8c8, 10%);
  }
}
.editSection__btn {
  cursor: pointer;
  flex: 1;
  padding: 10px;
  font-family: "Roboto-Regular";
  font-size: 18px;
  text-align: center;
}
.editSection__btn-primary {
  color: white;
  background-color: #4a90e2;
  &:hover {
    background-color: darken(#4a90e2, 10%);
  }
}
.editSection__btn-cancel {
  color: #d0021b;
  background-color: white;
  &:hover {
    background-color: darken(white, 10%);
  }
}
.editSection__inputGroup {
  .time-picker {
    input.display-time {
      border-color: #eee;
    }
  }
  .vdp-datepicker {
    display: inline-block;
    margin-right: 20px;
  }
}
</style>