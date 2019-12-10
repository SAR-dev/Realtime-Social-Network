<template>
  <v-container class="pt-0 pb-10">
    <v-row>
      <v-col cols="12">
        <v-card max-width="900" class="mx-auto justify-left" outlined>
          <reply v-for="(reply, index) in question.replies" :data="reply" :index=index :key="reply.id" ></reply>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import reply from "./Reply";

export default {
  props: ["question"],
  components: {
    reply
  },
  data() {
    return {
    };
  },
  created() {
    this.listen();
  },
  methods: {
    listen() {
      EventBus.$on("newReply", reply => {
        this.question.replies.unshift(reply);
      });

      EventBus.$on('deleteReply', (index) => {
        axios.delete(`/api/question/${this.question.slug}/reply/${this.question.replies[index].id}`)
          .then(res => {
            this.question.replies.splice(index, 1);
          })
      });

      Echo.private('App.User.' + User.id())
        .notification((notification) => {
            this.question.replies.unshift(notification.reply)
        });
      
      Echo.channel('deleteReplyChannel')
        .listen('DeleteReplyEvent', (e) => {
          for(let index = 0; index < this.question.replies.length; index++){
            if(this.question.replies[index].id == e.id){
              this.question.replies.splice(index,1)
            }
          }
        })
    }
  },
};
</script>

<style scoped>
</style>