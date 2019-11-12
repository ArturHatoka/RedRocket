
document.addEventListener('DOMContentLoaded', () => {
    {
        const preload = () => {
            const preRequest = new XMLHttpRequest();
            const preUrl = "sql/preload.php";

            preRequest.open('POST', preUrl, true);
            preRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

            preRequest.addEventListener("readystatechange", () => {
                if (preRequest.readyState === 4 && preRequest.status === 200) {
                    const response = JSON.parse(preRequest.response);
                    if (response.centRate) {
                        const checkedMarkId = 'mark'+response.centRate;
                        const checkedMark = document.getElementById(checkedMarkId);
                        checkedMark.checked = true;
                        document.getElementById('rating-num').textContent = response.valueCount;
                    }
                }
            });

            preRequest.send();
        };
        preload();


        let i;
        for (i = 0; i < 5; i++) {
            const mark = document.querySelectorAll('.ajax-rating')[i];
            const update = () => {

                const markRate = mark.dataset.rating;

                const request = new XMLHttpRequest();
                const url = "sql/update.php";
                const params = 'markRate=' + markRate;

                request.open('POST', url, true);
                request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

                request.addEventListener("readystatechange", () => {
                    if (request.readyState === 4 && request.status === 200) {
                        const response = JSON.parse(request.response);
                        if (response.error) {
                            alert(response.error);
                        }
                        if (response.markRate) {
                            preload();

                            alert("Ваша оценка учтена");
                        }
                    }
                });

                request.send(params);
            };

            mark.addEventListener('click', update);
        }
    }

    {
        const progBtn = document.getElementById('progress-btn');

        const progPlus = () =>{
            const progValue = document.getElementById('progress-plus').value;
            const progPercent = document.getElementById('progress-num');
            const progLine = document.getElementById('progress-line');

            const progValueInt = parseInt(progValue);
            const progPercentInt = parseInt(progPercent.innerText);

            const progSum = progValueInt + progPercentInt;

            if (progSum >= 100){
                progLine.style.width='100%';
                progPercent.textContent = '100';
            }else{
                progLine.style.width=progSum+"%";
                progPercent.textContent = progSum;
            }
        };

        progBtn.addEventListener('click', progPlus);
    }
});