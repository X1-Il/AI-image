<template>
 
        <div data-aos="fade-in" class="options flex w-full h-full items-center z-30 overflow-y-auto">

            <div class="options-menu overflow-y-auto">

                <div id="toucher" class="flex bg-white sticky top-0 justify-end z-30">
                    <!-- <div id="touch-icon" class="w-20 h-1 rounded-xl bg-slate-600 my-3"></div> -->
                    <button class="rounded-full bg-white px-2 m-2" @click="showOptions()">X</button>
                </div>
    
                <div class="option px-5 md:px-10" v-for="option in options" :key="option.value">
        
                    <div class="option-name text-black p-2 font-roboto_medium text-md">{{ option.name }}</div>
        
                    <div class="option-options flex flex-wrap">
        
                        <div id="value" class="min-w-fit px-4 py-1 m-1 backdrop-blur-sm bg-white text-black shadow-sm font-roboto_regular" v-for="optionValue in option.values" :key="optionValue" :value=optionValue @click="activeValue(option.name, optionValue)">
                            {{ optionValue }}
                        </div>
        
                    </div>
        
                </div>
            </div>
        </div>

</template>

<script>
export default {
    name: 'Options',
    props: {
        activeOptions: {
            type: Array,
            default: () => []
        }
    },
    data(){
        return {
            options: [
                {name: 'Amount', icon: '', values: ['1', '2', '3', '4']},
                {name: 'Size', icon:'', values: ['small', 'medium', 'large']},
                {name: 'Art', icon: '', values: ['abstract', 'ilustration', 'photo', 'sketch', 'watercolor', 'graffiti', 'caricature', 'painting', 'drawing', 'cartoon', 'comic', 'illustration', 'portrait', 'landscape', 'hyperrealism', 'realism', 'impressionism']},
                {name: 'Resolution', icon: '', values: ['HD', 'Full-HD', 'Ultra-HD', '4K', '8K', 'Megapixel']},
                {name: 'Lighting', icon: '', values: ['daylight', 'night', 'dusk', 'dawn', 'sunrise', 'sunset', 'afternoon', 'morning', 'evening', 'midnight', 'noon', 'twilight', 'golden-hour']},
            ],
        }
    },
    methods: {
        activeValue(option, value){

            // check if value is currently active
            const currentValues = this.activeOptions.map(option => option.value);
            currentValues.includes(value) ? this.activeOptions.splice(currentValues.indexOf(value), 1) : this.activeOptions.push({option: option, value: value});

            // set/unset active class
            const elemento = document.querySelector('[value="' + value + '"]');
            elemento.classList.toggle('active');

        },
        showOptions(){
           document.querySelector('.options').classList.toggle('hidden');
        },
    }
}
</script>

<style>

#value {
    cursor: pointer;
    border: 1px solid #ccc;
    border-radius: 10px;
}

#value.active {
    background-color: #373a43;
}

#value:hover {
    background-color: #21242e;
}

.options::-webkit-scrollbar {
  display: none;
}


@media (max-width: 1080px) {

    .options-menu {
    display: flex;
    flex-direction: column;
    list-style: none;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    background-color: #fafafc;
    transition: transform 0.3s ease-in-out;
    @apply min-h-screen max-h-screen max-w-full;
}
}

    .options {
        justify-content: center;
        -webkit-backdrop-filter: blur(5px);
        backdrop-filter: blur(2px);
        background-color: rgba(255, 255, 255, 0.618);
    }
    
    .options-menu {
        display: flex;
        flex-direction: column;
        background-color: #fafafc;
        list-style: none;
        width: 900px;
        height: 500px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
        transition: transform 0.3s ease-in-out;
}
/* 
.options.show {
  transform: translateY(-100%);
}

.options.hiden {
    transform: translateY(0);
}
 */
.options .option {
  display: block;
  text-decoration: none;
  color: #333;
}


</style>