window.onload = ()=> {
    // prevent script from loading multiple times
    if(window.loadedLikeScripts) return console.warn('addons: jonatan/like - Stopped dubplicate script loading')
    window.loadedLikeScripts=true
    
    // friendly message to the user
    console.log("%cAddon: jonatan/like. Enjoy ♥!", "background: #fa8553; font-size: 12px; color: white; padding: 0.6rem")

    // post url
    const urlPostCreate = window.ADDON_LIKE_POST_URL

    // load jquery
    // const jquery = document.createElement('script')
    // jquery.src = `https://code.jquery.com/jquery-3.6.1.slim.min.js`;

    // document.body.appendChild(jquery)



    async function requestLike(parent) {
        $.ajax({
            type: 'post',
            url: urlPostCreate,
            data: parent.serialize(),
            success: function () {
              alert('form was submitted');
            }
        });
    }


    const localStorageObj = {
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

    const rt_like ={
        init(){
            this.localId = 'addon_like_liked'
            this.registerDomListeners();
        },

        registerDomListeners(){
            $(".btn-like").each(function() {
               this.click(function(e){
                    e.preventDefault()
                    requestLike(this.parent())
              });
           });
        },
        async actionLikeClick(event, n){
            const entryId = event.target.dataset.id;
            const res = await requestLike(entryId)
            return


            const liked = localStorageObj.get(this.localId) || []
            if(!liked.includes(entryId))
                liked.push(entryId)
            else
                liked.splice(liked.indexOf(entryId), 1)
            
            event.target.classList.toggle('bg-green-500')
            //event.target.classList.toggle('bg-slate-400')

            localStorageObj.set(this.localId, liked)
        }
    }
    rt_like.init()
}
