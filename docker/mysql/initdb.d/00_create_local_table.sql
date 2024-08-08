CREATE DATABASE IF NOT EXISTS eo_db_local;
CREATE USER `eo_db_user`@`%` IDENTIFIED BY 'eo_db_user_password';
GRANT ALL PRIVILEGES ON eo_db_local.* TO `eo_db_user`@`%`;
FLUSH PRIVILEGES;

CREATE DATABASE IF NOT EXISTS eo_db_test;
CREATE USER `eo_db_test_user`@`%` IDENTIFIED BY 'eo_db_test_user_password';
GRANT ALL PRIVILEGES ON eo_db_test.* TO `eo_db_test_user`@`%`;
FLUSH PRIVILEGES;
