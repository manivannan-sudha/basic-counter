let count = 0;
const val = document.querySelector('#val');
const btns = document.querySelectorAll('.btn')

btns.forEach( function (btn) {
    btn.addEventListener('click', function(i) {
        const curr = i.currentTarget.classList;

        if(curr.contains('decrease')){
            count--;
        }
        else if(curr.contains('increase')){
            count++;
        }
        else count = 0;

        if(count>0) val.style.color = 'rgb(45, 206, 45)';
        else if(count<0) val.style.color = 'red';
        else val.style.color = '#474F7A'

        val.textContent = count;
    })
})