-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 06, 2024 at 12:22 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `quotation`
--

-- --------------------------------------------------------

--
-- Table structure for table `quotations_data`
--

CREATE TABLE `quotations_data` (
  `quotation_id` int(11) NOT NULL,
  `quotation_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `quotations_data`
--

INSERT INTO `quotations_data` (`quotation_id`, `quotation_name`) VALUES
(1, 'umer it solution'),
(2, 'mahesh kuldeep it solution'),
(3, 'umerer'),
(4, 'jsss'),
(5, 'shridam '),
(6, 'devji'),
(7, 'kkk'),
(8, 'rrc'),
(9, 'google '),
(10, 'microsoft'),
(11, 'adobe'),
(12, 'css'),
(13, 'css'),
(14, 'css'),
(15, 'test'),
(16, 'test6'),
(17, 'test6'),
(18, 'test6'),
(19, 'test5'),
(20, 'trr'),
(21, 'sdgsdfg'),
(22, 'doa guru'),
(23, 'joy it solution'),
(24, 'JSSS'),
(25, 'woj '),
(26, 'dev'),
(27, 'Anas Interprise'),
(28, 'umertest'),
(29, 'jsss'),
(30, 'Mahesh Kuldeep It solution'),
(31, 'TCS'),
(32, 'TTTTTT'),
(33, 'test'),
(39, 'jabalpur hospital'),
(46, 'mohit'),
(51, 'eee'),
(56, 'r'),
(57, '44'),
(58, 'rer'),
(63, 'ewe'),
(64, 'ewe'),
(65, 'ewe'),
(66, 'ewe'),
(67, 'ewe');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `quotations_data`
--
ALTER TABLE `quotations_data`
  ADD PRIMARY KEY (`quotation_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `quotations_data`
--
ALTER TABLE `quotations_data`
  MODIFY `quotation_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
