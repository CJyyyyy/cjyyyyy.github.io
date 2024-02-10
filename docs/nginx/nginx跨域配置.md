nginx跨域配置：
```
server {  
    listen       22222;  
    server_name  localhost;  
    location  / {  
        if ($request_method = 'OPTIONS') {  
            add_header Access-Control-Allow-Origin 'http://localhost:8080';  
            add_header Access-Control-Allow-Headers '*';  
            add_header Access-Control-Allow-Methods '*';  
            add_header Access-Control-Allow-Credentials 'true';  
            return 204;  
        }  
        if ($request_method != 'OPTIONS') {  
            add_header Access-Control-Allow-Origin 'http://localhost:8080' always;  
            add_header Access-Control-Allow-Credentials 'true';  
        }  
        proxy_pass  http://localhost:59200;   
    }  
}  
```
或者
```
server {  
    listen       22222;  
    server_name  localhost;  
    location  / {  
        add_header Access-Control-Allow-Origin 'http://localhost:8080' always;  
        add_header Access-Control-Allow-Headers '*';  
        add_header Access-Control-Allow-Methods '*';  
        add_header Access-Control-Allow-Credentials 'true';  
        if ($request_method = 'OPTIONS') {  
            return 204;  
        }  
        proxy_pass  http://localhost:59200;   
    }  
}  
```