angular-codeigniter-seed
========================

## Setup:
Compared to the original I have made changes to Common.php, config.php, incorporated more upto date Angular and restructured Angular to  use controllerAs syntax.

### mysql
- create database
- create table ‘accounts'
- create 3 rows
     id: int, primary, auto-increment
     email: varchar, 255
     password: varchar, 255

### database.php
*configure:*
     ‘hostname’, ‘username’, ‘password’, ‘database’

### dreamhost users
Change `api/.htaccess` to:
```
    RewriteEngine on
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule ^(.*)$ index.php?$1 [L]
```