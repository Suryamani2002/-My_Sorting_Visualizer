async function bubbleSortGraphic() {
    const ele = document.querySelectorAll(".bar");
    // bar.style.color='blue';
    // console.log("Value of the bar is= ", ele);
    console.log("bubble sort");

    for (let i = 0; i < ele.length - 1; i++) {
        for (let j = 0; j < ele.length - i - 1; j++) {
            if (cancelExection == true) {
                console.log("value in bubble ruko is= ",ruko);
                await cancelWait(ruko);
            };

            ele[j].style.background = 'blue';
            ele[j + 1].style.background = 'blue';
            if (parseInt(ele[j].style.height) > parseInt(ele[j + 1].style.height)) {
                await waitforme(delay);
                swap(ele[j], ele[j + 1]);
            }
            ele[j].style.background = 'cyan';
            ele[j].style.background = 'cyan';
        }
        ele[ele.length - 1 - i].style.background = 'green';
    }
    ele[0].style.background = 'green';
}



const bubbleSort = document.querySelector(".bubbleSort");

bubbleSort.addEventListener('click', async function () {
    disableSorting();
    disableSizeSlider();
    disableNewArrayBtn();
    await bubbleSortGraphic();
    enableSorting();
    enableSizeSlider();
    enableNewArrayBtn();
});