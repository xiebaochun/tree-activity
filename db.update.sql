CREATE TABLE ``.users (
	`user_id` int(11) NOT NULL AUTO_INCREMENT,
	`name` varchar(20) DEFAULT '',
	`password` varchar(20) DEFAULT '',
	PRIMARY KEY (`user_id`)
) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET=utf8;

CREATE TABLE `msg-attack`.attack_list (
	`id` int(11) NOT NULL AUTO_INCREMENT,
	`realname` varchar(255) DEFAULT '',
    `mobile` varchar(255) NOT NULL,
    `start_attack_date` varchar(20) DEFAULT '0',
    `start_time` varchar(20) DEFAULT '0' COMMENT '开始时间', 
    `has_attack_time` varchar(20)  DEFAULT '0',
    `status` tinyint(1) unsigned DEFAULT 0 COMMENT '0-stop,1-start',
    `attack_time_period` varchar(2048) NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY (mobile)
) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET=utf8;


ALTER TABLE `msg-attack`.attack_list add `start_time` varchar(20) DEFAULT '' COMMENT '开始时间' AFTER `start_attack_date` 
