<template>
  <div class="container">
    <section class="users-section">
      <div class="header-section">
        <h1 class="text-primary -title -light">Users</h1>
        <div class="form-group -icon -placeholder">
          <div class="inputwrapper">
            <div class="icon">
              <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
              <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                style="enable-background:new 0 0 56.966 56.966;"
                xml:space="preserve"
              >
                <path
                  d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23
            s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92
            c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17
            s-17-7.626-17-17S14.61,6,23.984,6z"
                />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
              </svg>
            </div>
            <input type="text" class="input" placeholder="Filter table content" />
          </div>
        </div>
      </div>

      <table class="users-table" v-if="tableContent">
        <thead>
          <tr>
            <th v-for="(columnName, index) in theadColumns" :key="index">{{ columnName }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="tableRow in tableContent" :key="tableRow.id">
            <td>{{tableRow.username}}</td>
            <td>{{tableRow.name}}</td>
            <td>
              <a href class="text-primary -link -green">{{tableRow.name}}</a>
            </td>
            <td>
              <a href class="text-primary -link -green">{{tableRow.address.city}}</a>
            </td>
            <td>teste</td>
            <td>teste</td>
            <td>
              <a href class="text-primary -link -green">teste</a>
            </td>
            <td>
              <a href class="text-primary -link -green">teste</a>
            </td>
            <td>teste</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Users',
  data() {
    return {
      theadColumns: [
        'Username',
        'Name',
        'E-mail',
        'City',
        'Ride in Group',
        'Day of the week',
        'Posts',
        'Albums',
        'Photos'
      ],
      tableContent: null
    }
  },
  methods: {
    async getTableContent() {
      await this.$axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
          this.tableContent = res.data
        })
      console.log(this.tableContent)
    }
  },
  mounted() {
    this.getTableContent()
  }
}
</script>


<style lang="scss" scoped>
@import '@/assets/scss/styles.scss';
.users-section {
  margin-top: 53px;
}

.header-section {
  display: flex;
  align-items: center;
  > .text-primary {
    &:after {
      @include breakpoint(medium) {
        min-width: 196px;
        margin-right: 52px;
      }
      @include breakpoint(large) {
        min-width: 736px;
      }
    }
  }

  > .form-group {
    @include breakpoint(medium) {
      width: 300px;
    }
  }
}
</style>

