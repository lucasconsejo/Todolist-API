-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  jeu. 03 jan. 2019 à 16:46
-- Version du serveur :  10.1.36-MariaDB
-- Version de PHP :  7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `node_js`
--

-- --------------------------------------------------------

--
-- Structure de la table `todos`
--

CREATE TABLE `todos` (
  `todoId` int(11) NOT NULL,
  `message` text NOT NULL,
  `completion` varchar(255) NOT NULL,
  `createdAt` varchar(255) NOT NULL,
  `updatedAt` varchar(255) NOT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `todos`
--

INSERT INTO `todos` (`todoId`, `message`, `completion`, `createdAt`, `updatedAt`, `userId`) VALUES
(1, 'Faire le Node Js pour dimanche', 'Done', '2019-01-03 16:40:57', 'none', 1),
(2, 'Faire la vaisselle', 'Todo', '2019-01-03 16:42:13', '2019-01-03 16:45:19', 2),
(3, 'Ranger sa chambre', 'Work in progress', '2019-01-03 16:42:39', 'none', 3);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `userId` int(11) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `createdAt` varchar(255) NOT NULL,
  `updatedAt` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`userId`, `firstname`, `lastname`, `username`, `password`, `email`, `createdAt`, `updatedAt`) VALUES
(1, 'Lucas', 'Consejo', 'Lucas', '$2a$10$gknidvzZENpUv7p4nLohP.Y4WCKm0C1vWtfe2FaDNWRyNsnXDR/mG', 'lucas.consejo@ynov.com', '2019-01-03 16:38:45', 'none'),
(2, 'Théo', 'Ferreira', 'Théo', '$2a$10$Xj4.9FiwNpEGpQu.5HMzJub6UbtN2l.FhuQ424wJCRXdIysg6n6rS', 'theo.ferreira@ynov.com', '2019-01-03 16:39:09', 'none'),
(3, 'Corentin', 'Pallard', 'Corentin', '$2a$10$..b2r67MEZ1Em7FEXlimmeDcOKV6AtQMDsClOSm96lQK8FJzQ4Yme', 'corentin.ferreira@ynov.com', '2019-01-03 16:39:52', 'none'),
(4, 'Valentin', 'Raffy', 'Valentin', '$2a$10$jy4P7CoGwqHYIm9TZLt3WeDlUV08WgzvOz2fd3vkkpc40UEiFOPvW', 'valentin.raffy@ynov.com', '2019-01-03 16:40:20', 'none');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `todos`
--
ALTER TABLE `todos`
  ADD PRIMARY KEY (`todoId`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `todos`
--
ALTER TABLE `todos`
  MODIFY `todoId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
