<template>
  <v-toolbar-items class="notify">
    <v-menu offset-y max-height="400">
      <template v-slot:activator="{ on }">
        <v-btn text v-on="on">
          <v-badge color="cyan">
            <template v-slot:badge v-if="unreadCount > 0">{{ unreadCount }}</template>
            <v-icon color="white">mdi-email</v-icon>
          </v-badge>
        </v-btn>
      </template>

      <v-list two-line>
        <v-list-item-group>
          <template v-for="(item, index) in unread">
            <v-list-item :key="item.id">
              <template v-slot:default="{ active, toggle }">
                <router-link :to="'/'+item.path" class="grey lighten-3 px-2" style="text-decoration: none">
                  <v-list-item-content @click="readIt(item)">
                    <v-list-item-subtitle class="text--primary">
                      {{item.replyBy}}
                      <span class="grey--text">commented on</span>
                    </v-list-item-subtitle>
                    <v-list-item-subtitle v-text="item.question" class="caption"></v-list-item-subtitle>
                  </v-list-item-content>
                </router-link>
              </template>
            </v-list-item>

            <v-divider v-if="index + 1 < item.length" :key="index"></v-divider>
          </template>
        </v-list-item-group>
        <v-list-item-group>
          <template v-for="(item, index) in read">
            <v-list-item :key="item.id">
              <template v-slot:default="{ active, toggle }">
                <router-link :to="'/'+item.path" style="text-decoration: none">
                  <v-list-item-content>
                    <v-list-item-subtitle>
                      {{item.replyBy}}
                      <span class="grey--text">commented on</span>
                    </v-list-item-subtitle>
                    <v-list-item-subtitle v-text="item.question" class="caption"></v-list-item-subtitle>
                  </v-list-item-content>
                </router-link>
              </template>
            </v-list-item>

            <v-divider v-if="index + 1 < item.length" :key="index"></v-divider>
          </template>
        </v-list-item-group>
      </v-list>
    </v-menu>
  </v-toolbar-items>
</template>

<script>
export default {
  data: () => ({
    read: {},
    unread: {},
    unreadCount: 0
  }),
  created() {
    if (User.loggedIn()) {
      this.getNotifications();
    };
    Echo.private('App.User.' + User.id())
    .notification((notification) => {
        this.unread.unshift(notification)
        this.unreadCount++
    });
  },
  methods: {
    getNotifications() {
      axios.post("/api/notifications").then(res => {
        this.read = res.data.read;
        this.unread = res.data.unread;
        this.unreadCount = res.data.unread.length;
      })
      .catch(error => Exception.handle(error))
    },
    readIt(notification) {
      axios.post("/api/markAsRead", { id: notification.id }).then(res => {
        this.unread.splice(notification, 1);
        this.read.push(notification);
        this.unreadCount--;
      });
    }
  },
};
</script>

<style>
</style>