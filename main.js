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
        
        getAjaxData('/getCatalog.php', function(data){
            // console.log(JSON.parse(data)); //- тут у меня ничего не работает | Теперь работает
            JSON.parse(data).forEach(function(values) {
                var boxParent = document.getElementById('box');
                // console.log(box);
                // var itemChild = document.createElement('div');
                // itemChild.classList.add('item-box');
                
                // itemChild.innerHTML = '<img class="img-item" src="'+values['src']+'">'+ '<div class="name">'+ values['name']+'</div>'+"<div class='price'>"+values['price']+"&#8381;</div><div class='more'>Подробнее</div>";
                // boxParent.appendChild(itemChild);

                var productFullId = document.createElement('div');
                productFullId.classList.add('item-box');
                boxParent.appendChild(productFullId);
                productFullId.setAttribute('data-id', values['id']);

                var subElements = {
                    img: document.createElement('img'),
                    name: document.createElement('div'),
                    price: document.createElement('div'),
                    more: document.createElement('div')
                };

                subElements.img.classList.add('img-item');
                subElements.img.src = values['src'];
                subElements.name.innerHTML = values['name'];
                subElements.name.classList.add('name');
                subElements.price.innerHTML = values['price'] + "&#8381";
                subElements.price.classList.add('price');
                subElements.more.innerHTML = "Подробнее...";
                subElements.more.classList.add('more');

                for(propName in subElements){
                    productFullId.appendChild(subElements[propName]);
                }

                // productFullId.appendChild(subElements.img);
                // productFullId.appendChild(subElements.name);
                // productFullId.appendChild(subElements.price);
                // productFullId.appendChild(subElements.more);

                productFullId.addEventListener('click', function(){
                    var id = this.getAttribute('data-id');
                    console.log(id);
        
                    getProductInfoById(id, '/getProduct.php', function(data){
                        document.getElementById('box').innerHTML = "";
                        var currentItem = JSON.parse(data);
                        // console.log(currentItem);
                        currentItem.forEach(function(values){
                            console.log(values['desc']);
                            // itemChild.innerHTML = '<img class="img-item-more" src="'+values['src']+'">'+ '<div class="name">'+ values['name']+'</div>'+"<div class='desc'>"+values['desc']+'</div>'+"<div class='price'>"+values['price']+"&#8381;</div><div class='count'>Количество на складе: "+values['count']+"</div><div class='back' id='back'>Вернуться назад</div>";
                            // boxParent.appendChild(itemChild);

                            var productFullId = document.createElement('div');
                            productFullId.classList.add('item-box');
                            boxParent.appendChild(productFullId);

                            var subElements = {
                                img: document.createElement('img'),
                                name: document.createElement('div'),
                                desc: document.createElement('div'),
                                price: document.createElement('div'),
                                count: document.createElement('div'),
                                back: document.createElement('div')
                            };

                            subElements.img.classList.add('img-item-more');
                            subElements.img.src = values['src'];
                            subElements.name.innerHTML = values['name'];
                            subElements.name.classList.add('name');
                            subElements.desc.innerHTML = values['desc'];
                            subElements.price.innerHTML = values['price'] + "&#8381";
                            subElements.price.classList.add('price');
                            subElements.count.innerHTML = "Количество на вымышленном складе: " + values['count'];
                            subElements.back.innerHTML = "Вернуться назад";
                            subElements.back.classList.add('back');
                            subElements.back.setAttribute('id', 'back');

                            for(propName in subElements){
                                productFullId.appendChild(subElements[propName]);
                            }

                            // productFullId.appendChild(subElements.img);
                            // productFullId.appendChild(subElements.name);
                            // productFullId.appendChild(subElements.desc);
                            // productFullId.appendChild(subElements.price);
                            // productFullId.appendChild(subElements.count);
                            // productFullId.appendChild(subElements.back);

                            var backButton = document.getElementById('back');
                            backButton.addEventListener('click', function(){
                                window.location.reload();
                            });
                        });
                    });
                });
            }); 
        });
    });
    

})();