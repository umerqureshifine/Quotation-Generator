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
-- Table structure for table `services_data`
--

CREATE TABLE `services_data` (
  `service_id` int(11) NOT NULL,
  `quotation_id` int(11) DEFAULT NULL,
  `quotation_name` varchar(255) NOT NULL,
  `service_type` varchar(255) NOT NULL,
  `service_description` text NOT NULL,
  `actual_price` decimal(10,2) NOT NULL,
  `offer_price` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `services_data`
--

INSERT INTO `services_data` (`service_id`, `quotation_id`, `quotation_name`, `service_type`, `service_description`, `actual_price`, `offer_price`) VALUES
(38, 24, 'JSSS', 'Search Engine Optimization', 'SMO (Social Media Optimization) 12 Posting with (10\npost + 10 video/Reels), on any 2 Social media\nplatforms, increasing followers and page likes, social\nmedia handling', 15000.00, 10000.00),
(39, 24, 'JSSS', 'Social Media Optimization', 'SMM (Social Media Marketing) Awareness and\nengagement ads through Facebook and Instagram\nwith multiple ad content such as pos', 4000.00, 3000.00),
(40, 24, 'JSSS', 'Video Editing', 'It is 3 video', 3000.00, 2500.00),
(41, 25, 'woj ', 'Video Editing', 'q', 344.00, 3443.00),
(42, 25, 'woj ', 'Search Engine Optimization', 'fd', 4334.00, 4334.00),
(43, 25, 'woj ', 'Mobile Application Development', 'ff', 44.00, 4343.00),
(44, 25, 'woj ', 'Social Media Optimization', 'rre', 334.00, 3434.00),
(45, 25, 'woj ', 'Social Media Optimization', '34', 3443.00, 34340.00),
(46, 26, 'dev it solution', 'Mobile Application Development', 'dfef', 33.00, 44.00),
(47, 26, 'dev it solution', 'Mobile Application Development', 'dfef', 33.00, 44.00),
(48, 26, 'dev it solution', 'Mobile Application Development', 'dfef', 33.00, 44.00),
(49, 26, 'dev it solution', 'Mobile Application Development', 'dfef', 33.00, 44.00),
(50, NULL, 'Anas Interprise', 'Mobile Application Development', 'Anas test', 2000.00, 3000.00),
(51, NULL, 'Anas Interprise', 'Video Editing', 'twst', 3000.00, 2000.00),
(52, 29, 'jsss', 'Social Media Optimization', 'ss', 2.00, 1.00),
(53, 30, 'Mahesh Kuldeep It solution', 'Search Engine Optimization', 'SMO (Social Media Optimization) 12 Posting with (10\npost + 10 video/Reels), on any 2 Social media\nplatforms, increasing followers and p', 143999.00, 33000.00),
(54, 30, 'Mahesh Kuldeep It solution', 'Mobile Application Development', 'SMM (Social Media Marketing) Awareness and\nengagement ads through Facebook and Instagram\nwith multiple ad content such as posters and video\nwith voiceover\n', 3000.00, 2000.00),
(55, 30, 'Mahesh Kuldeep It solution', 'Search Engine Optimization', 'Website design and development using MERN\nTechnology\n(5 pages Static Website)\n', 15000.00, 10000.00),
(56, 31, 'TCS', 'Social Media Optimization', 'test', 2000.00, 1000.00),
(57, 31, 'TCS', 'Search Engine Optimization', 'test', 2000.00, 3000.00),
(58, 32, 'Wipro ', 'Search Engine Optimization', 'test', 3000.00, 3000.00),
(59, 32, 'Wipro ', 'Mobile Application Development', 'tets', 2000.00, 1000.00),
(60, 33, 'umer test', 'Search Engine Optimization', 'diosfjf', 1233.00, 23230.00),
(61, 33, 'umer test', 'Search Engine Optimization', 'diosfjf', 1233.00, 23230.00),
(70, 39, 'jabalpur hospital', 'Mobile Application Development', 'uimerjdf', 3434.00, 32430.00),
(71, 39, 'jabalpur hospital', 'Mobile Application Development', 'umejnrbe', 2323.00, 2320.00),
(81, 46, 'mohit', 'Video Editing', 'mohit', 1000.00, 500.00),
(82, 46, 'mohit', 'Search Engine Optimization', '', 0.00, 0.00),
(83, 46, 'mohit', 'Search Engine Optimization', '', 0.00, 0.00),
(84, 46, 'mohit', 'Search Engine Optimization', '', 0.00, 0.00),
(89, 51, 'eee', 'Search Engine Optimization', '3434', 0.00, 0.00),
(94, 56, 'r', 'Search Engine Optimization', 'r', 0.00, 0.00),
(95, 57, '44', 'Search Engine Optimization', '44', 0.00, 0.00),
(96, 58, 'rer', 'Search Engine Optimization', 'erer', 0.00, 0.00);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `services_data`
--
ALTER TABLE `services_data`
  ADD PRIMARY KEY (`service_id`),
  ADD KEY `quotation_id` (`quotation_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `services_data`
--
ALTER TABLE `services_data`
  MODIFY `service_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=116;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `services_data`
--
ALTER TABLE `services_data`
  ADD CONSTRAINT `services_data_ibfk_1` FOREIGN KEY (`quotation_id`) REFERENCES `quotations_data` (`quotation_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
