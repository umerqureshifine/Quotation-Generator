-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 09, 2024 at 06:36 PM
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
-- Table structure for table `notes`
--

CREATE TABLE `notes` (
  `id` int(11) NOT NULL,
  `quotation_id` int(11) DEFAULT NULL,
  `note_text` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `notes`
--

INSERT INTO `notes` (`id`, `quotation_id`, `note_text`) VALUES
(1, NULL, NULL),
(6, 90, 'Your note text goes here'),
(9, 91, 'umkwerhiweiwjiwjwwj'),
(10, 91, 'ijdfisjdfdf'),
(11, 91, 'this is 91 '),
(12, 80, NULL),
(13, 80, NULL),
(14, 81, 'fdgrf'),
(15, 81, 'sdfsdf'),
(18, 92, 'rere'),
(21, 92, 'ttttt'),
(22, 84, 'uksiuedwl'),
(23, 84, 'kljdijd'),
(24, 84, 'rferre'),
(27, 81, 'asadfg ll, .mm miji'),
(29, 96, 'Ad amount excluding in this above given budget, suggested budget 1000000\n'),
(30, 96, 'please provide all credentials and deatails about organisation'),
(50, 81, 'Ads budget will be decided by client, suggested ad budget 15000/-'),
(51, 81, 'Payment/plan can be stopped/changed by informing one month in advance if not satisfied with the services.'),
(52, 81, 'One dedicated SPOC (single point of contact) is required from the client side to approve the posts/contents/videos/website changes, etc.'),
(53, 81, 'Required details like credentials and other details are needed to share timely.'),
(54, 81, 'SMM Ad Budget\nAds budget will be decided by client, suggested ad budget 15000/-'),
(55, 81, 'Estimated time for keywords ranking on the first page,\nLow-competition keywords take 2-3 months,\nMedium competition Keywords take 3-5 months,\nHigh-competition Keywords take 6-9 months.\n'),
(56, 81, 'Estimated time for keywords ranking on the first page,\n\n\n\n\n\nLow-competition keywords take 2-3 months,\nMedium competition Keywords take 3-5 months,\nHigh-competition Keywords take 6-9 months.\n'),
(57, 81, 'SMM Ad Budget :-\nAds budget will be decided by client, suggested ad budget 15000/-'),
(58, 81, 'Estimated time for keywords ranking on the first page : -\n\n\n\n\n\nLow-competition keywords take 2-3 months,\nMedium competition Keywords take 3-5 months,\nHigh-competition Keywords take 6-9 months.\n');

-- --------------------------------------------------------

--
-- Table structure for table `notes_data`
--

CREATE TABLE `notes_data` (
  `notes_id` int(200) NOT NULL,
  `notes_text` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `notes_data`
--

INSERT INTO `notes_data` (`notes_id`, `notes_text`) VALUES
(1, 'SMM Ad Budget :-\nAds budget will be decided by client, suggested ad budget 15000/-'),
(2, 'Payment will be 100% in advance and is expected till 3rd of every month.'),
(3, 'Payment/plan can be stopped/changed by informing one month in advance if not satisfied with the services.'),
(4, 'One dedicated SPOC (single point of contact) is required from the client side to approve the posts/contents/videos/website changes, etc.'),
(5, 'Required details like credentials and other details are needed to share timely.'),
(6, 'Telephonic or short meetings required weekly, and a monthly meeting time (1hr) is required to review the reports and for discussing future plannings/strategies.'),
(7, 'Estimated time for keywords ranking on the first page : -\n\n\n\n\n\nLow-competition keywords take 2-3 months,\nMedium competition Keywords take 3-5 months,\nHigh-competition Keywords take 6-9 months.\n');

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
(67, 'ewe'),
(79, 'mohit'),
(80, 'Shridham Hospital'),
(81, 'Demo quotation'),
(83, 'kfjd'),
(84, 'fedf'),
(85, 'rgrftg'),
(86, 'tytuy'),
(87, 'umerer'),
(89, 'ujh'),
(90, 'tht'),
(91, 'WHO'),
(92, 'Wipro'),
(93, 'Other service'),
(94, 'umer it solution'),
(96, 'Institution Video Plalist platform'),
(98, 'pccc');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `service_id` int(200) NOT NULL,
  `service_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`service_id`, `service_name`) VALUES
(1, 'Social Media Marketing (SMM)'),
(2, 'Social Media Optimization (SMO)'),
(3, 'Search Engine Optimization (SEO)'),
(4, 'Website Design & Development'),
(5, 'Software Development'),
(6, 'Graphic & Logo Designing'),
(7, 'Video Editing'),
(8, 'Mobile Application Development (Android & IOS)'),
(9, 'Bulk WhatsApp'),
(10, 'YouTube Optimization'),
(11, 'Google My Business Assist'),
(12, 'Google Reviews'),
(13, 'Leads Generation'),
(14, 'Facebook Paid Ads'),
(15, 'Google PPC Ads'),
(16, 'Content Writing'),
(17, 'Data Science & Engineering'),
(18, 'Cloud Computing'),
(19, 'Staffing');

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
  `actual_price` decimal(10,2) DEFAULT NULL,
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
(53, 30, 'Mahesh Kuldeep It solution', 'Search Engine Optimization', 'SMO (Social Media Optimization) 12 Posting with (10\npost + 10 video/Reels), on any 2 Social media\nplatforms, increasing followers and p', 16000.00, 33000.00),
(54, 30, 'Mahesh Kuldeep It solution', 'Mobile Application Development', 'SMM (Social Media Marketing) Awareness and\nengagement ads through Facebook and Instagram\nwith multiple ad content such as posters and video\nwith voiceover\n', 3000.00, 2000.00),
(55, 30, 'Mahesh Kuldeep It solution', 'Search Engine Optimization', 'Website design and development using MERN\nTechnology\n(5 pages Static Website)\n', 15000.00, 10000.00),
(56, 31, 'TCS', 'Social Media Optimization', 'test', 2000.00, 1000.00),
(57, 31, 'TCS', 'Search Engine Optimization', 'test', 2000.00, 3000.00),
(58, 32, 'Wipro ', 'Search Engine Optimization', 'test', 3000.00, 3000.00),
(59, 32, 'Wipro ', 'Mobile Application Development', 'tets', 2000.00, 1000.00),
(70, 39, 'jabalpur hospital', 'Mobile Application Development', 'uimerjdf', 3434.00, 32430.00),
(71, 39, 'jabalpur hospital', 'Mobile Application Development', 'umejnrbe', 2323.00, 2320.00),
(81, 46, 'mohit', 'Video Editing', 'mohit', 1000.00, 500.00),
(82, 46, 'mohit', 'Search Engine Optimization', '', 0.00, 0.00),
(83, 46, 'mohit', 'Search Engine Optimization', '', 0.00, 0.00),
(84, 46, 'mohit', 'Search Engine Optimization', '', 0.00, 0.00),
(89, 51, 'eee', 'Search Engine Optimization', '3434', 0.00, 0.00),
(94, 56, 'r', 'Search Engine Optimization', 'r', 0.00, 0.00),
(95, 57, '44', 'Search Engine Optimization', '44', 0.00, 0.00),
(96, 58, 'rer', 'Search Engine Optimization', 'erer', 0.00, 0.00),
(117, 79, 'mohit', 'Social Media Optimization', 'mohit', 1000.00, 500.00),
(118, 80, 'Shridham Hospital', 'Social Media Optimization (SMO)', '10 post and 5 video in mopnth on 4 social media pages including facebook, instagram, twitter, linkdin, youtube', 18000.00, 15000.00),
(119, 80, 'Shridham Hospital', 'Search Engine Optimization (SEO)', 'seo with 10 keywords on wordpress website', 15000.00, 12000.00),
(120, 80, 'Shridham Hospital', 'Website Design & Development', '5 page website on wordpress including home page, about us page, contact us page, gallery page, blog page', 8000.00, 5000.00),
(121, 81, 'Demo quotation', 'Social Media Marketing (SMM)', 'ggggg1', 100000.00, 5000.00),
(122, 81, 'Demo quotation', 'Social Media Optimization (SMO)', '112313iugh ', 50000.00, 25000.00),
(123, 81, 'Demo quotation', 'Search Engine Optimization (SEO)', 'poouy bvgn , ', 15000.00, 10000.00),
(124, 81, 'Demo quotation', 'Website Design & Development', 'rtyhgjuo hbjkjoik lkp[ok ', 8000.00, 5000.00),
(125, 81, 'Demo quotation', 'Software Development', 'ytrfddfg hgjhih jkkljnk', 40000.00, 30000.00),
(126, 81, 'Demo quotation', 'Graphic & Logo Designing', 'ijik, cvcvrf .,lio hgfg ', 50000.00, 25000.00),
(127, 81, 'Demo quotation', 'Video Editing', 'uuoju nnnjik ,,p,;ol mnml', 7000.00, 5000.00),
(128, 81, 'Demo quotation', 'Mobile Application Development (Android & IOS)', 'ttuu appkl jjkjn', 100000.00, 50000.00),
(129, 81, 'Demo quotation', 'Bulk WhatsApp', 'oouiu kkmkll ,mk,', 40000.00, 30000.00),
(130, 81, 'Demo quotation', 'YouTube Optimization', 'rruujjnm oolk nnjnkmj', 10000.00, 5000.00),
(131, 81, 'Demo quotation', 'Google My Business Assist', 'yuuoo mmmlp  l', 2500.00, 500.00),
(132, 81, 'Demo quotation', 'Google Reviews', '4l;l iiinde ', 500.00, 100.00),
(133, 81, 'Demo quotation', 'Leads Generation', 'klkp nnuu ,mmll', 10000.00, 54000.00),
(134, 81, 'Demo quotation', 'Facebook Paid Ads', 'ihknjkhj klkn', 4511.00, 4000.00),
(135, 81, 'Demo quotation', 'Content Writing', 'yu jhjhj kl', 50000.00, 15020.00),
(136, 81, 'Demo quotation', 'Cloud Computing', 'hhii  mmkkl kk,pok', 50000.00, 100000.00),
(139, 83, 'kfjd', 'Website Design & Development', 'sdfd', 34234.00, 34234.00),
(140, 83, 'kfjd', 'Social Media Optimization (SMO)', '2342', 232.00, 323.00),
(141, 84, 'fedf', 'Social Media Marketing (SMM)', 'edw', 399.00, 2300.00),
(142, 85, 'rgrftg', 'Website Design & Development', '545', 5435.00, 3543.00),
(143, 86, 'tytuy', 'Social Media Optimization (SMO)', 'yhtyt', 3434.00, 343.00),
(144, 87, 'umerer', 'Social Media Optimization (SMO)', '3r', 23.00, 23.00),
(146, 89, 'ujh', 'Social Media Optimization (SMO)', 'jhg', 8546.00, 54564.00),
(147, 90, 'tht', 'Social Media Optimization (SMO)', 'try', 4545.00, 5454.00),
(148, 91, 'WHO', 'Social Media Optimization (SMO)', 'umwerwh', 2323.00, 2323.00),
(149, 91, 'WHO', 'Search Engine Optimization (SEO)', 'dfdf', 323.00, 434343.00),
(150, 91, 'WHO', 'YouTube Optimization', 'dff', 3443.00, 444.00),
(151, 91, 'WHO', 'Mobile Application Development (Android & IOS)', 'dgfdf', 3434.00, 3434.00),
(152, 92, 'Wipro', 'Social Media Optimization (SMO)', 'testjkdsds', 40000.00, 20000.00),
(153, 92, 'Wipro', 'Graphic & Logo Designing', 'jsdh', 22389.00, 2323.00),
(154, NULL, '', 'Bulk WhatsApp', 'bulk', 3434.00, 3444.00),
(155, NULL, '', 'Bulk WhatsApp', 'bulk', 3000.00, 5000.00),
(156, NULL, '', 'Staffing', 'sdds', 23.00, 232.00),
(157, NULL, '', 'Bulk WhatsApp', 'grtfe', 343.00, 343434.00),
(158, NULL, '', 'Search Engine Optimization (SEO)', '1qw', 231.00, 2.00),
(162, 93, 'Other service', 'Other Service', 'cccc', 34.00, 3434.00),
(163, 94, 'umer it solution', 'developer', 'sdfds', 344.00, 3434.00),
(167, 96, 'Institution Video Plalist platform', 'Video Intro', 'Result Oriented Digital marketing with Google PPC Ads, Facebook Ads etc', 50000.00, 45000.00),
(168, 96, 'Institution Video Plalist platform', 'Website Design & Development', 'Institution Video Library Web Application', 120000.00, 25000.00),
(169, 96, 'Institution Video Plalist platform', 'Google My Business Assist', 'Google my business with 100 review per month and local SEO', 5000.00, 0.00),
(170, 96, 'Institution Video Plalist platform', 'Video Intro', 'We will provide Nat5ional Festival Post for your institution Promotion ', 5000.00, 0.00),
(172, 96, 'Institution Video Plalist platform', 'Video Editing', 'll..;;', 25000.00, 0.00),
(175, 98, 'pccc', 'umerer', 'sdwd', 3434.00, 3434.00),
(176, 98, 'pccc', 'kdfjfefe', 'dfdfedf', 3434.00, 434.00),
(177, 98, 'pccc', 'kljsdsd', 'rfgrr', 455.00, 46546.00);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `notes`
--
ALTER TABLE `notes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `quotation_id` (`quotation_id`);

--
-- Indexes for table `notes_data`
--
ALTER TABLE `notes_data`
  ADD PRIMARY KEY (`notes_id`);

--
-- Indexes for table `quotations_data`
--
ALTER TABLE `quotations_data`
  ADD PRIMARY KEY (`quotation_id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`service_id`);

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
-- AUTO_INCREMENT for table `notes`
--
ALTER TABLE `notes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- AUTO_INCREMENT for table `notes_data`
--
ALTER TABLE `notes_data`
  MODIFY `notes_id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `quotations_data`
--
ALTER TABLE `quotations_data`
  MODIFY `quotation_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `service_id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `services_data`
--
ALTER TABLE `services_data`
  MODIFY `service_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=187;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `notes`
--
ALTER TABLE `notes`
  ADD CONSTRAINT `notes_ibfk_1` FOREIGN KEY (`quotation_id`) REFERENCES `quotations_data` (`quotation_id`);

--
-- Constraints for table `services_data`
--
ALTER TABLE `services_data`
  ADD CONSTRAINT `services_data_ibfk_1` FOREIGN KEY (`quotation_id`) REFERENCES `quotations_data` (`quotation_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
