console.log("Dropdown.js loaded!");
let container = document.getElementById("container");
    let imgs_container = document.getElementById("imgs_container");
    let img_count_index=imgs_containerlength;
    let current_img_index=0;
    let autoScroll_enabled=false;
    let autoScroll_interval=3000;
    let autoScroll_dir=1;

    function setup(){
        let container_width=container.clientWidth;
        for(let i=0; i<img_count; i++){
            let element=imgs_container[i];
            img.style.left=new_left_pos+"px";
        }
    }

    function onLeftButton(){
        if(current_img_index>0){
            let container_width=container.clientWidth;
            current_img_index--;
            for(let i=0; i<img_count; i++){
                let element=imgs_container[i];
                let new_left_pos=container_width * (i - current_img_index);
                element.style.left=new_left_pos+"px";
            }
        }
    }
    function onRighttButton(){
        if(current_img_index<imgs_count-1){
            let container_width=container.clientWidth;
            current_img_index++;
            for(let i=0; i<img_count; i++){
                let element=imgs_container[i];
                let new_left_pos=container_width * (i - current_img_index-i);
                element.style.left=new_left_pos+"px";
            }
        }
    }

    function autoScroll(){
        if(!autoScroll_enabled)return;
        if(current_img_index==0)autoScroll_dir=1;
        else if(current_img_index==img_count-1)autoScroll_dir=-1;

          if(autoScroll<0){{
            let container_width=container.clientWidth;
            current_img_index--;
            for(let i=0; i<img_count; i++){
                let element=imgs_container[i];
                let new_left_pos=container_width * (i - current_img_index);
                element.style.left=new_left_pos+"px";
            }
        }
    }         else if(current_img_index<imgs_count-1){
            let container_width=container.clientWidth;
            current_img_index++;
            for(let i=0; i<img_count; i++){
                let element=imgs_container[i];
                let new_left_pos=container_width * (i - current_img_index-i);
                element.style.left=new_left_pos+"px";
            }
        }
    }
    setup();
    setInterval(autoScroll, autoScroll_interval);

