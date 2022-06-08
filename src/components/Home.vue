<template>
  <div>
    <div id="wrapper">
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <div class="container-fluid">
            <div
              class="d-sm-flex align-items-center justify-content-between mb-4"
            >
              <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
            </div>
            <div class="row">
              <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-left-primary shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div
                          class="text-xs font-weight-bold text-primary text-uppercase mb-1"
                        >
                          Tổng doanh thu
                        </div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">
                          {{
                            Intl.NumberFormat("vi-VN", {
                              style: "currency",
                              currency: "VND",
                            }).format(oderStatic.totalrevenue)
                          }}
                        </div>
                      </div>
                      <div class="col-auto">
                        <i class="fas fa-calendar fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-left-success shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div
                          class="text-xs font-weight-bold text-success text-uppercase mb-1"
                        >
                          Tổng lãi
                        </div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">
                          {{
                            Intl.NumberFormat("vi-VN", {
                              style: "currency",
                              currency: "VND",
                            }).format(oderStatic.profit)
                          }}
                        </div>
                      </div>
                      <div class="col-auto">
                        <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Earnings (Monthly) Card Example -->
              <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-left-info shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div
                          class="text-xs font-weight-bold text-info text-uppercase mb-1"
                        >
                          Đơn hàng thành công
                        </div>
                        <div class="row no-gutters align-items-center">
                          <div class="col-auto">
                            <div
                              class="h5 mb-0 mr-3 font-weight-bold text-gray-800"
                            >
                              {{ oderStatic.ordersuccess }}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-auto">
                        <i
                          class="fas fa-clipboard-list fa-2x text-gray-300"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-left-warning shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div
                          class="text-xs font-weight-bold text-warning text-uppercase mb-1"
                        >
                          Sản phẩm
                        </div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">
                          {{ toTalProduct }}
                        </div>
                      </div>
                      <div class="col-auto">
                        <i class="fas fa-comments fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-xl-8 col-lg-7">
                <div class="card shadow mb-4">
                  <div
                    class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
                  >
                    <h6 class="m-0 font-weight-bold text-primary">Biểu đồ</h6>
                  </div>
                  <div class="card-body">
                    <h4 class="small font-weight-bold">
                      Server Migration <span class="float-right">20%</span>
                    </h4>
                    <div class="progress mb-4">
                      <div
                        class="progress-bar bg-danger"
                        role="progressbar"
                        style="width: 20%"
                        aria-valuenow="20"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <h4 class="small font-weight-bold">
                      Sales Tracking <span class="float-right">40%</span>
                    </h4>
                    <div class="progress mb-4">
                      <div
                        class="progress-bar bg-warning"
                        role="progressbar"
                        style="width: 40%"
                        aria-valuenow="40"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <h4 class="small font-weight-bold">
                      Customer Database <span class="float-right">60%</span>
                    </h4>
                    <div class="progress mb-4">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style="width: 60%"
                        aria-valuenow="60"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <h4 class="small font-weight-bold">
                      Payout Details <span class="float-right">80%</span>
                    </h4>
                    <div class="progress mb-4">
                      <div
                        class="progress-bar bg-info"
                        role="progressbar"
                        style="width: 80%"
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <h4 class="small font-weight-bold">
                      Account Setup <span class="float-right">Complete!</span>
                    </h4>
                    <div class="progress">
                      <div
                        class="progress-bar bg-success"
                        role="progressbar"
                        style="width: 100%"
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <!-- Card Body -->
                </div>
              </div>

              <!-- Pie Chart -->
              <div class="col-xl-4 col-lg-5">
                <div class="card shadow mb-4">
                  <!-- Card Header - Dropdown -->
                  <div
                    class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
                  >
                    <h6 class="m-0 font-weight-bold text-primary">
                      Nguồn doanh thu
                    </h6>
                  </div>
                  <!-- Card Body -->
                  <div class="card-body">
                    <h4 class="small font-weight-bold">
                      Server Migration <span class="float-right">20%</span>
                    </h4>
                    <div class="progress mb-4">
                      <div
                        class="progress-bar bg-danger"
                        role="progressbar"
                        style="width: 20%"
                        aria-valuenow="20"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <h4 class="small font-weight-bold">
                      Sales Tracking <span class="float-right">40%</span>
                    </h4>
                    <div class="progress mb-4">
                      <div
                        class="progress-bar bg-warning"
                        role="progressbar"
                        style="width: 40%"
                        aria-valuenow="40"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <h4 class="small font-weight-bold">
                      Customer Database <span class="float-right">60%</span>
                    </h4>
                    <div class="progress mb-4">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style="width: 60%"
                        aria-valuenow="60"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <h4 class="small font-weight-bold">
                      Payout Details <span class="float-right">80%</span>
                    </h4>
                    <div class="progress mb-4">
                      <div
                        class="progress-bar bg-info"
                        role="progressbar"
                        style="width: 80%"
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <h4 class="small font-weight-bold">
                      Account Setup <span class="float-right">Complete!</span>
                    </h4>
                    <div class="progress">
                      <div
                        class="progress-bar bg-success"
                        role="progressbar"
                        style="width: 100%"
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeComponent",
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("getOrdersStatic");
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
  computed: {
    toTalProduct() {
      return this.$store.getters.toTalProducts;
    },
    orderTotal() {
      return this.$store.getters.orderTotals;
    },
    oderStatic() {
      return this.$store.state.orderStatic;
    },
  },
};
</script>

<style lang="scss" scoped></style>
