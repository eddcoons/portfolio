<template>
    <div class="container">
        <div class="side-section">
            <img src="/img/emilyimg2.jpg" class="side-img">
        </div>

        <div class="main-section">
            <nav class="right-nav">
                <router-link to="/casestudies" class="nav-link hvr-float ">Case Studies</router-link>
                <router-link to="/skills" class="nav-link hvr-float ">Skills</router-link>
                <router-link to="/" class="nav-link hvr-float  active">About</router-link>
                <router-link to="/contact" class="nav-link hvr-float ">Contact</router-link>
            </nav>
            <div class="brand-section">
                <h1 class="brand-logo-top">Emily</h1>
                <h1 class="brand-logo-bottom">Coons</h1>
            </div>

            <div class="main-section__text">
                <p>I believe in giving 100%, remembering that everyone has a story and creating beautifully easy-to-use websites.</p>
                <p>After working with poorly designed software, poorly planned projects and in enviroments where people can only see dollar signs, I have decided to use my talents for good. I strive to create based on data and with a true desire to make someone else’s life easier.</p>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
