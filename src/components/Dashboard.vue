<script lang="ts">
import { defineComponent, onMounted, ref, watchEffect } from "vue";
import { useStore } from "vuex";
import pencil from "@/assets/pencil.svg";
// import EditEmail from "@/components/EditEmail.vue";
import EditFirstName from "@/components/EditFirstName.vue";
import EditLastName from "@/components/EditLastName.vue";
import EditPhoneNumber from "@/components/EditPhoneNumber.vue";
import EditPassword from "@/components/EditPassword.vue";
import $ from "jquery";

export default defineComponent({
  name: "Dashboard",
  components: { 
    // EditEmail,
    EditFirstName,
    EditLastName,
    EditPhoneNumber,
    EditPassword,
  },
  setup() {
    const store = useStore();
    // const editMail = ref(false);
    const editFirstName = ref(false);
    const editLastName = ref(false);
    const editPhoneNumber = ref(false);
    const editPassword = ref(false);

    // const hideEditEmail = () => {
    //   if(editMail.value){
    //     editMail.value = false;
    //   }
    // }
    // const displayEditEmail = () => {
    //   setTimeout(() => {
    //     editMail.value = true;
    //   }, 10);
    // }
    const hideEditFirstName = () => {
      if(editFirstName.value){
        editFirstName.value = false;
      }
    }
    const displayEditFirstName = () => {
      setTimeout(() => {
        editFirstName.value = true;
      }, 10);
    }
    
    const hideEditLastName = () => {
      if(editLastName.value){
        editLastName.value = false;
      }
    }
    const displayEditLastName = () => {
      setTimeout(() => {
        editLastName.value = true;
      }, 10);
    }

    const hideEditPhoneNumber = () => {
      if(editPhoneNumber.value){
        editPhoneNumber.value = false;
      }
    }
    const displayEditPhoneNumber = () => {
      setTimeout(() => {
        editPhoneNumber.value = true;
      }, 10);
    }

    const hideEditPassword = () => {
      if(editPassword.value){
        editPassword.value = false;
      }
    }
    const displayEditPassword = () => {
      setTimeout(() => {
        editPassword.value = true;
      }, 10);
    }

    return { store, pencil, editFirstName, editLastName, editPhoneNumber, hideEditLastName, displayEditLastName, displayEditFirstName, hideEditFirstName, hideEditPhoneNumber, displayEditPhoneNumber, editPassword, hideEditPassword, displayEditPassword };
  },
});
</script>

<template>
<div class="w-full h-full relative" id="Dashboard">
  <div class="h-full w-full p-4 tablet:p-10">
    <div class="border-2 bg-darkC h-full border-darkBorder rounded-2xl">
      <div class="relative flex-shrink-0 bg-darkB w-full text-10px border-b-2 border-darkBorder tablet:text-14px h-5 tablet:h-11 block rounded-t-2xl">
        <p class="text-white absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2 font-maven-bold text-10px tablet:text-20px">My account</p>
      </div>
      <div class="p-4 tablet:p-10">
        <div>
          <p class="text-white font-maven-medium text-12px tablet:text-20px">Private informations</p>
          <div class="mt-1 tablet:mt-4 flex flex-wrap gap-4 tablet:gap-24">
            <div class="text-white relative w-fit tablet:w-fit largeScreen:w-fit font-maven-medium">
              <p class="text-6px tablet:text-10px largeScreen:text-12px">Mail</p>
              <p class="-mt-1 tablet:-mt-2 text-8px tablet:text-base largeScreen:text-lg">{{ store.state.user.email }}</p>
              <!-- <img @click="displayEditEmail" class="w-6 h-6 absolute -right-10 top-2 cursor-pointer" :src="pencil" alt=""> -->
              <!-- <EditEmail v-click-outside="hideEditEmail" v-if="editMail" /> -->
            </div>
            <div class="text-white w-fit tablet:w-fit largeScreen:w-fit font-maven-medium relative">
              <p class="text-6px tablet:text-10px largeScreen:text-12px">First name</p>
              <p class="-mt-1 tablet:-mt-2 text-8px tablet:text-base largeScreen:text-lg">{{ store.state.user.firstname }}</p>
              <img @click="displayEditFirstName" class="w-6 h-6 absolute -right-10 top-2 cursor-pointer" :src="pencil" alt="">
              <EditFirstName @close="hideEditFirstName" class="top-9" v-click-outside="hideEditFirstName" v-if="editFirstName" />
            </div>
            <div class="text-white w-fit tablet:w-fit largeScreen:w-fit font-maven-medium relative">
              <p class="text-6px tablet:text-10px largeScreen:text-12px">Last name</p>
              <p class="-mt-1 tablet:-mt-2 text-8px tablet:text-base largeScreen:text-lg">{{ store.state.user.lastname }}</p>
              <img @click="displayEditLastName" class="w-6 h-6 absolute -right-10 top-2 cursor-pointer" :src="pencil" alt="">
              <EditLastName @close="hideEditLastName" class="top-9" v-click-outside="hideEditLastName" v-if="editLastName" />
            </div>
            <div class="text-white w-fit tablet:w-fit largeScreen:w-fit font-maven-medium relative">
              <p class="text-6px tablet:text-10px largeScreen:text-12px">Phone</p>
              <p class="-mt-1 tablet:-mt-2 text-8px tablet:text-base largeScreen:text-lg">{{ store.state.user.phoneNumber }}</p>
              <img @click="displayEditPhoneNumber" class="w-6 h-6 absolute -right-10 top-2 cursor-pointer" :src="pencil" alt="">
              <EditPhoneNumber @close="hideEditPhoneNumber" class="top-9" v-click-outside="hideEditPhoneNumber" v-if="editPhoneNumber" />
            </div>
            <div class="text-white w-fit tablet:w-fit largeScreen:w-fit font-maven-medium">
              <p class="text-6px tablet:text-10px largeScreen:text-12px">Title</p>
              <p class="-mt-1 tablet:-mt-2 text-8px tablet:text-base largeScreen:text-lg">Not available</p>
            </div>
            <div class="text-white w-fit tablet:w-fit largeScreen:w-fit font-maven-medium relative">
              <p class="text-6px tablet:text-10px largeScreen:text-12px">Password</p>
              <p class="tablet:-mt-1 text-8px tablet:text-base largeScreen:text-lg">*********</p>
              <img @click="displayEditPassword" class="w-6 h-6 absolute -right-10 top-2 cursor-pointer" :src="pencil" alt="">
              <EditPassword class="top-9" v-click-outside="hideEditPassword" v-if="editPassword" />
            </div>
          </div>
        </div>
        <div class="my-2 tablet:my-10 bg-darkBorder h-0.5 rounded-2xl">
        </div>
        <div>
          <p class="text-white font-maven-medium text-12px tablet:text-20px">Public informations</p>
          <div class="mt-1 tablet:mt-4 flex flex-wrap gap-10 tablet:gap-24">
            <div class="text-white w-fit tablet:w-fit largeScreen:w-fit font-maven-medium">
              <p class="text-6px tablet:text-10px largeScreen:text-12px">Pseudo</p>
              <p class="-mt-1 tablet:-mt-2 text-8px tablet:text-base largeScreen:text-lg">{{ store.state.user.username }}</p>
            </div>
            <div class="text-white w-fit tablet:w-fit largeScreen:w-fit font-maven-medium">
              <p class="text-6px tablet:text-10px largeScreen:text-12px">Image</p>
              <img class="w-6 tablet:w-12" :src="store.state.user.profileImg"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
