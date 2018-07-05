(function(){
    
    class Catalog{
        constructor(id, name, desc, src, price, count){
            this.id = id;
            this.name = name;
            this.decs = desc;
            this.src = src;
            this.price = price;
            this.count = count;
        }
        getFullInfo(){
            console.log(this.id, this.name, this.price);
        }
    }

    var getAjaxData = function(path, complete){
        var ajax = new XMLHttpRequest();
        ajax.open('GET', path, true);

        ajax.send();
        ajax.onreadystatechange = function(){
            if( ajax.readyState != 4 || ajax.status != 200 ) return false;
            
            complete(ajax.responseText);
            JSON.parse(ajax.responseText);
        }
    };

    var getProductInfoById = function(id, path, complete){
        var json_request = {
            product_id: id
        };

        path +="?data=" + JSON.stringify(json_request);
        getAjaxData(path, complete);
    }


    document.addEventListener('DOMContentLoaded', function(){
        
        getAjaxData('/homework05072018/getCatalog.php', function(data){
            // console.log(JSON.parse(data)); //- тут у меня ничего не работает | Теперь работает
            JSON.parse(data).forEach(function(values) {
                var boxParent = document.getElementById('box');
                // console.log(box);
                var itemChild = document.createElement('div');
                itemChild.classList.add('item-box');
                itemChild.setAttribute('data-id', values['id']);
                itemChild.innerHTML = '<img class="img-item" src="/homework05072018/'+values['src']+'">'+ '<div class="name">'+ values['name']+'</div>'+"<div class='price'>"+values['price']+"&#8381;</div><div class='more'>Подробнее</div>";
                boxParent.appendChild(itemChild);

                itemChild.addEventListener('click', function(){
                    var id = this.getAttribute('data-id');
                    console.log(id);
        
                    getProductInfoById(id, '/homework05072018/getProduct.php', function(data){
                        document.getElementById('box').innerHTML = "";
                        var currentItem = JSON.parse(data);
                        // console.log(currentItem);
                        currentItem.forEach(function(values){
                            console.log(values['desc']);
                            itemChild.innerHTML = '<img class="img-item-more" src="/homework05072018/'+values['src']+'">'+ '<div class="name">'+ values['name']+'</div>'+"<div class='desc'>"+values['desc']+'</div>'+"<div class='price'>"+values['price']+"&#8381;</div><div class='count'>Количество на складе: "+values['count']+"</div>";
                            boxParent.appendChild(itemChild);
                        });

                    });
                });
            }); 
        });
    });
    

})();