INSERT IGNORE INTO `role`(id, date_created, date_updated, version, name)
VALUES('1', now(), now(), 0, 'ADMIN');
INSERT IGNORE INTO `role`(id, date_created, date_updated, version, name)
VALUES('2', now(), now(), 0, 'USER');
INSERT IGNORE INTO `role`(id, date_created, date_updated, version, name)
VALUES('3', now(), now(), 0, 'MANAGER');

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

-- ADMIN Role Permissions
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('1', '1');
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('1', '2');
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('1', '3');
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('1', '4');
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('1', '5');
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('1', '6');
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('1', '7');
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('1', '8');
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('1', '9');
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('1', '10');
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('1', '11');
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('1', '12');
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('1', '13');
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('1', '14');
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('1', '15');
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('1', '16');
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('1', '17');
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('1', '18');
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('1', '19');
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('1', '20');
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('1', '21');
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('1', '22');
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('1', '23');
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('1', '24');
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('1', '25');
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('1', '26');
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('1', '27');
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('1', '28');
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('1', '29');
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('1', '30');

-- USER Role Permissions
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('2', '1');
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('2', '2');
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('2', '3');
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('2', '4');

INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('2', '6');
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('2', '10');

INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('2', '11');
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('2', '12');
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('2', '13');
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('2', '14');
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('2', '15');

INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('2', '16');
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('2', '17');
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('2', '18');
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('2', '19');
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('2', '20');

INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('2', '21');
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('2', '25');

INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('2', '26');
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('2', '30');

-- MANAGER Role Permissions
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('3', '1');
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('3', '2');
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('3', '3');
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('3', '4');
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('3', '5');

INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('3', '6');
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('3', '7');
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('3', '8');
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('3', '9');

INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('3', '11');
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('3', '12');
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('3', '13');
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('3', '14');
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('3', '15');

INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('3', '16');
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('3', '17');
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('3', '18');
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('3', '19');
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('3', '20');

INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('3', '21');
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('3', '22');
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('3', '23');
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('3', '24');
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('3', '25');

INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('3', '26');
INSERT IGNORE INTO runapp.role_permissions (role_id, permission_id) VALUES('3', '30');