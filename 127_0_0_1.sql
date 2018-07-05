-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Июл 04 2018 г., 11:32
-- Версия сервера: 10.1.32-MariaDB
-- Версия PHP: 7.2.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `weird_shop`
--
CREATE DATABASE IF NOT EXISTS `weird_shop` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;
USE `weird_shop`;

-- --------------------------------------------------------

--
-- Структура таблицы `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_bin NOT NULL,
  `description` text COLLATE utf8_bin NOT NULL,
  `src` varchar(255) COLLATE utf8_bin NOT NULL,
  `price` double NOT NULL,
  `count` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Дамп данных таблицы `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `src`, `price`, `count`) VALUES
(1, 'Кепка', 'Что такое кепка? Это в первую очередь неглубокая фуражка, у которой есть прямой твердый козырек. В 19 веке ее изобрели военные, а в последствии начали использовать гимназисты, как часть формы. Так же есть еще одна разновидность кепки – это бейсболка.', 'Kepka.png', 200, 27),
(2, 'Тапка', 'Тапочки обычно изготавливаются из мягкой ткани, кожи и т. п. Обувь подобного покроя известна с древних времён. Некоторые виды, особенно предназначенные для посещения ванны, бассейна и других влажных мест, делаются из резины или пластика.', 'Tapok.png', 599, 15),
(3, 'Балалайка', 'Русский и украинский народный трёхструнный щипковый музыкальный инструмент с корпусом треугольной формы. Характерными приёмами звукоизвлечения являются бряцание и тремоло — удары указательным пальцем по всем струнам одновременно.', 'Balalayka.png', 3999, 4),
(4, 'Гайка', 'Деталь различной формы для скрепления чего-н. путём навинчивания, обычно многогранная металлическая плашка со сквозным отверстием и винтовой нарезкой в нём.', 'Gaika.png', 10, 255);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
