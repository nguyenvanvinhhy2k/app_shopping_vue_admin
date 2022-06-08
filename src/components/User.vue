<template>
  <div>
    <div class="container-fluid">
      <!-- Page Heading -->
      <h1 class="h3 mb-2 text-gray-800" style="text-align: center">
        Quản lí người dùng
      </h1>

      <!-- DataTales Example -->
      <div class="card shadow mb-4">
        <div class="card-header py-3" style="display: flex; float: right">
          <form
            class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search"
          >
            <div class="input-group">
              <input
                type="text"
                class="form-control bg-light border-0 small"
                placeholder="Search for..."
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
              <div class="input-group-append">
                <button
                  class="btn btn-primary"
                  type="button"
                  style="height: 40px"
                >
                  <i class="fas fa-search fa-sm">Tìm kiếm</i>
                </button>

                <button
                  @click="isShow = !isShow"
                  style="
                    margin-left: 783px;
                    border-radius: 10%;
                    margin-left: 780px;
                    width: 70px;
                  "
                  class="btn btn-danger"
                >
                  ADD
                </button>
              </div>
            </div>
          </form>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table
              class="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Họ tên</th>
                  <th>Tài khoản</th>

                  <th style="width: 0px">Chức năng</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="user in users" :key="user.userID">
                  <td>
                    {{ user.userID }}
                  </td>
                  <td>
                    {{ user.fullName }}
                  </td>
                  <td>
                    {{ user.userName }}
                  </td>

                  <td>
                    <div class="" style="display: flex">
                      <span @click="isShow = !isShow">
                        <button
                          @click="getUserId(user.userID)"
                          class="btn btn-danger"
                        >
                          EDIT
                        </button></span
                      >
                      <button
                        @click="removeUser(user.userID)"
                        class="btn btn-danger"
                      >
                        DELETE
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="" style="margin-left: 70%"></div>
      </div>
    </div>

    <div class="container-crud" v-if="isShow === true">
      <div class="crud">
        <div class="remove" @click="isShow = !isShow">
          <h5>X</h5>
        </div>

        <div class="crud-input">
          <div class="form" action="">
            <div class="content-left">
              <div class="content">
                <label for="">Họ tên(*)</label>
                <div class="input">
                  <input
                    type="text"
                    placeholder=""
                    v-model="formUsers.fullName"
                  />
                </div>
              </div>

              <div class="content">
                <label for="">Tên tài khoản(*)</label>
                <div class="input">
                  <input
                    type="text"
                    placeholder=""
                    v-model="formUsers.userName"
                  />
                </div>
              </div>
            </div>
            <div class="content-right">
              <div class="content">
                <label for="">Mật khẩu(*)</label>
                <div class="input">
                  <input
                    type="password"
                    placeholder=""
                    v-model="formUsers.passWord"
                  />
                </div>
              </div>

              <div class="content">
                <div class=""><label for="cars">Chức vụ(*)</label></div>
                <select
                  class="aa"
                  style="width: 90%; height: 40px; margin-bottom: 10px"
                  name="cars"
                  v-model="formUsers.role"
                >
                  <option value="1">ADMIN</option>
                  <option value="2">USER</option>
                </select>
              </div>
            </div>
          </div>

          <div class="submit">
            <button
              @click="addUsers()"
              style="border-radius: 10%"
              class="btn btn-danger"
            >
              ADD
            </button>

            <button
              @click="editProduct()"
              style="border-radius: 10%"
              class="btn btn-danger"
            >
              EDIT
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "UserComponent",
  data() {
    return {
      isShow: false,
      formUsers: {
        fullName: "",
        userName: "",
        passWord: "",
        role: "",
      },
      id: null,
    };
  },
  async created() {
    await this.$store.dispatch("getUsers");
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
  methods: {
    addUsers() {
      axios
        .post("https://localhost:44309/api/User/Create", this.formUsers)
        .then(() => {
          alert("Tạo tài khoản thành công");
          this.isShow = !this.isShow;
          this.$store.dispatch("getUsers");
        });
    },
    removeUser(id) {
      if (confirm("Bạn chắc có muốn xóa!!")) {
        axios
          .delete(`https://localhost:44309/api/User/Delete/${id}`)
          .then(() => {
            alert("Xóa thành công");
            this.$store.dispatch("getUsers");
          });
      }
    },
    editProduct() {
      const id = this.id;
      axios
        .put(`https://localhost:44309/api/User/Update/${id}`, this.formUsers)
        .then(() => {
          alert("Đổi mật khẩu thành công");
          this.isShow = !this.isShow;
          this.$store.dispatch("getUsers");
        });
    },

    getUserId(id) {
      axios
        .get(`https://localhost:44309/api/User/GetById/${id}`)
        .then((response) => {
          this.id = id;
          this.fullName = response.data.fullName;
          this.userName = response.data.userName;
          this.passWord = response.data.passWord;
          this.role = response.data.role;
        });
    },
  },
};
</script>

<style scoped>
a {
  margin: 10px;
}
th {
  text-align: center;
}
a {
  cursor: pointer;
}
.pagination {
  justify-content: center;
  flex-wrap: wrap;
}
.crud {
  position: fixed;
  width: 60%;
  height: 300px;
  background: white;
  top: 20%;
  right: 20%;
  z-index: 999;
  border: 2px solid #ccc;
}
.remove {
  float: right;
  padding: 15px;
}
.crud-input {
  width: 100%;
  padding: 20px;
}
.btn-danger {
  height: 40px;
  margin-top: 10px;
  margin-left: 10px;
}
input:focus {
  outline: none;
}
input {
  width: 90%;
  height: 40px;
}
.form {
  display: flex;
}
.content-left {
  width: 50%;
}
.content-right {
  width: 50%;
}
.submit {
  display: flex;
  position: absolute;
  padding: 6px;
  width: 60px;
  /* float: right; */
  margin-right: 128px;
  /* margin-top: -22px; */
  right: 0;
  top: 69%;
}
.remove {
  cursor: pointer;
}
.ckedit {
  height: 50px;
  width: 100%;
}
.input {
  padding-bottom: 10px;
}
a {
  cursor: pointer;
}
.pagination {
  justify-content: center;
  flex-wrap: wrap;
}
td {
  text-align: center;
}
button {
  background: orange;
  border: none;
}
button:hover {
  background: coral;
}
i {
  font-style: unset;
}
</style>
