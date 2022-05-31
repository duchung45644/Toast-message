var toast_content = {
    success: {
        type: 'success',
        title: 'Success',
        icon: '<i class="fa-solid fa-circle-check"></i>',
        msg: 'Congrats on the internet loading your request'
    },
    warn: {
        type: 'warning',
        title: 'Warning',
        icon: '<i class="fa-solid fa-triangle-exclamation"></i>',
        msg: 'Here is something that you might like to know'
    },
    error: {
        type: 'error',
        title: 'Uh oh, something went wrong',
        icon: '<i class="fa-solid fa-circle-exclamation"></i>',
        msg: 'Sorry! There was a problem with your request'
    },
}

function renderToast({type = '' ,title = '', icon='', msg = ''}, duration =2000) {
    const main = document.getElementById('toast')
    if(main){
        const toast = document.createElement('div')

        // Auto remove the toast
        let autoRemove =  setTimeout(function(){
            main.removeChild(toast);
        }, duration + 1000)

        // Remove toast when click
        toast.onclick = (e) =>{
            if(e.target.closest('.toast__close')){ // Nếu bấm trúng .toast__close thì
                main.removeChild(toast);
                clearTimeout(autoRemove)
            }
        }

        const delay = (duration/1000).toFixed(2)

        toast.classList.add("toast", `toast--${type}`);
        toast.style.animation = `rightToLeft .3s ease, fadeOut 1.5s ${delay}s linear forwards`
        toast.innerHTML = `
            <div class="toast__icon">
                ${icon}
            </div>

            <div class="toast__body">
                <div class="toast__title">${title}</div>

                <div class="toast__msg">${msg}</div>
            </div>

            <div class="toast__close">
                <i class="fa-solid fa-xmark"></i>
            </div>`

        
        main.appendChild(toast)
    }
}

var btns = document.querySelectorAll('.btn');

btns.forEach(element =>{
    element.addEventListener('click',function(element){
        type = element.path[0].id
        renderToast(toast_content[type], 3000)
    })
})
