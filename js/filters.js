/* 
 FILTER SHARED
*/
const filterBtn = document.querySelector('.filter_btn');
const filterBtnText = document.querySelector('.filter_btn span');
const filterList = document.querySelector('.filter_items');
const filterItem = document.querySelectorAll('#filter_item');
const yourShared = document.querySelector('#your_shared');
const otherShared = document.querySelector('#other_shared');

function filterSections() {
    filterItem.forEach(item => {
        item.addEventListener('click', () => {
            let itemsName = item.textContent;
            filterBtnText.textContent = itemsName;
            filterList.classList.remove('active');

            if (item.classList.value === "your_shared") {
                otherShared.classList.add("close");
                yourShared.classList.remove("close");

            } else if (item.classList.value === "other_shared") {
                yourShared.classList.add("close");
                otherShared.classList.remove("close");

            } else {
                yourShared.classList.remove("close");
                otherShared.classList.remove("close");
            }
        });
    });

}


filterBtn.addEventListener('click', () => {
    filterList.classList.toggle('active');

    filterSections();
});