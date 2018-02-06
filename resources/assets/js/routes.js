import Home from './components/home.vue';
import salarycalculator from './components/salarycalculator.vue';
import wordcount from './components/wordcount.vue';

let routes = [
    {
        'path' : '/',
        'component' : Home
    },

    {
        'path' : '/salarycalculator',
        'component' : salarycalculator
    },
    {
        'path' : '/wordcount',
        'component' : wordcount
    },




];
export default routes;
