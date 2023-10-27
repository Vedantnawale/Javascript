  // sequential run language
    //  onclick="alert('owl') --> not scalable in js instead this used following
        // 2nd Approach
    // document.getElementById('owl').onclick = function(){
    //     alert('owl')
    // }
        // best Approach
    // document.getElementById('owl').addEventListener('click', function(){
    //     alert('owl')
    // })
        // attachEvent()
        // jQuery - on

    // document.getElementById('owl').addEventListener('click', function(e){
    //     console.log(e);
    // }, false)
    // need to study
    // type, timestamp, defaultPrevented
    // target, toElement, srcElement, currentTarget
    // clientX, clientY, screenX, screenY
    // altkey, ctrlkey, shiftkey, keyCode

    // Event Propogation
    // document.getElementById('images').addEventListener('click', function(e){
    //     console.log("clicked inside the ul");
    // }, false)
    // document.getElementById('owl').addEventListener('click', function(e){
    //     console.log("owl clicked");
    // }, false)

    // document.getElementById('images').addEventListener('click', function(e){
    //     console.log("clicked inside the ul");
    // }, true)
    // document.getElementById('owl').addEventListener('click', function(e){
    //     console.log("owl clicked");
    // }, true)  // see the difference

    // document.getElementById('images').addEventListener('click', function(e){
    //     console.log("clicked inside the ul");
    // }, false)
    // document.getElementById('owl').addEventListener('click', function(e){
    //     console.log("owl clicked");
    //     e.stopPropagation()
    // }, false)

    // // preventDefault()
    // document.getElementById('google').addEventListener('click', function(e){
    //     e.preventDefault()
    //     e.stopPropagation()
    //     console.log("google clicked");
    // }, false)

    // remove images on click
    document.querySelector('#images').addEventListener('click', function(e){
        console.log(e.target.tagName);
        if (e.target.tagName === 'IMG') {
            let removeIt = e.target.parentNode
            removeIt.remove()
        }
        // removeIt.parentNode.removeChild(removeIt)
    }, false)
