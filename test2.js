 const btn = document.querySelector('button');
 const song = document.getElementById('change');
 const cancel = document.getElementById('cancel');
btn.addEventListener('click', function () {
        alert('Payment made sucessfully');
        window.reload();
})
song.addEventListener('click', function(){
        alert('Plan Changed Successfully')
        window.reload();
})
cancel.addEventListener('click', function(){
        alert('Order Cancelled')
        window.reload();
})
