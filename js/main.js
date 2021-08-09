// listen for the DOMContentLoaded event, then bind our function
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('hamburger').addEventListener('click', (e) => {
        document.querySelector('header nav').classList.toggle('active')
    })

    window.addEventListener('resize', (event) => {
        // console.log(event.currentTarget.innerWidth);
        if(event.currentTarget.innerWidth > 720) {
            document.querySelectorAll('img[src^="./images/mobile"]').forEach( (val, key, parent) => {
                if (val.attributes.src) {
                    val.attributes.src.value = val.attributes.src.value.replace('mobile', 'desktop');
                }
            })
        } else {
            document.querySelectorAll('img[src^="./images/desktop"]').forEach( (val, key, parent) => {
                if (val.attributes.src) {
                    val.attributes.src.value = val.attributes.src.value.replace('desktop', 'mobile');
                }
            })

        }
    }, true);

    if(window.screen.width > 720) {
        document.querySelectorAll('img[src^="./images/mobile"]').forEach( (val, key, parent) => {
            // console.log(val.attributes.src)
            // console.log(val.src)
            // find mobile and replace with desktop
            if (val.attributes.src) {
                val.attributes.src.value = val.attributes.src.value.replace('mobile', 'desktop');
            }
        })
    }
})
