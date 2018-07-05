<?php 
    require_once 'config.php';

    class Catalog {
        private $id, $name, $desc, $src, $price, $count;
        private static $TB_NAME = 'products';
        public function __construct($id, $name = "", $desc = "", $src = "", $price = 0, $count = 0){
            $this->id = $id;
            $this->name = $name;
            $this->desc = $desc;
            $this->src = $src;
            $this->price = $price;
            $this->count = $count;
        }

        //В обращении к свойствам объекта через $this не пишется доллар у названия свойств
        public function getId(){
            return $this->id;
        }
        public function getName(){
            return $this->name;
        }
        public function getDesc(){
            return $this->desc;
        }
        public function getSrc(){
            return $this->src;
        }
        public function getPrice(){
            return $this->price;
        }
        public function getCount(){
            return $this->count;
        }
        public static function createAllPersonByBD(){
            $pdo = NEW PDO(DNS, DB_USER, DB_PASS);

            $q = " SELECT * FROM ".self::$TB_NAME." ";

            $result = $pdo->query($q);

            $response = [];

            while($row = $result->fetch(PDO::FETCH_ASSOC)){
                
                //Вот тут у вас постоянно перезаписывается $repsonse, а в него нужно добавлять новые объекты. Нужно пушить в массив
                //$response = new Catalog( $row['name'], $row['description'], IMAGE_FOLDER.$row['src'],
                //$row['price']." руб.", $row['count']);

                $response[] = new Catalog( $row['id'], $row['name'], $row['description'], IMAGE_FOLDER.$row['src'], $row['price']." ","Количество на складе: ".$row['count']);
            }

            $responseArray = [];
            foreach ($response as $val){ 
                $responseArray[] = [ 
                    'id'=>$val->getId(),
                    'name'=>$val->getName(),
                    'desc'=>$val->getDesc(), 
                    'src'=>$val->getSrc(), 
                    'price'=>$val->getPrice(), 
                    'count'=>$val->getCount()
                ]; 
            }

            echo json_encode($responseArray);
        }
    }

    //Тут лучше стучаться через другой файл, напрямую в классы ходить плохая практика
    //создал файл getCatalog.php


?>