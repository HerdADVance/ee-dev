<?php
/*
Site: site.com
File: /app/config/env_config.php
===========================================================
Duplicate this file and rename as config.php
See: /app/config/_README.txt
===========================================================
Unversioned; included by /system/expressionengine/config/config.php
include(APPPATH."../../../app/config/env_config.php");
===========================================================
"Hidden" overrides:
https://ellislab.com/expressionengine/user-guide/general/system_configuration_overrides.html
=========================================================== */
 $domain = 'av.dev';
 $system_folder = 'feita';
 $config['new_version_check'] = 'n';
 $config['license_contact'] = ''; // an@emailaddress.com
 $config['webmaster_email'] = 'avance@bulldogcreative.com'; // an@emailaddress.com
 $config['webmaster_name'] = 'Alex Vance'; // Name of company or individual
 $config['doc_url'] = 'http://ellislab.com/expressionengine/user-guide/';
 $config['use_newrelic'] = 'n';


/*
|-------------------------
| Debugging and Performance
|-------------------------
| Set debug to '2' if we're in dev mode, otherwise just '1'
| 0: no PHP/SQL errors shown
| 1: Errors shown to Super Admins
| 2: Errors shown to everyone
|
| Profiler: Only shows for Super Admins when logged in (but not in the CP)
*/
 $config['is_system_on'] = 'y';
 $config['allow_extensions'] = 'y';
 $config['debug'] = '1';
 $config['show_profiler'] = (strpos($_SERVER['SCRIPT_NAME'], $system_folder)
!== false) ? 'n' : 'y';
 $config['template_debugging'] = 'n';


 /*
|-------------------------
| URLs
|-------------------------
*/
 $system_app_path = realpath(BASEPATH . '../../../app');
 $protocol = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == 'on') ? 'https://' : 'http://';
 $base_url = $protocol . $domain;
 $base_path = $_SERVER['DOCUMENT_ROOT'];
 $config['site_url'] = $base_url;
 $config['site_index'] = '';
 $config['cp_url'] = $base_url . '/' . $system_folder . '/index.php';
 //$config['cp_theme'] = ‘eclipse’;


 // Cookies
 $config['cookie_prefix'] = ''; 
 $config['cookie_httponly'] = 'y';
 $config['cookie_domain'] = '.' . $domain;


// Templates + Themes
 $config['save_tmpl_files'] = 'y';
 $config['tmpl_file_basepath'] = $system_app_path . '/templates';
 $themes_folder = '/assets/themes/'; // Must end with trailing slash
 $config['theme_folder_path'] = $base_path . $themes_folder;
 $config['theme_folder_url'] = $base_url . $themes_folder;


// Localization Settings
 $config['default_site_timezone'] = 'America/Detroit';
 $config['allow_member_localization'] = 'n';


 // Sessions
 $config['website_session_type'] = 'c';
 $config['cp_session_type'] = 'c';
 //$config['cp_session_ttl'] = 259200; // Seconds. This requires small core hack. See hack file.


//Tracking & Performance
 $config['disable_all_tracking'] = 'y';
 $config['enable_hit_tracking'] = 'n';
 $config['log_referrers'] = 'n';
 $config['gzip_output'] = 'y';


/*
|------------------------
| File Upload Preferences
|------------------------
| The included upload_prefs.php file is versioned.
|
*/
 $uploads_folder = '/assets/uploads';
 $upload_path = $base_path . $uploads_folder;
 $upload_url = $base_url . $uploads_folder;
 $config['upload_preferences'] = include 'upload-prefs.php';



//Image Paths
 $images_folder = '/assets/images';
 $images_path = $base_path . $images_folder;
 $images_url = $base_url . $images_folder;
 $config['emoticon_path'] = $images_url . '/smileys/';
 $config['emoticon_url'] = $images_url . '/smileys/';
 $config['captcha_path'] = $images_path . '/captchas/';
 $config['captcha_url'] = $images_url . '/captchas/';
 $config['avatar_path'] = $images_path . '/avatars/';
 $config['avatar_url'] = $images_url . '/avatars/';
 $config['photo_path'] = $images_path . '/member_photos/';
 $config['photo_url'] = $images_url . '/member_photos/';
 $config['sig_img_path'] = $images_path . '/signature_attachments/';
 $config['sig_img_url'] = $images_url . '/signature_attachments/';
 $config['prv_msg_upload_path'] = $images_path . '/pm_attachments/';



