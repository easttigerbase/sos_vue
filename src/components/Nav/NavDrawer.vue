<template>
  <v-navigation-drawer
      permanent
      expand-on-hover
    absolute
  >
    <v-list>
      <v-list-item class="px-2" link>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>
        <div>
        <v-list-item-title class="text-h9" >
          신동호
        </v-list-item-title>
        <v-list-item-subtitle>neweasttiger@naver.com</v-list-item-subtitle>
        </div>
        <v-btn
            icon
        >
          <v-icon>mdi-login</v-icon>
        </v-btn>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list
        nav
        dense
    >
      <v-list-item link href="/workflow/main">
        <v-list-item-icon>
          <v-icon>mdi-file-document-check-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-title>결재</v-list-item-title>
        <v-list-item-avatar  size="24" >
          <span class="darken-2 blue--text font-weight-bold">1</span>
        </v-list-item-avatar>
      </v-list-item>
      <v-list-item link href="/material/management">
        <v-list-item-icon>
          <v-icon>mdi-warehouse</v-icon>
        </v-list-item-icon>
        <v-list-item-title>자재 관리</v-list-item-title>
      </v-list-item>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-account-multiple</v-icon>
        </v-list-item-icon>
        <v-list-item-title>인사랑</v-list-item-title>
      </v-list-item>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-account-cash-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-title>발주관리</v-list-item-title>
      </v-list-item>

    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "NavDrawer",
  data:function () {
    return{

    }
  }
}
</script>

<style scoped>

</style>