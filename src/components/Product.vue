<template>
  <div>
    <div class="container-fluid">
      <!-- Page Heading -->
      <h1 style="text-align: center" class="h3 mb-2 text-gray-800">
        QUẢN LÍ SẢN PHẨM
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
                  <th>Mã Loại</th>
                  <th>Tên</th>
                  <th>Ảnh</th>
                  <th>Giá bán</th>
                  <th>Giá nhập</th>
                  <th style="padding: 0 10px">Số lượng</th>
                  <th>Size</th>
                  <th>Mô tả</th>
                  <th style="width: 0px">Chức năng</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="product in products" :key="product.id">
                  <td style="padding-top: 70px">
                    {{ product.cateID }}
                  </td>
                  <td style="padding-top: 30px">
                    {{ product.name }}
                  </td>
                  <td>
                    <img
                      style="height: 140px; margin-top: 10px"
                      :src="product.image"
                      alt=""
                    />
                  </td>
                  <td style="padding-top: 70px">
                    {{
                      Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(product.price)
                    }}
                  </td>
                  <td style="padding-top: 70px">
                    {{
                      Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(product.originalPrice)
                    }}
                  </td>
                  <td style="padding-top: 70px; padding-left: 20px">
                    {{ product.quantity }}
                  </td>
                  <td style="padding-top: 70px; padding-left: 20px">
                    {{ product.size }}
                  </td>
                  <td v-html="product.description">
                    {{ product.description }}
                  </td>

                  <td style="padding-top: 50px">
                    <div class="" style="display: flex">
                      <span @click="isShow = !isShow">
                        <button
                          @click="getProductById(product.id)"
                          class="btn btn-danger"
                        >
                          EDIT
                        </button>
                      </span>
                      <button
                        @click="removeProduct(product.id)"
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
        <div class="flex" style="margin-left: 70%">
          <pagination
            :records="total"
            v-model="pageIndex"
            :per-page="pageSize"
            @paginate="getPage"
          >
          </pagination>
        </div>
      </div>
    </div>

    <div class="container-crud" v-if="isShow">
      <div class="crud">
        <div class="remove" @click="isShow = !isShow">
          <h5>X</h5>
        </div>

        <div class="crud-input">
          <div class="form" action="">
            <div class="content-left">
              <div class="content">
                <label for="">Tên sản phẩm</label>
                <div class="input">
                  <input
                    type="text"
                    placeholder=""
                    v-model="formProduct.name"
                  />
                </div>
              </div>

              <div class="price" style="display: flex">
                <div class="content">
                  <label for="">Giá bán</label>
                  <div class="input">
                    <input
                      type="text"
                      placeholder=""
                      v-model="formProduct.originalPrice"
                    />
                  </div>
                </div>
                <div class="content">
                  <label for="">Giá nhập</label>
                  <div class="input">
                    <input
                      type="text"
                      placeholder=""
                      v-model="formProduct.price"
                    />
                  </div>
                </div>
              </div>

              <div class="content">
                <label for="">Size</label>
                <div class="" style="display: flex; align-items: center">
                  <input
                    style="height: 20px; width: 15%"
                    type="radio"
                    id="S"
                    name="size"
                    value="S"
                    v-model="formProduct.size"
                  />
                  <label for="S">S</label><br />
                  <input
                    style="height: 20px; width: 15%"
                    type="radio"
                    id="M"
                    name="size"
                    value="M"
                    v-model="formProduct.size"
                  />
                  <label for="M">M</label><br />
                  <input
                    style="height: 20px; width: 15%"
                    type="radio"
                    id="L"
                    name="size"
                    value="L"
                    v-model="formProduct.size"
                  />
                  <label for="L">L</label><br /><br />
                </div>
              </div>
            </div>
            <div class="content-right">
              <div class="content">
                <div class=""><label for="cars">Loại sản phẩm</label></div>
                <select
                  class="aa"
                  style="width: 90%; height: 40px; margin-bottom: 10px"
                  name="cars"
                  id="cars"
                  v-model="formProduct.cateID"
                >
                  <option value="2">Mô hình BanDai</option>
                  <option value="10">Mô hình Dragon Ball</option>
                  <option value="11">Mô hình Naruto</option>
                  <option value="3">Mô hình One Piece</option>
                </select>
              </div>
              <div class="">
                <div class="content">
                  <label for="">Số lượng</label>
                  <div class="input">
                    <input
                      type="text"
                      placeholder=""
                      v-model="formProduct.quantity"
                    />
                  </div>
                </div>

                <div class="content">
                  <label for="">Hình ảnh</label>
                  <div class="input" style="display: flex">
                    <div
                      class=""
                      v-if="!formProduct.image"
                      style="height: 70px"
                    >
                      <input
                        name="file"
                        id="imageUpload"
                        @change="onFileChange"
                        accept="image/*"
                        ref="fileInput"
                        type="file"
                      />
                    </div>

                    <div class="" v-else>
                      <img
                        v-if="formProduct.image"
                        style="width: 100px; height: 70px"
                        :src="formProduct.image"
                      />
                      <button
                        style="
                          background: white;
                          border: none;
                          position: absolute;
                          margin-left: 8px;
                        "
                        @click="removeImage(e)"
                      >
                        X
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="content">
            <label for="">Mô tả</label>
            <div class="input">
              <ckeditor
                class="ckedit"
                v-model="formProduct.description"
              ></ckeditor>
            </div>
          </div>
          <div class="submit">
            <button
              v-if="id === null"
              @click="addProduct()"
              style="border-radius: 10%"
              class="btn btn-danger"
            >
              ADD
            </button>

            <button
              v-if="id !== null"
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
import Pagination from "vue-pagination-2";
// import VueTailwindPagination from "@ocrv/vue-tailwind-pagination";

export default {
  name: "ProductComponent",
  components: { Pagination },
  data() {
    return {
      formProduct: {
        name: "",
        price: "",
        originalPrice: "",
        quantity: "",
        size: "",
        description: "",
        image: "",
        cateID: "",
      },
      products: [],
      formProducts: {},
      isShow: false,
      pageIndex: 1,
      pageSize: 4,
      total: 0,
      id: null,
    };
  },

  async created() {
    await this.loadListItem();
    await this.onFileChange();
  },
  methods: {
    async loadListItem() {
      await axios
        .get(
          `https://localhost:44309/api/Product/GetAllPageing?pageIndex=${this.pageIndex}&pageSize=${this.pageSize}`
        )
        .then((response) => {
          this.products = response.data.items;
          this.total = response.data.totalRecord;
          this.pageSize = response.data.pageSize;
          this.pageCount = response.data.pageCount;
          this.pageIndex = response.data.pageIndex;
        });
    },
    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      let reader = new FileReader();
      let vm = this.formProduct;
      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage() {
      this.formProduct.image = "";
    },
    getPage() {
      this.loadListItem();
    },
    async addProduct() {
      // this.$store.dispatch("addProduct", this.formProduct);
      await axios
        .post("https://localhost:44309/api/Product/Create", this.formProduct)
        .then((response) => {
          console.log(response);
          alert("Thêm sản phẩm thành công");
          this.isShow = !this.isShow;
          this.loadListItem();
          this.formProduct = [];
        })
        .catch((error) => console.log(error));
    },
    async removeProduct(id) {
      if (confirm("Bạn chắc có muốn xóa!")) {
        await axios
          .delete(`https://localhost:44309/api/Product/Delete/${id}`)
          .then((response) => {
            console.log(response);

            this.loadListItem();
          })
          .catch((error) => console.log(error));
      }
    },
    async editProduct() {
      const id = this.id;
      if (confirm("Bạn chắc có muốn sửa!")) {
        await axios
          .put(
            `https://localhost:44309/api/Product/Update/${id}`,
            this.formProduct
          )
          .then((response) => {
            console.log(response);
            alert("Sửa sản phẩm thành công");
            this.isShow = !this.isShow;
            this.loadListItem();
            console.log(this.formProduct);
          })
          .catch((error) => console.log(error));
      }
    },
    async getProductById(id) {
      this.id !== null;
      await axios
        .get(`https://localhost:44309/api/Product/GetById/${id}`)
        .then((response) => {
          this.id = id;
          this.formProduct.cateID = response.data.result.cateID;
          this.formProduct.name = response.data.result.name;
          this.formProduct.price = response.data.result.price;
          this.formProduct.originalPrice = response.data.result.originalPrice;
          this.formProduct.quantity = response.data.result.quantity;
          this.formProduct.description = response.data.result.description;
          this.formProduct.image = response.data.result.image;
        })
        .catch((error) => console.log(error));
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
label {
  font-weight: 700;
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
  height: 650px;
  background: white;
  top: 8%;
  right: 15%;
  z-index: 999;
  border: 2px solid #ccc;

  transition: 2s;
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
  padding: 6px;
  width: 60px;
  float: right;

  margin-right: 48px;
  margin-top: -130px;
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
