angular-codeigniter-seed
========================

#Current things required to setup:

Common.php (edit line 257)
     berfore:
          return $_config[0] =& $config;
     after: 
          $_config[0] =& $config;
          return $_config[0];
* fixes error due to using latest version of PHP since CI is old...

config.php
     $config['index_page'] = 'index.html';

database.php
configure:
     ‘hostname’, ‘username’, ‘password’, ‘database’, ‘dbdriver'

mysql
- create database
- create table ‘accounts'
- create 3 rows
     ‘id’ - int - auto-increment - primary
     ‘email’ - varchar - 255
     ‘password’ - varchar - 255

angular-controllers
- create ‘about’ controller
