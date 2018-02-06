<template>

    <div class="wc-container">
        <div class="half-section">
            <form class="flex-form">
                <label class="main-heading">Copy & Paste Text Here</label>
                <textarea id="wordsToCount" class="lg-txtarea"></textarea>
                <button @click="countWords()" type="button" class="wc-main-button hvr-shutter-in-horizontal">Count my Words!</button>
            </form>
        </div>
        <div class="half-section">
            <div class="side-section">
                <p class="main-heading">Your word count is:</p>
                <p id="wordCount" class="result"></p>
            </div>
        </div>
    </div>


</template>

<script>
    export default {
        methods : {
        countWords() {
                let wordstoCount = document.getElementById("wordsToCount").value;
                let regex = /\s+/gi;
                let wordCount = wordstoCount.trim().replace(regex, ' ').split(' ').length;

                function animateValue(id, start, end, duration) {
                    // assumes integer values for start and end
                    let obj = document.getElementById(id);
                    let range = end - start;
                    // no timer shorter than 50ms (not really visible any way)
                    let minTimer = 50;
                    // calc step time to show all interediate values
                    let stepTime = Math.abs(Math.floor(duration / range));

                    // never go below minTimer
                    stepTime = Math.max(stepTime, minTimer);

                    // get current time and calculate desired end time
                    let startTime = new Date().getTime();
                    let endTime = startTime + duration;
                    let timer;

                    function run() {
                        let now = new Date().getTime();
                        let remaining = Math.max((endTime - now) / duration, 0);
                        let value = Math.round(end - (remaining * range));
                        obj.innerHTML = value;
                        if (value == end) {
                            clearInterval(timer);
                        }
                    }

                    timer = setInterval(run, stepTime);
                    run();
                }

                animateValue("wordCount", 0, wordCount, 2000);
                document.getElementById("wordCount").innerHTML = wordCount;
            }
        }
    }

</script>
