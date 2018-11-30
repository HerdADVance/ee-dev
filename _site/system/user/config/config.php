<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

// ExpressionEngine Config Items
// Find more configs and overrides at
// https://docs.expressionengine.com/latest/general/system_configuration_overrides.html

$config['app_version'] = '5.0.1';
$config['encryption_key'] = '0449ac6e56964f938101ca6577bf098250b747de';
$config['session_crypt_key'] = '6239de991bb5c3ee87f9996f0409035297dd151f';
$config['database'] = array(
	'expressionengine' => array(
		'hostname' => 'localhost',
		'database' => 'av_bulldog_rocks',
		'username' => 'av_user',
		'password' => 'uGCk51x5w8p3hcOh',
		'dbprefix' => 'exp_',
		'char_set' => 'utf8mb4',
		'dbcollat' => 'utf8mb4_unicode_ci',
		'port'     => ''
	),
);

include(APPPATH."../../../app/config/env_config.php");

// EOF
