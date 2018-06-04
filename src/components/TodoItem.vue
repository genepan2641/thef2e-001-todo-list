<template>
    <div class="todoItem" :class="[isCritical ? 'todoItem-isCritical': '']">
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
            <p class="todoItem__title" :class="{'todoItem__title-isDone': isDone}">{{ title }}</p>
            <div class="todoItem__status">
                <i class="todlItem__statusIcon far fa-calendar-alt"></i>
                <i class="todlItem__statusIcon far fa-file"></i>
                <i class="todlItem__statusIcon far fa-comment-dots"></i>
            </div>
        </div>
        <div class="todoItem__tool">
            <i @click="handleStared()" 
                class="todoItem__starFa  fa-star" 
                :class="[ isCritical ? 'fas todoItem__starFa-isCritical' :'far']"></i>
            <i class="fas fa-pencil-alt"></i>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    isDone: {type: Boolean, default: false},
    isCritical: {type: Boolean, default: false},
    title: {type: String, default: ''},
    index: {type: Number}
  },
  data() {
    return {

    }
  },
  methods: {
    handleCheck() {
      this.$emit('item-completed', this.index);
    },
    handleStared() {
      this.$emit('item-stared', this.index);
    }
  }
}

</script>
<style lang="scss">
.todoItem {
  width: 100%;
  display: flex;
  padding: 10px 20px 10px 0;
  background: #f2f2f2;
  margin-bottom: 5px;
  &-isCritical {
    background: #fff2dc;
  }
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
.todoItem__input {
  cursor: pointer;
  width: 35px;
  padding: 5px;
  font-size: 18px;
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
  margin: 0;
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
</style>