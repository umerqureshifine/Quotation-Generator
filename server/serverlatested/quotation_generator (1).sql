-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 13, 2024 at 02:12 PM
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
-- Database: `quotation_generator`
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
(78, 203, 'Payment will be 100% in advance and is expected till 3rd of every month.'),
(79, 203, 'Payment will be 100% in advance and is expected till 3rd of every month.'),
(80, 203, 'One dedicated SPOC (single point of contact) is required from the client side to approve the posts/contents/videos/website changes, etc.'),
(81, 203, 'Required details like credentials and other details are needed to share timely.'),
(82, 203, 'Telephonic or short meetings required weekly, and a monthly meeting time (1hr) is required to review the reports and for discussing future plannings/strategies.'),
(83, 203, 'One dedicated SPOC (single point of contact) is required from the client side to approve the posts/contents/videos/website changes, etc.'),
(84, 203, 'One dedicated SPOC (single point of contact) is required from the client side to approve the posts/contents/videos/website changes, etc.'),
(85, 209, 'Payment will be 100% in advance and is expected till 3rd of every month.');

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
  `quotation_name` varchar(255) NOT NULL,
  `created_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `quotations_data`
--

INSERT INTO `quotations_data` (`quotation_id`, `quotation_name`, `created_date`) VALUES
(203, 'testdropdown', '2024-01-25 08:48:17'),
(206, 'testtsdd', '2024-01-25 09:33:17'),
(208, 'ygfclk', '2024-01-25 11:53:17'),
(209, 'serwer', '2024-01-25 12:07:27');

-- --------------------------------------------------------

--
-- Table structure for table `quotation_header_footer`
--

CREATE TABLE `quotation_header_footer` (
  `id` int(11) NOT NULL,
  `header_img` varchar(255) NOT NULL,
  `footer_img` varchar(255) NOT NULL,
  `company_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `quotation_header_footer`
--

INSERT INTO `quotation_header_footer` (`id`, `header_img`, `footer_img`, `company_name`) VALUES
(16, 'http://localhost:9000/uploads/header_img-17066946241762.png', 'http://localhost:9000/uploads/footer_img-1706694624208last.png', 'Doaguru InfoSystems'),
(18, 'http://localhost:9000/uploads/header_img-1706697940666Doaguru_IT_Solution_Header.jpeg', 'http://localhost:9000/uploads/footer_img-1706697940672Doaguru_IT_Solution_Footer.png', 'Doaguru IT Solutions');

-- --------------------------------------------------------

--
-- Table structure for table `quotation_images`
--

CREATE TABLE `quotation_images` (
  `image_id` int(11) NOT NULL,
  `quotation_id` int(11) NOT NULL,
  `image_type` varchar(50) NOT NULL,
  `file_path` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `registered_data`
--

CREATE TABLE `registered_data` (
  `id` int(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `registered_data`
--

INSERT INTO `registered_data` (`id`, `name`, `email`, `password`) VALUES
(20, 'umer qureshi', 'umer@gmail.com', '$2b$10$0BFYnZEhIdiyuTgP69OdG.IZUfMycIzfLPcjK1UqodakkK55D0Agq');

-- --------------------------------------------------------

--
-- Table structure for table `select_header_footer`
--

CREATE TABLE `select_header_footer` (
  `id` int(11) NOT NULL,
  `header_img` varchar(255) NOT NULL,
  `footer_img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
(19, 'Staffing'),
(20, 'Website\r\nModification &\r\nMaintenance');

-- --------------------------------------------------------

--
-- Table structure for table `services_data`
--

CREATE TABLE `services_data` (
  `service_id` int(11) NOT NULL,
  `quotation_id` int(11) DEFAULT NULL,
  `quotation_name` varchar(255) NOT NULL,
  `service_type` varchar(255) NOT NULL,
  `service_name` varchar(255) NOT NULL,
  `service_description` text NOT NULL,
  `actual_price` decimal(10,2) DEFAULT NULL,
  `offer_price` decimal(10,2) NOT NULL,
  `created_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `subscription_frequency` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `services_data`
--

INSERT INTO `services_data` (`service_id`, `quotation_id`, `quotation_name`, `service_type`, `service_name`, `service_description`, `actual_price`, `offer_price`, `created_date`, `subscription_frequency`) VALUES
(256, 203, 'testdropdown', 'Paid', 'Search Engine Optimization (SEO)', 'sdff', 2500.00, 1500.00, '2024-01-25 08:48:17', 'Monthly'),
(257, 203, 'testdropdown', 'Complimentary', 'Bulk WhatsApp', 'fgdf', 5000.00, 0.00, '2024-01-25 08:48:17', 'Quarterly'),
(263, 206, 'testtsdd', 'Paid', 'Social Media Marketing (SMM)', 'eqwe', 2500.00, 1500.00, '2024-01-25 09:33:17', 'Monthly'),
(264, 206, 'testtsdd', 'Paid', 'Graphic & Logo Designing', 'qweqe', 5000.00, 4000.00, '2024-01-25 09:33:17', 'Quarterly'),
(265, 206, 'testtsdd', 'Complimentary', 'Google Reviews', 'dfrerf', 5000.00, 0.00, '2024-01-25 09:33:17', 'Quarterly'),
(268, 206, 'testtsdd', 'Paid', 'Search Engine Optimization (SEO)', 'dfdfd', 5000.00, 4000.00, '2024-01-25 10:24:22', 'Monthly'),
(269, 206, 'testtsdd', 'Complimentary', 'Website Design & Development', '6utyjh', 5000.00, 0.00, '2024-01-25 10:28:10', 'One Time'),
(271, 208, 'ygfclk', 'Paid', 'Social Media Optimization (SMO)', 'jhg', 5000.00, 4000.00, '2024-01-25 11:53:17', 'Monthly'),
(272, 208, 'ygfclk', 'Complimentary', 'Bulk WhatsApp', 'jhg', 5000.00, 0.00, '2024-01-25 11:53:17', 'Monthly'),
(273, 208, 'ygfclk', 'Paid', 'Software Development', 'ugh', 8000.00, 4000.00, '2024-01-25 11:53:17', 'Monthly'),
(274, 208, 'ygfclk', 'Paid', 'Software Development', 'hggj', 5000.00, 4000.00, '2024-01-25 11:53:49', 'Yearly'),
(275, 209, 'serwer', 'Complimentary', 'Social Media Optimization (SMO)', 'sds', 50050.00, 0.00, '2024-01-25 14:05:35', 'Monthly'),
(276, 209, 'serwer', 'Complimentary', 'Social Media Optimization (SMO)', 'ss', 23.00, 0.00, '2024-02-13 12:43:39', 'Quarterly');

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
-- Indexes for table `quotation_header_footer`
--
ALTER TABLE `quotation_header_footer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `quotation_images`
--
ALTER TABLE `quotation_images`
  ADD PRIMARY KEY (`image_id`),
  ADD KEY `quotation_id` (`quotation_id`);

--
-- Indexes for table `registered_data`
--
ALTER TABLE `registered_data`
  ADD PRIMARY KEY (`id`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=86;

--
-- AUTO_INCREMENT for table `notes_data`
--
ALTER TABLE `notes_data`
  MODIFY `notes_id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `quotations_data`
--
ALTER TABLE `quotations_data`
  MODIFY `quotation_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=210;

--
-- AUTO_INCREMENT for table `quotation_header_footer`
--
ALTER TABLE `quotation_header_footer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `quotation_images`
--
ALTER TABLE `quotation_images`
  MODIFY `image_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `registered_data`
--
ALTER TABLE `registered_data`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `service_id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `services_data`
--
ALTER TABLE `services_data`
  MODIFY `service_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=277;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `notes`
--
ALTER TABLE `notes`
  ADD CONSTRAINT `notes_ibfk_1` FOREIGN KEY (`quotation_id`) REFERENCES `quotations_data` (`quotation_id`);

--
-- Constraints for table `quotation_images`
--
ALTER TABLE `quotation_images`
  ADD CONSTRAINT `quotation_images_ibfk_1` FOREIGN KEY (`quotation_id`) REFERENCES `quotations_data` (`quotation_id`);

--
-- Constraints for table `services_data`
--
ALTER TABLE `services_data`
  ADD CONSTRAINT `services_data_ibfk_1` FOREIGN KEY (`quotation_id`) REFERENCES `quotations_data` (`quotation_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
