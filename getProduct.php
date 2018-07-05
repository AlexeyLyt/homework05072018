<?php
    require_once 'Product.php';

    if( !empty( $_GET['data'] ) ){
        $request = json_decode($_GET['data'], true);

        $id = $request['product_id'];        

        $byIdEl = Product::createPersonById($id);
        echo $byIdEl;
    }

?>