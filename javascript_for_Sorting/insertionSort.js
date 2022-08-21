async function insertionSortGraphic() {
    const ele = document.querySelectorAll(".bar");

    ele[0].style.background = 'green';
    for (let i = 1; i < ele.length; i++) {
        let j = i - 1;
        let key = ele[i].style.height;

        ele[i].style.background = 'blue';

        await waitforme(delay);

        while (j >= 0 && (parseInt(ele[j].style.height) > parseInt(key))) {
            if (cancelExection == true) {
                console.log("value in bubble ruko is= ",ruko);
                await cancelWait(ruko);
            };
            ele[j].style.background = 'blue';
            ele[j + 1].style.height = ele[j].style.height;
            j--;

            await waitforme(delay);

            for (let k = i; k >= 0; k--) {
                ele[k].style.background = 'green';
            }
        }

        ele[j + 1].style.height = key;
        ele[i].style.background = 'green';
    }
}

const insertionSort = document.querySelector(".insertionSort");
insertionSort.addEventListener('click', async function () {
    disableSorting();
    disableSizeSlider();
    disableNewArrayBtn();
    await insertionSortGraphic();
    enableNewArrayBtn();
    enableSizeSlider();
    enableSorting();
})