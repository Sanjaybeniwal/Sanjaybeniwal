let timer=0;
let seconds = 0;

        function updateTime() {
            let hrs = Math.floor(seconds / 3600);
            let mins = Math.floor((seconds % 3600) / 60);
            let secs = seconds % 60;
            document.getElementById("time").innerText = `${parseFloat(hrs)}:${parseFloat(mins)}:${parseFloat(secs)}`;
            seconds++;
        }

        function start() {
                timer = setInterval(updateTime, 10);
        
        }

        function stop() {
            clearInterval(timer);
            timer = null;
        }

        function reset() {
            stop();
            seconds = 0;
            document.getElementById("time").innerText = "00:00:00";
        }