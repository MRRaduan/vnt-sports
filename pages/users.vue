<template>
  <div>
    <SportsInfo />
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
        <div class="table-wrapper">
          <table class="users-table" v-if="tableContent">
            <thead>
              <tr>
                <th v-for="(columnName, index) in theadColumns" :key="index">
                  <p class="columntitle text-primary">{{ columnName }}</p>
                </th>
              </tr>
            </thead>
            <transition-group name="userstable" tag="tbody">
              <tr v-for="(tableRow, index) in tableContent" :key="tableRow.id">
                <td>
                  <p class="item text-primary">{{tableRow.username}}</p>
                </td>
                <td>
                  <p class="item text-primary">{{tableRow.name}}</p>
                </td>
                <td>
                  <a
                    :href="'mailto:'+tableRow.email"
                    class="text-primary -link -green"
                  >{{tableRow.email}}</a>
                </td>
                <td>
                  <a
                    :href="maps(tableRow.address)"
                    class="text-primary -link -green"
                    target="_blank"
                  >{{tableRow.address.city}}</a>
                </td>
                <td>
                  <p class="item text-primary">{{tableRow.ride_in_group}}</p>
                </td>
                <td>
                  <p class="item text-primary">{{tableRow.day_of_week}}</p>
                </td>
                <td>
                  <a href class="text-primary posts -link -green">{{tableRow.posts.length}}</a>
                </td>
                <td>
                  <a href class="text-primary albums -link -green">{{tableRow.albums.length}}</a>
                </td>
                <td>
                  <p class="item text-primary photos">{{tableRow.photos}}</p>
                </td>
                <td>
                  <button class="deleteicon" @click.prevent="deleteItem(index)">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="trash-alt"
                      class="svg-inline--fa fa-trash-alt fa-w-14"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            </transition-group>
          </table>
        </div>

        <div class="buttons-wrapper">
          <nuxt-link class="btn-primary" to="/registration">
            <span class="text-primary -white">Add new user</span>
          </nuxt-link>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import SportsInfo from '@/components/SportsInfo.vue'
import { loadUsersData } from '@/utils/endpoints.js'

export default {
  name: 'Users',
  components: {
    SportsInfo
  },
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
    maps(address) {
      return `http://maps.google.com/maps?q=${address.geo.lat},${address.geo.lng}`
    },
    async getTableContent() {
      this.tableContent = await loadUsersData()
    },
    deleteItem(index) {
      this.tableContent.splice(index, 1)
    }
  },
  mounted() {
    this.getTableContent()
  }
}
</script>


<style lang="scss" scoped>
@import '@/assets/scss/styles.scss';

.userstable {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}

.userstable-enter,
.userstable-leave-to {
  opacity: 0;
  transform: translate3d(0, 20px, 0);
  transition: all 1s ease-in-out;
}

.userstable-leave-active {
  position: absolute;
}

.userstable-move {
  transition: transform 1s;
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

.users-table {
  border: none;
  border-spacing: 0;
  border-collapse: separate;
  overflow-y: hidden;
  .columntitle {
    text-align: left;
    font-size: 14px;
  }

  .item,
  a {
    font-size: 14px;
    padding-right: 10px;
  }

  .deleteicon {
    border: none;
    background: transparent;
    opacity: 0;
    transition: all 0.32s ease-in-out;
    cursor: pointer;
    svg {
      width: 14px;
      path {
        fill: $green;
        stroke: $green;
      }
    }
  }

  th,
  td {
    border: none;
    padding: 0 14px;
  }
  tr {
    td {
      background: $white;
    }
    &:nth-child(2n) {
      td {
        background: $grey-light;
      }
    }

    &:hover {
      td {
        background: $grey;
      }

      .deleteicon {
        opacity: 1;
      }
    }
  }
}

.table-wrapper {
  overflow-x: hidden;
}

.buttons-wrapper {
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
</style>

