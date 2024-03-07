CREATE TABLE `user_asa` (
	`id` int NOT NULL,
	`userId` int NOT NULL,
	`asa` varchar NOT NULL,
	`date_created` TIMESTAMP NOT NULL,
	`date_updated` TIMESTAMP NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `user_tags` (
	`id` int NOT NULL,
	`asaId` int NOT NULL,
	`tag` varchar NOT NULL,
	`date_created` TIMESTAMP NOT NULL,
	`date_updated` TIMESTAMP NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `race` (
	`id` int NOT NULL,
	`name` varchar NOT NULL,
	`distance` int NOT NULL,
	`cost` int NOT NULL,
	`date` TIMESTAMP NOT NULL,
	`date_created` TIMESTAMP NOT NULL,
	`date_updated` TIMESTAMP NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `user_race` (
	`id` int NOT NULL,
	`userId` int NOT NULL,
	`raceId` int NOT NULL,
	`date_created` TIMESTAMP NOT NULL,
	`date_updated` TIMESTAMP NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `user` (
	`id` int NOT NULL,
	`firstName` varchar NOT NULL,
	`lastName` varchar NOT NULL,
	`password` varchar NOT NULL,
	`username` varchar NOT NULL,
	`email` varchar NOT NULL,
	`contact` varchar NOT NULL,
	`date_created` TIMESTAMP NOT NULL,
	`date_updated` TIMESTAMP NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `club` (
	`id` int NOT NULL,
	`name` varchar NOT NULL,
	`email` varchar NOT NULL,
	`contact` varchar NOT NULL,
	`province` varchar NOT NULL,
	`country` varchar NOT NULL,
	`date_created` TIMESTAMP NOT NULL,
	`date_updated` TIMESTAMP NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `user_club` (
	`id` int NOT NULL,
	`userId` varchar NOT NULL,
	`clubId` varchar NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `event` (
	`id` int NOT NULL,
	`name` varchar NOT NULL,
	`detail` varchar NOT NULL,
	`status` bool NOT NULL,
	`date` TIMESTAMP NOT NULL,
	`date_created` TIMESTAMP NOT NULL,
	`date_updated` TIMESTAMP NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `user_event` (
	`id` int NOT NULL,
	`userId` varchar NOT NULL,
	`eventId` varchar NOT NULL,
	`status` bool NOT NULL,
	`date_created` TIMESTAMP NOT NULL,
	`date_updated` TIMESTAMP NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `role` (
	`id` int NOT NULL,
	`name` varchar NOT NULL,
	`date_created` TIMESTAMP NOT NULL,
	`date_updated` TIMESTAMP NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `permissions` (
	`id` int NOT NULL,
	`name` varchar NOT NULL,
	`date_created` TIMESTAMP NOT NULL,
	`date_updated` TIMESTAMP NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `role_permissions` (
	`id` int NOT NULL,
	`roleId` int NOT NULL,
	`permissionId` int NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `user_role` (
	`id` int NOT NULL,
	`userId` int NOT NULL,
	`roleId` int NOT NULL,
	`date_created` TIMESTAMP NOT NULL,
	`date_updated` TIMESTAMP NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `user_asa` ADD CONSTRAINT `user_asa_fk0` FOREIGN KEY (`userId`) REFERENCES `user`(`id`);

ALTER TABLE `user_tags` ADD CONSTRAINT `user_tags_fk0` FOREIGN KEY (`asaId`) REFERENCES `user_asa`(`id`);

ALTER TABLE `user_race` ADD CONSTRAINT `user_race_fk0` FOREIGN KEY (`userId`) REFERENCES `user`(`id`);

ALTER TABLE `user_race` ADD CONSTRAINT `user_race_fk1` FOREIGN KEY (`raceId`) REFERENCES `race`(`id`);

ALTER TABLE `user_club` ADD CONSTRAINT `user_club_fk0` FOREIGN KEY (`userId`) REFERENCES `user`(`id`);

ALTER TABLE `user_club` ADD CONSTRAINT `user_club_fk1` FOREIGN KEY (`clubId`) REFERENCES `club`(`id`);

ALTER TABLE `user_event` ADD CONSTRAINT `user_event_fk0` FOREIGN KEY (`userId`) REFERENCES `user`(`id`);

ALTER TABLE `user_event` ADD CONSTRAINT `user_event_fk1` FOREIGN KEY (`eventId`) REFERENCES `event`(`id`);

ALTER TABLE `role_permissions` ADD CONSTRAINT `role_permissions_fk0` FOREIGN KEY (`roleId`) REFERENCES `role`(`id`);

ALTER TABLE `role_permissions` ADD CONSTRAINT `role_permissions_fk1` FOREIGN KEY (`permissionId`) REFERENCES `permissions`(`id`);

ALTER TABLE `user_role` ADD CONSTRAINT `user_role_fk0` FOREIGN KEY (`userId`) REFERENCES `user`(`id`);

ALTER TABLE `user_role` ADD CONSTRAINT `user_role_fk1` FOREIGN KEY (`roleId`) REFERENCES `role`(`id`);