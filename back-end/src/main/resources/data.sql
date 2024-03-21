INSERT IGNORE INTO `role`(id, date_created, date_updated, version, name)
VALUES('430e083c-e3cf-11ee-b074-0242ac110002', now(), now(), 0, 'ADMIN');
INSERT IGNORE INTO `role`(id, date_created, date_updated, version, name)
VALUES('430fa4ba-e3cf-11ee-b074-0242ac110002', now(), now(), 0, 'USER');
INSERT IGNORE INTO `role`(id, date_created, date_updated, version, name)
VALUES('431161fd-e3cf-11ee-b074-0242ac110002', now(), now(), 0, 'MANAGER');

-- USER PERMISSIONS
INSERT IGNORE INTO runapp.permissions (id, date_created, date_updated, version, name)
VALUES('1', now(), now(), 0, 'USER_VIEW');
INSERT IGNORE INTO runapp.permissions (id, date_created, date_updated, version, name)
VALUES('2', now(), now(), 0, 'USER_CREATE');
INSERT IGNORE INTO runapp.permissions (id, date_created, date_updated, version, name)
VALUES('3', now(), now(), 0, 'USER_DELETE');
INSERT IGNORE INTO runapp.permissions (id, date_created, date_updated, version, name)
VALUES('4', now(), now(), 0, 'USER_UPDATE');
INSERT IGNORE INTO runapp.permissions (id, date_created, date_updated, version, name)
VALUES('5', now(), now(), 0, 'USER_LIST');

-- CLUB PERMISSIONS
INSERT IGNORE INTO runapp.permissions (id, date_created, date_updated, version, name)
VALUES('6', now(), now(), 0, 'CLUB_VIEW');
INSERT IGNORE INTO runapp.permissions (id, date_created, date_updated, version, name)
VALUES('7', now(), now(), 0, 'CLUB_CREATE');
INSERT IGNORE INTO runapp.permissions (id, date_created, date_updated, version, name)
VALUES('8', now(), now(), 0, 'CLUB_DELETE');
INSERT IGNORE INTO runapp.permissions (id, date_created, date_updated, version, name)
VALUES('9', now(), now(), 0, 'CLUB_UPDATE');
INSERT IGNORE INTO runapp.permissions (id, date_created, date_updated, version, name)
VALUES('10', now(), now(), 0, 'CLUB_LIST');

-- ASA PERMISSIONS
INSERT IGNORE INTO runapp.permissions (id, date_created, date_updated, version, name)
VALUES('11', now(), now(), 0, 'ASA_VIEW');
INSERT IGNORE INTO runapp.permissions (id, date_created, date_updated, version, name)
VALUES('12', now(), now(), 0, 'ASA_CREATE');
INSERT IGNORE INTO runapp.permissions (id, date_created, date_updated, version, name)
VALUES('13', now(), now(), 0, 'ASA_DELETE');
INSERT IGNORE INTO runapp.permissions (id, date_created, date_updated, version, name)
VALUES('14', now(), now(), 0, 'ASA_UPDATE');
INSERT IGNORE INTO runapp.permissions (id, date_created, date_updated, version, name)
VALUES('15', now(), now(), 0, 'ASA_LIST');

-- TAG PERMISSIONS
INSERT IGNORE INTO runapp.permissions (id, date_created, date_updated, version, name)
VALUES('16', now(), now(), 0, 'TAG_VIEW');
INSERT IGNORE INTO runapp.permissions (id, date_created, date_updated, version, name)
VALUES('17', now(), now(), 0, 'TAG_CREATE');
INSERT IGNORE INTO runapp.permissions (id, date_created, date_updated, version, name)
VALUES('18', now(), now(), 0, 'TAG_DELETE');
INSERT IGNORE INTO runapp.permissions (id, date_created, date_updated, version, name)
VALUES('19', now(), now(), 0, 'TAG_UPDATE');
INSERT IGNORE INTO runapp.permissions (id, date_created, date_updated, version, name)
VALUES('20', now(), now(), 0, 'TAG_LIST');

-- RACE PERMISSIONS
INSERT IGNORE INTO runapp.permissions (id, date_created, date_updated, version, name)
VALUES('21', now(), now(), 0, 'RACE_VIEW');
INSERT IGNORE INTO runapp.permissions (id, date_created, date_updated, version, name)
VALUES('22', now(), now(), 0, 'RACE_CREATE');
INSERT IGNORE INTO runapp.permissions (id, date_created, date_updated, version, name)
VALUES('23', now(), now(), 0, 'RACE_DELETE');
INSERT IGNORE INTO runapp.permissions (id, date_created, date_updated, version, name)
VALUES('24', now(), now(), 0, 'RACE_UPDATE');
INSERT IGNORE INTO runapp.permissions (id, date_created, date_updated, version, name)
VALUES('25', now(), now(), 0, 'RACE_LIST');

-- EVENT PERMISSIONS
INSERT IGNORE INTO runapp.permissions (id, date_created, date_updated, version, name)
VALUES('26', now(), now(), 0, 'EVENT_VIEW');
INSERT IGNORE INTO runapp.permissions (id, date_created, date_updated, version, name)
VALUES('27', now(), now(), 0, 'EVENT_CREATE');
INSERT IGNORE INTO runapp.permissions (id, date_created, date_updated, version, name)
VALUES('28', now(), now(), 0, 'EVENT_DELETE');
INSERT IGNORE INTO runapp.permissions (id, date_created, date_updated, version, name)
VALUES('29', now(), now(), 0, 'EVENT_UPDATE');
INSERT IGNORE INTO runapp.permissions (id, date_created, date_updated, version, name)
VALUES('30', now(), now(), 0, 'EVENT_LIST');
