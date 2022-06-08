<template>
  <div>
    <ul
      class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
      style="height: 100%"
    >
      <!-- Sidebar - Brand -->
      <router-link
        to="/"
        class="sidebar-brand d-flex align-items-center justify-content-center"
      >
        <div class="sidebar-brand-icon rotate-n-15">
          <i class="fas fa-laugh-wink"></i>
        </div>
        <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
      </router-link>
      <!-- Divider -->
      <hr class="sidebar-divider my-0" />
      <!-- Nav Item - Dashboard -->
      <li class="nav-item active">
        <router-link to="/" class="nav-link">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </router-link>
      </li>

      <!-- Divider -->
      <hr class="sidebar-divider" />

      <!-- Heading -->
      <div class="sidebar-heading">Quản lí danh mục</div>

      <!-- Nav Item - Pages Collapse Menu -->
      <li class="nav-item">
        <a class="nav-link" data-toggle="collapse" data-target="#collapseTwo">
          <span>Danh mục</span>
        </a>
        <div id="collapseTwo" class="collapse">
          <div class="bg-white py-2 collapse-inner rounded">
            <router-link to="/" class="collapse-item">General</router-link>
            <router-link to="/product" class="collapse-item"
              >Products</router-link
            >
            <router-link to="/category" class="collapse-item"
              >Categories</router-link
            >

            <router-link to="/oder" class="collapse-item">Oders</router-link>
            <router-link to="/oder-success" class="collapse-item"
              >Oders Success</router-link
            >
            <router-link to="/oder-cancel" class="collapse-item"
              >Oders Cancel</router-link
            >
            <router-link to="/user" class="collapse-item">Users</router-link>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SideBarComponent",
};
</script>

<style scoped>
.nav-link {
  cursor: pointer;
}
</style>
