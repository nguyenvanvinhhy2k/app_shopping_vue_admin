<template>
  <div>
    <div class="container-fluid">
      <!-- Page Heading -->
      <h1 class="h3 mb-2 text-gray-800" style="text-align: center">
        Quản lí đơn hàng
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

                <router-link
                  to="/oder-success"
                  style="
                    margin-left: 783px;
                    border-radius: 3%;
                    margin-left: 780px;
                  "
                  class="btn btn-danger"
                >
                  Đơn hàng thành công
                </router-link>
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
                  <th>Số điện thoại</th>
                  <th>Địa chỉ</th>
                  <th>Ngày đặt</th>
                  <th>Trạng thái</th>
                  <th style="width: 0px">Chức năng</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="oder in oders" :key="oder.id">
                  <td>
                    {{ oder.id }}
                  </td>
                  <td>
                    {{ oder.custemerName }}
                  </td>
                  <td>
                    {{ oder.custemerPhone }}
                  </td>
                  <td>
                    {{ oder.custemerAddress }}
                  </td>
                  <td>{{ formatDate(oder.createDate) }} AM</td>
                  <td>
                    <div class="content">
                      <select
                        class="aa"
                        style="width: 90%; height: 40px; margin-bottom: 10px"
                        name="cars"
                        id="cars"
                        v-model="oder.status"
                      >
                        <option :value="0">Đơn hàng chưa xác thực</option>
                        <option :value="1">Đơn hàng đã xác thực</option>
                        <option :value="2">Đơn hàng đang giao</option>
                        <option :value="3">Đơn hàng thành công</option>
                        <option :value="4">Đơn hàng hủy</option>
                      </select>
                    </div>
                  </td>
                  <td>
                    <div class="" style="display: flex">
                      <button
                        @click="
                          updateStatus({ id: oder.id, status: oder.status })
                        "
                        class="btn btn-danger"
                      >
                        UPDATE
                      </button>

                      <span @click="isShow = !isShow">
                        <button
                          @click="oderDetail(oder.id)"
                          class="btn btn-danger"
                        >
                          VIEW
                        </button></span
                      >

                      <button
                        @click="updateStatus({ id: oder.id, status: 4 })"
                        class="btn btn-danger"
                      >
                        CANCEL
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="" style="margin-left: 65%">
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

    <div class="container-crud" v-if="isShow === true">
      <div class="crud">
        <div
          class="remove"
          style="display: flex; width: 100%"
          @click="isShow = !isShow"
        >
          <h1 style="text-align: center; margin-top: 20ppx; width: 100%">
            Chi tiết đơn hàng
          </h1>
          <h5>X</h5>
        </div>

        <div class="crud-input">
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
                    <th>Tên sản phẩm</th>
                    <th>Hình ảnh</th>
                    <th>Giá</th>
                    <th>Số lượng</th>
                  </tr>
                </thead>

                <tbody>
                  <tr v-for="orderDetail in orderDetails" :key="orderDetail.id">
                    <td style="padding-top: 50px">
                      {{ orderDetail.id }}
                    </td>
                    <td>{{ orderDetail.productName }}</td>
                    <td>
                      <img
                        style="height: 100px; margin-top: 10px"
                        :src="orderDetail.image"
                        alt=""
                      />
                    </td>
                    <td style="padding-top: 50px">
                      {{
                        Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(orderDetail.price)
                      }}
                    </td>
                    <td style="padding-top: 50px">
                      {{ orderDetail.quantity }}
                    </td>
                  </tr>
                </tbody>
              </table>

              <div class="" style="float: right">
                Tổng tiền:
                {{
                  Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(orderTotal)
                }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from "vue-pagination-2";
import axios from "axios";
import moment from "moment";

export default {
  name: "OderComponent",
  components: { Pagination },
  data() {
    return {
      isShow: false,
      oders: [],
      pageIndex: 1,
      pageSize: 5,
      total: 0,
    };
  },
  async created() {
    await this.loadListItem();
  },
  computed: {
    orderDetails() {
      return this.$store.state.orderDetails;
    },
    orderTotal() {
      return this.$store.getters.orderTotalPrice;
    },
  },
  methods: {
    formatDate: function (value) {
      return moment(String(value)).format("MM-DD-YYYY - hh:mm");
    },
    async loadListItem() {
      await axios
        .get(
          `https://localhost:44309/api/Order/GetAllPageing?pageIndex=${this.pageIndex}&pageSize=${this.pageSize}`
        )
        .then((res) => {
          this.oders = res.data.items;
          this.total = res.data.totalRecord;
          this.pageSize = res.data.pageSize;
          this.pageCount = res.data.pageCount;
          this.pageIndex = res.data.pageIndex;
        });
    },
    getPage(pageIndex) {
      this.oders = [];
      const startIndex = this.pageSize * (pageIndex - 1) + 1;
      const endIndex = startIndex + this.pageSize - 1;
      for (let i = startIndex; i <= endIndex; i++) {
        this.loadListItem(this.oders.push(`Item ${i}`));
      }
    },
    oderDetail(id) {
      this.$store.dispatch("getOrderDetailId", id);
    },
    orderSuccess() {},
    updateStatus(status) {
      axios
        .put(
          `https://localhost:44309/api/Order/UpdateOrderStatus/${status.id}`,
          status
        )
        .then((response) => {
          console.log(response.data);
          alert("Cập nhập thành công");
          console.log(status);
          this.loadListItem();
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
  min-height: 250px;
  background: white;
  top: 8%;
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
td {
  text-align: center;
}
.btn-danger,
button {
  background: orange;
  border: none;
}
i {
  font-style: inherit;
}
.btn-danger:hover,
button:hover {
  background: coral;
}
a {
  font-style: unset;
}
</style>
