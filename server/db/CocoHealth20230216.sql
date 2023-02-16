-- MySQL dump 10.13  Distrib 8.0.30, for macos12 (x86_64)
--
-- Host: localhost    Database: coco
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `crop`
--

DROP TABLE IF EXISTS `crop`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `crop` (
  `crop_id` int NOT NULL AUTO_INCREMENT,
  `latitude` double NOT NULL,
  `longitude` double NOT NULL,
  `crop_name` varchar(50) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT '1',
  `crop_status` int NOT NULL,
  `quantity` int DEFAULT NULL,
  PRIMARY KEY (`crop_id`),
  KEY `fk_crop_status_fk` (`crop_status`),
  CONSTRAINT `fk_crop_status_fk` FOREIGN KEY (`crop_status`) REFERENCES `crop_status` (`crop_status_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `crop`
--

LOCK TABLES `crop` WRITE;
/*!40000 ALTER TABLE `crop` DISABLE KEYS */;
INSERT INTO `crop` VALUES (1,3.041783,-77.530518,'Los Coquitos',1,1,3000),(2,3.634036,-77.156982,'Cocos INC.',1,2,4500),(3,4.008109995390116,-77.3987674,'La cocada',1,3,300),(4,4.119066903428995,-77.33413696289064,'Uramba',1,1,1200),(5,4.2642463343131,-77.04574584960939,'Monaco',1,2,5000),(6,3.601142320158735,-77.09518432617189,'Hacienda Los Cocos',1,3,13000),(7,4.606540379886432,-77.27920532226564,'Cultivo el Cocal',1,2,3500),(8,4.008109995390116,-77.3987674,'Coquito',1,1,300),(9,4.2642463343131,-77.36160278320312,'Provenza SA',1,1,42134),(11,5.700714990313155,-77.25448608398438,'La Cocotería',1,3,32000),(12,4.23685605976896,-76.96884155273439,'Coco Villa',1,1,6000);
/*!40000 ALTER TABLE `crop` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `crop_status`
--

DROP TABLE IF EXISTS `crop_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `crop_status` (
  `crop_status_id` int NOT NULL AUTO_INCREMENT,
  `type` varchar(20) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`crop_status_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `crop_status`
--

LOCK TABLES `crop_status` WRITE;
/*!40000 ALTER TABLE `crop_status` DISABLE KEYS */;
INSERT INTO `crop_status` VALUES (1,'No afectada','El cultivo no esta presentando afectaciones.'),(2,'Escama roja','La escama roja es un insecto de escamas blindadas y una plaga importante de los cítricos. Se cree que es originario del sur de China, pero ha sido ampliamente dispersado por la agencia del hombre a través del movimiento de material vegetal infectado.'),(3,'Gualpa','La Gualpa también conocido como picudo negro de las palmas, picudo americano de las palmas (PAP) y denominado regionalmente gualpa, es un insecto-plaga de importancia económica para los cultivos de palma de aceite y cocotero en América Latina y el Caribe.');
/*!40000 ALTER TABLE `crop_status` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-16  8:01:36
