import Home from './components/home.vue';
import pepperrodeo from './components/pepperrodeo.vue';
import salarycalculator from './components/salarycalculator.vue';
import brainframe from './components/brainframe.vue';
import portovino from './components/portovino.vue';
import renaissanceartists from './components/renaissanceartists';
import wordcount from './components/wordcount.vue';
import skills from './components/skills.vue';
import contact from './components/contact.vue';
import casestudies from './components/casestudies.vue';

let routes = [
    {
        'path' : '/',
        'component' : Home
    },

    {
        'path' : '/brainframe',
        'component' : brainframe
    },

    {
        'path' : '/pepperrodeo',
        'component' : pepperrodeo
    },
    {
        'path' : '/portovino',
        'component' : portovino
    },
    {
        'path' : '/renaissanceartists',
        'component' : renaissanceartists
    },
    {
        'path' : '/salarycalculator',
        'component' : salarycalculator
    },
    {
        'path' : '/wordcount',
        'component' : wordcount
    },

    {
        'path' : '/skills',
        'component' : skills
    },
    {
        'path' : '/contact',
        'component' : contact
    },
    {
        'path' : '/case-studies',
        'component' : casestudies
    },


];
export default routes;
