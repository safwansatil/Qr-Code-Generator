let img = document.getElementById("img");
        let qr = document.getElementById("qr");
        let text = document.getElementById("text");
        function generate(){
            if(text.value.trim().length>0){
            let url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + text.value;
            qr.src = url;
            img.style.display = "block";
            img.classList.add("show-img")
            } else {
                text.classList.add("error");
                setTimeout(() => {
                    text.classList.remove("error");
                }, 1000);
            }
           // https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example 
            
        }