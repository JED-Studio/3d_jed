//Скрипт загружает больше блоков

let loadMoreBtn = document.querySelector('#section_load_more');
        let currentItem = 6;

        loadMoreBtn.onclick = () =>{
            let boxes = [...document.querySelectorAll('.section .container_1 .section_stek .section_block .section_block_work')];
            for (var i = currentItem; i < currentItem + 6; i++){
            boxes[i].style.display = 'inline-block';
            }
            currentItem += 6;
        }