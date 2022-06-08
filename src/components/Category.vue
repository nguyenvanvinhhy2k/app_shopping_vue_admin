<template>
  <div>
    <div class="container-fluid">
      <!-- Page Heading -->
      <h1 class="h3 mb-2 text-gray-800" style="text-align: center">
        Quản lí loại sản phẩm
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
                  <th>Loại mô hình</th>
                  <th>Mô tả</th>
                  <th style="width: 0px">Chức năng</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="category in categories" :key="category.id">
                  <td>
                    {{ category.id }}
                  </td>
                  <td>
                    {{ category.name }}
                  </td>
                  <td>
                    {{ category.title }}
                  </td>
                  <td>
                    <div class="" style="display: flex">
                      <span @click="isShow = !isShow">
                        <button
                          @click="getCategoryId(category.id)"
                          class="btn btn-danger"
                        >
                          EDIT
                        </button>
                      </span>
                      <button
                        @click="removeCategory(category.id)"
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
                <label for="">Loại mô hình</label>
                <div class="input">
                  <input
                    type="text"
                    placeholder=""
                    v-model="formCategories.name"
                  />
                </div>
              </div>
            </div>
            <div class="price" style="display: flex">
              <div class="content">
                <label for="">ParentID</label>
                <div class="input">
                  <input
                    type="text"
                    placeholder=""
                    v-model="formCategories.parentID"
                  />
                </div>
              </div>
              <div class="content">
                <label for="">Thứ tự</label>
                <div class="input">
                  <input
                    type="text"
                    placeholder=""
                    v-model="formCategories.sortOrder"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="content">
            <label for="">Mô tả</label>
            <div class="input">
              <ckeditor
                class="ckedit"
                v-model="formCategories.title"
              ></ckeditor>
            </div>
          </div>
          <div class="submit">
            <button
              @click="addCategory()"
              style="border-radius: 10%"
              class="btn btn-danger"
            >
              ADD
            </button>

            <button
              @click="editCategory()"
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
  name: "CategoryComponent",

  data() {
    return {
      isAdd: true,
      isShow: false,
      formCategories: {
        name: "",
        sortOrder: "",
        parentID: "",
        title: "",
      },
      id: null,
    };
  },
  async mounted() {
    await this.$store.dispatch("getCategories");
  },
  computed: {
    categories() {
      return this.$store.state.categories;
    },
  },
  methods: {
    addCategory() {
      axios
        .post(
          "https://localhost:44309/api/Category/Create",
          this.formCategories
        )
        .then((res) => {
          console.log(res.data);
          alert("Thêm thành công");
          this.isShow = !this.isShow;
          this.$store.dispatch("getCategories");
        })
        .catch((error) => console.log(error.message));
    },
    removeCategory(id) {
      if (confirm("Bạn có chắc muốn xóa")) {
        axios
          .delete(`https://localhost:44309/api/Category/Delete/${id}`)
          .then((res) => {
            console.log(res.data);
            alert("Xóa thành công");
            this.$store.dispatch("getCategories");
          })
          .catch((error) => console.log(error.message));
      }
    },
    editCategory() {
      const id = this.id;
      if (confirm("Bạn có chắc muốn sửa")) {
        axios
          .put(
            `https://localhost:44309/api/Category/Update/${id}`,
            this.formCategories
          )
          .then(() => {
            alert("Sửa thành công");
            this.isShow = !this.isShow;
            this.$store.dispatch("getCategories");
            this.formCategories = [];
          })
          .catch((error) => {
            console.log(error.message);
          });
      }
    },
    getCategoryId(id) {
      axios
        .get(`https://localhost:44309/api/Category/GetById/${id}`)
        .then((response) => {
          this.id = id;
          this.formCategories.name = response.data.name;
          this.formCategories.sortOrder = response.data.sortOrder;
          this.formCategories.title = response.data.title;
          this.formCategories.parentID = response.data.parentID;
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
  height: 520px;
  background: white;
  top: 12%;
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
  top: 85%;
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
