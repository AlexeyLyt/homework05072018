<?php 
    require_once 'config.php';

    class Product {
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
        public static function createPersonById($id){
            $pdo = NEW PDO(DNS, DB_USER, DB_PASS);

            $q = " SELECT * FROM ".self::$TB_NAME." WHERE id = {$id}";

            $result = $pdo->query($q);

            $response = [];

            if($row = $result->fetch(PDO::FETCH_ASSOC)){
                $response[] = new Product($row['id'], $row['name'], $row['description'], IMAGE_FOLDER.$row['src'], $row['price']." руб.", $row['count']);
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
?>