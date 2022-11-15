
window.onload = ()=> {
    if(window.loadedLikeScripts) return //console.warn('addons: jonatan/like - Stopped dubplicate script loading')
    window.loadedLikeScripts=true

    console.log("%cAddon - jonatan/like. Enjoy your day ♥!", "background: #fa8553; font-size: 12px; color: white; padding: 0.6rem")


    /**
     * Toggles item in existance of 
     * @author Jonatan Verstrate
     */
    Array.prototype.toggleItem = function(n) {
        const idx = this.indexOf(n);
        if (idx > -1) this.splice(idx, 1);
        else this.push(n)
    };

    /**
     * Local storage helper object
     */
    const localStorageObj = {
        name: 'addon-like-liked',
        get(key) {
            return JSON.parse(localStorage.getItem(key))
        },
        set(key, val) {
            localStorage.setItem(key, JSON.stringify(val))
        },
        remove(key) {
            localStorage.removeItem(key)
        },
        clear() {
            localStorage.clear()
        },
    }

    const storageName = 'addon-like-liked'
    const storedForms = localStorageObj.get(storageName) ?? []



    document.querySelectorAll("form[title=like_form]").forEach(form=>{
        form.addEventListener('submit', e=>{
            e.preventDefault()
            submitAction(e.target)
        })
    })


    /**
     * Form submit action
     */
    const submitAction = function(targ){
        const data = new FormData(targ)

        const action = targ.action
        const id = data.get('entry_id')
        const token = data.get('_token')
        const likeState = storedForms.includes(id)

        storedForms.toggleItem(id)
        localStorageObj.set(storageName, storedForms)

        if(!id || !token) return alert('DEV: no id or token found to submit')

        const xhttp = new XMLHttpRequest();
        xhttp.open("POST", action, true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.setRequestHeader("x-csrf-token", token);    

        xhttp.send(`like_id=${id}`)

        const currentText = +targ.querySelector('.like-content').innerText
        targ.querySelector('.like-content').innerText = currentText + (likeState?1:-1)
    }

}
