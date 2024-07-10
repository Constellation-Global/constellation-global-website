<template>
    <Teleport to="body">
      <Transition name="modal-fade" @click.self="closeModal" appear>
      <!-- <Transition name="modal-fade" :handle-close="closeModal" :isOpened="isModalVisible"> -->
        <div class="p-10 modal-wrapper"  v-if="showModal">
            <main class="w-full h-full overflow-auto bg-white rounded-lg">
                <div v-if="step === 1" class="flex flex-col items-center w-full h-full gap-10 p-10 px-6 overflow-auto bg-white rounded-lg md:px-10">        
                    <div class="max-w-sm text-center">
                        <h3 class="text-xl md:text-2xl xl:text-[1.7rem] font-bold mb-3 text-[#42526E]">Select hiring type</h3>
                        <p class="text-sm md:text-md text-[#626F86]">
                            You have no activity yet! when you do it’ll be displayed here. Meanwhile, you can take a tour through the app
                        </p>
                    </div>
                    <div class="grid md:grid-cols-2 gap-6 md:gap-12 max-w-[1028px]">
                        <div @click="() => selectType('Employee')" :class="[{ 'border border-[#506FF4] shadow-[#506ff42e]': selectedType == 'Employee' }, 'flex flex-col items-center gap-3 p-8 text-center bg-white shadow-lg cursor-pointer rounded-2xl md:gap-5']">
                            <img :src="EmployeeImg" alt="Cost Calculator Countries"  class="w-[200px] h-[200px]" />
                            <!-- <img class="w-[200px] h-[200px]6" src={EmployeeImg} alt="Man"/> -->
                            <p class="text-xs text-center md:text-sm max-w-[210px] md:max-w-[230px] text-[#42526E]">This is a summary of employment cost for this employee!</p>
                            <h3 class="text-xl md:text-[1.35rem] font-bold mb-4 text-[#42526E]">Employee</h3>
                        </div>
                        <div @click="() => selectType('Contractor')" :class="[{ 'border border-[#506FF4] shadow-[#506ff42e]': selectedType == 'Contractor' }, 'flex flex-col items-center gap-3 p-8 text-center bg-white shadow-lg cursor-pointer rounded-2xl md:gap-5']">
                            <img :src="ContractImg" alt="Cost Calculator Countries"  class="w-[200px] h-[200px]" />
                            <!-- <img class="w-[200px] h-[200px]6" src={WomananImg} alt="Woman"/> -->
                            <p class="text-xs text-center md:text-sm max-w-[210px] md:max-w-[230px] text-[#42526E]">This is a summary of employment cost for this contractor!</p>
                            <h3 class="text-xl md:text-[1.35rem] font-bold mb-4 text-[#42526E]">Contractor</h3>
                        </div>
                    </div>
                    <div class="flex items-center justify-center">
                        <button
                            @click="handleNext"
                            class="px-20 py-3 text-xs text-white rounded-full btn-outline bg-primary md:px-28 btn whitespace-nowrap md:text-sm"
                        >
                        Continue
                        </button>
                        <!-- <Link href={`/${selected}`} onClick={handleLink}>
                            <CgButton class="px-20 md:px-28 lg:px-32" type={'button'}>Continue</CgButton>
                        </Link> -->
                    </div>
                </div>
                <div v-if="step === 2" class="flex flex-col w-full h-full gap-3 p-10 px-6 overflow-auto bg-white rounded-lg md:px-10 md:items-center">        
                    <div class="max-w-md md:text-center">
                        <h3 class="text-xl md:text-2xl xl:text-[1.7rem] font-bold mb-3 text-[#42526E]">Employment cost calculator</h3>
                        <p class="text-sm md:text-md text-[#626F86]">
                            You have no activity yet! when you do it’ll be displayed here. Meanwhile, you can take a tour through the app
                        </p>
                    </div>
                    <form id="contact-form" class="flex flex-col w-full max-w-2xl gap-10 mx-auto">
                        <div class="grid w-full gap-3 py-4 text-sm gap-x-5 gap-y-4 md:gap-y-6">
                            <div class="flex flex-col w-full gap-1.5 text-[#44546F]">
                                <label class="text-xs" for="firstName">Hiring country</label>
                                <input v-model="support.name" id="firstName" class="w-full text-sm border border-gray-200 input form-control focus:outline-none" placeholder="Czech republic" name="firstName" required/>
                            </div>
                            <div class="flex flex-col w-full gap-1.5 text-[#44546F]">
                                <label class="text-xs" for="firstName">Currency</label>
                                <input v-model="support.name" id="firstName" class="w-full text-sm border border-gray-200 input form-control focus:outline-none" placeholder="USD" name="firstName" required/>
                            </div>
                            <div class="grid gap-3 md:grid-cols-2 gap-x-5 gap-y-4 md:gap-y-6">
                                <div class="flex flex-col w-full gap-1.5 text-[#44546F]">
                                    <label class="text-xs" for="firstName">Amount</label>
                                    <input v-model="support.name" id="firstName" class="w-full text-sm border border-gray-200 input form-control focus:outline-none" placeholder="Paid amount" name="firstName" required/>
                                </div>
                                <div class="flex flex-col w-full gap-1.5 text-[#44546F]">
                                    <label class="text-xs" for="firstName">Period</label>
                                    <input v-model="support.name" id="firstName" class="w-full text-sm border border-gray-200 input form-control focus:outline-none" placeholder="Annually" name="firstName" required/>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center justify-center gap-4">
                            <button
                                @click="() => step--"
                                class="px-6 py-3 text-xs bg-white rounded-full text-primary btn-outline border-primary md:px-16 btn whitespace-nowrap md:text-sm"
                            >
                                Back
                            </button>
                            <button
                                @click="() => step++"
                                class="px-6 py-3 text-xs text-white rounded-full btn-outline bg-primary md:px-16 btn whitespace-nowrap md:text-sm"
                            >
                                Generate cost
                            </button>
                        </div>
                    </form>
                </div>
                <div v-if="step === 3" class="flex flex-col w-full h-full gap-3 md:px-10 p-10 px-6 overflow-auto bg-white rounded-lg md:items-center text-[#42526E]">        
                    <div class="max-w-md md:text-center">
                        <h3 class="text-xl md:text-2xl xl:text-[1.7rem] font-bold mb-3 text-[#42526E]">Cost of employment</h3>
                        <p class="text-sm md:text-md text-[#626F86] mb-3">
                            This is a summary of employment cost for this employee!
                        </p>
                        <p class="text-sm md:text-md text-[#626F86]">
                           <span class="font-medium">PLEASE NOTE:</span> These are estimated costs, precise costs depends on the inadept data, sales team will contact you shortly.
                        </p>
                    </div>
                    <div class="flex flex-col w-full max-w-2xl gap-5 p-4 py-6 mx-auto shadow md:gap-10 rounded-xl md:p-10 md:py-12">
                        <div class="flex items-center gap-4">
                            <img :src="EmployeeImg" alt="Cost Calculator Countries"  class="w-10 h-10 overflow-hidden rounded-full md:w-20 md:h-20 bg-gray-50" />
                            <span class="text-base md:text-xl xl:text-[1.4rem] font-semibold text-[#42526E]">Nigeria</span>
                        </div>
                        <div class="flex items-center justify-between gap-6">
                            <div class="flex flex-col gap-2 text-xs md:items-center md:flex-row md:text-sm">
                                <span>Gross annual salary:</span>
                                <span class="font-semibold" >USD 7500.00</span>
                            </div>
                            <div class="items-center gap-4 p-1.5 text-xs border rounded-full hidden md:flex">
                                <div class="flex items-center gap-2 p-1.5 px-2.5 bg-primary/10 text-primary rounded-full">Monthly</div>
                                <div class="flex items-center gap-2 p-1.5 px-2.5 rounded-full">Annually</div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-4">
                            <div class="p-3 py-8 border rounded-xl sm:p-5 md:p-8">
                                <div class="flex items-center justify-between gap-4 mb-2 md:mb-4">
                                    <h5 class="text-base md:text-lg lg:text-xl font-semibold text-[#42526E]">Summary</h5>
                                </div>
                                <div class="flex flex-col">
                                    <div class="flex items-center justify-between gap-4 py-3 pt-5 border-b text-xs md:text-sm lg:text-base text-[#42526E]">
                                        <span class="font-semibold">Full name</span>
                                        <span class="">Jim Theresa</span>
                                    </div>
                                    <div class="flex items-center justify-between gap-4 py-3 pt-5 border-b text-xs md:text-sm lg:text-base text-[#42526E]">
                                        <span class="font-semibold">Email address</span>
                                        <span class="">@gmail.com</span>
                                    </div>
                                    <div class="flex items-center justify-between gap-4 py-3 pt-5 border-b text-xs md:text-sm lg:text-base text-[#42526E]">
                                        <span class="font-semibold">Country</span>
                                        <span class="">Nigeria</span>
                                    </div>
                                    <div class="flex items-center justify-between gap-4 py-3 pt-5 border-b text-xs md:text-sm lg:text-base text-[#42526E]">
                                        <span class="font-semibold">Job title</span>
                                        <span class="">Data Analyst</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col items-center justify-center gap-2 mt-5 md:gap-4 md:flex-row">
                            <button
                                @click="() => step--"
                                class="px-6 py-3 text-xs bg-white rounded-full text-primary btn-outline border-primary md:px-16 btn whitespace-nowrap md:text-sm"
                            >
                                Download PDF
                            </button>
                            <button
                                @click="() => ''"
                                class="px-6 py-3 text-xs text-white rounded-full btn-outline bg-primary md:px-16 btn whitespace-nowrap md:text-sm"
                            >
                                Proceed to hire
                            </button>
                        </div>
                    </div>
                </div>
        </main>
        </div>
      </Transition>
    </Teleport>
</template>
<script setup lang="ts">
    import { Teleport, Transition, onBeforeUnmount, ref, watch } from 'vue';
    import EmployeeImg from "@/assets/employee.svg";
    import ContractImg from "@/assets/contract.svg";
    import type { SupportInterface } from '@/interfaces';
    import { defineEmits } from 'vue';
    import { useToast } from 'vue-toast-notification';

    const $toast = useToast({
    position: "top-right"
    });

    const step = ref(1)
 
    const props = defineProps<{
        closeModal: () => void;
        showModal: boolean;
        selectedType: string | null;
    }>()

    
    const initialState = {
        name: '',
        email: '',
        domain: '',
        message: ''
    }

    
    const handleNext = () => {
      if (!props.selectedType) {
          $toast.info('Select an account type')
          return
      }
      step.value++
    }


  const support = ref<SupportInterface>({ ...initialState })

    const emit = defineEmits(['updateType', 'clearModal']);

    const selectType = (val: 'Contractor' | 'Employee') => {
        emit('updateType', val);
    };

    watch(() => props.showModal, (newVal) => {
      if (newVal) {
        const body = document.body;

        // If its there, prevent scroll from happening
        if (body && props.showModal) body.style.overflow = "hidden";
      } else {
        document.body.classList.remove('no-scroll');
        // Get the body element
        const body = document.body;

        // If its there, prevent scroll from happening
        if (body) body.style.overflow = "auto";
      }
    });

    onBeforeUnmount(() => {
        emit('clearModal', false);
    })
</script>
<!-- <style scoped>


    .modal-fade-enter-from,
    .modal-fade-leave-to {
        opacity: 0;
    }

    .modal-fade-enter-active,
    .modal-fade-leave-active {
        transition: 1s ease all;
    }

    .modal-wrapper {
        position: fixed;
        left: 0;
        top: 0;

        z-index: 500;

        width: 100vw;
        height: 100vh;

        background: rgba(0, 0, 0, 0.2);

        display: grid;
        place-items: center;
    }
</style> -->