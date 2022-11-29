<template>
  <v-container class="container-top">
    <v-row align="center" justify="center" class="form-row">
      <v-col cols="12" md="4" class="title-icon">
        <div outlined color="transparent">
          <v-card-title class="title"> TODO </v-card-title>
        </div>
        <div>
          <v-img
            @click="store.toggleTheme(theme)"
            width="30"
            :src="store.isDark(theme) ? moon : sun"
          >
          </v-img>
        </div>
      </v-col>
    </v-row>

    <v-row align="center" justify="center" class="form-row">
      <v-col cols="12" md="4">
        <v-form
          @submit.prevent="addNewTodo"
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-text-field
            v-model="newTodo"
            :rules="nameRules"
            label="Create a new todo..."
            name="newTodo"
            variant="solo"
          ></v-text-field>
        </v-form>
      </v-col>
    </v-row>

    <v-row align="center" justify="center" class="form-row">
      <v-col cols="12" md="4">
        <v-card v-for="todo in todos.filter(filterFunc)" :key="todo.id">
          <v-card class="cardi">
            <v-checkbox
              v-model="todo.completed"
              class="checkboxs"
              @click="setTodo"
              label=""
              value=""
            />

            <v-card-text :class="todo.completed === false ? '' : 'text-cancel'">
              {{ todo.content }}
            </v-card-text>
            <div>
              <div @click="toggleDelete" class="mark">
                <v-img width="20" src="../assets/cross.svg"></v-img>
              </div>
            </div>
          </v-card>

          <v-divider></v-divider>
        </v-card>
        <v-card v-if="todos.length > 0" class="order mobile">
          <div>5 items</div>
          <div @click="toggleClearCompleted">clear completed</div>
        </v-card>

        <v-card v-if="todos.length > 0" class="states">
          <div class="order-inner">
            <div @click="toggleShowAll" class="valu">All</div>
            <div @click="toggleShowActive" class="valu">Active</div>
            <div @click="toggleShowComplete" class="valu">Completed</div>
          </div>
        </v-card>

        <v-card v-if="todos.length > 0" class="order desktop">
          <div class="valu">count items</div>
          <div class="order-inner-desk">
            <span @click="toggleShowAll" class="valu">All</span>
            <span @click="toggleShowActive" class="valu">Active</span>
            <span @click="toggleShowComplete" class="valu">Completed</span>
          </div>
          <div class="valu">clear completed</div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { ref } from "vue";
import { store } from "../store.js";
import sun from "../assets/ICON-SUN.svg";
import moon from "../assets/ICON-MOON.svg";
import { useTheme } from "vuetify";

export default {
  setup() {
    const newTodo = ref("");

    const theme = useTheme();

    const todos = ref([]);
    const filteredTodos = ref([]);
    const filterFunc = ref(() => true);

    const count = 0;

    var val = "all";

    function addNewTodo() {
      todos.value.push({
        id: Date.now(),
        content: newTodo.value,
        completed: false,
      });

      count++;
    }

    function toggleShowAll() {
      console.log("i was hit");
      val = "completed";
      console.log("todos", this.todos);

      this.filterFunc = () => true;
    }
    function toggleShowActive() {
      this.filterFunc = (todo) => todo.completed === false;
    }
    function toggleShowComplete() {
      this.filterFunc = (todo) => todo.completed === "";
    }

    function toggleDelete(id) {
      this.todos.splice(id, 1);
    }

    function toggleClearCompleted() {
      const completedTodos = this.todos.filter(
        (todo) => todo.completed === false
      );

      console.log(completedTodos);

      this.todos = completedTodos;
    }

    return {
      newTodo,
      todos,
      addNewTodo,
      store,
      sun,
      moon,
      theme,
      toggleShowAll,
      toggleShowActive,
      toggleShowComplete,
      toggleDelete,
      toggleClearCompleted,
      count,
      filteredTodos,
      filterFunc,
    };
  },

  data() {
    return {
      checkbox: false,
    };
  },
};
</script>

<style>
.container-top {
  margin-top: "-127 important";
}
.cardi {
  display: flex;
  justify-content: center;
  align-items: center;
}
.mark {
  margin-right: 12px;
}
.form-row {
  display: flex;
  position: relative;
  top: -179px !important;
}
.top-card {
  margin-bottom: 10px;
  justify-content: space-between;
}
.title-icon {
  display: flex;
  justify-content: space-between;
}
.text-cancel {
  text-decoration: line-through;
}
.title {
  color: white;
}
.order {
  display: flex;
  padding: 10px;
  justify-content: space-between;
}

.order-inner {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.order-inner-desk {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
}
.desktop {
  display: none;
}

.valu {
  margin-left: 10px;
  font-size: 14px;
}

.v-card__underlay {
  display: none;
}

.checkboxs {
  display: flex;
}

.mobile {
  display: flex;
}

.states {
  display: unset;
}

@media only screen and (min-width: 768px) {
  /* For desktop: */
  .mobile {
    display: none;
  }

  .desktop {
    display: flex;
  }

  .states {
    display: none;
  }
}

@media screen and (min-device-width: 376px) {
  .desktop {
    /* display: flex; */
  }

  .mobile {
    /* display: none; */
  }
}
</style>
