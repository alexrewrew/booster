<?php
    error_reporting(E_ALL);
    ini_set('display_errors', '1');
    if (mail("delivery@farmastor.com, sale@eyelashbooster.com.ua", "Test mail", "Проверка отправки почты")) {
          echo "ok";
    } else {
           echo "error";}
    ?>