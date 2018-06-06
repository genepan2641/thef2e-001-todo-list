<template>
  <div id="app">
    <div class="header">
      <div class="container filter__container">
        <div class="filter" @click="updateFilter('all')" :class="{'filter-active': filter == 'all'}">My Tasks</div>
        <div class="filter" @click="updateFilter('progress')" :class="{'filter-active': filter == 'progress'}">In Progress</div>
        <div class="filter" @click="updateFilter('completed')" :class="{'filter-active': filter == 'completed'}">Completed</div>
      </div>
    </div>

    <div class="body">
      <div class="container">
        <div class="newTodo">
          <input class="newTodo__input" v-model="newTodoTitle" type="text" @keydown.enter="addTodo" placeholder="＋ Add Task">
        </div>
        <div class="btnContainer">
          <button class="btn-primary" @click="clearCompleted">Clear Completed</button>
          <button class="btn-primary" @click="completeAll">Complete All</button>
        </div>
        <draggable v-model="todos" :options="{draggable: '.todoItem'}">
          <todo-item v-for="(t, i) in filteredTodos" 
            ref="todoItem"
            @update-title="updateTitle"
            @item-completed="itemCompleted"
            @item-stared="itemStared"
            @item-click-edit="itemClickEdit"
            @save-edit="saveEdit"
            @item-delete="itemDelete"
            :is-done="t.isDone"
            :is-critical="t.isCritical"
            :title="t.title"
            :hash="t.hash"
            :saved-comment="t.savedComment"
            :deadline-date="t.deadlineDate"
            :deadline-time="t.deadlineTime"
            :saved-file="t.savedFile"
            :index="i"
            :key="i">
          </todo-item>
        </draggable>
        <p class="leftWording">{{ notDoneNum }} tasks left</p>
      </div>
    </div>


  </div>
  
</template>

<script>
import draggable from 'vuedraggable';
import TodoItem from './components/TodoItem.vue';
export default {
  name: 'App',
  data() {
    return {
      todos: [],
      newTodoTitle: '',
      filter: 'all'
    }
  },
  created() {
    for(let i in 4) {
      this.addTodo();
    }
  },
  computed: {
    notDoneNum() {
      return this.todos.filter(ele => {
        return !ele.isDone;
      }).length;
    },
    filteredTodos() {
      if(this.filter == 'all') {
        return this.todos;
      } else if(this.filter == 'progress') {
        return this.todos.filter(ele => {
          return !ele.isDone;
        });
      } else if(this.filter == 'completed') {
        return this.todos.filter(ele => {
          return ele.isDone;
        });
      }
    }
  },
  methods: {
    addTodo() {
      this.todos.push({
        title: this.newTodoTitle || 'Type Something Here...',
        isDone: false,
        isCritical: false,
        deadlineDate: null,
        deadlineTime: {hh: '', mm: ''},
        savedComment: '',
        savedFile: null,
        hash: _uuid()
      })
      this.newTodoTitle = '';
    },
    clearCompleted() {
      this.todos = this.todos.filter(ele => {
        return !ele.isDone;
      });
    },
    completeAll() {
      this.todos.forEach(ele => {
        ele.isDone = true;
      });
    },
    updateTitle(payload) {
      this.todos[payload.index].title = payload.newTitle;
    },
    updateFilter(val) {
      this.filter = val;
    },
    itemCompleted(hash) {
      var targetTodo = this.todos.filter(ele => {
        return ele.hash == hash;
      });
      var index = this.todos.indexOf(targetTodo[0]);
      this.$set(this.todos[index], 'isDone', !this.todos[index].isDone);
    },
    itemStared(hash) {
      var targetTodo = this.todos.filter(ele => {
        return ele.hash == hash;
      });
      var index = this.todos.indexOf(targetTodo[0]);
      this.$set(this.todos[index], 'isCritical', !this.todos[index].isCritical);
    },
    itemClickEdit(hash) {
      this.$refs.todoItem.forEach(ele => {
        ele.isEdit = false;
      });
      var targetTodo = this.todos.filter(ele => {
        return ele.hash == hash;
      });
      var index = this.todos.indexOf(targetTodo[0]);
      this.$refs.todoItem[index].isEdit = true;
    },
    itemDelete(hash) {
      var targetTodo = this.todos.filter(ele => {
        return ele.hash == hash;
      });
      var index = this.todos.indexOf(targetTodo[0]);
      this.todos.splice(index, 1);
    },
    saveEdit(payload) {
      this.todos[payload.index].deadlineDate = payload.date;
      this.todos[payload.index].deadlineTime = payload.time;
      this.todos[payload.index].savedFile = payload.file;
      this.todos[payload.index].savedComment = payload.comment;
    }
  },
  components: {
    TodoItem,
    draggable
  }
}
function _uuid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}
</script>

<style lang="scss">
#app {
  font-family: "Roboto Regular", sans-serif;
}
* {
  box-sizing: border-box;
}
html,
body {
  margin: 0;
  padding: 0;
}
.w100 {
  width: 100%;
}
.formControl {
  height: 34px;
  border-radius: 0px;
  outline: none;
  border: 1px solid #eee;
  font-size: 16px;
  padding: 5px 10px;
  &:focus {
    border-color: #00408b;
  }
}
.btn-primary {
  background-color: #4a90e2;
  color: white;
  padding: 6px 12px;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: darken(#4a90e2, 10%);
  }
}
.hide {
  display: none;
}
.header {
  background: #4a90e2;
}
.container {
  max-width: 600px;
  margin: 0 auto;
}
.filter__container {
  display: flex;
}
.filter {
  cursor: pointer;
  text-align: center;
  padding: 15px;
  flex: 1;
  color: #00408b;
  &-active {
    color: white;
    border-bottom: 5px solid #00408b;
  }
  &:hover {
    background-color: darken(#4a90e2, 5%);
  }
}
.body {
  background: #e1e1e1;
  min-height: 100vh;
}
.newTodo {
  position: relative;
}
.newTodo__input {
  width: 100%;
  border-radius: 5px;
  height: 45px;
  outline: none;
  border: 1px solid #eee;
  padding-left: 20px;
  font-size: 16px;
  margin: 20px auto;
  transition: all 0.25s ease-out;
  &:focus {
    border: 1px solid #00408b;
  }
}
.btnContainer {
  margin-bottom: 15px;
  text-align: right;
}
::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #ddd;
  opacity: 1; /* Firefox */
  font-size: 16px;
}
.leftWording {
  font-family: "Roboto Italic";
  font-style: italic;
  font-size: 24px;
  color: #c8c8c8;
  margin: 0;
  padding-bottom: 10px;
}
</style>


